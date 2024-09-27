import React from "react";
import {Button} from "primereact/button";
import "./Header.css";
import { MenuItem } from "primereact/menuitem";
import { Link } from "react-router-dom";

const Header = (props: {menuItems: MenuItem[]}) => {
    const createLinks = (items: MenuItem[]) => {
        return items.map((item) => {
            if (item.items) {
                // If there are nested items, recursively create links for them
                return (
                    <div key={item.label}>
                        <span>{item.label}</span>
                        <div style={{ paddingLeft: '20px' }}>
                            {createLinks(item.items as MenuItem[])}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={item.url}>
                        <Link to={item.url?.replace("/ngi0", "") || ""}>
                            <i className={item.icon}></i> {item.label}
                        </Link>
                    </div>
                );
            }
        });
    };


    const menuItems = [
        {
            label: "Dossiers",
            url: "/ngi0/",
            icon: "pi pi-home"
        },
        {
            label: "Projects",
            url: "/ngi0/projects",
            icon: "pi pi-home"
        },
        {
            label: "Geography Projects",
            items: [
                {
                    label: "Projects",
                    url: "/ngi0/geo",
                    icon: "pi pi-home"
                },
                {
                    label: "Dossier",
                    url: "/ngi0/geo/dossiers",
                    icon: "pi pi-file"
                },
                {
                    label: "Project Detail",
                    url: "/ngi0/geo/detail",
                    icon: "pi pi-file"
                },
                {
                    label: "Project Comparison",
                    url: "/ngi0/geo/comparison",
                    icon: "pi pi-file"
                }
            ]
        },
        {
            label: "Nix Projects",
            items: [
                {
                    label: "Projects",
                    url: "/ngi0/dos",
                    icon: "pi pi-home"
                },
                {
                    label: "Dossier",
                    url: "/ngi0/dos/dossiers",
                    icon: "pi pi-file"
                },
                {
                    label: "Project Detail",
                    url: "/ngi0/dos/detail",
                    icon: "pi pi-file"
                },
                {
                    label: "Project Comparison",
                    url: "/ngi0/dos/comparison",
                    icon: "pi pi-file"
                }
            ]
        }
    ] as MenuItem[];

    menuItems.push(...props.menuItems);

    const customHeader = <h2 className="font-bold">NLnet; Projects</h2>;

    return <>
        <div className="header">
            {
            /*<div className="header-container">
                <Button icon="pi pi-bars" onClick={() => setHidden(false)} size="small" text raised style={{background: "white"}}/>
                <Sidebar header={customHeader} visible={!hidden} onHide={() => setHidden(true)} baseZIndex={101}>
                    <Menu model={menuItems} className="full-width"/>
                </Sidebar>
                <div className="header-heading">NLnet; Projects</div>
            </div>

            <div className="header-links-prerender-hidden">
                {createLinks(menuItems)}
            </div>
            */
            }
            <div className="header-container">
                <div className="header-heading">NLnet; Projects</div>

                <div className="header-links-prerender-hidden">
                    {createLinks(menuItems)}
                </div>

                <div className="css-menu-main-div">
                    <Button icon="pi pi-bars" size="small" text raised className="css-menu-btn"/>

                    <div className="css-menu-sidebar">
                        <div className="css-menu-header-div">
                            <h3 className="css-menu-header">NLnet; Projects</h3>
                        </div>
                        <div className="css-menu-links">
                            <i className={menuItems[0].icon + " css-menu-icon"}></i><a href={menuItems[0].url}
                                                                                       className="css-menu-a">{menuItems[0].label}</a>
                        </div>

                        <div className="css-menu-links">
                            <i className={menuItems[1].icon + " css-menu-icon"}></i><a href={menuItems[1].url}
                                                                                       className="css-menu-a">{menuItems[1].label}</a>
                        </div>

                        <div className="css-menu-links-spec">
                            <i className="pi pi-home css-menu-icon-spec"></i>Geography Projects
                        </div>

                        {menuItems[2]?.items?.map(item => (
                            <div className="css-menu-links">
                                <i className={item.icon + " css-menu-icon"}></i><a href={item.url}
                                                                                   className="css-menu-a">{item.label}</a>
                            </div>
                        ))}

                        <div className="css-menu-links-spec">
                            <i className="pi pi-home css-menu-icon-spec"></i>Nix Projects
                        </div>

                        {menuItems[3]?.items?.map(item => (
                            <div className="css-menu-links">
                                <i className={item.icon + " css-menu-icon"}></i><a href={item.url}
                                                                                   className="css-menu-a">{item.label}</a>
                            </div>
                        ))}
                    </div>
                    <div className="css-menu-shadow"/>
                </div>
            </div>
        </div>
    </>;
}

export {Header};
