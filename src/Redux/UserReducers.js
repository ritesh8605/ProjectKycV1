const initialState = {
    token: '',
    type: '',
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    userType: ''
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  