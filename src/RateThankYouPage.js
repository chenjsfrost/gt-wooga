import React from "react";
import { makeStyles } from '@material-ui/core';
import DIMENSION from "./config/dimension";

const useStyles = makeStyles(() => ({
    container: {
         transition: 'visibility 0s',
         position: 'fixed',
         bottom: 0,
         margin: 10,
         backgroundColor: 'white',
         width: DIMENSION.WIDTH,
         height: 200,
         alignItems: 'center',
         display: 'flex',
         border: '1px solid white',
         borderRadius: 10,
         justifyContent: 'center',
         visibility: 'hidden',
    },
    thankyou: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
 }));

 const RateThankYouPage = () => {
    const classes = useStyles();
    return (
        <div id="rateTY" className={classes.container}>
            <img id="smiley" className={classes.image} src='assets/smiley.png' />
            <div className={classes.thankyou}>Thank you! Tell us more.</div>
        </div>
    )
 };

 export default RateThankYouPage;
