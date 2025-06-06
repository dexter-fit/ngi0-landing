import {getCards} from "@/data/cards";
import {tagsFromProjectCardType} from "@/util/tagsFromProjectCardType";
import IndexPage from "@/components/IndexPage";


export default async function Page({params}: {
    params: Promise<{ dossier: string }>
}) {
    const {dossier} = await params;

    const cards = getCards(dossier);
    const allAvailableTags = tagsFromProjectCardType(cards);

    return <IndexPage cards={cards} allAvailableTags={allAvailableTags} />;
}
