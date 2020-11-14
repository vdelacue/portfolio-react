import React from 'react';
import './css/body.css';
import './css/heading.css';
import './css/styles.css';
import Home from './pages/home';
import PortfolioLink from './pages/portfolio-link';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/portfolio" component={Home} />
        <Route exact={true} path="/contact" component={Home} />
        <Route exact={true} path="/about" component={Home} />
        <Route exact={true} path="/pwr">
          <PortfolioLink name="Timer Quiz" deployed="https://jmc846.github.io/Timer-quiz/" repo="https://github.com/jmc846/Timer-quiz" src="assets/img/portfolio/powernine.png" alt="Timer Quiz app" dsc="A full stack application using Node JS, Sequelize, Passport, and Express. Users can login to Power Nine and recreate their personal card collection using the Scryfall API. The collection, and detailed information about it, can then be stored, recalled, and viewed from our database. Users can view others' collections, send messages to them, and offer trades
          directly to others. Future versions will include expanded financial data for collection value and a real-time chat system"
          />
        </Route>
        <Route exact={true} path="/rt">
          <PortfolioLink name="Burger Tracker" deployed="https://limitless-chamber-16994.herokuapp.com/" repo="https://github.com/jmc846/Burger-" src="assets/imgs/burger.png" alt="Burger app" 
            dsc="This full stack, mobile-first application uses Node JS, Express, Sequelize, Express-Handlebars, Passport, and a custom ORM and can be used to manage the status of a
          work order as one would in an auto, electronics or appliance repair shop. Employees can login and
          manage order status or update status and information. Customers can track the status of their repair
          from a separate page. Future versions will also include an invoice and payment system as well as an expanded database for customer analytics."/>
        </Route>
        <Route exact={true} path="/fsf">
          <PortfolioLink name="Fullstack Fitness" deployed="https://fullstackfitness.herokuapp.com/" repo="https://github.com/jmc846/workout-tracker" src="assets/imgs/workout.png" alt="Fullstack Fitness"  
           dsc="A full stack application utilizing Node.js, Express, Passport, and Sequelize. Users can
           create a personalized profile based on their individual fitness goals and level of access to equipment. An exercise database based on desired exercise type and available
           equipment can be searched through and sorted, and generate personalized workouts to help indiviuals meet their personal fitness goals. Future updates will include a customizeable workout planner, and community feed where users can compare and coordinate fitness plans."
          />
        </Route>
        <Route exact={true} path="/mma">
          <PortfolioLink name="School Management" deployed="https://guarded-hamlet-46204.herokuapp.com/" repo="https://github.com/mc4506/martial-art-school-management" src="assets/imgs/mma.png" alt="martial art school software"  
          dsc="I had the privelige of working with an amazing group of individuals on this one. Full Stack MMA School is an application for creating and managing classes for a martial arts school. Instructors are able to log in and create classes based on user skill level and preference for in-person or virtual lessons, and coordinate class size if constraints are required by local health ordinances. Students and instructors can also post messages and communicate with each other through the platform.
          Our application uses Node.js, Express, mySQL, Sequelize, JQuery, Passport, Passport-local, Passport-google-oauth, and Bootstrap."
          />
        </Route>
        <Route exact={true} path="/irlm">
          <PortfolioLink name="note taker" deployed="https://jmc846.github.io/Note-Taker/" repo="https://github.com/jmc846/Note-Taker" src="assets/imgs/notetaker.gif" alt="Note Taker app" 
          dsc="This progressive web application utilizes MongoDB and Mongoose in addition
          to Nde JS and Express in conjunction with the Scryfall API to allow the user to scroll through, view,
          and rate an infinitely increasing database of images each time they view the page. This progressive app can be cached and incorporates lazy loading to maximize performance under stress."
          />
        </Route>
        <Route exact={true} path="/pgen">
          <PortfolioLink name="weather app" deployed="https://jmc846.github.io/Weather-Dashboard/" repo="https://github.com/jmc846/Weather-Dashboard" src="assets/imgs/weather.png" alt="weather app"  
          dsc="The first individual Javascript based project I ever worked on. This is a simple password generator to demonstrate basic understanding of arrays and the for loop. I struggled greatly to complete this, and my first attempt wasn't very good. After I had learned much more, I came back to this and completely redid it with ease in only a short amount of time. It's included in my portfolio as an example of how learning is a lifelong process, and every challenge is an opportunity to learn and improve."
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;