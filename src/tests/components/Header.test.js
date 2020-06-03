// react-test-renderer - simply utility for rendering; allows us to render our components inside regular JS code and we can assert what got rendered
// shallow rendering (only renders given component) vs full dom rendering (renders child components too)

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'; // able to get correct JSON snapshots to show up
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
});
