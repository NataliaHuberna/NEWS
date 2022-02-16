import React from 'react';
import {Outlet} from "react-router";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {StContent, StLayout} from "./styled";

const Layout: React.FC = () => (
    <StLayout>
        <Header/>
        <StContent>
            <Outlet/>
        </StContent>
        <Footer/>
    </StLayout>
);

export default Layout;
