import React from "react";
import {Button} from "primereact/button";
import "./Header.css";
import { dossiers } from "../data/dossiers";
import { BreadcrumbsType } from "../types/BreadcrumbsType"
import {Link} from "react-router-dom";

const Header = () => {
    const findBreadcrumbs = (currentUrl: string): BreadcrumbsType[] => {
        let resultBreadcrumbs: BreadcrumbsType[] = [];
        const currentUrlArr = currentUrl.split('/').splice(2);
        let currentlyViewedItem: {menuTitle: string, pageTitle: string} = {menuTitle: "", pageTitle: ""};
        for (const item of Object.values(dossiers)) {
            // Dossier home
            if (item.pathName === currentUrlArr[0]) {
                currentlyViewedItem = item.projects
                resultBreadcrumbs.push({label: item.header, url: item.link});

                // Dossier projects
                if (item.projects && currentUrlArr[1] === 'projects') {
                    currentlyViewedItem = item.projects
                    resultBreadcrumbs.push({label: "Projects", url: `${item.link}/projects`});
                }

                // Detail project
                if (currentUrlArr[1] === 'detail') {
                    currentlyViewedItem = item.detailedProjects[currentUrlArr[2]];
                    resultBreadcrumbs.push({label: currentlyViewedItem.menuTitle, url: `${item.link}/detail/${currentUrlArr[2]}`});
                }

                // Project comparison
                if (currentUrlArr[1] === 'comparison') {
                    currentlyViewedItem = item.comparisons[currentUrlArr[2]];
                    resultBreadcrumbs.push({label: currentlyViewedItem.menuTitle, url: `${item.link}/comparison/${currentUrlArr[2]}`});
                }
            }

            if (resultBreadcrumbs.length > 0) {
                document.title = currentlyViewedItem?.pageTitle;
                return resultBreadcrumbs;
            }
        }

        return [];
    };

    const location = window.location.pathname;
    const locationAlwaysWithoutSlash = location.endsWith('/') ? location.slice(0, -1) : location

    const breadcrumbs = [
        {label: "NGI0 Projects", url: "/ngi0"},
        ...findBreadcrumbs(locationAlwaysWithoutSlash)
    ]

    const basicMenuItems: BreadcrumbsType[] = [
        {
            label: "Dossiers",
            url: "/ngi0/"
        },
        {
            label: "Projects",
            url: "/ngi0/projects"
        }
    ]

    const homeIcon = "pi pi-home";
    const fileIcon = "pi pi-file";

    return <>
        <div className="header">
            <div className="header-container">
                <div className="css-menu-main-div">
                    <Button icon="pi pi-bars" size="small" text raised className="css-menu-btn"/>

                    <div className="css-menu-sidebar">
                        <div className="css-menu-header-div">
                            <h3 className="css-menu-header">NLnet; Projects</h3>
                            <Link to="/schema"><span style={{display: "none"}}>schema</span></Link>
                        </div>

                        {
                            basicMenuItems.map((item) =>
                                <div className="css-menu-links bold">
                                    <i className={homeIcon + " css-menu-icon"}></i>
                                    <a href={item.url} className="css-menu-a">{item.label}</a>
                                </div>
                            )
                        }

                        {
                            Object.values(dossiers).map((item) =>
                                <span className="css-submenu-shadow">
                                    <div className="css-menu-links bold css-submenu-header">
                                        <i className={homeIcon + " css-menu-icon"}></i>
                                        <a href={item.link} className="css-menu-a">{item.header}</a>
                                    </div>
                                    <span className="css-submenu-items">
                                        <div className="css-menu-links">
                                            <i className={fileIcon + " css-menu-icon"}></i>
                                            <a href={`${item.link}/projects`} className="css-menu-a">Projects</a>
                                        </div>
                                        {
                                            Object.keys(item.detailedProjects).map((name) =>
                                                <div className="css-menu-links">
                                                    <i className={fileIcon + " css-menu-icon"}></i>
                                                    <a href={`${item.link}/detail/${name}`} className="css-menu-a">{item.detailedProjects[name].menuTitle}</a>
                                                </div>
                                            )
                                        }
                                        {
                                            Object.keys(item.comparisons).map((name) =>
                                                <div className="css-menu-links">
                                                    <i className={fileIcon + " css-menu-icon"}></i>
                                                    <a href={`${item.link}/comparison/${name}`} className="css-menu-a">{item.comparisons[name].menuTitle}</a>
                                                </div>
                                            )
                                        }
                                    </span>
                                </span>
                            )
                        }
                    </div>
                    <div className="css-menu-shadow"/>
                </div>
                <div className="header-heading">{
                    breadcrumbs.map((item, index) => <>
                        <span><a href={item.url}>{item.label}</a></span>
                        {index < breadcrumbs.length - 1 ? <span>; </span> : <></>}
                    </>)}
                </div>
            </div>
        </div>
    </>;
}

export {Header};
