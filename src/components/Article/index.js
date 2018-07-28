import React from 'react';
import Markdown from '../Markdown';
import './style.css';
import { ArticleShape } from '../../shapes/ArticlesShapes';

const Article = (props) => {
    const {source} = props;
    return (
        <div className="article">
            <p>{source.props.context}</p>
            <Markdown source={source.content} />
        </div>
    );
};

Article.propTypes = {
    source: ArticleShape.isRequired,
}

export default Article;
