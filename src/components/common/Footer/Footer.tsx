import React from 'react';
import {StFooter, StFooterCopyright, StFooterWrapper} from "./styled";

const Footer = () => (
    <StFooter>
        <StFooterWrapper>
            <StFooterCopyright>
                All Rights Reserved, {new Date().getFullYear()}
            </StFooterCopyright>

        </StFooterWrapper>
    </StFooter>
);

export default Footer;
