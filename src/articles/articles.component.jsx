import React from "react";
import { connect } from "react-redux";
import { selectArticle } from "../redux/article/article.selector";
import "./articles.styles.scss";
import { Helmet } from "react-helmet";

const ArticlePage = ({ match, article }) => {
  return (
    <>
      <Helmet>
        <title>{article.title} | USONV</title>
      </Helmet>
      <article class="article-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{article.title}</h1>
              {article.author && <p>By {article.author}</p>}
              {article.company && <h4>{article.company}</h4>}
              <p>
                <div dangerouslySetInnerHTML={{ __html: article.body }} />
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const mapToStateProps = (state, ownProps) => ({
  article: selectArticle(ownProps.match.params.articleId)(state),
});

export default connect(mapToStateProps)(ArticlePage);
