import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { jobsReducer } from './jobs';

const rootReducer = combineReducers( {
    jobs: jobsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))