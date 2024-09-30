import React, { useState } from "react";
import '../styles/Header.css';
import { Teams } from "../dummyData.js/TeamDummy";
import {useNavigate} from "react-router-dom"

export default function Header() {
  // State to track the dropdown
  const [dropdown, setDropdown] = useState(null);

  // initialise the navigate
  const navigate = useNavigate()
  function handleLogIn() {
    // Navigate to login page
    navigate("/login");
  }
  function DisplayTeamDisPlay() {
    return (
      <div className="teams" style={{color:"white"}}>
        <div>
            <h2>Info</h2>
            <p>Breaking News</p>
            <p>Table</p>
            <p>Fixtures and Results</p>
        </div>
        <div>
        {Teams[0].englishTeams.map((EnglishTeam) => (
          <div className="team-content" key={EnglishTeam.name}>
            <img
              src={EnglishTeam.logo}
              alt="team-image"
              width={10}
              height={10}
            />
            <p>{EnglishTeam.name}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }

  function DisplayTeamDisPlay2() {
    return (
        <div className="teams" style={{color:"white"}}>
        <div>
            <h2>Info</h2>
            <p>Breaking News</p>
            <p>Table</p>
            <p>Fixtures and Results</p>
        </div>
        <div>
        {Teams[1].spanishTeams.map((spanishTeam) => (
          <div className="team-content" key={spanishTeam.name}>
                        <img
              src={spanishTeam.logo}
              alt="team-image"
              width={10}
              height={10}
            />
            <p>{spanishTeam.name}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="left-panel">
        <ul className="left-panel-listing">
          <li>
            <img src="https://www.goal.com/img/logo.svg" alt="logo" />
          </li>
          <li>LiveScores</li>
          <li>News</li>
          <li>Transfer</li>
          <li className="drop-down"
            onMouseEnter={() => setDropdown('premier')}
            onMouseLeave={() => setDropdown(null)}
          >
            Premier League
          </li>
          <li
            onMouseEnter={() => setDropdown('laliga')}
            onMouseLeave={() => setDropdown(null)}
          >
            LaLiga
          </li>
          <li>Culture</li>
          <li>Betting</li>
          <div className="right-side">
        <span className="material-symbols-outlined">account_circle</span>
        <p>LogIn</p>
      </div>
        </ul>
      </div>

      <div className="dropdown-container">
        {dropdown === 'premier' && <DisplayTeamDisPlay />}
        {dropdown === 'laliga' && <DisplayTeamDisPlay2 />}
      </div>
    </div>
  );
}
