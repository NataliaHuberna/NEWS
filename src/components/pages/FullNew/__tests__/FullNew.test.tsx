import React from 'react';
import { mount} from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import FullNew from "../FullNew";
import {NewsContext} from "../../../context/NewsContext";

describe('FullNew test', () => {
    // @ts-ignore
    const sut = (mockValue) => (
        mount(
            <BrowserRouter>
                <NewsContext.Provider value={mockValue}>
                    <FullNew />
                </NewsContext.Provider>
            </BrowserRouter>
        ));

    const mockSingleNew = {
        author: 'author',
        content: 'content',
        description: 'description',
        publishedAt: 'publishedAt',
        source: {
            id: '25',
            name: 'some string'
        },
        title: 'title',
        url: 'url',
        urlToImage: 'urlToImage',
    };

    it('should render FullNew if user is logged in', () => {
        const mockNewsContextValue = {
            singleNew: mockSingleNew,
            setSingleNew: jest.fn(),
        };
        const wrapper = sut(mockNewsContextValue);
        expect(wrapper.find('p').at(0).text()).toEqual('author');
    });
});
