import React from 'react';
import Article from './Article';

const ArticleDisplay = () => {
  return (
    <div className='main-article'>
      <div className="left-article">
        <Article 
          hero="https://assets.goal.com/images/v3/bltd391f94835c54930/Salah%20Konate%20Van%20Dijk%20Liverpool%20GFX.jpg?auto=webp&format=pjpg&width=828&quality=60" 
          intro="salah is here" 
          title="Salah sends Liverpool top despite disappointing display" 
          content="The Egyptian netted the winner from the penalty spot at Molineux as Arne Slot's side made it five wins from six to start the season."
          time="11" 
          width="300"
          height="700"
          userMessageCounter="20" 
        />
      </div>
      <div className="side-article">
        <Article 
          hero="https://assets.goal.com/images/v3/blta00973486bd22e2a/Augustine_Eguavoen_coach_of_Nigeria_reacts_during_the_2021_Africa_Cup_of_Nations.JPG?auto=webp&format=pjpg&width=828&quality=60" 
          intro="Breaking News" 
          title="Salah leads Liverpool again" 
          content="Another match, another win for Liverpool. Salah plays pivotal role."
          time="12" 
          userMessageCounter="25" 
          width="150"
          height="300"
        />
        <Article 
          hero="https://assets.goal.com/images/v3/blt0ed714acf7b312fd/Leandro%20Trossard%20Arsenal%20HIC.jpg?auto=webp&format=pjpg&width=828&quality=60" 
          intro="Latest News" 
          title="Liverpool shines in the Premier League" 
          content="The team's outstanding performance continues with another victory."
          time="13" 
          userMessageCounter="30" 
          width="200"
          height="300"
        />
    </div>
    </div>
  );
}

export default ArticleDisplay;
