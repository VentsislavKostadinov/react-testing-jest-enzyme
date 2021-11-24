import { shallow } from 'enzyme';
import {findByTestAttribute} from "../testUtils/testUtils";
import Input from "./Input";
import React from "react";

describe('state controlled input', () => {

    const setup = (secretWord='party') => {

        return shallow(<Input secretWord={secretWord}/>);
    }

    test('states updates with value of input box change', () => {

        const mockSetCurrentGuess = jest.fn();

        // empty string is currentGuess,
        // mockSetCurrentGuess is setCurrentGuess

        React.useState = jest.fn( () => ['', mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttribute(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
         inputBox.simulate('change', mockEvent);

         expect(mockSetCurrentGuess).toBeCalledWith('train');
         console.log('mockEvent: ', mockEvent)
    })
})