import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage.js';

test('should render the Dashboard page', () => {
  const wrapper = shallow(<DashboardPage/>);
  expect(wrapper).toMatchSnapshot();
});
