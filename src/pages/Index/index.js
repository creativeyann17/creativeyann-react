import React from 'react';
import {connect} from 'react-redux'
import {ArticlesShape} from '../../shapes/ArticlesShapes';
// import Article from '../../components/Article';
// import About from '../../components/About';
import './style.css';

const Index = (props) => {
    return (
        <div className="page-index">
            <div className="page-index-left">
                {/*<Article source={props.articles[0]} />*/}
                <p>Work in progress ...</p>
            </div>
            <div className="page-index-right">
                {/*<About/>*/}
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
