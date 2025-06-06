"use client"
import React, { useState, useEffect } from 'react';
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { ClickableTag } from "./ClickableTag";
import { ProjectCard } from "./ProjectCard";
import { TITLE_PAGE_INFO } from '@/data/title';
import {ProjectCardType} from "@/types";

const IndexPage = ({ cards, allAvailableTags }: {cards: ProjectCardType[], allAvailableTags: string[]}) => {
    const [searchString, setSearchString] = useState('');
    const [searchClearDisabled, setSearchClearDisabled] = useState(true);
    const [tagsClearDisabled, setTagsClearDisabled] = useState(true);
    const [tags, setTags] = useState(
        Object.fromEntries(allAvailableTags.map(tag => [tag, false]))
    );

    const buildCardsMetadata: (cardsToShow: ProjectCardType[], cardsToHide: ProjectCardType[]) => ({
        highlight: boolean;
        hidden: boolean;
        header: string
    })[] = (cardsToShow: ProjectCardType[], cardsToHide: ProjectCardType[]) => {
        const highlightCards = !!cardsToHide.length;
        return [
            ...cardsToShow.map(card => ({ header: card.header, highlight: highlightCards, hidden: false })),
            ...cardsToHide.map(card => ({ header: card.header, highlight: false, hidden: true }))
        ];
    };

    const [cardsStatus, setCardsStatus] = useState(buildCardsMetadata(cards, []));

    const updateStringState = (searchValue: string) => {
        setSearchString(searchValue);
        setSearchClearDisabled(!searchValue.length);
    };

    const clearSearch = () => updateStringState("");

    const clearTags = () => {
        setTags(Object.fromEntries(allAvailableTags.map(tag => [tag, false])));
        setTagsClearDisabled(true);
    };

    const toggleTag = (tag: string) => {
        const newTags = { ...tags, [tag]: !tags[tag] };
        setTags(newTags);
        setTagsClearDisabled(!Object.values(newTags).some(item => item));
    };

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

    useEffect(() => {
        const filteredCards: ProjectCardType[] = searchString.length ? searchForString(searchString, cards) : cards;
        const selectedTags = Object.entries(tags).filter(([_, val]) => val).map((tag) => tag);
        const cardsToShow = filteredCards.filter(item =>
            selectedTags.every(([tag, _]) => item.tags.includes(tag))
        );
        const cardsToHide = cards.filter(card => !cardsToShow.some(c => c.header === card.header));
        setCardsStatus(buildCardsMetadata(cardsToShow, cardsToHide));
    }, [searchString, tags]);

    return (
        <>
            <div>
                <h1>{TITLE_PAGE_INFO.header}</h1>
                {TITLE_PAGE_INFO.highLights.map(text => <h3 key={text}>{text}</h3>)}
                <p>{TITLE_PAGE_INFO.mainText}</p>

                <div className="tag-heading">
                    <h2>Tags</h2>
                    <div className="tag-search-input-container">
                        <FloatLabel>
                            <InputText id="project-search"
                                       className="full-width"
                                       value={searchString}
                                       onChange={(e) => updateStringState(e.target.value)}
                            />
                            <label htmlFor="project-search">Search Projects</label>
                        </FloatLabel>
                        <ClickableTag disabled={searchClearDisabled} onClick={clearSearch} name="×" />
                    </div>
                </div>

                <div className="tag-list" key={JSON.stringify(tags)}>
                    <ClickableTag disabled={tagsClearDisabled} onClick={clearTags} name="×" />
                    {Object.entries(tags).map(([tag, active]) => (
                        <ClickableTag key={tag} name={tag} active={active} onClick={() => toggleTag(tag)} />
                    ))}
                </div>
            </div>

            <div className="cards-container">
                {cards.map(card =>
                    <ProjectCard
                        key={card.header}
                        hidden={cardsStatus.find(item => item.header === card.header)?.hidden}
                        highlight={cardsStatus.find(item => item.header === card.header)?.highlight}
                        card={card}
                    />
                )}
            </div>
        </>
    );
};

export default IndexPage;
