import React from 'react';
import {NewsContext} from "src/components/context/NewsContext";

const FullNew = () => {
    const { singleNew } = React.useContext(NewsContext);
    console.log(singleNew);

    return (
        <div>
            <p>{singleNew.title}</p>
            <p>{singleNew.content}</p>
        </div>
    );
};

export default FullNew;
