import React from "react";
import {Routes, Route} from "react-router";
import Layout from "./components/common/Layout/Layout";
import AboutUs from "src/components/pages/AboutUs/index";
import AllNews from "src/components/pages/AllNews/index";
import Auth from "src/components/pages/Auth/Auth";
import FullNew from "src/components/pages/FullNew/index";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

const App: React.FC = () => (
    <ErrorBoundary>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<AboutUs />} />
                <Route path="/news" element={<AllNews />}/>
                <Route path="/news/:newId" element={<FullNew />}/>
                <Route path="/auth" element={<Auth />}/>
            </Route>
        </Routes>
    </ErrorBoundary>
);

export default App;
