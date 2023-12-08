import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@/constants/theme/themes';
import { store } from '@/store';

import SearchTwitter from '.';

describe('Renders Search Twitter', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  const searchData = jest.fn();
  const placeholder = 'User search';
  const errorText = 'There are no such users';

  it('Should test Search Twitter rendering', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <SearchTwitter
              searchData={searchData}
              placeholder={placeholder}
              errorText={errorText}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const mainTitle = getByText('You might like');
    expect(mainTitle).toBeInTheDocument();
    const showMore = getByText('Show more');
    expect(showMore).toBeInTheDocument();
    const searchDataInput = getByTestId('searchDataInput');
    expect(searchDataInput).toBeInTheDocument();

    fireEvent.change(searchDataInput, { target: { value: 'Test text' } });
    setTimeout(() => {
      expect(searchData).toHaveBeenCalledWith('Test text');
    }, 700);
    jest.runAllTimers();
  });
});
