import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';

const useStyles = makeStyles(() => ({
    feedbackContainer: {
        transition: 'visibility 0s, width .3s, opacity .5s',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 500,
        width: '90%',
        marginLeft: 10,
        marginBottom: 10,
        opacity: 0,
        visibility: 'hidden',
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
   feedbackTitle: {
        backgroundColor: '#2b2b2a',
        width: '100%',
        height: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginTop: 30,
        marginLeft: 10,
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    formItem: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 100,
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    },
    formButton: {
        width: 100,
        height: 30,
        backgroundColor: '#585b5e',
        color: 'white',
    },
 }));

const closeForm = () => {
    const rateFormElement = document.getElementById('feedbackForm');
    rateFormElement.setAttribute('style', 'visibility: hidden;');
};

const FeedbackField = ({
    label, placeholder
}) => {
    const classes = useStyles();
    return (
        <div className={classes.formItem}>
            <label className={classes.formTitle}>{label}</label>
            <textarea 
                placeholder={placeholder}
            />
        </div>
    )
};

const submitForm = () => {
    const fbThankYouElement = document.getElementById('feedbackTY');
    fbThankYouElement.setAttribute('style', 'visibility: visible;');
    const facebackElement = document.getElementById('feedbackForm');
    facebackElement.setAttribute('style', 'visibility: hidden;');

    setTimeout(() => {
        fbThankYouElement.setAttribute('style', 'visibility: hidden;');
    }, 2000);
};

const FeedbackForm = () => {
    const classes = useStyles();
    return (
        <div id="feedbackForm" className={classes.feedbackContainer}>
            <div className={classes.cross}>
                <img width="20" height="20" src="assets/cross.png" onClick={() => closeForm()}/>
            </div>
            <div className={classes.feedbackTitle}>Tell us more</div>
            <div>
                <Formik
                    initialValues={{ 
                        most: '',
                        least: '',
                        email: '',
                     }}
                    onSubmit={() => submitForm()}
                >
                {(props) => {
                    return (
                    <Form className={classes.form}>
                        <FeedbackField 
                            name="most"
                            label="What did you like most?"
                            placeholder="Tell us your experience (optional)"
                        />
                         <FeedbackField 
                            name="least"
                            label="What did you like least?"
                            placeholder="Let us know how we can improve (optional)"
                        />
                         <FeedbackField 
                            name="email"
                            label="Your email?"
                            placeholder="Your email address (optional)"
                        />
                        <div className={classes.buttonDiv}>
                            <button className={classes.formButton} type="submit">SUBMIT</button>
                        </div>
                    </Form>
                    );
                }}
                </Formik>
            </div>
        </div>
    )
};

export default FeedbackForm;
