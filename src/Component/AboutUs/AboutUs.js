import React from 'react';
import todointhelou from '../../images/todointhelou.jpg';

const AboutUs = (props) => {

    return(

      <React.Fragment>
      <body id="aboutUsBody">
      <main role="main" id="aboutUsStuff">

      <div id="signupbackground2">

      <div id="signintext2">
          <h2 className="looking2"><em>Arch Arrivals is your one-stop shop when it comes to finding events happening in the St. Louis area!</em></h2>
          <p id="aboutStuffText">From concerts, festivals, and sporting events to yoga classes, book clubs, and karaoke nights, with Arch Arrivals, you'll always be able to find something to do in the Lou!</p>
        </div>
      <img id="todointhelou" src={todointhelou} className="bd-placeholder-img card-img-top" style={{ width: '100%'}} alt="" />
        

      </div>
      


        <footer className="container" id="aboutUsFooterContainer">
          
          <p id="foot">Arch Arrivals &copy; is owned and trademarked by KN Inc.</p>
          <p id="foot2">New to Arch Arrivals? Find STL events on the <a href="/about-us">Home</a> page!</p>
        </footer>

      </main>

      </body>

      </React.Fragment>
        )
}

export default AboutUs;