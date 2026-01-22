import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import Maintenance from "../pages/Maintenance";
import Home from "../pages/home/Home";
import Introduce from "../pages/introduce/Introduce";
import Map from "../pages/introduce/Map";
import Clients from "../pages/introduce/Clients";
import Tech from "../pages/tech/Tech";
import IsaSil from "../pages/tech/IsaSil";
import SafetyAct from "../pages/tech/SafetyAct";
import Se from "../pages/tech/Se";
import Iris from "../pages/tech/Iris";
import Tsi from "../pages/tech/Tsi";
import Welding from "../pages/welding/Welding";
import Iso3834 from "../pages/welding/Iso3834";
import En15085 from "../pages/welding/En15085";
import En1090 from "../pages/welding/En1090";
import Wps from "../pages/welding/Wps";
import Consulting from "../pages/consulting/Consulting";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            // { index: true, element: <Maintenance /> },
            { path: "introduce", element: <Introduce /> },
            { path: "introduce/clients", element: <Clients /> },
            { path: "introduce/map", element: <Map /> },
            { path: "tech", element: <Tech /> },
            { path: "tech/isa-sil", element: <IsaSil /> },
            { path: "tech/safety-act", element: <SafetyAct /> },
            { path: "tech/se", element: <Se /> },
            { path: "tech/iris", element: <Iris /> },
            { path: "tech/tsi", element: <Tsi /> },
            { path: "welding", element: <Welding /> },
            { path: "welding/iso3834", element: <Iso3834 /> },
            { path: "welding/en15085", element: <En15085 /> },
            { path: "welding/en1090", element: <En1090 /> },
            { path: "welding/wps", element: <Wps /> },
            { path: "consulting", element: <Consulting /> },
        ],
    },
], {
    basename: import.meta.env.BASE_URL
});
