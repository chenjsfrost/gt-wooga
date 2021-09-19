import React from "react";
import { makeStyles } from '@material-ui/core';
import RateForm from './RateForm';
import RateThankYouPage from './RateThankYouPage';
import FeedbackForm from './FeedbackForm';
import FeedbackThankYouPage from './FeedbackThankYouPage';
import DIMENSION from "./config/dimension";

const useStyles = makeStyles(() => ({
   mainContainer: {
      width: '100%',
      height: '100%',
   },
   image: {
      cursor: 'pointer',
      position: 'fixed',
      bottom: 0,
      margin: 10,
      border: '10px solid black',
      borderRadius: 60,
      '&:hover + #button': {
         visibility: 'visible',
      }
   },
   button: {
      transition: 'visibility 0s, width .8s, opacity .5s linear',
      cursor: 'pointer',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      position: 'fixed',
      bottom: 0,
      margin: 10,
      backgroundColor: 'black',
      borderRadius: 60,
      height: 110,
      width: 180,
      opacity: 0,
      visibility: 'hidden',
      '&:hover': {
         opacity: 100,
         width: 300,
         visibility: 'visible'
       },
   }
}));

const openRateForm = () => {
   // Hide smiley and button after entering rate form
   const smileyElement = document.getElementById('smiley');
   smileyElement.setAttribute('style', 'visibility: hidden;');
   const buttonElement = document.getElementById('button');
   buttonElement.setAttribute('style', 'visibility: hidden;');
   
   // Transition for rate form
   const rateFormElement = document.getElementById('rateForm');
   rateFormElement.setAttribute(
      'style', `opacity: 100; width: ${DIMENSION.WIDTH}; height: 200px; visibility: visible; background-color: white; border-radius: 10px;`,
   );
   const rateTitleElement = document.getElementById('rateTitle');
   rateTitleElement.setAttribute(
      'style', 'transform: translateY(30px); opacity: 100;',
   );
   const rateContainerElement = document.getElementById('rateContainer');
   rateContainerElement.setAttribute(
      'style', 'transform: translateY(50px); opacity: 100;',
   );
};

const App = () => {
   const classes = useStyles();
   return (
      <div className={classes.mainContainer}>
         <img id="smiley" className={classes.image} src='assets/smiley.png' />
         <button id="button" className={classes.button} onClick={() => openRateForm()}>Help us improve</button>
         <RateForm />
         <RateThankYouPage />
         <FeedbackForm />
         <FeedbackThankYouPage />
      </div>
   )
}

export default App;