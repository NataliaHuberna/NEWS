export type TSource = {
    id: string | null,
    name: string,
};

export type TNew ={
    author: string,
    content: string | null,
    description: string,
    publishedAt: string,
    source: TSource,
    title: string,
    url: string,
    urlToImage: string,
};
