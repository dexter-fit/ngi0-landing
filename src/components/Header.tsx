import React, {useState} from "react";
import {Sidebar} from "primereact/sidebar";
import {Button} from "primereact/button";
import "./Header.css";
import {Menu} from "primereact/menu";
import { MenuItem } from "primereact/menuitem";

const Header = (props: {menuItems: MenuItem[]}) => {
    const [hidden, setHidden] = useState(true);

    const menuItems = [
        {
            label: "NLnet; Projects",
            items: [
                {
                    label: "Projects",
                    url: "/",
                    icon: "pi pi-home"
                },
                {
                    label: "Dossiers",
                    url: "/dossiers",
                    icon: "pi pi-file"
                }
            ]
        }
    ] as MenuItem[];

    menuItems.push(...props.menuItems);

    return <>
        <div className="header">
            <div className="header-container">
                <Button icon="pi pi-bars" onClick={() => setHidden(false)} size="small" text raised style={{background: "white"}}/>
                <Sidebar visible={!hidden} onHide={() => setHidden(true)} baseZIndex={101}>
                    <Menu model={menuItems} className="full-width"/>
                </Sidebar>
                <div className="header-heading">NLnet; Projects</div>
            </div>
        </div>
    </>;
}

export {Header};
