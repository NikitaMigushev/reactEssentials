const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        console.log('increment runs')
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        console.log('decrement runs')
        return {
            counter: state.counter - 1
        }
    }

};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
