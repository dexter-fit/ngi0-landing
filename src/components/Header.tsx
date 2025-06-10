import React from "react";
import "./Header.css";
import { dossiers } from "@/data/dossiers";
import { BreadcrumbsType } from "@/types";
import Link from "next/link";

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
                document.title = currentlyViewedItem?.pageTitle || "";
                return resultBreadcrumbs;
            }
        }

        return [];
    };

    const location = "";
    const locationAlwaysWithoutSlash = location.endsWith('/') ? location.slice(0, -1) : location

    const breadcrumbs = [
        {label: "NGI0 Projects", url: "/"},
        ...findBreadcrumbs(locationAlwaysWithoutSlash)
    ]

    const basicMenuItems: BreadcrumbsType[] = [
        {
            label: "Dossiers",
            url: `${process.env.basePath}/`
        },
        {
            label: "Projects",
            url: `${process.env.basePath}/projects`
        }
    ]

    const homeIcon = "pi pi-home";
    const fileIcon = "pi pi-file";

    return <>
        <div className="header">
            <div className="header-container">
                <div className="menu-btn-div">
                    <label htmlFor="mainMenu" className="menu-dropdown pi"></label>
                    <input className="menu-dropdown-input" type="checkbox" id="mainMenu" />
                    <div className="menu-sidebar">
                        <div className="menu-header-div">
                            <h3 className="menu-header">NLnet; Projects</h3>
                            <Link href="/schema"><span style={{display: "none"}}>schema</span></Link>
                            <label htmlFor="mainMenu" className="menu-dropdown pi menu-dropdown-in"></label>
                        </div>
                        {
                            basicMenuItems.map((item, index) =>
                                <div key={index} className="menu-links bold">
                                    <i className={homeIcon + " menu-icon"}></i>
                                    <a href={item.url} className="menu-a">{item.label}</a>
                                </div>
                            )
                        }
                        {
                            Object.values(dossiers).map((item) =>
                                <span key={item.header}>
                                    <label htmlFor={item.header} className="sub-menu-dropdown">
                                        <div className="menu-links">
                                            <i className={homeIcon + " menu-icon"}></i>
                                            <p>{item.header}</p>
                                        </div>
                                    </label>
                                    <input className="menu-dropdown-input" type="checkbox" id={item.header} />
                                    <div className="sub-menu-sidebar">
                                        <div className="menu-header-div">
                                            <h3 className="menu-header">{item.header}</h3>
                                            <label htmlFor={item.header} className="menu-dropdown pi menu-dropdown-sub-in"></label>
                                        </div>
                                        <div className="menu-links bold">
                                            <i className={homeIcon + " menu-icon"}></i>
                                            <a href={item.link} className="menu-a">Main Dossier Page</a>
                                        </div>
                                        <div className="menu-links">
                                            <i className={fileIcon + " menu-icon"}></i>
                                            <a href={`${item.link}/projects`} className="menu-a">Projects</a>
                                        </div>
                                        {
                                            Object.keys(item.detailedProjects).map((name) =>
                                                <div key={name} className="menu-links">
                                                    <i className={fileIcon + " menu-icon"}></i>
                                                    <a href={`${item.link}/detail/${name}`} className="menu-a">{item.detailedProjects[name].menuTitle}</a>
                                                </div>
                                            )
                                        }
                                        {
                                            Object.keys(item.comparisons).map((name) =>
                                                <div key={name} className="menu-links">
                                                    <i className={fileIcon + " menu-icon"}></i>
                                                    <a href={`${item.link}/comparison/${name}`} className="menu-a">{item.comparisons[name].menuTitle}</a>
                                                </div>
                                            )
                                        }
                                    </div>
                                </span>
                            )
                        }
                    </div>
                    <div className="menu-sidebar-shadow"></div>
                </div>
                <div className="header-heading">{
                    breadcrumbs.map((item, index) => <div key={index}>
                        <span><Link href={item.url}>{item.label}</Link></span>
                        {index < breadcrumbs.length - 1 ? <span>; </span> : <></>}
                    </div>)}
                </div>
            </div>
        </div>
    </>;
}

export {Header};
