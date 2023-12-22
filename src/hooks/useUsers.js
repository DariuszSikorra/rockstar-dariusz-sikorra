import { useEffect } from "react";
import fetchUsersData from "api/users.services";
import { useAppContext } from "context/AppContext";

const useUsers = () => {
  const { users, errors, usersLoading, setUsers, setErrors, setUsersLoading } =
    useAppContext();

  useEffect(() => {
    // Simulate an asynchronous API call to fetch data
    const fetchData = async () => {
      try {
        const data = await fetchUsersData();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Add errors to global handler
        setErrors({ ...errors }, "Error fetching Users data, try later");
      } finally {
        setUsersLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  const findUserName = (userId) => {
    const foundUser = users.find((user) => userId === user.id);

    // Check if a user was found
    if (foundUser) {
      return foundUser.name; // Return the user's name
    } else {
      return null;
    }
  };

  return { usersLoading, findUserName };
};

export default useUsers;
