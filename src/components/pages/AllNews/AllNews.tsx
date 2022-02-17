import*as React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import {StWrapper} from "src/components/pages/AllNews/styled";
import {NewsContext} from "src/components/context/NewsContext";
import MainLoader from "src/components/common/Loader/MainLoader";
import NewCard from "src/components/pages/AllNews/NewCard/NewCard";
import {TNew} from "src/types/newsTypes";
import {API_URL} from "src/constants/URL";

const AllNews: React.FC = () => {
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
                {news.map((item: TNew) => <NewCard singleNew={item} key={item.publishedAt}/>)};
            </StWrapper> : <p>No data</p>
    );
};

export default AllNews;
