import React from 'react';

import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";

import "./Articles.scss";

const articles = () => {
    return(
        <div className="articles">
            <Article1 />
            <Article2 />
            <Article3 />
        </div>
    )
}

export default articles;