import React from 'react';
import {shallow, mount} from 'enzyme';
import Footer from "../Footer";

describe('Footer test', () => {
    it('should render correctly', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
    it('should render one div', () => {
        const component = mount(<Footer/>);
        expect(component.find('strong')).toHaveLength(1);
    });
});
