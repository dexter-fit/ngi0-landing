import {CardProps} from "primereact/card";
import React from "react";

export type CarouselProps = {
    cards: CardProps[],
    template: (item: any) => React.ReactNode
};
