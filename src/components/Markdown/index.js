import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import './style.css';

class Markdown extends Component {

    constructor(props){
        super(props);
        this.state = {text: null};
    }

    componentDidMount() {
        fetch(this.props.source)
        .then(response => { return response.text() })
        .then(text => { this.setState({text}); });
    }

    render(){
        const {text} = this.state;
        return (
            <div className="markdown">
                {text ? <ReactMarkdown source={text}/> : <FormattedMessage id="article.loading" values={{source: this.props.source}}/>}
            </div>
        );
    }
}

Markdown.propTypes = {
    source: PropTypes.string.isRequired
}

export default Markdown;
