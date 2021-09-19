import React from "react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
         transition: 'visibility 0s, height .5s, width .5s',
         position: 'fixed',
         bottom: 0,
         margin: 10,
         backgroundColor: 'white',
         width: '30%',
         height: 500,
         alignItems: 'center',
         display: 'flex',
         flexDirection: 'column',
         border: '1px solid white',
         borderRadius: 10,
         justifyContent: 'center',
         visibility: 'hidden',
    },
    thankyou: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    subText: {
        marginTop: 50,
        fontSize: 25,
    },
 }));

 const FeedbackThankYouPage = () => {
    const classes = useStyles();
    return (
        <div id="feedbackTY" className={classes.container}>
            <div className={classes.thankyou}>Thank you!</div>
            <div className={classes.subText}>Your feedback is valuable to us.</div>
        </div>
    )
 };

 export default FeedbackThankYouPage;
