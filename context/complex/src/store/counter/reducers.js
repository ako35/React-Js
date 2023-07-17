import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from './actions';

export const counterReducer = (state, action) => {
    if (action.type === COUNTER_INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1,
        };
    } else if (action.type === COUNTER_DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1,
        };
    } else if (action.type === COUNTER_RESET) {
        return {
            ...state,
            counter: 0,
        };
    } else {
        return state;
    }
}

// const counterReducer = (state, action) => {
//     switch (action.type) {
//         case 'COUNTER_INCREMENT':
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             };
//         case 'COUNTER_DECREMENT':
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             };
//         case 'COUNTER_RESET':
//             return {
//                 ...state,
//                 counter: 0,
//             };
//         default:
//             return state;
//     }
// }
