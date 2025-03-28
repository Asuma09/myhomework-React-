import React from "react";
import "./header.css"

function header() {
    return (
            <div className="header">
                <ul className="nav">
                
                <li className="list">
                    <p><a href="/">投稿一覧</a></p>
                </li>
                <li className="list">
                    <p><a href="/submit">投稿する</a></p>
                </li> 
                </ul>
                
                
            </div>
    );
}

export default header;

