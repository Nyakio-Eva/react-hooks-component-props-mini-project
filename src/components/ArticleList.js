import React from "react";
import ArticleItem from "./Article";


function ArticleList({posts}){
    const articleItems = posts.map((post)=>(
        <ArticleItem 
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}

     />
    ));
        


    return <main>{articleItems}</main>;
    
}

export default ArticleList