import {ToggleButton} from "primereact/togglebutton";
import {useState} from "react";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

const Header = () => {
    const [checked, setChecked] = useState(false);

    return <>
        <div className="header">
            <div>
                <div>NLnet; Projects</div>
            </div>
        </div>
    </>;
}

export {Header};
