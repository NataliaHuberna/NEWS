import React, { useState } from 'react';
import {TNew} from "src/types/newsTypes";

type TProps = {
    children: React.ReactNode
};

export const NewsContext = React.createContext(null);

const NewsProvider: React.FC<TProps> = ({ children}) => {
    const [state, setState] = useState({news:[], singleNew: null});
    const setNews = (news: Array<TNew>) => setState((prevState) => ({...prevState, news}));
    const setSingleNew = (publishedAt: string) => setState((prevState) => ({...prevState,
        singleNew: prevState.news.find((singleNew: TNew) => singleNew.publishedAt === publishedAt )}));
    const value = {
        ...state,
        setNews,
        setSingleNew
    };
    return <NewsContext.Provider value={value}>
        {children}
    </NewsContext.Provider>;

};

export default NewsProvider;
