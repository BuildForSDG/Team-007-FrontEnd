const initialState = {
  isAuthenticated: false,
  data: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        isAuthenticated: true
      };
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload
      };

    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false,
        data: {}
      };

    default:
      return state;
  }
}
