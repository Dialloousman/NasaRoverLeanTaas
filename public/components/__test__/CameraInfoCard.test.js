import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CameraInfoCard from '../CameraInfoCard.jsx';


Enzyme.configure({ adapter: new Adapter() });

// describe('Booleans', () => {
//   it('Foo booleans', () => {
//     const foo = true;
//     expect(foo).toBe(true);
//   });

//   it('bar booleans', () => {
//     const bar = true;
//     expect(bar).toBe(true);
//   });
// });


describe('Card component', () => {
  it('should render', () => {
    const component = shallow(<CameraInfoCard />);
    // const wrapper = component.find('.CameraInfoCard');
    const wrapper = component.find('[data-test="CameraInfoCardComponent"]');
    expect(wrapper.length).toBe(1);
  });
});
