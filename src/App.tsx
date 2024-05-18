import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Index} from "./pages/Index";

const App = () => {
    const router = createBrowserRouter(
        [
            {path: "/", element: <Index/>}
        ]
    );

    return (
        <PrimeReactProvider>
            <div className="header">
                NLnet; Projects
            </div>
            <RouterProvider router={router}/>
        </PrimeReactProvider>
    );
}

export default App;
