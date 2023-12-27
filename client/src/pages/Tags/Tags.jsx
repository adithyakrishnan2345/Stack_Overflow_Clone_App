import React from "react";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagList from "./TagList";
import './Tags.css'

export const Tags = ()=> {

    const TagsList = [
        {
          id:1,
          tagName:"",
          tagDesc:""
        },
        {
          id:2,
          tagName:"",
          tagDesc:""
        },
        {
           id:3,
           tagName:"",
           tagDesc:""
        },
        {
           id:4,
           tagName:"",
           tagDesc:""
        },
        {
            id:5,
            tagName:"",
            tagDesc:""
        },
        {
           id:6,
           tagName:"",
           tagDesc:""
        },
        {
            id:7,
            tagName:"",
            tagDesc:""
         },
         {
            id:8,
            tagName:"",
            tagDesc:""
         },
         {
            id:9,
            tagName:"",
            tagDesc:""
         },
         {
            id:10,
            tagName:"",
            tagDesc:""
         }

    ]
    return (
        <div className="home-container-1">
          <LeftSidebar/>
          <div className="home-container-2">
            <p>A tag is a keyword or label that categorizes your question with other similar questions</p>
            <p>Using the right tags makes it easier for others to find and answer your questions</p>
             <div className="tags-list-container">
                {
                    TagsList.map((tag)=>{
                        <TagList tag={tag} key={TagsList.id}/>
                    }
                    )
                }
             </div>
          </div>
        </div>
    )
}