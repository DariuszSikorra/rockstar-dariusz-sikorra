export const getMonthAndCustomerId = (transaction) => {
  const date = new Date(transaction.date);
  const month = date.getMonth();
  const customerId = transaction.customerId;
  return { month, customerId };
};

export const calculateMonthlyPoints = (data) => {
  const monthlyPointsData = {};

  for (const transaction of data) {
    const { month, customerId } = getMonthAndCustomerId(transaction);
    const totalPoints = calculateRewardPoints(transaction.amount);

    if (!monthlyPointsData[customerId]) {
      monthlyPointsData[customerId] = {};
    }

    if (!monthlyPointsData[customerId][month]) {
      monthlyPointsData[customerId][month] = 0;
    }

    monthlyPointsData[customerId][month] += totalPoints;
  }

  return monthlyPointsData;
};

export const calculateRewardPoints = (amount) => {
  const pointsOver100 = Math.max(0, amount - 100) * 2;
  const pointsBetween50And100 = Math.min(50, Math.max(0, amount - 50));

  return pointsOver100 + pointsBetween50And100;
};

