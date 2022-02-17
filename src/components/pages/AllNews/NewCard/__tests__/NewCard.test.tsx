import React from 'react';
import {mount} from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import NewCard from "../NewCard";
import {NewsContext} from "../../../../context/NewsContext";

type TProps = {
    description: string,
    publishedAt: string,
    title: string,
    urlToImage: string | null
};

type TMockNewsContext = {
    setSingleNew: jest.Mock<any, any>
};

describe('NewCard test', () => {
    const props: TProps = {
        description: 'description',
        publishedAt: 'publishedAt',
        title: 'title',
        urlToImage: 'https://media.cnn.com/api/v1/images/stellar/prod/220216011420-01-missing-girl-found.jpg?c=16x9&q=w_800,c_fill',
    };

    const mockNewsContext: TMockNewsContext = {
        setSingleNew: jest.fn()
    };
    // @ts-ignore
    const sut = (mockValue: TProps, singleNew = props) => (
        mount(
            <BrowserRouter>
                <NewsContext.Provider value={mockValue}>
                    <NewCard singleNew={singleNew}/>
                </NewsContext.Provider>
            </BrowserRouter>
        ));

    it('should render correctly', () => {
        // @ts-ignore
        const wrapper = sut(mockNewsContext);
        expect(wrapper).toMatchSnapshot();
    });

    it('should setSingleNew(publishedAt)', () => {
        // @ts-ignore
        const wrapper = sut(mockNewsContext);
        // @ts-ignore
        wrapper.find('button').props().onClick();
        expect(mockNewsContext.setSingleNew).toHaveBeenCalled();
    });

    it('should render image ', () => {
        // @ts-ignore
        const wrapper = sut(mockNewsContext, {...props, urlToImage: null});
        console.log(wrapper.debug());
        expect(wrapper.find('div div').at(0).text()).toEqual('Sorry this post dont have image');
    });
});
