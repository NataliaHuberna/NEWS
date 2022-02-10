import React from 'react';
import {StTitle, StWrapper} from "src/components/pages/AboutUs/styled";
import {AuthContext} from "src/components/context/AuthContext";

const AboutUs = () => {
    const {user} = React.useContext(AuthContext);
    return (
        <StWrapper>
            <StTitle>Hello, dear {user}!</StTitle>
        </StWrapper>
    );
};

export default AboutUs;
