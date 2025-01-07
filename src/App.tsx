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

const App = () => {
    const [menuItems] = useState([] as MenuItem[]);

    const Layout = <PrimeReactProvider>
        <Header menuItems={menuItems}/>
        <div className="my-cards-container">
            <Outlet/>
        </div>
    </PrimeReactProvider>

    const router = createBrowserRouter([
        {
            path: "/",
            element: Layout,
            children:
                [
                    {
                        path: "/",
                        element: <Index/>
                    },
                    {
                        path: "/projects",
                        element: <Index contentType="all"/>
                    },
                    {
                        path: "/geo",
                        children:
                            [
                                {path: "", element: <Dossiers/>},
                                {path: "projects", element: <Index contentType={"geo"}/>},
                                {path: "detail", element: <ProjectDetail contentType={"geo"}/>},
                                {path: "comparison", element: <ProjectsComparison contentType={"geo"}/>}
                            ]
                    },
                    {
                        path: "/dos",
                        children:
                            [
                                {path: "", element: <Dossiers/>},
                                {path: "projects", element: <Index contentType={"dos"}/>},
                                {path: "detail", element: <ProjectDetail contentType={"dos"}/>},
                                {path: "comparison", element: <ProjectsComparison contentType={"dos"}/>}
                            ]
                    }
                ]
        }], {basename: "/ngi0"}
    );

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
