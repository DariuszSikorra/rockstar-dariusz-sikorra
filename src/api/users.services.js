const fetchUsersData = () => {
  // Simulate an API call by returning a Promise
  return new Promise((resolve) => {
    // Simulate some delay to mimic an asynchronous API call
    setTimeout(() => {
      fetch("/users.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((users) => resolve(users))
        .catch((error) => {
          console.error("Error fetching transactions:", error);
          resolve([]);
        });
    }, 1000); // 1 second delay
  });
};

export default fetchUsersData;
