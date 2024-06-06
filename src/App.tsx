import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Index} from "./pages/Index";
import {Dossiers} from "./pages/Dossiers";
import {Header} from "./components/Header";

const App = () => {
    const router = createBrowserRouter(
        [
            {path: "/", element: <Index/>},
            {path: "/dossiers", element: <Dossiers/>}
        ]
    );

    return (
        <PrimeReactProvider>
            <Header/>
            <div className="my-cards-container">
                <RouterProvider router={router}/>
            </div>
        </PrimeReactProvider>
    );
}

export default App;
