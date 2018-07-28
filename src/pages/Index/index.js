import React from 'react';
import Markdown from '../../components/Markdown';
import './style.css';

import article1 from '../../Articles/article1.md';

const Index = () => {
    return (
        <div id="page-index">
           <Markdown source={article1}/>
        </div>
    );
};

export default Index;
