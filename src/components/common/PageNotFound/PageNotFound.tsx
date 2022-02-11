import React from 'react';

interface TProps {
    title?: string
}
const PageNotFound: React.FC<TProps> = () => {
    return <h1>page not found</h1>;
};

export default PageNotFound;
