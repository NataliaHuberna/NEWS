import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter} from 'react-router-dom';
import AllNews from "../AllNews";
import newsData from './__news-mock__';
import { act } from "react-dom/test-utils";
import axios from "axios";
import {NewsContext} from "../../../context/NewsContext";

const data = newsData;
jest.mock("axios");

describe('Page AllNews should pass all tests', () => {
    const mockNewsContextValue = {
        news: newsData,
        setNews: jest.fn()
    };

    const sut = (mockValue: any) => (
        mount(
            <BrowserRouter>
                <NewsContext.Provider value={mockValue}>
                    <AllNews />
                </NewsContext.Provider>
            </BrowserRouter>
        ));

    it('should match....', async () => {
        let wrapper;
        await act(async () => {
            // @ts-ignore
            await axios.get.mockImplementationOnce(() => Promise.resolve(data));
            wrapper = sut(mockNewsContextValue);
        });
        // @ts-ignore
        wrapper.update();
        // @ts-ignore
        console.log(wrapper.debug());
        await expect(axios.get).toHaveBeenCalledTimes(1);
    });
});
