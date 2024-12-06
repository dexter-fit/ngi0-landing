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
            label: "Geovisualisation",
            url: "/ngi0/geo",
            icon: "pi pi-home",
            items: [
                {
                    label: "Projects",
                    url: "/ngi0/geo/projects",
                    icon: "pi pi-file"
                },
                {
                    label: "Open Street Map",
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
            url: "/ngi0/dos",
            icon: "pi pi-home",
            items: [
                {
                    label: "Projects",
                    url: "/ngi0/dos/projects",
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

    const getLinksFromMenuItems = (menuItems: MenuItem[]) => menuItems.map(item => (
        <div className="css-menu-links">
            <i className={item.icon + " css-menu-icon"}></i><a href={item.url} className="css-menu-a">{item.label}</a>
        </div>
    ));

    const findBreadcrumbs = (
        menu: MenuItem[],
        currentUrl: string,
        trail: MenuItem[] = []
    ): MenuItem[] => {
        for (const item of menu) {
            if (item.url === currentUrl) {
                return [...trail, item];
            }

            if (item.items) {
                const found = findBreadcrumbs(item.items as MenuItem[], currentUrl, [...trail, item]);
                if (found.length) {
                    return found;
                }
            }
        }

        return [];
    };

    const location = window.location.pathname;
    const locationAlwaysWithoutSlash = location.endsWith('/') ? location.slice(0, -1) : location

    const breadcrumbs = [
        {label: "NGI0 Projects", url: "/ngi0"},
        ...findBreadcrumbs(menuItems, locationAlwaysWithoutSlash)
    ]

    return <>
        <div className="header">
            <div className="header-container">
                <div className="header-heading">{
                    breadcrumbs.map((item, index) => <>
                        <span><a href={item.url}>{item.label}</a></span>
                        {index < breadcrumbs.length - 1 ? <span>; </span> : <></>}
                    </>)}
                </div>

                <div className="header-links-prerender-hidden">
                    {createLinks(menuItems)}
                </div>

                <div className="css-menu-main-div">
                    <Button icon="pi pi-bars" size="small" text raised className="css-menu-btn"/>

                    <div className="css-menu-sidebar">
                        <div className="css-menu-header-div">
                            <h3 className="css-menu-header">NLnet; Projects</h3>
                        </div>
                        <div className="css-menu-links bold">
                            <i className={menuItems[0].icon + " css-menu-icon"}></i><a href={menuItems[0].url}
                                                                                       className="css-menu-a">{menuItems[0].label}</a>
                        </div>

                        <div className="css-menu-links bold">
                            <i className={menuItems[1].icon + " css-menu-icon"}></i><a href={menuItems[1].url}
                                                                                       className="css-menu-a">{menuItems[1].label}</a>
                        </div>

                        <div className="css-menu-links bold">
                            <i className={menuItems[1].icon + " css-menu-icon"}></i><a href={menuItems[2].url}
                                                                                       className="css-menu-a">{menuItems[2].label}</a>
                        </div>

                        {getLinksFromMenuItems(menuItems[2].items as MenuItem[])}

                        <div className="css-menu-links bold">
                            <i className={menuItems[3].icon + " css-menu-icon"}></i><a href={menuItems[3].url}
                                                                                       className="css-menu-a">{menuItems[3].label}</a>
                        </div>

                        {getLinksFromMenuItems(menuItems[3].items as MenuItem[])}
                    </div>
                    <div className="css-menu-shadow"/>
                </div>
            </div>
        </div>
    </>;
}

export {Header};
