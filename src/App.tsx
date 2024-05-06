import {useEffect} from 'react'
import './App.css'
import styled from 'styled-components'
// import Vendor from './pages/vendor/vendor';
// import Home from './pages/home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { productProps } from './pages/home/components/productcard/productCard';

import { responseType } from './pages/Register/register';
import { log_user_in, user_details_type } from './state/users/userslice';
import fetch_helper from './helpers/fetchhelper';
import apiEntry from './apiEntry';
import { setClientCart, setDatabaseCart } from './state/cart/cartSlice';
import { selectTheme, themeType } from './state/theme/themeSlice';
import { setKey } from './state/payment/paymentSlice';
import { setRates } from './state/rates/rates';

import { setProducts } from './state/products/productSlice';
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
    
  

    // console.log(user)
    const dispatch = useDispatch();
    const onSuccessfulProductsFetch = (data: responseType) => {
      if (Array.isArray(data.result)) {
      dispatch(setProducts(data.result as productProps[])); 
      }
    };

    const onSuccess = (data: responseType) => {
      const { result } = data;
      const { _id, userName, userType } = result as user_details_type;
    

      const details = { _id, userName, userType };
      dispatch(log_user_in(details));
    };
    useEffect(() => {
      const token = localStorage.getItem("buyit_token");
      //  get user details  by jwt token   and update state
      if (token) {
        fetch_helper({
          method: "post",
          url: `${apiEntry}/users/token`,
          token,
          onSuccess,
        });
      }
      //  fetches products  and updates application state
      fetch_helper({
        url: `${apiEntry}/products/all`,
        method: "get",
        onSuccess: onSuccessfulProductsFetch,
      });
      //  fetch cart details
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
        },

      });
      
      
      //  fetch payment key
      fetch_helper({
        method:"get",
        url:`${apiEntry}/payments`,
        onSuccess:(data:responseType)=>{
          dispatch(setKey(data.result))
        }
      })

      // get conversion rate
     fetch(
       "https://openexchangerates.org/api/latest.json?app_id=8e45c2fc645941b39a242217a6e325b3&base=USD"
     ).then(res=>res.json()).then(data=>{
      dispatch(setRates(data.rates))
     });
    //  get users country
    fetch("https://api.ip2location.io/?key=3CE684453EE3923C1DEB78BFCF7FC3A3").then(res=>res.json()).then((data:any)=>{
      console.log(data)
    })


    }, []);
  


  return (

    <Container theme={theme} >
      {children}
      {/* <SingleProduct/> */}
      {/* <Cart/> */}
      {/* <Vendor/> */}

    </Container>
  )
}

export default App
