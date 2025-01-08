import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {PrimeReactProvider} from 'primereact/api';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Index} from "./pages/Index";
import {Dossiers} from "./pages/Dossiers";
import {Header} from "./components/Header";
import {useState} from "react";
import {MenuItem} from "primereact/menuitem";
import {ProjectDetail} from "./pages/ProjectDetail";
import {ProjectsComparison} from "./pages/ProjectsComparison";
import {dossiers} from "./data/dossiers";

const App = () => {
    const [menuItems] = useState([] as MenuItem[]);

    const Layout = <PrimeReactProvider>
        <Header menuItems={menuItems}/>
        <div className="my-cards-container">
            <Outlet/>
        </div>
    </PrimeReactProvider>

    const getDossierPathsBasedOnTheDossierPathname = (pathName: string) => ({
        path: pathName,
        element: <Dossiers/>,
        children:
            [
                {path: "projects", element: <Index contentType={pathName as any}/>},
                {
                    path: "comparison",
                    element: <ProjectsComparison contentType={pathName as any}/>,
                    children: Object
                        .keys(dossiers[pathName].comparisons)
                        .map((path) => ({
                            path,
                            element: <ProjectsComparison contentType={pathName as any}/>
                        }))
                },
                {
                    path: "detail",
                    element: <ProjectDetail contentType={pathName as any}/>,
                    children: Object
                        .keys(dossiers[pathName].detailedProjects)
                        .map((path) => ({
                            path,
                            element: <ProjectDetail contentType={pathName as any}/>
                        }))
                }
            ]
    });

    const routes = [
        {
            path: "/",
            element: Layout,
            children:
                [
                    {
                        path: "",
                        element: <Index/>
                    },
                    {
                        path: "projects",
                        element: <Index contentType="all"/>
                    },
                    ...Object.keys(dossiers).map((pathName: string) => getDossierPathsBasedOnTheDossierPathname(pathName))
                ]
        }
    ];

    console.log(routes[0]);

    const router = createBrowserRouter(routes, {basename: "/ngi0"});

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
