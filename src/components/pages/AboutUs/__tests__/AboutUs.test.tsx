import React from 'react';
import { mount} from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import AboutUs from "../AboutUs";

describe('AboutUs test', () => {
    // @ts-ignore
    const sut = (mockValue) => (
        mount(
            <BrowserRouter>
                <AuthContext.Provider value={mockValue}>
                    <AboutUs />
                </AuthContext.Provider>
            </BrowserRouter>
        ));

    it('should render title with name ', () => {
        const mockAuthContextValue = {
            user: 'Some user',
            setUser: jest.fn()
        };
        const wrapper = sut(mockAuthContextValue);
        expect(wrapper.find('strong').text()).toEqual('Some user');
    });

});
