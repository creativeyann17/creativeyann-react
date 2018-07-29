import React from 'react';
import {connect} from 'react-redux'
import {ArticlesShape} from '../../shapes/ArticlesShapes';
import {ARTICLE_ANCHOR} from '../../constants';
import Article from '../../components/Article';
import About from '../../components/About';
import Browser from '../../components/Browser';
import './style.css';

const Index = (props) => {
    return (
        <div className="page-index">
            <div className="page-index-left">
                {props.articles.map((article,i) => {
                    const articleId = ARTICLE_ANCHOR+i;
                    return <Article articleId={articleId} key={articleId} source={article} />
                })}
            </div>
            <div className="page-index-right">
                <About/>
                <Browser articles={props.articles}/>
            </div>
        </div>
    );
};

Index.propTypes = {
    articles: ArticlesShape.isRequired,
};

const mapStateToProps = (state) => {
    return {
        articles: state.ArticlesServiceReducer.articles
    };
}

export default connect(mapStateToProps)(Index);
