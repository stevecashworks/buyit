import styled from "styled-components";
import Header from "../home/components/header/header";
import SearchAndFav from "../home/components/searchandfav/SearchAndFav";
import PageTitle from "../singleproduct/components/PageTitle/pageTitle";

import Row from "./components/row";
import responsive from "../../responsive";
import Footer from "../home/components/footer/footer";
import { useState } from "react";
import {Table} from "react-bootstrap"
import { Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartStateType, selectClientCart, selectDatabaseCart, setDatabaseCart } from "../../state/cart/cartSlice";
import { selectKey } from "../../state/payment/paymentSlice";
import { usePaystackPayment } from "react-paystack";
import { selectRates } from "../../state/rates/rates";
import fetch_helper from "../../helpers/fetchhelper";
import apiEntry from "../../apiEntry";
import { linkStyle, responseType } from "../Register/register";
import { Link } from "react-router-dom";
import { selectCurrency } from "../../state/currency/currencySlice";
import currencies_and_symbols from "../../currencies";



const  Container=styled.div`
 width:100%;   
`

const Th=styled.th`
width:300px;
text-transform: uppercase;

`
const TableCon=styled.div`
  width:85vw;
  margin:30px auto;
  ${responsive(`
    width:95vw;
    font-size:12px;
  `)}
  
`
const TotalPriceCon=styled.div`
    display:flex;
    justify-content:flex-end;
    width:85%;
    font-weight:bold;
    margin:10px auto;
    gap:50px;
    align-items: center;

`

const Tr=styled.tr`
    border-bottom: 2px solid rgb(0,0,0,0.1);
    padding-bottom: 30px;
    height:70px;
`

const BtnsCon = styled.div`
  display: flex;
  justify-content: space-between;
  width:70%;
  margin:40px auto;
  ${responsive(`
    width:85vw;
  `)}
`;
const Btn = styled.button<{ content: string }>`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid rgb(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  background-color: white;
  color: rgb(0, 0, 0, 0.4);
  border-radius: 8px;
 

  &:after {
    content: "${(props) => props.content}";
    background-color: blueviolet;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: white;
    border-radius: 8px;
  }
  &:hover:after {
    transform-origin: 100% 0;
    transform: scaleX(0);
  }
  ${responsive(`
    font-size:12px;
  `)}
`;
const UpdateButton = styled.button<{ has_changed: boolean }>`
  color: white;
  background-color: blueviolet;
  border-radius: 10px;
  opacity: ${(props) => (props.has_changed ? 0.5 : 0)};
  transition: all 0.5s ease 0.2s;
  &:hover {
    opacity: 1;
  }
  ${responsive(`
    font-size:12px;
  `)}
`;
const  Cart=()=>{
  const dispatch=useDispatch()
  const token=localStorage.getItem("buyit_token")
    const [loading, setLoading]=useState(false)
    const publicKey=useSelector(selectKey)
    const rates=useSelector(selectRates)
    const currency=useSelector(selectCurrency)
    const symbol=currencies_and_symbols[currency]
    const rate=rates[currency]
    
  
    const databaseCart=useSelector(selectDatabaseCart)
    const clientCart=useSelector(selectClientCart)
    const TotalPrice= Number((clientCart.products.reduce((acc,item)=>acc+(item.price*item.quantity),0)).toFixed(2))
        const onSuccess = (reference: any) => {
          // Implementation for whatever you want to do with reference and after success call.
          console.log(reference);
        };

        // you can call this function anything
        const onClose = () => {
          // implementation for  whatever you want to do when the Paystack dialog closed.
          console.log("closed");
        };
    
       const config = {
         reference: new Date().getTime().toString(),
         email: "user@example.com",
         amount: (TotalPrice*100), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
         publicKey,
         onSuccess,
         onClose
         
       };
       const initializePayment = usePaystackPayment(config)
    const updateCart=()=>{
      
        setLoading(true)
      const onSuccess=(data:responseType)=>{
        const {userId,products}=data.result as cartStateType
        const fetchedData={userId,products}
        dispatch(setDatabaseCart(fetchedData))
        setLoading(false)
        window.location.reload()
      
      }
      fetch_helper({
        method:"post",
        url:`${apiEntry}/cart/edit`,
        body:clientCart,
        token,
        onSuccess,
        onError:(err)=> {
          console.log(err)
        },
      })

    }

   


// serialize both arrays and compare their resulting strings
const cartHasChanged:boolean=    JSON.stringify(clientCart)!==JSON.stringify(databaseCart)
    return (
      <Container>
        <Header />
        <SearchAndFav />
        <PageTitle left="cart" right="home/cart" />
        <TableCon>
          {/* <ProductTable> */}
          <Table responsive>
            <thead>
              <Tr>
                <Th>Image</Th>
                <Th>Product name</Th>
                <Th>Price </Th>
                <Th>Quantity </Th>
                <Th>Action </Th>
                <Th>Total </Th>
              </Tr>
            </thead>
            <tbody>
              {clientCart.products.map((row) => (
                <Row key={row.productId} {...row} />
              ))}
            </tbody>
            {/* </ProductTable> */}
          </Table>
        </TableCon>
        <TotalPriceCon>
          <UpdateButton onClick={updateCart} has_changed={cartHasChanged}>
            {loading && (
              <Spinner
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            Save changes
          </UpdateButton>
          <p>Total price: {symbol} {Math.ceil(TotalPrice*rate)}</p>
        </TotalPriceCon>
        <BtnsCon>
          <Link style={linkStyle} to="/">
          <Btn content="continue shopping">Continue Shopping</Btn>
          </Link>
          <Btn
            content="checkout"
            onClick={() => {
              initializePayment(onSuccess, onClose);
            }}
          >
            checkout
          </Btn>
        </BtnsCon>
        <Footer />
      </Container>
    );
}
const WrappedCart=()=>{
    return(
       <Cart>
        
       </Cart>
    )
}
export default WrappedCart