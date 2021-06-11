import { createSelector } from 'reselect';

const ARTICLE_ID_MAP = {
    'the-importance-of-prostate-cancer-screening': 1,
    'kidney-stones-and-desert-climate': 2,
    'bladder-issues-and-the-importance-of-seeing-a-urologist': 3
}

const selectArticles = state => state.article;

export const selectArticlesData = createSelector(
    [selectArticles],
    article => article.articles
)

export const selectArticle = articleUrlParam =>
    createSelector(
        [selectArticlesData],
        articles =>
            articles.find(
                article => article.id === ARTICLE_ID_MAP[articleUrlParam]
            )
    );
