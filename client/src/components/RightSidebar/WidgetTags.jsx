import React from "react";

const WidgetTags = () =>{

    const tags = ['c','css','firebase','express','html','mern','java','python','javascript','sql','mongodb','php','mysql','next.js','node.js','reactjs']

    return (
        <div className="widget-tags">
            <h4>Matched Tags</h4>
            <div className="widget-tags-div">
                   {
                    tags.map((tag)=>{

                    <p key={tag}>{tag}</p>    
                    })
                   }
            </div>

        </div>
    )
}