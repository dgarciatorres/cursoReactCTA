import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Suspense, lazy } from "react";
// import Pagina1 from "./Pagina1";
// import Pagina2 from "./Pagina2";
// import Pagina3 from "./Pagina3";

const Pagina1 = lazy(() => import('./Pagina1'));
const Pagina2 = lazy(() => import('./Pagina2'));
const Pagina3 = lazy(() => import('./Pagina3'));

export default function RoutesApp() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="pagina1/:id" element={<Pagina1 />} />
                    <Route path="pagina2" element={<Pagina2 />} />
                    <Route path="pagina3" element={<Pagina3 />} />
                </Route>
            </Routes>
        </Suspense>
    )
};
