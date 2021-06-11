import React from 'react'
import { Router } from '@reach/router'
import ArticlePage from '../articles/articles.component'
const Articles = () => {
    return (
        <Router basepath='/articles/:articleId'>
           <ArticlePage path='/' /> 
        </Router>
    )
}

export default Articles
