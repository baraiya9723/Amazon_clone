// localStorageUtils.js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined; // No saved state
        }
        const persistedState = JSON.parse(serializedState);
        return {
            cartReducer: {
                cartItems: persistedState.cart || [], // Map "cart" to "cartReducer"
            },
            userReducer: {
                user: persistedState.user || null, // Map "user" to "userReducer"
            },
            // Add defaults for other reducers if necessary
            productReducer: {}, // Default empty state for productReducer
            counterReducer: {}, // Default empty state for counterReducer
        };
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
            user: state.userReducer.user
        };
        const serializedState = JSON.stringify(stateToPersist);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage:', err);
    }
};