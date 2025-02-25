import React from "react";
import "./Submit.css"

function Submit() {
    return (
        <>
        <div className="submit">
            <div className="user">
            <textarea></textarea>
            <p>名前</p>
            </div>
            
            <div className="main-text">
            <textarea className="text">

            </textarea>
            </div>
            <button>送信</button>
        </div>
        </>
    )
}
export default Submit