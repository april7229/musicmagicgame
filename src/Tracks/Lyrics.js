import React, { Component } from 'react';
import axios from 'axios';


class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    };
componentDidMount(){
    axios
    .get( 
        `http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY
   }`
   )
    .then(res =>{
       // console.log(res.data);
    this.setState({track_list: res.data.message.body.track_list});
   
    })
   
    .catch(err => console.log(err));
       }

    render() {
        return (
            <div>
                <h1>Lyrics</h1>
            </div>
        );
    }
}
export default Lyrics;