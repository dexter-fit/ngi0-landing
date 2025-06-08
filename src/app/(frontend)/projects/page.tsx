import {getCards} from "@/data/cards";
import {tagsFromProjectCardType} from "@/util/tagsFromProjectCardType";
import IndexPage from "@/components/IndexPage";


export default async function Page() {
    const cards = getCards("projects");
    const allAvailableTags = tagsFromProjectCardType(cards);

    return <IndexPage cards={cards} allAvailableTags={allAvailableTags} />;
}
