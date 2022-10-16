import { getLocalStorage } from './useLocalStorageForCart';

async function cartAndProductLoader() {
    const data = await fetch(
        'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
    );
    const products = await data.json();

    const cartProduct = getLocalStorage() || {};
    const initialCart = [];
    Object.keys(cartProduct).forEach((keys) => {
        const addedProduct = products.find((product) => product.id === keys);
        if (addedProduct) {
            addedProduct.quantity = cartProduct[keys];
            initialCart.push(addedProduct);
        }
    });
    return { products, initialCart };
}

export default cartAndProductLoader;
