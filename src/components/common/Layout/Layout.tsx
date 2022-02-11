import React from 'react';
import {Outlet} from "react-router";
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import {StContent, StLayout} from "./styled";

const Layout: React.FC = () => (
    <StLayout>
        <Toolbar className="toolbar--sticky"/>
        <StContent>
            <Outlet/>
        </StContent>
        <Footer/>
    </StLayout>
);

export default Layout;
