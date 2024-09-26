import {useEffect} from 'react'
import './App.css'
import styled from 'styled-components'
// import Vendor from './pages/vendor/vendor';
// import Home from './pages/home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { productProps } from './pages/home/components/productcard/productCard';

import { responseType } from './pages/Register/register';
import { log_user_in, selectIsLogged, user_details_type } from './state/users/userslice';
import fetch_helper from './helpers/fetchhelper';
import apiEntry from './apiEntry';
import { loadCart, select_cart_has_loaded, setClientCart, setDatabaseCart } from './state/cart/cartSlice';
import { selectTheme, themeType } from './state/theme/themeSlice';
import { loadKey, select_key_has_loaded, setKey } from './state/payment/paymentSlice';
import { setRates } from './state/rates/rates';

import { loadProducts, select_products_have_loaded, setProducts } from './state/products/productSlice';
import { loadCurrency, select_currency_has_loaded, setCurrency } from './state/currency/currencySlice';
import Loading from './loading';
// import SingleProduct from './pages/singleproduct/singleProduct';
// import Cart from './pages/cart/cart';

type props={
  className?:string,
  children:JSX.Element
}
const Container = styled.div<{ theme: themeType }>`
  width: 100vw;
  min-height: 100vh;
  font-family:sans-serif;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light)" : "var(--dark)"};
  color: ${(props) =>
    props.theme === "light" ? "var(--dark)" : "var(--light)"};
    overflow-x: hidden;
`
const App:React.FC<props>=({children})=> {
  const theme=useSelector(selectTheme)
  const token = localStorage.getItem("buyit_token");
  
   //  loading indicators
   const user_is_logged=useSelector(selectIsLogged)
   const products_have_loaded=useSelector(select_products_have_loaded)
   const key_has_loaded=useSelector(select_key_has_loaded)
   const currency_has_loaded=useSelector(select_currency_has_loaded)
   const cart_has_loaded= useSelector(select_cart_has_loaded)
   

   const loadingDeps=[
    (!token||user_is_logged),products_have_loaded,key_has_loaded,currency_has_loaded,(!token||cart_has_loaded)]
    
  const loading=loadingDeps.some(dep=>!dep)

    // console.log(user)
    const dispatch = useDispatch();
    const onSuccessfulProductsFetch = (data: responseType) => {
      if (Array.isArray(data.result)) {
      dispatch(setProducts(data.result as productProps[]));
      dispatch(loadProducts()) 
      }
    };

    const onSuccess = (data: responseType) => {
      const { result } = data;
      const { _id, userName, userType } = result as user_details_type;
    

      const details = { _id, userName, userType };
      dispatch(log_user_in(details));
    };
    useEffect(() => {
      console.log(token)
      //  get user details  by jwt token   and update state
      if (token) {
        fetch_helper({
          method: "post",
          url: `${apiEntry}/users/token`,
          token,
          onSuccess,
        });

        //  fetch cart details
        if(token){
          
        fetch_helper({
          url: `${apiEntry}/cart/viewcart`,
          method: "post",
          token,
          onSuccess: (data: responseType) => {
            type cartResultType = {
              userId: string;
              products: {
                productId: string;
                quantity: number;
                img: string;
                price: number;
                name: string;
              }[];
            };
            const { products, userId } = data.result as cartResultType;
            dispatch(setDatabaseCart({ products, userId }));
            dispatch(setClientCart({ products, userId }));
            dispatch(loadCart());
          },
        });
      }
        }
      //  fetches products  and updates application state
      fetch_helper({
        url: `${apiEntry}/products/all`,
        method: "get",
        onSuccess: onSuccessfulProductsFetch,
      });
      
      
      //  fetch payment key
      fetch_helper({
        method:"get",
        url:`${apiEntry}/payments`,
        onSuccess:(data:responseType)=>{
          dispatch(setKey(data.result))
          dispatch(loadKey())
        }
      })

      // get conversion rate
     fetch(
       "https://openexchangerates.org/api/latest.json?app_id=8e45c2fc645941b39a242217a6e325b3&base=USD"
     ).then(res=>res.json()).then(data=>{
      dispatch(setRates(data.rates))
     });
    //  get users country
    fetch(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=b5f7082a2a924928a0fb53052067e1d5"
    )
      .then((res) => res.json())
      .then((data: any) => {
        dispatch(setCurrency(data.currency.currency_code))
        dispatch(loadCurrency())
      });


    }, []);
  


  return (

    <Container theme={theme} >
       {(!loading)&&children} 
      {(loading&&token)&&<Loading/>}
      {/* <SingleProduct/> */}
      {/* <Cart/> */}
      {/* <Vendor/> */}

    </Container>
  )
}

export default App
