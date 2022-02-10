import React from "react";
import "./App.css";
import {  useRoutes } from "react-router-dom";
import routes from './components/routes/routes';
import Layout from "./components/common/Layout/Layout";
// import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
import { AuthContext } from "./components/context/AuthContext";

function App() {
    const { user } = React.useContext(AuthContext);
    const isLogged = !!user;
    const routing = useRoutes(routes(isLogged));
    return (
        // <ErrorBoundary>
        <Layout>
            {routing}
        </Layout>
        // </ErrorBoundary>
    );
}

export default App;
