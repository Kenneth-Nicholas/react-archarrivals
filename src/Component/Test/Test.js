import React from 'react';
import axios from 'axios';

const Test = (props) => {

    axios.get("http://localhost:8080/getEvents")

    return(

      <React.Fragment>

        <body id="aboutUsBody">

            <main role="main" id="aboutUsStuff">

                <div id="signupbackground2">

                    <div id="signintext2">

                        <h2 className="looking2"><em>Test</em></h2>

                    </div>

                </div>

            </main>

        </body>

      </React.Fragment>

        )
        
}

export default Test;

