// a reducer taskes in two things

// 1. the action (info about what happened)
// 2. copy of current store

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
    const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 10},
        ...state.slice(i + 1), // after the one we are updating

      ]
      break;
    default:
      return state;
  }
}

export default posts;
