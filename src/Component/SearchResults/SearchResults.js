import React, {Component} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import Event from './../Event/Event';

class SearchResults extends Component {

    constructor (props) {
        super(props);
        this.setState(this.props.location.state.detail);
        console.log(this.props.location.state.detail);
    }

    // the logo is a url link to the image corresponding to the event that is accessible online.

    // I need a for each loop to render this data for each and every event that comes back as a search result.

    sendEmail = (eventId) => {
        eventId.preventDefault();
        axios.get('http://localhost:8080/sendEmail', {
        params: {
        eventId: this.props.eventId 
    }
    })}

    render() {
        return(
                <div id="searchResults">
                    <Event events={this.props.location.state.detail} sendEmail={this.sendEmail}/>
                </div>
        );
    }

}

export default SearchResults;