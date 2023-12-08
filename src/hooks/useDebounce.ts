import { useEffect } from 'react';

export const useDebounce = (inputValue: string, handleSubmitForm: () => void) => {
  useEffect(() => {
    const timerId = setTimeout(handleSubmitForm, 700);
    return () => clearTimeout(timerId);
  }, [inputValue]);
};
