import React from "react";
import { makeStyles } from '@material-ui/core';
import { postRate } from './Services';

const useStyles = makeStyles(() => ({
   formContainer: {
        transition: 'visibility 0s, width .8s, height .8s, opacity .5s',
        position: 'fixed',
        bottom: 0,
        margin: 10,
        backgroundColor: 'white',
        opacity: 0,
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: 30,
        height: 200,
        width: 50,
        visibility: 'hidden',
        display: 'flex',
   },
   cross: {
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 50,
        marginRight: 20,
   },
   rateTitle: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
   },
   rateContainer: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
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
        border: '3px solid black',
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
        feedbackElement.setAttribute('style', 'width: 30%; opacity: 100; visibility: visible;');
        rateThankYouElement.setAttribute('style', 'visibility: hidden;');
    }, 2000);
};

const RateForm = () => {
    const classes = useStyles();
    const rating = [1, 2, 3, 4, 5, 6];
    return (
        <div id="rateForm" className={classes.formContainer}>
            <div className={classes.cross}>
                <img width="30" height="30" src="assets/cross.png" onClick={() => closeForm()}/>
            </div>
            <div className={classes.rateTitle}>Rate your experience</div>
            <div className={classes.rateContainer}>
                <div className={classes.rateTable}>
                    {
                        rating.map((r) => (
                            <div 
                                key={r} 
                                className={classes.rateNumber}
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
