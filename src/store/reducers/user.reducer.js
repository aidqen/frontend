
export const SET_USER = 'SET_TOYS'

const initialState = {
    user: null
}

export function userReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_USER:
      return { ...state, toys: cmd.user }
    default:
      return state
  }
}
