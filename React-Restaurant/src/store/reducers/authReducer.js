const initialState = {
  // 登录界面
  isAuthenticated: false,
  loading: false,
  user: null,
  errorMessage: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        errorMessage: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        errorMessage: payload,
        loading: false,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
