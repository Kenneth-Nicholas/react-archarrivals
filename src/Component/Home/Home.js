import React, { Component } from 'react';
import axios from 'axios';
import { ReactDOM } from 'react-dom';
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
import Header from './../Header/Header';


class Home extends Component {    

  state = {
    search: ''
}
  
  searchSubmitHandler = () => {
    axios.get('http://localhost:8080/searchEvents', {
    params: {
    searchQuery: this.state.search
}
})
    
    .then( (response) => {

      const searchResults = response.data;
      this.props.history.push({
        pathname: '/searchEvents',
        state: { detail: response.data },
      })

    })                
  }

  searchQuerySetter = (props) => {
    this.state.search = props;
    this.searchSubmitHandler();
  }

render() {

        return (
          
            <div className="container-fluid" id="homePage">
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
                <button onClick={()=>this.searchQuerySetter("night")} className="btn btn-sm btn-outline-secondary" id="view" type="button" >View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("sport")} id="view2" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("music")} id="view15" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("comedy")} id="view3" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("play")} id="view4" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("social")} id="view5" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("business")} id="view6" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("learn")} id="view7" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("community")} id="view8" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("fun")} id="view9" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("fun")} id="view10" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("exercise")} id="view11" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("fest")} id="view12" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("parade")} id="view13" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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
                <button onClick={()=>this.searchQuerySetter("the")} id="view14" type="button" className="btn btn-sm btn-outline-secondary">View Category</button>
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

        );
}
}

export default Home;