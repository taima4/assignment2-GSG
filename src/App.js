import './App.css';
import { useState } from "react";



function Scoreboard() {

  
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });


   
  function handlePlusClick() {
    /*
   this function directly modifies the score property of the player object. 
    you should never mutate state directly as it won't trigger a re-render.
    --> We should create a new object with the updated score.

    */
    
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }
function handleFirstNameChange(e) {
  setPlayer({
    ...player,
    firstName: e.target.value,
  });
}

function handleLastNameChange(e) {
  /*  When updating lastName, you forgot to copy the other properties.
   As a result, firstName and score will be lost.
   -->use the spread operator ...player to copy the existing properties 
   and then update the lastName property.
   */

  setPlayer({
    ...player,
    lastName: e.target.value,
});
}

return (
  <>
    <label>
      Score: <b>{player.score}</b>{" "}
      <button onClick={handlePlusClick }>+1</button>
    </label>
    <label>
      First name:
      <input value={player.firstName} onChange={handleFirstNameChange} />
    </label>
    <label>
      Last name:
      <input value={player.lastName} onChange={handleLastNameChange} />
</label>
</>
);
}
function App() {
  return (
    <div className="App">
      <Scoreboard/>
    </div>
  );
}

export default App;
