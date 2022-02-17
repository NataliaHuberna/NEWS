import React from 'react';
import {shallow} from 'enzyme';
import NavBar from "../NavBar";

describe('Footer test', () => {
    it('should render correctly', () => {
        const component = shallow(<NavBar />);
        expect(component).toMatchSnapshot();
    });
    // it('should render one div', () => {
    //     const component = mount(<NavBar/>);
    //     expect(component.find('strong')).toHaveLength(1);
    // });
});
