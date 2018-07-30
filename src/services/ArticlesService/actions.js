
export const ACTIONS = {
    fetchArticles: 'ARTICLES_SERVIE_FETCH',
};

export const fetchArticles = (articles) => {
    return {
        type: ACTIONS.fetchArticles,
        articles
    };
}