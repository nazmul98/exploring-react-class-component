import React from "react";
import {createStore} from 'redux';

// Simple Reducer
const reducer = (state={}, action) => {

    if (action.type === "A") {
        return {
            A: "I am Type A"
        }
    }
    if (action.type === "B") {
        return {
            ...state,
            B: "I am Type B"
        }
    }
    if (action.type === "C") {
        return {
            ...state,
            C: "I am Type of C"
        }
    }

    return state;
}

// Create Store with Reducer
const store = createStore(reducer)

// Subscribe the component to access the stored data
store.subscribe(() => console.log(store.getState()));

// It will fired when a event occured
store.dispatch({ type : "A" });
store.dispatch({ type : "B" });
store.dispatch({ type : "C" });

class ReduxConcept extends React.Component {
    render() {
        return (
            <div className="Container">
                <h2>Practicing Redux</h2>
            </div>
        );
    }
}

export default ReduxConcept;

/*
    Simple Redux Concept.... 
    1. Create a Reducer
    2. Create a Store with the Reducer
    3. Subscribe the Component to access the stored Data
    4. Dispatch will be fired when a event occured
*/