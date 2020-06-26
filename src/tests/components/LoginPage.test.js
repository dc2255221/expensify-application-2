import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should correctly render Login Page', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});