import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {PrimeReactProvider} from 'primereact/api';
import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";
import {Index} from "./pages/Index";
import {Dossiers} from "./pages/Dossiers";
import {Header} from "./components/Header";
import {useEffect, useState} from "react";
import {MenuItem} from "primereact/menuitem";
import {ProjectDetail} from "./pages/ProjectDetail";
import {ProjectsComparison} from "./pages/ProjectsComparison";
import {dossiers} from "./data/dossiers";
import {Schema} from "./pages/Schema";

const App = () => {
    const [menuItems] = useState([] as MenuItem[]);

    const Layout = () => {
        const {pathname} = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return <PrimeReactProvider>
            <Header menuItems={menuItems}/>
            <div className="my-cards-container">
                <Outlet/>
            </div>
        </PrimeReactProvider>
    }

    const getDossierPathsBasedOnTheDossierPathname = (pathName: string) => ({
        path: pathName,
        children:
            [
                {path: "", element: <Dossiers/>},
                {path: "projects", element: <Index/>},
                {
                    path: "comparison",
                    element: <ProjectsComparison/>,
                    children: Object
                        .keys(dossiers[pathName].comparisons)
                        .map((path) => ({
                            path,
                            element: <ProjectsComparison/>
                        }))
                },
                {
                    path: "detail",
                    element: <ProjectDetail/>,
                    children: Object
                        .keys(dossiers[pathName].detailedProjects)
                        .map((path) => ({
                            path,
                            element: <ProjectDetail/>
                        }))
                }
            ]
    });

    const routes = [
        {
            path: "/",
            element: <Layout/>,
            children:
                [
                    {
                        path: "",
                        element: <Index/>
                    },
                    {
                        path: "projects",
                        element: <Index/>
                    },
                    ...Object.keys(dossiers).map((pathName: string) => getDossierPathsBasedOnTheDossierPathname(pathName))
                ]
        },
        {
            path: "/schema",
            element: <Schema/>
        }
    ];

    const router = createBrowserRouter(routes, {basename: "/ngi0"});

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
