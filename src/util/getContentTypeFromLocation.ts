import {Location} from "react-router-dom";
import {ContentType} from "../types/ContentType";

export const getContentTypeFromLocation = (location: Location) => {
    const {pathname} = location;
    const routeParts = pathname.slice(1).split("/");
    return routeParts[0] as ContentType;
};
