import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import About from './Components/Pages/About/About';
import Inventory from './Components/Pages/Inventory/Inventory';
import OrderPage from './Components/Pages/Orders/OrderPage';
import Privateroute from './Components/Pages/private/Privateroute';
import Shipping from './Components/Pages/shipping/Shipping';
import Shop from './Components/Pages/Shop/Shop';
import Signin from './Components/Pages/signin/Signin';
import Signup from './Components/Pages/Signup/Signup';
import cartAndProductLoader from './Components/utilities/cartAndProductLoader';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            loader: cartAndProductLoader,
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
                { path: '/signin', element: <Signin /> },
                { path: '/signup', element: <Signup /> },
                {
                    path: '/shipping',
                    element: (
                        <Privateroute>
                            <Shipping />
                        </Privateroute>
                    ),
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
