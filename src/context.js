// import React, { Component } from 'react';
// import axios from 'axios';

// const Context = React.createContext();

// export class Provider extends Component {
// export const Context = React.createContext();
//     state = {
//         track_list:[],

//         heading: 'Top 10 Tracks'
//     };

//     componentDidMount() {
//  axios
//  .get( 
//      `http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY
// }`
// )
//  .then(res =>{
//     console.log(res.data);
//  this.setState({track_list: res.data.message.body.track_list});

//  })

//  .catch(err => console.log(err));
//     }

    



// render() {
//     return (
//         <Context.Provider value={this.state}>
//             {this.props.children}
//         </Context.Provider>
//     )
// }
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
// export const Consumer = Context.Consumer;
export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_TRACKS':
//       return {
//         ...state,
//         track_list: action.payload,
//         heading: 'Search Results'
//       };
//     default:
//       return state;
//   }
// };

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: ""
    // dispatch: action => this.setState(state => reducer(state, action))
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        // console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 Tracks"
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}