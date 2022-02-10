import*as React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import {StFakeImage, StWrapper} from "src/components/pages/AllNews/styled";
// import FullNew from "src/components/pages/FullNew/FullNew";

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
    const [news, setNews] = React.useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {getNews();}, []);

    const getNews = async () => {
        try {
            // setIsLoading({ isLoading: true });
            const {data: {articles}} = await axios.get(API_URL);
            setNews(articles);
        } finally {
            // setIsLoading( false );
        }
    };

    return <StWrapper>
        {news.map((item: TArticle) => (
            <Card sx={{ maxWidth: 345 }} key={item.publishedAt}>
                {item.urlToImage ? (
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.urlToImage}
                        alt="green iguana"
                    />
                ) : <StFakeImage>Sorry this post dont have image</StFakeImage>}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/news/${item.publishedAt}`} target={"_blank"}>
                        <Button size="small">Read More</Button>                   
                    </Link>
                </CardActions>
            </Card>
        ))};
    </StWrapper>;
};

export default AllNews;
