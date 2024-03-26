import styled from "styled-components";
import Header from "../home/components/header/header";
import SearchAndFav from "../home/components/searchandfav/SearchAndFav";
import PageTitle from "../singleproduct/components/PageTitle/pageTitle";

import Row from "./components/row";
import responsive from "../../responsive";
import Footer from "../home/components/footer/footer";
import AppWrapper, { CartContext } from "../../state";
import { useContext, useState } from "react";

import {Table} from "react-bootstrap"
import { Spinner} from "react-bootstrap";



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
const UpdateButton = styled.button<{ hasChanged: boolean }>`
  color: white;
  background-color: blueviolet;
  border-radius: 10px;
  opacity: ${(props) => (props.hasChanged ? 0.5 : 0)};
  transition: all 0.5s ease 0.2s;
  &:hover {
    opacity: 1;
  }
  ${responsive(`
    font-size:12px;
  `)}
`;
const  Cart=()=>{
    const [loading, setLoading]=useState(false)
    
    const updateCart=()=>{
        setLoading(true)
        setTimeout(()=>{setLoading(false)},2000)
    }
const {state}=useContext(CartContext)
console.log({state})
let TotalPrice=0
state.editedCart.forEach(prod=>{
   TotalPrice+= prod.price*prod.quantity 
})
const {editedCart,fetchedCart}=state
// serialize both arrays and compare their resulting strings
const cartHasChanged=    JSON.stringify(editedCart)!==JSON.stringify(fetchedCart)
    return (
      <Container>
        <Header />
        <SearchAndFav />
        <PageTitle left="cart" right="home/cart" />
        <TableCon>
          {/* <ProductTable> */}
          <Table responsive >

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
              {state.editedCart.map((row) => (
                <Row {...row} />
              ))}
            </tbody>
          {/* </ProductTable> */}
                </Table>
        </TableCon>
        <TotalPriceCon>
          <UpdateButton onClick={updateCart} hasChanged={cartHasChanged}>
            {loading&&<Spinner style={{width:"20px", height:"20px", marginRight:"10px"}} animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
            Save changes
          </UpdateButton>
          <p>Total price: ${TotalPrice}</p>
        </TotalPriceCon>
        <BtnsCon>
          <Btn content="continue shopping">Continue Shopping</Btn>
          <Btn content="checkout">checkout</Btn>
        </BtnsCon>
        <Footer />
      </Container>
    );
}
const WrappedCart=()=>{
    return(
        <AppWrapper children={<Cart/>}/>
    )
}
export default WrappedCart