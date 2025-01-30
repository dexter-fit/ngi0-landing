import {FundInfoType} from "./FundInfoType";

type ProjectCardType = FundInfoType & {
    image: string;
    header: string;
    subheader: string;
    tags: string[];
    link: string;
};

export type {ProjectCardType};
