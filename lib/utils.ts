import { DISCOUNT_1_MONTH, DISCOUNT_2_WEEKS } from './constants';
import { DeliveryPeriod } from './types';

export const roundPrice = (price: number) => Math.round(price * 100) / 100;

export const getPlanTotalPrice = (
  daylyPrice: number,
  period: DeliveryPeriod
): number => {
  let price = 0;
  switch (period) {
    case '1-week':
      price = daylyPrice * 7;
      break;
    case '2-weeks':
      price = (daylyPrice * 14 * (100 - DISCOUNT_2_WEEKS)) / 100;
      break;
    case '1-month':
      price = (daylyPrice * 30 * (100 - DISCOUNT_1_MONTH)) / 100;
      break;
  }
  return roundPrice(price);
};

export const getPlanWeeklyPrice = (
  daylyPrice: number,
  period: DeliveryPeriod
): number => {
  let price = 0;
  switch (period) {
    case '1-week':
      price = daylyPrice * 7;
      break;
    case '2-weeks':
      price = (daylyPrice * 7 * (100 - DISCOUNT_2_WEEKS)) / 100;
      break;
    case '1-month':
      price = (daylyPrice * 7 * (100 - DISCOUNT_1_MONTH)) / 100;
      break;
  }
  return roundPrice(price);
};

export const convertToSubcurrency = (amount: number, factor = 100) => {
  return Math.round(amount * factor);
};
