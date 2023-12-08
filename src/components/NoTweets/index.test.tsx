import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import NoTweets from '@/components/NoTweets';
import { lightTheme } from '@/constants/theme/themes';

describe('Renders No tweets component', () => {
  it('Should check for the presence of basic blocks', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <NoTweets />
      </ThemeProvider>
    );
    const headerTitle = getByText('No more tweets yet');
    expect(headerTitle).toBeTruthy();
  });
});
