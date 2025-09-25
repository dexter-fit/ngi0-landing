import {getCards} from "@/data/cards";
import {tagsFromProjectCardType} from "@/util/tagsFromProjectCardType";
import IndexPage from "@/components/IndexPage";
import {dossiers} from "@/data/dossiers";
import { Metadata } from "next";

export async function generateStaticParams() {
    return Object.keys(dossiers).map(dossier => ({ dossier: dossier }));
}

export async function generateMetadata({params}: {
    params: Promise<{ dossier: string }>
}): Promise<Metadata> {
    const {dossier} = await params;
    const dossierData = dossiers[dossier];

    return {
        title: `${dossierData.header} Projects`
    }
}

export default async function Page({params}: {
    params: Promise<{ dossier: string }>
}) {
    const {dossier} = await params;

    const cards = getCards(dossier);
    const allAvailableTags = tagsFromProjectCardType(cards);

    return <IndexPage cards={cards} allAvailableTags={allAvailableTags} />;
}
