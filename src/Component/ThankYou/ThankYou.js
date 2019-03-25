import React from 'react';
import nightlife from '../../images/nightlife.jpg';
import sports from '../../images/sports.jpg';
import music from '../../images/music.jpg';
import standup from '../../images/standup.jpg';
import theater from '../../images/theater.jpg';
import socializing from '../../images/socializing.jpg';
import education from '../../images/education.jpg';
import business from '../../images/business.jpg';
import community from '../../images/community.jpg';
import health from '../../images/health.jpg';
import hobby from '../../images/hobby.png';
import recreation from '../../images/recreation.jpg';
import holiday from '../../images/holiday.jpg';
import festival from '../../images/festival.jpg';
import parade from '../../images/parade.JPG'

const ThankYou = (props) => {

    return(

      <React.Fragment>

          <div id="thankYou" className="w3-content" style={{'max-width': '1920px'}}>
            <div className="w3-panel">
              <i className="w3-xlarge fa fa-bars"></i>
            </div> 
            <div className="w3-row">
              <div className="w3-half w3-container">
              <br></br>
              <br></br>
              <br></br>
                <h1 id="thankYouText" >Thank you for signing up!</h1>
            </div>
            </div>
            </div>  

<div className="container-fluid" id="homePage2">
<main role="main">

<section className="jumbotron text-center" id="jumbotron">
 <div className="container">
   <h1 className="jumbotron-heading" id="jumbotronTitle"> Arch Arrivals </h1>
   <p className="lead text-muted" ><em id="jumbotronsub">Looking for something to do? We've got you covered! </em></p>
   <p className="lead text-muted" ><em id="jumbotronsub2">Find events happening around St. Louis by browsing through the categories below</em></p>
 </div>
</section>

<div id="cards" className="album py-5 bg-black">
 <div className="container" id="cards2">

   <div className="row">
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
         <img src={nightlife} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body" > 
           <p className="card-text">Nightlife Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button className="btn btn-sm btn-outline-secondary" id="view" type="button" >View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={sports} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Sport Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view2" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={music} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Music Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view15" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>

     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={standup} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Standup Comedy Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view3" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={theater} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Theater Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view4" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={socializing} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Social & Dating Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view5" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>

     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={business} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Professional & Business Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view6" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={education} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Education Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view7" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={community} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Community & Culture Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view8" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
</div>

     <div className="row">
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
         <img src={recreation} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body" > 
           <p className="card-text">Recreational Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view9" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={hobby} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Hobby Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view10" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={health} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Health & Wellness Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view11" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
         </div>
</div>
 </div>

     <div className="row">
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
         <img src={festival} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body" > 
           <p className="card-text">Festival Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view12" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={parade} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Parade Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view13" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-4">
       <div className="card mb-4 shadow-sm">
       <img src={holiday} className="bd-placeholder-img card-img-top" width="100%" height="225" />
         <div className="card-body">
           <p className="card-text">Seasonal & Holiday Related Events</p>
           <div className="d-flex justify-content-between align-items-center">
             <div className="btn-group">
               <button id="view14" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
             </div>
             <small className="text-muted"></small>
           </div>
         </div>
       </div>
     </div>
         </div>
         </div>
   </div>


</main>

<footer className="text-muted" id="cards3">
<div className="container">
 <p className="float-right">
   <a href="#">Back to top</a>
 </p>
 <p id="foot">Arch Arrivals &copy; is owned and trademarked by KN Inc.</p>
 <p id="foot2">New to Arch Arrivals? Check out the <a href="/about-us">About Us</a> section!</p>
</div>
</footer>
         </div>

         </React.Fragment>

        )
}

export default ThankYou;