const defaultState = {
  jobs: []
}
export const jobsReducer = (state = defaultState, action)=> {
    switch(action.type) {
      case 'GET_JOBS':
        return {...state, jobs: [action.payload]}
      default:
        return state
    }
}