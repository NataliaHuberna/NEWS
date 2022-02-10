import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {StBody, StContent, StIcon, StLink, StMain, StText, StTitle, StTop} from "./styled";

class ErrorBoundary extends Component {
    state = {
        error: null
    }

    static getDerivedStateFromError(error:any) {
        return { error };
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;

        if (!error) return children;

        const { name, message } = error;

        return (
            <StMain>
                <StContent>
                    <StBody>
                        <StTop>
                            <StTitle>{name}</StTitle>
                            <StIcon className="fas fa-bug"></StIcon>
                        </StTop>

                        <StText>{message}</StText>
                        <StLink href="/">Return to previous page</StLink>
                    </StBody>
                </StContent>

                <Footer/>
            </StMain>
        );
    }
}

export default ErrorBoundary;
