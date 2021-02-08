const loginReducer = (
  state = {
    username: '',
    password: '',
    // niza: []
  },
  action
) => {
  switch (action.type) {
    case 'SAVE_LOGIN_INFO': {
      const { username, password } = action.payload
      // const novaNiza = [...state.niza, 'asd']
      // const newObject = {...state.object, property: 'asd' }
      return {
        ...state,
        username,
        password,
        // niza: novaNiza
      }
    }
    default: {
      return state
    }
  }
}

const saveLoginInfo = (username, password) => {
  return {
    type: 'SAVE_LOGIN_INFO',
    payload: { username, password }
  }
}

export {
  saveLoginInfo,
  loginReducer
}