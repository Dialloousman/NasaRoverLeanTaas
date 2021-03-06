import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  from '../../CamerasSolContainer';


Enzyme.configure({ adapter: new Adapter() });


describe('CameraSol Nav container', () => {
  it('should render', () => {
    const component = shallow(<CamerasSolContainer />);
    // const wrapper = component.find('.CameraInfoCard');
    const wrapper = component.find('[data-test="CameraInfoCardComponent"]');
    expect(wrapper.length).toBe(1);
  });
});
