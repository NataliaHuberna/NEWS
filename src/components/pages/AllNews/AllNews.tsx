import*as React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import {StWrapper} from "src/components/pages/AllNews/styled";
import {NewsContext} from "src/components/context/NewsContext";
import MainLoader from "src/components/common/Loader/MainLoader";
import NewCard from "src/components/pages/AllNews/NewCard/NewCard";

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=329b673b31564450bca9bede5ea08efd';
type TSource = {
    id: string | null,
    name: string
};

type TArticle = {
    source: TSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string | null

};

const AllNews = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    useEffect(() => {getNews();}, []);
    const {news, setNews} = React.useContext(NewsContext);
    const getNews = async () => {
        try {
            setIsLoading( true );
            const {data: {articles}} = await axios.get(API_URL);
            setNews(articles);
        } finally {
            setIsLoading( false );
        }
    };

    return (
        isLoading ? (<MainLoader />) : news.length ?
            <StWrapper>
                {news.map((item: TArticle) => <NewCard singleNew={item} key={item.publishedAt}/>)};
            </StWrapper> : <p>No data</p>
    );
};

export default AllNews;
