import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import About from './Components/Pages/About/About';
import Inventory from './Components/Pages/Inventory/Inventory';
import OrderPage from './Components/Pages/Orders/OrderPage';
import Shop from './Components/Pages/Shop/Shop';
import cartAndProductLoader from './Components/utilities/cartAndProductLoader';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            loader: () =>
                fetch(
                    'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
                ),
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Shop />,
                },
                {
                    path: '/shop',
                    element: <Shop />,
                },
                {
                    path: '/orders',
                    element: <OrderPage />,
                    loader: cartAndProductLoader,
                },
                { path: '/about', element: <About /> },
                { path: '/inventory', element: <Inventory /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
