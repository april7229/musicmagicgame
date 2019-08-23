import React from 'react';

class HomeRow extends React.Component {
    viewartist() {
        const url = "https://www.musixmatchcom-musixmatch.p.rapidapi.com/artist/" + this.props.artist.id;
        window.location.href = url
    }

    render() {
        return <table className={"artistRowTable"} key={this.props.artist.id}>
            <tbody>
            <tr>
                <td>
                    <img alt="poster" src={this.props.artist.poster_src}/>
                </td>
                <td>
                    <h3>{this.props.artist.title}</h3>
                    <p>{this.props.artist.overview}</p>
                    <input type="button" onClick={this.viewartist.bind(this)} value="View"/>
                </td>
            </tr>
            </tbody>
        </table>
    }
}

export default HomeRow;