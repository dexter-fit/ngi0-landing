import {getCards} from "@/data/cards";
import {tagsFromProjectCardType} from "@/util/tagsFromProjectCardType";
import IndexPage from "@/components/IndexPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'NGI0'
};

export default function Page() {
    const cards = getCards();
    const allAvailableTags = tagsFromProjectCardType(cards);

    return <IndexPage cards={cards} allAvailableTags={allAvailableTags} />;
}
