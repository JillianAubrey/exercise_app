import React from "react";
import {animated, useSpring } from "@react-spring/web"
import "./About.scss";

export default function About() {

  const [style] = useSpring(({ from: {opacity: 0.1}, to: {opacity: 1}, config: {duration: 500}, delay: 100}), [])

  return (
    <animated.div className="about__card" style={style}>
      <p className="about__card-header">Customize your fitness!</p>

      <div className="divider"></div>

      <p className="about__card-subheader">
        Easily share and collaborate with others.
      </p>

      <br />

      <div className="about__card-body">
        <p>
          Titan lets you build, customize and share workout plans. Choose
          exercises from our database, or make your own. Click to walk through
          your workouts, right in the app. Share workouts with friends or
          clients, and track eachother's progress.
        </p>

        <div className="about__card-aboutus">
          <img src="/images/lhl.png" alt="lighthouse labs logo"/>
          <h2>About Us</h2>
          <div className="about__card-creators">
            <div className="about__card-creator">
              <p>Jillian Aubrey</p>
              <div className="links">
                <a href="https://github.com/JillianAubrey" target="blank">
                  <img src="/images/github.svg" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/JillianAubrey/" target="blank">
                  <img className="linkedin" src="/images/linkedin.svg" alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="about__card-creator" target="blank">
              <p>Michael Davis</p>
              <div className="links">
                <a href="https://github.com/Michaeltcdavis" target="blank">
                  <img src="/images/github.svg" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/michaeltcdavis/" target="blank">
                  <img className="linkedin" src="/images/linkedin.svg" alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="about__card-creator">
              <div>
                <p>Jeremy Buist</p>
                <div className="links">
                <a href="https://github.com/jbuistjbuist" target="blank">
                  <img src="/images/github.svg" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/jeremy-buist/" target="blank">
                  <img className="linkedin" src="/images/linkedin.svg" alt="linkedin" />
                </a>
              </div>
              </div>
            </div>
          </div>
          <p>This application was built by Jillian Aubrey, Michael Davis, and Jeremy Buist as part of the <a href="https://www.lighthouselabs.ca/" target="blank">Lighthouse Labs</a> web development bootcamp. </p>
          <p>The application front-end is built with React, 
            and the server is built with Ruby on Rails. We tested the back-end with the RSpec testing library, and the front end with Storybook and Jest. For styling the application, we used primarily custom SCSS, and components from the Material UI library. Animations were included using React-Spring.</p>
        </div>
      </div>
    </animated.div>
  );
}
