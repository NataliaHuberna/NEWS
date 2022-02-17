import React from 'react';
import {StP, StTitle, StWrapper} from "src/components/pages/AboutUs/styled";
import {AuthContext} from "src/components/context/AuthContext";

const AboutUs: React.FC = () => {
    const {user} = React.useContext(AuthContext);
    return (
        <StWrapper>
            <StTitle>Hello, dear <strong>{user}</strong>!</StTitle>
            <StP>To get started you'll need an API key. They're free while you are in development.
                Get API key.
                You should know how to make web requests in your chosen programming language. We have included some
                crude ways to do this in our examples below if you need a place to start. Alternatively you can use one
                of our client libraries.
                Now let's consider two of the most popular use cases for News API and walk through each one:
                Search for articles on the web that mention a keyword or phrase
                Get the current top headlines for a country, category, or publisher
                Search for news articles that mention a specific topic or keyword
                The main use of News API is to search through every article published by over 80,000 news sources and
                blogs in the last 4 years. Think of us as Google News that you can interact with programmatically!
                In this example we want to find all articles that mention Apple published today, and sort them by most
                popular source first (i.e. Engadget articles will be returned ahead of Mom and Pop's Little iPhone
                Blog). For this we need to use the /everything endpoint.
                For more information about the /everything endpoint, including valid parameters for narrowing your
                search, see the Everything endpoint reference.</StP>
        </StWrapper>
    );
};

export default AboutUs;
