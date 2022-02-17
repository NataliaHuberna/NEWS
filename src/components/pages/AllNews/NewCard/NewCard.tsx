import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import {NewsContext} from "src/components/context/NewsContext";
import {StFakeImage} from "src/components/pages/AllNews/styled";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {TNew} from "src/types/newsTypes";

type TProps = {
    singleNew: TNew
};

const NewCard: React.FC<TProps> = ({singleNew}) => {
    const { setSingleNew } = React.useContext(NewsContext);
    const {
        urlToImage: urlToImage,
        title: title,
        description: description,
        publishedAt: publishedAt,
    } = singleNew;
    const onClickHandler = () => setSingleNew(publishedAt);

    return (
        <Card sx={{ maxWidth: 345 }} key={publishedAt}>
            {urlToImage ? (
                <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="green iguana"
                />
            ) : <StFakeImage>Sorry this post dont have image</StFakeImage>}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/news/${publishedAt}`}>
                    <Button size="small" onClick={onClickHandler} >Read More</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default NewCard;
