import React, {useState} from 'react';
import './cilckCounter.css'

export default function ClickIncrementButton() {

    const[count, setCounter] = useState(0);


    const [error, setError] = useState(false);

    const incrementCounter = () => {


        // default condition error message is not displayed
       if (error) {
            // display: block
           setError(false);
       } else {
            setCounter(count + 1);
        }
    }

    const decrementCounter = () => {
        if(count > 0) {
            setCounter(count - 1)
        } else {
            //  class hidden - display: none
            setError(true);
        }
    }

    return (

        <div data-test='component-app' id='componentApp'>
            <h1 data-test='counter-display'>The Counter is currently</h1>
            <button data-test='increment-button' onClick={incrementCounter}>Increment</button><br/>
            <button data-test='decrement-button' onClick={decrementCounter}>Decrement</button>

            <div data-test='count' style={{fontWeight: 'bold'}}>{count}</div>

            {/* initial will be 'hidden' because error is false */}
            <div data-test="error-message"  className={`error ${error ? 'not-hidden' : 'hidden'}`}>The counter cannot go below 0
            </div>
        </div>
    )

}