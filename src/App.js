import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';
import './App.scss';
import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import Cluster from './components/cluster';
/*import Cluster from './components/cluster';*/
import FAQ from './components/faq';
import Banner from './components/banner';
import Blog from './components/blog';
import Pmcarefunds from './components/pmcarefunds';

/* import PatientDB from './components/patientdb';*/
const history = require('history').createBrowserHistory;
function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    /* {
      pageLink: '/patientsDB',
      view: PatientDB,
      displayName: 'Patients DB',
      animationDelayForNavbar: 0.3,
    },

    {
      pageLink: '/clusters',
      view: Cluster,
      displayName: 'Clusters',
      animationDelayForNavbar: 0.4,
    },*/
	{
      pageLink: '/blog',
      view: Blog,
      displayName: 'Blog',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.5,
    },
	{
      pageLink: '/pmcarefunds',
      view: Pmcarefunds,
      displayName: 'Donate',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'FAQ',
      animationDelayForNavbar: 0.6,
    },
  ];
  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
              </Switch>
            </div>
          )}
        />
      </Router>
      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        <img
          src="/icon.png"
          alt="https://www.Humans.in | Coronavirus cases live dashboard"
        />
        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="/">covid19india</a>
        </div>
        <div id="footerButtons">
          <a
            className="button"
            href="https://bit.ly/patientdb"
            target="_noblank"
          >
            <Icon.Database />
            <span>Crowdsourced Patient Database&nbsp;</span>
          </a>
          <a
            href="https://bit.ly/covid19crowd"
            className="button telegram"
            target="_noblank"
          >
            <Icon.MessageCircle />
            <span>Join Telegram to Collaborate!</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
export default App;
