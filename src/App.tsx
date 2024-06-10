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

const App = () => {
    const [menuItems, setMenuItems] = useState([] as MenuItem[]);

    const setNewMenuItemsFromChild = (newMenuItems: MenuItem[]) => {
        setMenuItems(newMenuItems);
    };

    const Layout = <PrimeReactProvider>
        <Header menuItems={menuItems}/>
        <div className="my-cards-container">
            <Outlet context={{ setNewMenuItemsFromChild }}/>
        </div>
    </PrimeReactProvider>

    const router = createBrowserRouter([
        {
            path: "/",
            element: Layout,
            children:
                [
                    {path: "", element: <Index/>},
                    {path: "dossiers", element: <Dossiers/>},
                    {path: "detail", element: <ProjectDetail/>}
                ]
        }], {basename: "/"}
    );

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
