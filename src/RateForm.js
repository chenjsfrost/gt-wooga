import React from "react";
import { makeStyles } from '@material-ui/core';
import { postRate } from './Services';

const useStyles = makeStyles(() => ({
   formContainer: {
        transition: 'visibility 0s, width 1s, height 1s, opacity .5s, background-color 1s, border-radius 1s',
        position: 'fixed',
        bottom: 0,
        margin: 10,
        backgroundColor: 'black',
        opacity: 0,
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 60,
        height: 110,
        width: 180,
        visibility: 'hidden',
        display: 'flex',
   },
   cross: {
        position: 'absolute',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 50,
        right: 10,
   },
   rateTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        opacity: 0,
        transition: 'transform .5s, opacity 3s',
   },
   rateContainer: {
        width: '30%',
        opacity: 0,
        transition: 'transform 1s, opacity 2s',
   },
   rateTable: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
   },
   rateNumber: {
        cursor: 'pointer',
        width: 30,
        height: 20,
        padding: 20,
        borderLeft: '2px solid black',
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#8e8e8d',
        }
   },
   verySatNotSat: {
        width: '100%',
        display: 'flex',
        marginTop: 10,
   },
   verySatisfied: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
   },
   notSatisfied: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
   },
}));


const closeForm = () => {
    const rateFormElement = document.getElementById('rateForm');
    rateFormElement.setAttribute('style', 'visibility: hidden');
};

const submitRating = (rate) => {
    closeForm(); // Close rating table
    const rateThankYouElement = document.getElementById('rateTY');
    rateThankYouElement.setAttribute('style', 'visibility: visible;');

    postRate(rate);

    setTimeout(() => {
        const feedbackElement = document.getElementById('feedbackForm');
        feedbackElement.setAttribute('style', 'width: 30%; opacity: 100; height: 500px; visibility: visible;');
        rateThankYouElement.setAttribute('style', 'visibility: hidden;');
    }, 2000);
};

const condStyle = (idx, rating) => {
    if (idx === 0) {
        return {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        }
    }
    if (idx === rating.length - 1) {
        return {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderRight: '2px solid black',
        }
    }
};

const RateForm = () => {
    const classes = useStyles();
    const rating = [1, 2, 3, 4, 5, 6];
    return (
        <div id="rateForm" className={classes.formContainer}>
            <div className={classes.cross}>
                <img width="20" height="20" src="assets/cross.png" onClick={() => closeForm()}/>
            </div>
            <div id="rateTitle" className={classes.rateTitle}>Rate your experience</div>
            <div id="rateContainer" className={classes.rateContainer}>
                <div className={classes.rateTable}>
                    {
                        rating.map((r, idx) => (
                            <div 
                                key={r} 
                                className={classes.rateNumber}
                                style={condStyle(idx, rating)}
                                onClick={() => submitRating(r)}
                            >
                                {r}
                            </div>
                        ))
                    }
                </div>
                <div className={classes.verySatNotSat}>
                    <div className={classes.notSatisfied}>NOT SATISFIED</div>
                    <div className={classes.verySatisfied}>VERY SATISFIED</div>
                </div>
            </div>
        </div>
    )
};

export default RateForm;
