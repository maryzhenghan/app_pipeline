import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import './LandingPage.css';

export default function LandingPage(props) {
  return (
    <div className="lp-content">
      <section>
        <header>
          <h3>See your spending</h3>
        </header>
        <p>[<em>placeholder for screenshot of calendar interface</em>]</p>
        <p>Strip away all the complexities of money management with Pipeline's simple calendar view of your day-to-day spending.</p>
      </section>

      <section>
        <header>
          <h3>Track on your terms</h3>
        </header>
        <p>[<em>placeholder for screenshot of log form</em>]</p>
        <p>Interested in only tracking one spending habit? Or want to plug them all in? Pipeline's spend logger gives you full control of what goes into your calendar.</p>
      </section>

      <section>
        <header>
          <h3>Get microbudgeting help</h3>
        </header>
        <p>[<em>placeholder for screenshot of home page</em>]</p>
        <p>Need a no-nonsense reminder of how much money you have left? Set your level of disposable income and Pipeline gives you a standing report on how much you have left to spend each day, week, and month.</p>
      </section>


      <SignupForm />
    </div>
  );
}
