import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';


Enzyme.configure({ adapter: new Adapter() });

describe('The Application', () => {
  it('should render atleast one photo card', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.CameraInfoCard');
    // const wrapper = component.find('[data-test="CameraInfoCardComponent"]');
    expect(wrapper.length).toBe(1);
  });
});
