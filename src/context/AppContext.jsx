import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  // Loaded users
  users: [],
  usersLoading: true,
  // Global errors
  errors: [],
};

// Actions
const actionTypes = {
  SET_USERS: "SET_USERS",
  SET_ERRORS: "SET_ERRORS",
  SET_USERS_LOADING: "SET_USERS_LOADING",
};

// Reducers
const storeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return { ...state, users: action.payload };
    case actionTypes.SET_ERRORS:
      return { ...state, errors: action.payload };
    case actionTypes.SET_USERS_LOADING:
      return { ...state, usersLoading: action.payload };
    default:
      return state;
  }
};

// Context
const AppContext = createContext();

// Context provider
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Action handlers
  const setUsers = (users) => {
    dispatch({ type: actionTypes.SET_USERS, payload: users });
  };

  const setErrors = (errors) => {
    dispatch({ type: actionTypes.SET_ERRORS, payload: errors });
  };

  const setUsersLoading = (usersLoading) => {
    dispatch({ type: actionTypes.SET_USERS_LOADING, payload: usersLoading });
  };

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        errors: state.errors,
        usersLoading: state.usersLoading,
        setUsers,
        setErrors,
        setUsersLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create custom hook for using the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
