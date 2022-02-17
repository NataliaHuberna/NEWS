import React from 'react';
import { mount} from 'enzyme';
import Header from "../Header";
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

describe('Header test', () => {
    // @ts-ignore
    const sut = (mockValue) => (
        mount(
            <BrowserRouter>
                <AuthContext.Provider value={mockValue}>
                    <Header />
                </AuthContext.Provider>
            </BrowserRouter>
        ));

    it('should render NavBar if user is logged in', () => {
        const mockAuthContextValue = {
            user: 'Some user',
            setUser: jest.fn()
        };
        const wrapper = sut(mockAuthContextValue);

        expect(wrapper.find('NavBar').exists()).toBe(true);
    });

    it('should render greeting instead of NavBar if user is not logged', () => {
        const mockAuthContextValue = {
            user: '',
            setUser: jest.fn()
        };
        const wrapper = sut(mockAuthContextValue);

        expect(wrapper.find('NavBar').exists()).toBe(false);
        expect(wrapper.find('h1').exists()).toBe(true);
    });
});
