import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@/constants/theme/themes';
import { store } from '@/store';

import EditProfileModal from '.';

describe('Renders Edit Profile Form', () => {
  const handleCloseModal = jest.fn();

  it('Should test profile data editing', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <EditProfileModal handleCloseModal={handleCloseModal} />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const title = getByText('Edit profile');
    expect(title).toBeInTheDocument();

    const saveProfileChanges = getByText('Save changes');
    expect(saveProfileChanges).toBeInTheDocument();

    const nameInput = getByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
    const phoneNnumberInput = getByPlaceholderText('Phone number');
    expect(phoneNnumberInput).toBeInTheDocument();
    const telegramInput = getByPlaceholderText('Telegram URL');
    expect(telegramInput).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'Peter' } });
    expect(nameInput).toHaveValue('Peter');
    fireEvent.change(phoneNnumberInput, { target: { value: '+375292058987' } });
    expect(phoneNnumberInput).toHaveValue('+375292058987');
    fireEvent.change(telegramInput, { target: { value: 'https://t.me/Peter_jkm' } });
    expect(telegramInput).toHaveValue('https://t.me/Peter_jkm');
  });
});
