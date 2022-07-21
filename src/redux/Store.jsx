import {legacy_createStore} from 'redux';
import {reducer} from './Reducers';

function saveToLocalStorage(state) {
      localStorage.setItem("persistantState",JSON.stringify(state));
  }

//   function loadFromLocalStorage() {
//     try {
//       const serialisedState = localStorage.getItem("persistantState");
//       if (serialisedState === null) return undefined;
//       return JSON.parse(serialisedState);
//     } catch (e) {
//       console.warn(e);
//       return undefined;
//     }
//   }
  const loadFromLocalStorage = () => {
    if (localStorage.getItem('persistantState') !== null) {
        return JSON.parse(localStorage.getItem('persistantState'))
    }
}

// export let store = createStore(reducer,loadFromLocalStorage());
// store.subscribe(() => saveToLocalStorage(store.getState()));
// export default store;


// export const store = createStore(reducer,loadFromLocalStorage());
// store.subscribe(() => saveToLocalStorage(store.getState()));

export const store = legacy_createStore(reducer,loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));
