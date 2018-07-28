import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

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
            <div id="page-index">
                {text ? <ReactMarkdown source={text}/> : 'Loading ...'}
            </div>
        );
    }
}

Markdown.propTypes = {
    source: PropTypes.string.isRequired
}

export default Markdown;
