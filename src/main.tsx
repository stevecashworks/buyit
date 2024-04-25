import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router.tsx"
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>

    <RouterProvider router={router}/>
    </Provider>
    
)
