import { IOption } from '@/pages/SignUp/types';

const firstDayIndex = 0;

export const allMonthsNames: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const getYearsOptionsArray = (): IOption[] => {
  const startYear = new Date().getFullYear() - 100;
  const lastYear = new Date().getFullYear();
  const optionsArray = [];

  for (let year = startYear; year <= lastYear; year += 1) {
    optionsArray.push({ value: String(year), label: String(year) });
  }
  return optionsArray.reverse();
};

export const getMonthOptionsArray = (): IOption[] => {
  const optionsArray = [];

  for (let monthIndex = 0; monthIndex <= 11; monthIndex += 1) {
    optionsArray.push({ value: String(monthIndex), label: allMonthsNames[monthIndex - 1] });
  }
  return optionsArray;
};

export const getDaysOptionsArray = (month: number, year: number): IOption[] => {
  const numberOfDaysInMonth = new Date(year, month, firstDayIndex).getDate();
  const optionsArray = [];

  for (let dayIndex = 1; dayIndex <= numberOfDaysInMonth; dayIndex += 1) {
    optionsArray.push({ value: String(dayIndex), label: String(dayIndex) });
  }
  return optionsArray;
};
