import React from 'react';
import {FormattedDate, FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';
import './style.css';
import { ArticleShape } from '../../shapes/ArticlesShapes';
import {ROUTES} from '../../constants';

const Article = (props) => {
    const {source,articleId} = props;
    return (
        <div id={articleId} className="article">
            <h1>{source.props.title}</h1>
            <div className="article-header">
                <FormattedMessage id={`article.lang.${source.props.lang}`}/>
                &nbsp;
                <FormattedDate className="article-header-date" value={source.props.date} year='numeric' month='long' day='2-digit'/>
                {source.props.context.map((context,i) => {
                    return <span key={i} className="article-header-context">{context}</span>
                })}
                <a className="article-header-repository" target="_blank" href={ROUTES.EXTERNALS.GITHUB + "/"+ source.props.repository}>
                    <FormattedMessage id={'article.repository'}/>
                </a>
            </div>
            <hr/>
            <Markdown source={source.content} />
            <a className="article-backtotop" href="#root">
                <FormattedMessage id="article.backtotop"/>
            </a>
        </div>
    );
};

Article.propTypes = {
    source: ArticleShape.isRequired,
    articleId: PropTypes.string.isRequired,
}

export default Article;
