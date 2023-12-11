import {  getMonthAndCustomerId, calculateRewardPoints, calculateMonthlyPoints } from './rewardCalculator';

describe('getMonthAndCustomerId', () => {
  it('should correctly extract month and customerId from a transaction', () => {
    const transaction = { date: '2023-01-15', customerId: 1 };
    const result = getMonthAndCustomerId(transaction);
    expect(result).toEqual({ month: 0, customerId: 1 });
  });
});

describe('calculateRewardPoints', () => {
  it('should correctly calculate reward points for an amount', () => {
    const result = calculateRewardPoints(120);
    expect(result).toEqual(90); // (2 * 20) + (1 * 50)
  });
  
  it('should handle amounts less than 50', () => {
    const result = calculateRewardPoints(30);
    expect(result).toEqual(0); // No points
  });
  
  it('should handle amounts between 50 and 100', () => {
    const result = calculateRewardPoints(75);
    expect(result).toEqual(25); // (1 * 25)
  });
  
  it('should handle amounts greater than 100', () => {
    const result = calculateRewardPoints(150);
    expect(result).toEqual(150); // (2 * 50) + 50
  });
});

describe('calculateMonthlyPoints', () => {
  it('should correctly calculate monthly points for an array of transactions', () => {
    const transactions = [
      { amount: 120, date: '2023-01-15', customerId: 1 },
      // ... other transactions
    ];
  
    const result = calculateMonthlyPoints(transactions);
    expect(result).toEqual({
      1: { 0: 90 } // Customer 1, Month 0, Total Points 90
      // ... other expected data
    });
  });
});