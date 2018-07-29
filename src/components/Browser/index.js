import React from 'react';
import {FormattedMessage} from 'react-intl';
import {ArticlesShape} from '../../shapes/ArticlesShapes';
import {ARTICLE_ANCHOR} from '../../constants';
import './style.css';

const Browser = (props) => {
    return (
        <div className="browser">
            <h4><FormattedMessage id="browser.title"/></h4>
            <ol>
            {props.articles.map((article,i) => {
                return <li key={i}><a href={"#"+ARTICLE_ANCHOR+i}>{article.props.title}</a></li>
            })}
            </ol>
        </div>
    );
};

Browser.propTypes = {
    articles: ArticlesShape.isRequired,
};

export default Browser;
