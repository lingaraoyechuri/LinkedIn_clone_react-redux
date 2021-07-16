import React from 'react'
import "./widgets.css";
import News from "./news";

function widgets() {
    return (
        <div className="widgets">
            <h4>LinkedIn News</h4>
            <ul>
                <li><News description="Managing remote teams effectively"  readers="69" newsType="latest"/></li>
                <li><News description="Should you be funny at work?"  readers="69" newsType="latest"/></li>
                <li><News description="Why Starbucks is out of your order"  readers="69" newsType="latest"/></li>
            </ul>
           
        </div>
    )
}

export default widgets
