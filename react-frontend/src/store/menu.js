import axios from 'axios';

// Action Types
const SET_MENU = 'SET_MENU';

// Action Creators
export const setMenu = (menu) => {
  return {
    type: SET_MENU,
    menu
  };
};

// Thunks
export const fetchMenu = () => {
  return async dispatch => {
    const { data: menu } = await axios.get('http://localhost:8000/api/menu');
    dispatch(setMenu(menu));
  }
}

const menuReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MENU:
      return action.menu;
    default:
      return state;
  }
}

export default menuReducer;