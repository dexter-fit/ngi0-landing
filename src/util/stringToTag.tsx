import {Tag} from "primereact/tag";
import React from "react";

export const stringToTag = (item: string) => <Tag value={item} key={item}/>;