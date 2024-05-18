import "./ClickableTag.css";
import { Tag } from "primereact/tag";
import {useState} from "react";

const ClickableTag = (props: {name: string, active?: boolean, disabled?: boolean, onClick?: CallableFunction}) => {
    const [active, setActive] = useState(props.active || false);

    const handleClick = () => {
        if (props?.disabled) {
            return;
        }

        setActive(!active);

        if (props.onClick) {
            props.onClick(!active);
        }
    }

    return (
        <Tag
            className={`clickable-tag ${active ? "selected" : ""} ${props.disabled ? "disabled" : ""}`}
            onClick={handleClick}
        >
            {props.name}
        </Tag>
    );
};

export {ClickableTag};
