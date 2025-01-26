import React, {useEffect, useState} from 'react';
import {FloatLabel} from "primereact/floatlabel";
import {InputText} from "primereact/inputtext";
import {getCards} from "../data/cards";
import {ClickableTag} from "../components/ClickableTag";
import {ProjectCard} from "../components/ProjectCard";
import {ProjectCardType} from "../types";
import {tagsFromProjectCardType} from "../util/tagsFromProjectCardType";
import {getContentTypeFromLocation} from "../util/getContentTypeFromLocation";
import {useLocation} from "react-router-dom";


const Index = () => {
    const dossierName = getContentTypeFromLocation(useLocation())[0];
    const cards = getCards(dossierName);
    const allAvailableTags = Object.fromEntries(tagsFromProjectCardType(cards).map(tag => [tag, false]));
    const [searchString, setSearchString] = useState('');
    const [searchClearDisabled, setSearchClearDisabled] = useState(true);
    const [tagsClearDisabled, setTagsClearDisabled] = useState(true);
    const [tags, setTags] = useState(allAvailableTags);

    const buildCardsMetadata = (cardsToShow: ProjectCardType[], cardsToHide: ProjectCardType[]) => {
        const highlightCards = !!cardsToHide.length;

        const buildCardMetadata = (card: ProjectCardType, highlight: boolean, hidden: boolean) => (
            {header: card.header, highlight, hidden}
        );

        return [
            ...cardsToShow.map(card => buildCardMetadata(card, highlightCards, false)),
            ...cardsToHide.map(card => buildCardMetadata(card, false, true))
        ];
    }

    const [cardsStatus, setCardsStatus] = useState(buildCardsMetadata(cards, []));

    const updateStringState = (searchValue: string) => {
        setSearchString(searchValue);
        setSearchClearDisabled(!searchValue.length);
    }

    const clearSearch = () => {
        updateStringState("");
    }

    const clearTags = () => {
        setTags(allAvailableTags);
        setTagsClearDisabled(true);
    }

    const toggleTag = (tag: string) => {
        const newTags = JSON.parse(JSON.stringify(tags));
        newTags[tag] = !tags[tag];

        setTags(newTags);

        setTagsClearDisabled(!Object.values(newTags).some(item => item));
    }

    useEffect(() => {
        const results = searchString.length ? searchForString(searchString, cards) : cards;
        const selectedTags = Object.entries(tags).filter(tag => tag[1]).map(tag => tag[0]);

        const cardsToShow = results.filter(item => selectedTags.every(tag => item.tags.includes(tag)));
        const cardsToHide = cards.filter(cardFromAll => !cardsToShow.some(shownCard => shownCard.header === cardFromAll.header));

        const metadata = buildCardsMetadata(cardsToShow, cardsToHide);
        setCardsStatus(metadata);
    }, [cards, searchString, tags])

    const searchForString = (query: string, cards: ProjectCardType[]) => {
        const results: ProjectCardType[] = [];
        const searchTerm = query.toLowerCase();

        cards.forEach(item => {
            const stringsToSearchIn = [
                item.header.toLowerCase(),
                item.subheader.toLowerCase()
            ];

            if (item.fund) {
                stringsToSearchIn.push(item.fund.toLowerCase());
            }

            if (item.start) {
                stringsToSearchIn.push(item.start.toLowerCase());
            }

            if (item.end) {
                stringsToSearchIn.push(item.end.toLowerCase());
            }

            if (stringsToSearchIn.some(stringToSearchIn => stringToSearchIn.includes(searchTerm))) {
                results.push(item);
            } else {
                item.tags.forEach(tag => {
                    if (tag.toLowerCase().includes(searchTerm)) {
                        results.push(item);
                    }
                });
            }
        });

        return results;
    };

    return (
        <>
            <div>
                <div className="tag-heading">
                    <h2>Tags</h2>
                    <div className="tag-search-input-container">
                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                <InputText id="project-search"
                                           className="full-width"
                                           value={searchString}
                                           onChange={(e) => updateStringState(e.target.value)}
                                />
                                <label htmlFor="project-search">Search Projects</label>
                            </FloatLabel>
                        </div>
                        <div id="search-clear-button">
                            <ClickableTag disabled={searchClearDisabled} onClick={clearSearch} name="×"/>
                        </div>
                    </div>
                </div>
                <div className="tag-list" key={JSON.stringify(tags)}>
                    <ClickableTag disabled={tagsClearDisabled} onClick={clearTags} name="×"/>
                    {Object.entries(tags).map(([tag, active]) => <ClickableTag key={tag} name={tag} active={active} onClick={() => toggleTag(tag)}/>)}
                </div>
            </div>

            <div className="cards-container">
                {cards.map(card =>
                    <ProjectCard
                        hidden={cardsStatus.find(item => item.header === card.header)?.hidden}
                        highlight={cardsStatus.find(item => item.header === card.header)?.highlight}
                        key={card.header}
                        card={card}
                    />
                )}
            </div>
        </>
    );
}

export {Index};
