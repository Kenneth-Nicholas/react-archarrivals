import React from 'react';

const event = (props) => {

    return props.events.map((event, index)=>
        (
        <div className="eventSearchResult">    
            <li key={index}>
                <img className="eventlogo" alt="Event Image Failed To Load Due To Bad Remote Host URL Request" src={event.logo} height="400" width="auto" ></img>
                    <br/>
                <h3 className="eventname">Event Name: {event.name}</h3>
                    <br/>
                <p className="eventdescription">Event Description: {event.description}</p>
                    <br/>
                <p className="eventstart">Event Start Time: {event.start}</p>
                    <br/>
                <p className="eventend">Event End Time: {event.end}</p>
                    <br/>
                <button onClick={()=>props.sendEmail(event.eventId)}>Email Me The Details!</button>
            </li>
        </div>
        )
    )

}

export default event;