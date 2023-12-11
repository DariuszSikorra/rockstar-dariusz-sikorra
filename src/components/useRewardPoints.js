import { useEffect, useState } from "react";
import fetchTransactionsData from "../api/transactions.services";
import { calculateMonthlyPoints } from "../helpers/rewardCalculator";

const useRewardPoints = () => {
  const [monthlyPoints, setMonthlyPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous API call to fetch data
    const fetchData = async () => {
      try {
        const data = await fetchTransactionsData();
        const monthlyPointsData = calculateMonthlyPoints(data);
        setMonthlyPoints(monthlyPointsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error loading data
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return {
    monthlyPoints,
    loading,
  };
};

export default useRewardPoints;
