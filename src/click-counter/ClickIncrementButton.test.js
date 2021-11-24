import {shallow} from 'enzyme';
import ClickIncrementButton from "./ClickIncrementButton";
import { findByTestAttribute } from '../testUtils/testUtils';

const setup = () => shallow(<ClickIncrementButton/>);


describe.skip('Verify elements exist', () => {

    test('renders learn react link', () => {
        const wrapper = setup();

        const appComponent = findByTestAttribute(wrapper, 'component-app')
        // const appComponent = wrapper.find('#componentApp');
        //  console.log('id selector works')

        expect(appComponent.length).toBe(1)

    });

    test('render counter display', () => {
        const wrapper = setup();
        const counterDisplay = findByTestAttribute(wrapper, 'counter-display')
        expect(counterDisplay.length).toBe(1)

    });

    test('render increment button', () => {
        const wrapper = setup();
        const appButton = findByTestAttribute(wrapper, 'increment-button');
        expect(appButton.length).toBe(1)

    });

})

describe.skip('Increment counter', () => {

    test('counter starts with 0', () => {
        const wrapper = setup();
        let count = findByTestAttribute(wrapper, 'count').text();
        count = Number(count);
        expect(count).toBe(0)

    });

    test('clicking on button increments counter display', () => {
        const wrapper = setup();

        // find the button
        const incrementButton = findByTestAttribute(wrapper, 'increment-button');

        // click the button
        incrementButton.simulate('click');

        // find the display and increment
        let count = findByTestAttribute(wrapper, 'count').text();
        count = Number(count);
        expect(count).toBe(1);

        // find the button
        let decrementButton = findByTestAttribute(wrapper, 'decrement-button');

        // click the button
        decrementButton.simulate('click');
        count = findByTestAttribute(wrapper, 'count').text();
        // find the display and increment
        console.log('count: ', count)
        count = Number(count);
        expect(count).toBe(0)

        // below 0
        decrementButton = findByTestAttribute(wrapper, 'decrement-button');
        decrementButton.simulate('click');
        count = findByTestAttribute(wrapper, 'count').text();

        console.log('count: ', count)
        //count = Number(count);
        //expect(count).toBe(-1)

    })


})



describe.skip('error when counter goes below 0', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })


    test('error does not shown when not needed', () => {

        //const wrapper = setup();
        const errorDiv = findByTestAttribute(wrapper, "error-message");

        const errorHasHiddenClass = errorDiv.hasClass("hidden");
        expect(errorHasHiddenClass).toBe(true);

    })

    test('counter is 0 and decrement button is clicked', () => {
        //const wrapper = setup();

        const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
        decrementButton.simulate('click');


        const errorDiv = findByTestAttribute(wrapper, "error-message");
        console.log('errorDiv.textContent ',  errorDiv.text());
        expect(errorDiv.text()).toBe('The counter cannot go below 0')

        const errorHasHiddenClass = errorDiv.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(false);
    })

})



