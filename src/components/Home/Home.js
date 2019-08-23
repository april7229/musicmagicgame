import React, {Component} from 'react';
import isModuleSpecifierRow from './HomeRow.js';
import $ from 'jquery';
// import Filters from "./filters/Filters";
// import { homedir } from 'os';
import { isModuleSpecifier } from '@babel/types';
  


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {filter: "All", query: "a", baseurl: "https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search"};
        this.filterChangeHandler = this.filterChangeHandler.bind(this);
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }


    performSearch(value, baseurl) {
        console.log("Perform search usingisModuleSpecifierdb");
        let urlString = baseurl;
        if (value === "" || value === null) {
            return;
        }

        urlString += "&query=" + value;

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully");
                console.log(searchResults);

                const results = searchResults.results;

                let musicRows = [];

                // results.forEach((music) => {
                //    isModuleSpecifier.poster_src = "https://image.tmdb.org/t/p/w185" +isModuleSpecifier.poster_path;
                    // constisModuleSpecifierRow = <musicRow key={music.id}isModuleSpecifier={music}/>
                //    isModuleSpecifierRows.push(movieRow);
                // });

                // this.setState({rows:isModuleSpecifierRows, query: value, baseurl: baseurl});
            },
            // error: (xhr, status, err) => {
            //     console.error(`Failed to fetch data ${err}`);
            // }
        });
    }

    searchChangeHandler(event) {
        console.log(event.target.value);

        this.performSearch(event.target.value, this.state.baseurl);
    }

    filterChangeHandler(event) {

        console.log(event);
        this.performSearch(this.state.query, event);
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                    <tr>
                        <td className="logo">
                            {/* <img alt="app icon" src="movies_icon.jpg"/> */}
                        </td>
                        <td className="title">
                            <h1> Search </h1>
                        </td>
                        <td className="searchBarContainer">
                            <input className="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
                        </td>
                        {/* <Filters changeHandler={this.filterChangeHandler}/> */}
                    </tr>
                    </tbody>
                </table>
                {this.state.rows}
            </div>

        );
    }
}

export default Home;