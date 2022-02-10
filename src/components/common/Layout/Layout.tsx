import React from 'react';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import {StContent, StLayout} from "./styled";

type TProps = {
    children: React.ReactNode
};

const Layout: React.FC<TProps> = ({ children }) => (
    <StLayout>
        <Toolbar className="toolbar--sticky"/>
        <StContent>
            {children}
        </StContent>
        <Footer/>
    </StLayout>
);

export default Layout;
