/* eslint-disable no-unused-expressions */

function setLocalStorage(id) {
    let shoppingCart = {};
    const storedCart = JSON.parse(localStorage.getItem('Cart'));
    if (storedCart) shoppingCart = storedCart;
    shoppingCart[id] ? (shoppingCart[id] += 1) : (shoppingCart[id] = 1);
    localStorage.setItem('Cart', JSON.stringify(shoppingCart));
}
function getLocalStorage() {
    return JSON.parse(localStorage.getItem('Cart'));
}
export { setLocalStorage, getLocalStorage };
