import React from 'react';
import PropTypes from 'prop-types';


export default function Input({ secretWord }) {

    const [currentGuess, setCurrentGuess] = React.useState('');

    const getInputValue = (e) => {

        setCurrentGuess(e.target.value);
    }

    const onSubmitPreventDefault = (e) => {

        e.preventDefault();
    }

    return (
        <div data-test='component-input'>
            <form className='form-inline' onSubmit={onSubmitPreventDefault}>
                <input
                data-test='input-box'
                className='mb-2 mx-sm-3'
                type='text'
                placeholder='enter guess'
                value={currentGuess}
                onChange={getInputValue}
                />
                <button
                    data-test='submit-form'
                    className='btn btn-primary mb-2' >Submit</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}