import React, { useRef } from "react";
import {useState} from "react";

const nomes = [
    "Gabriel",
    "Vitor",
    "Fábio",
    "Marcos",
    "Felipe"
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInput = useRef();
  let listToDisplay = nomes;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);


let typingTimer = null;
const doneTypingInterval = 3000;
searchInput.current.addEventListener("keyup", () =>{
  clearTimeout(typingTimer);
 if (searchTerm) {
   typingTimer=setTimeout(doneTyping, doneTypingInterval);
 }

})

function doneTyping() {
  console.log('Você parou de digitar');
}
  };

  const renderNameList = () => {
    return listToDisplay.map((pessoas, i) => <p key={i}>{pessoas}</p>);
  };

  if (searchTerm !== "") {
    listToDisplay = nomes.filter((pessoas) => {
      return pessoas.includes(searchTerm);

    });
  }
  return (
    <div className="App">
      <h1>Nomes:</h1>
      <input type="text" className="input"  ref={searchInput} value={searchTerm} onChange={handleChange}></input>
      {renderNameList()}
    </div>
)};
  