import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@/constants/theme/themes';
import * as tweetHelpers from '@/helpers';
import { store } from '@/store';

import CreateTweet from '.';

describe('Renders Create Tweet form', () => {
  it('Should check form elements', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <CreateTweet />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const tweetButton = getByText('Tweet');
    expect(tweetButton).toBeInTheDocument();

    const textarea = getByPlaceholderText('Write a new tweet...');
    expect(textarea).toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: 'Test tweet text' } });
    expect(textarea).toHaveValue('Test tweet text');
  });

  it('Should test create Tweet form functionality', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <CreateTweet />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const createNewTweetHelper = jest.spyOn(tweetHelpers, 'createNewTweetHelper');

    const textarea = getByPlaceholderText('Write a new tweet...');
    fireEvent.change(textarea, { target: { value: 'Test tweet text' } });

    fireEvent.click(getByText('Tweet'));

    expect(createNewTweetHelper).toHaveBeenCalledWith({
      tweetText: 'Test tweet text',
      userId: undefined,
      userPhoto: '',
      userName: undefined,
      userEmail: undefined,
      image: undefined
    });
  });
});
