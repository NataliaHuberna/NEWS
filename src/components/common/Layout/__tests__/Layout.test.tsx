import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter} from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Layout from '../Layout';

describe('Layout', () => {
    const mockAuthContextValue = {
        user: 'Some user',
        setUser: jest.fn()
    };

    const sut = (mockValue: any) => (
        mount(
            <BrowserRouter>
                <AuthContext.Provider value={mockValue}>
                    <Layout />
                </AuthContext.Provider>
            </BrowserRouter>
        ));
    it('should render Header Outlet and Footer', () => {
        const wrapper = sut(mockAuthContextValue);

        expect(wrapper.find('Header').exists()).toBe(true);
        expect(wrapper.find('Outlet').exists()).toBe(true);
        expect(wrapper.find('Footer').exists()).toBe(true);
    });

    it('should match....', () => {
        const wrapper = sut(mockAuthContextValue);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
