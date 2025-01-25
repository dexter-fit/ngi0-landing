import {Location} from "react-router-dom";

export const getContentTypeFromLocation = (location: Location) => {
    const {pathname} = location;
    const routeParts = pathname.slice(1).split("/");
    return routeParts as string[];
};
