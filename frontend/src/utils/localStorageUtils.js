// localStorageUtils.js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined; // No state in localStorage
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error loading state from localStorage:', err);
        return undefined;
    }
};


export const saveState = (state) => {
    try {
        // Persist only specific parts of the state
        const stateToPersist = {
            cart: state.cartReducer.cartItems, // For example, persist only the cart
            // user: state.user, // And maybe the user data
        };
        const serializedState = JSON.stringify(stateToPersist);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage:', err);
    }
};