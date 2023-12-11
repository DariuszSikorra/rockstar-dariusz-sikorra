import useUsers from "../hooks/useUsers";
import LoadingSpinner from "./LoadingSpinner";
import useRewardPoints from "./useRewardPoints";

const RewardPoints = () => {
  // External custom hook, just for demonstration
  const { monthlyPoints, loading: rewardsLoading } = useRewardPoints();
  const { findUserName, loading: usersLoading } = useUsers();

  if (rewardsLoading || usersLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2>Reward Points</h2>
      {Object.keys(monthlyPoints).map((customerId) => (
        <div key={customerId}>
          <h3>{findUserName(customerId)}&nbsp;points:</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Total Points</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(monthlyPoints[customerId]).map((month) => (
                <tr key={month}>
                  <td>{Number(month) + 1}</td>
                  <td>{monthlyPoints[customerId][month]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default RewardPoints;
