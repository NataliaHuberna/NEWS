type TSource = {
    id: string,
    name: string,
};

export type TNew ={
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: TSource,
    title: string,
    url: string,
    urlToImage: string,
};
