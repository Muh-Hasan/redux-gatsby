import ARTICLES_DATA from "../../articles/articles.data";

const INITIAL_STATE = ARTICLES_DATA;

const articleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }

}

export default articleReducer;
