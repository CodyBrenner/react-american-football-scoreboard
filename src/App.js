//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks. 
  //  You'll need one for the home score and another for the away score.
 const [homeScore, homeSetScore] = useState(0);
 const [awayScore, homeAwayScore] = useState(0);
 const homeTeam = "Lions";
 const awayTeam = "Tigers";
  return (
    
    <div className="container">
        <button onClick = { () => {(homeSetScore(0)); (homeAwayScore(0));}} className="homeButtons__fieldGoal">Reset Board</button>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          
          <h4>{homeTeam}</h4>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = { () => homeSetScore(homeScore+6)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = { () => homeSetScore(homeScore+3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick = { () => homeSetScore(homeScore+1)} className="homeButtons__fieldGoal">Extra Point</button>
          <button onClick = { () => homeSetScore(homeScore+2)} className="homeButtons__fieldGoal">Safety</button>
          
        </div>
  
        <div className="awayButtons">
        <h4>{awayTeam}</h4>
          <button onClick = { () => homeAwayScore(awayScore+6)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = { () => homeAwayScore(awayScore+3)}className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = { () => homeAwayScore(awayScore+1)} className="homeButtons__fieldGoal">Away Extra Point</button>
          <button onClick = { () => homeAwayScore(awayScore+2)} className="homeButtons__fieldGoal">Away Safety</button>
        </div>
      </section>
    </div>
  );
}

export default App;
