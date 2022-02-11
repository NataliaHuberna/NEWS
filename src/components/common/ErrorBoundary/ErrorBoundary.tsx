import React from 'react';
import Footer from '../Footer/Footer';
import {StBody, StContent, StIcon, StLink, StMain, StText, StTitle, StTop} from "./styled";

type TProps = {
    children: React.ReactNode
};

type TState =  {
    error: null ;
};

type PartialPoint = TState | null;
class ErrorBoundary extends React.Component<TProps, PartialPoint> {
    state: TState = {
        error: null
    };

    static getDerivedStateFromError(error: any) {
        return { error };
    }

    render() {
        const { children } = this.props;
        const { error } = this.state;

        if (!error) return children;

        const { name, message } = error;

        return (
            <StMain>
                <StContent>
                    <StBody>
                        <StTop>
                            <StTitle>{name}</StTitle>
                            <StIcon className="fas fa-bug"/>
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
