import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { getQuestions, postResponse } from './Services'
import { TextField, Rating } from '@mui/material';
import DIMENSION from './config/dimension';

const useStyles = makeStyles(() => ({
    feedbackContainer: {
        transition: 'visibility 0s, width 1s, height 1s, opacity .5s',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 200,
        width: '95%',
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
        width: '95%',
        height: 400,
        marginTop: 30,
        marginLeft: 10,
        overflow: 'auto',
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

const FIELD_TYPE = {
    SHORT_ANSWER: 'short answer',
    EMAIL: 'email',
    LINEAR_SCALE: 'linear scale'
}

const fieldBaseOnType = (qns) => {
    const { type, placeHolder } = qns;
    switch (type) {
        case FIELD_TYPE.SHORT_ANSWER:
        case FIELD_TYPE.EMAIL:
        return (
            <Field name={`${qns.question}`}
                render={({ field }) => (
                    <TextField 
                        placeholder={placeHolder}
                        multiline={(type === FIELD_TYPE.SHORT_ANSWER ? true : false)}        
                        {...field} 
                    />
                )}
            />
        )
        case FIELD_TYPE.LINEAR_SCALE:
        return (
            <Field 
                render={({ field }) => (
                    <div {...field}>
                        <Rating name={`${qns.question}`}/>
                    </div>
                )}
            />
        )
        default:
            // Do nothing
    }
}

const FeedbackField = ({ qns }) => {
    const classes = useStyles();
    return (
        <div className={classes.formItem}>
            <label className={classes.formTitle}>{qns.question}</label>
            {fieldBaseOnType(qns)}
        </div>
    )
};

const processResponses = (responses) => {
    const keyRes = Object.keys(responses);
    const keyVal = Object.values(responses);

    const mapRes = keyRes.map((keyR, idx) => ({
        question: keyR,
        answer: keyVal[idx],
    }))

    postResponse(mapRes);
};

const submitForm = (values) => {
    const fbThankYouElement = document.getElementById('feedbackTY');
    fbThankYouElement.setAttribute('style', `height: 200px; width: ${DIMENSION.WIDTH}; visibility: visible;`);
    const facebackElement = document.getElementById('feedbackForm');
    facebackElement.setAttribute('style', 'visibility: hidden;');

    processResponses(values);

    setTimeout(() => {
        fbThankYouElement.setAttribute('style', 'visibility: hidden;');
    }, 2000);
};

const setInitialValues = (qns) => {
    const obj = {};
    qns.map((q) => {
        if (qns.type === 'linear scale'){
            obj[`${q.question}`] = 0;
        } else {
            obj[`${q.question}`] = '';
        }
    });
    return obj;
};

const generateQuestions = (qns) => qns.map((q) => <FeedbackField key={q._id} qns={q} />);

const FeedbackForm = () => {
    const classes = useStyles();
    const [qns, setQns] = useState([]);

    useEffect(() => {
        const init = async () => {
            // Fetch questions from DB
            const questions = await getQuestions();
            if (questions.length) {
                setQns(questions);
            }
        }

        init();
    }, []);

    return (
        <div id="feedbackForm" className={classes.feedbackContainer}>
            <div className={classes.cross}>
                <img width="20" height="20" src="assets/cross.png" onClick={() => closeForm()}/>
            </div>
            <div className={classes.feedbackTitle}>Tell us more</div>
            <div>
                <Formik
                    initialValues={setInitialValues(qns)}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        submitForm(values);
                        setSubmitting(false);
                    }}
                >
                {() => {
                    return (
                    <Form className={classes.form}>
                        {generateQuestions(qns)}
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
