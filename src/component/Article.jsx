import React from 'react';
import '../styles/Hero.css';

const Article = (props) => {
  return (
    <div>
      <div className="article-body">
        {/* Use curly braces for dynamic props and correct the prop name */}
        <img src={props.hero} alt="" width={props.height} height={props.width}/>
        <h5>{props.intro}</h5>
        <a href="#">{props.title}</a>
        <p>{props.content}</p>
    <div className="info">
    <div className="timer">
        <span class="material-symbols-outlined">chat</span>          
        <p>{props.time}</p>
        </div>
        <div className="user">
        <span class="material-symbols-outlined">schedule</span>        
        <p>{props.userMessageCounter}</p>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Article;
