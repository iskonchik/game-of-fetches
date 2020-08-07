import React, { Component } from "react";
import axios from "axios";
import Question from "./Question";
export default class Fetch extends Component {
  state = {
    answers: [],
  };
componentDidMount(){
let johnSnow = " http://anapioficeandfire.com/api/characters/583";
let margaeryTyrell ="http://anapioficeandfire.com/api/characters/16";
let houseTargeryen =  "http://www.anapioficeandfire.com/api/houses/378";
let houseLannister = "http://www.anapioficeandfire.com/api/houses/229";
let houseBaratheon = "http://www.anapioficeandfire.com/api/houses/17";
let robertBaratheon = "http://www.anapioficeandfire.com/api/characters/901";
let houseStark = "http://www.anapioficeandfire.com/api/houses/362";
let catelynStark = "http://www.anapioficeandfire.com/api/characters/232";

    const requestjohnSnow = axios.get(johnSnow);
    const requestmargaeryTyrell= axios.get(margaeryTyrell);
    const requesthouseTargeryen = axios.get(houseTargeryen);
    const requesthouseLannister = axios.get(houseLannister);
    const requesthouseBaratheon = axios.get(houseBaratheon);
    const requesthouseStark = axios.get(houseStark);
    const requestcatelynStark= axios.get(catelynStark);

    axios.all([
      requestjohnSnow,
      requestmargaeryTyrell,
      requesthouseTargeryen,
      requesthouseLannister,
      requesthouseBaratheon,
      requesthouseStark,
      requestcatelynStark,
    ])
    .then(
      axios.spread((...responses) => {
        const requestjohnSnow = responses[0].data.born;
        const requestmargaeryTyrell = responses[1].data.region;
        const requesthouseTargeryen = responses[2].data.coat_of_arms;
        const requesthouseLannister = responses[3].data.seats[1];
        const requesthouseBaratheon = responses[4].data.aliases[1];
        const requesthouseStark = data.name;
        const requestcatelynStark = data.tv_series[1];

        console.log(
          requestjohnSnow,
          requestmargaeryTyrell,
          requesthouseTargeryen,
          requesthouseLannister,
          requesthouseBaratheon,
          requesthouseStark,
          requestcatelynStark,
        );

        const data = [
          requestjohnSnow,
          requestmargaeryTyrell,
          requesthouseTargeryen,
          requesthouseLannister,
          requesthouseBaratheon,
          requesthouseStark,
          requestcatelynStark,
        ];
        this.setState({answers:data});
        console.log(this.answers);

      })
    )
      .catch((errors) => {
        console.error(errors);
      })
    
    }

render() {
  return (
    <div classname='throne'>
      <Question
        value={{
          question: "1. Where was Margaery Tyrell born?",
          answer: this.state.answers[0],
        }}
      />
      <Question
        value={{
          question: "2. What region is House Targaryen in?",
          answer: this.state.answers[1],
        }}
      />
      <Question
        value={{
          question: "3. What's the coat of arms of House Lannister?",
          answer: this.state.answers[2],
        }}
      />
      <Question
        value={{
          question: "4. What is the second seat of House Baratheon?",
          answer: this.state.answers[3],
        }}
      />
      <Question
        value={{
          question: "5. What is Robert Baratheon's second alias?",
          answer: this.state.answers[4],
        }}
      />
      <Question
        value={{
          question: "6. What's the name of the founder of House Stark?",
          answer: this.state.answers[5],
        }}
      />
      <Question
        value={{
          question:
            "7. What are the titles of Catelyn Stark's three POV books?",
          answer: this.state.answers[6],
        }}
      />
    </div>
  );
}
}



// function App() {
//   let [userData, setUserData] = useState({});

//   useEffect(() => {
//     getGitHubUserWithFetch();
//     // getGiHubUserWithAxios();
//   }, []);

//   let getGitHubUserWithFetch = async () => {
//     let response = await fetch(johnSnow);
//     let jsonData = await response.json();
//     setUserData(jsonData);
//   };

//   let getGiHubUserWithAxios = async () => {
//     let response = await axios.get(johnSnow);
//     setUserData(response.data);
//   };



//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Game of Thrones</h2>
//       </header>
//       <div className="user-container">
//         <h5 className="info-item">{userData.name}</h5>
//         <h5 className="info-item">{userData.location}</h5>
//         <h5 className="info-item">{userData.blog}</h5>
//         <h5 className="info-item">{userData.company}</h5>
//       </div>
//     </div>
//   );
// }

// export default App;

axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})