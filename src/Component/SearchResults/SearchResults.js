import React, {Component} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import Event from './../Event/Event';

class SearchResults extends Component {

    constructor (props) {
        super(props);

        console.log(this.props.location.state.detail);
    }

    sendEmail = (eventId) => {
        axios.get('http://localhost:8080/emailEvent', {
        params: {
        eventId: eventId
    }
    })

    .then( (response) => {

    })               

}

    render() {
        return(
                <div id="searchResults">
                    <Event events={this.props.location.state.detail} sendEmail={this.sendEmail}/>
                </div>
        );
    }

}

export default SearchResults;