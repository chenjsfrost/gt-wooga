import React from "react";
import { makeStyles } from '@material-ui/core';
import RateForm from './RateForm';
import RateThankYouPage from './RateThankYouPage';
import FeedbackForm from './FeedbackForm';
import FeedbackThankYouPage from './FeedbackThankYouPage';

const useStyles = makeStyles(() => ({
   mainContainer: {
      backgroundColor: 'cyan',
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
      width: 50,
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
   const rateFormElement = document.getElementById('rateForm');
   rateFormElement.setAttribute(
      'style', 'opacity: 100; width: 90%; height: 300; visibility: visible;',
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