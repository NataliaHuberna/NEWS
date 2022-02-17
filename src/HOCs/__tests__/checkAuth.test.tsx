import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../components/context/AuthContext';
import withAuth from '../checkAuth';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router') as any,
    Navigate: () => <div>I'm Navigate</div>,
}));

describe('withAuth', () => {
    const TestComponent = () => <div>Hello world!</div>;
    const TestComponentWithAuth = withAuth(TestComponent);

    const sut = (mockValue: any ) => (
        mount(
            <BrowserRouter>
                <AuthContext.Provider value={mockValue}>
                    <TestComponentWithAuth />
                </AuthContext.Provider>
            </BrowserRouter>
        ));
    it('should render component if user is logged in', () => {
        const mockAuthContextValue = {
            user: 'Some user',
            setUser: jest.fn()
        };
        const wrapper = sut(mockAuthContextValue);
        expect(wrapper.find('TestComponent').exists()).toBe(true);
    });

    it('should render Navigate if user is logged in', () => {
        const mockAuthContextValue: any = {
            user: null,
            setUser: jest.fn()
        };
        const wrapper = sut(mockAuthContextValue);
        expect(wrapper.find('Navigate').exists()).toBe(true);
    });
});
