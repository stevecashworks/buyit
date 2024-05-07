import styled from "styled-components";
import { Button } from "react-bootstrap";
import responsive from "../../../responsive";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setQuantity } from "../../../state/cart/cartSlice";
import { selectCurrency } from "../../../state/currency/currencySlice";
import { selectRates } from "../../../state/rates/rates";
import currencies_and_symbols from "../../../currencies";

const Container=styled.tr`
    
    border-bottom: 2px solid rgb(0,0,0,0.1);
    padding-bottom: 30px;
    height:100px;
    text-transform: capitalize;
    color:rgb(0,0,0,0.6);

`
const ProductImg=styled.img`
    height:80px;
    ${responsive(`
        height:60px;
    `)}
`
const Td=styled.td`
width:200px;
    
`
const  Inp=styled.input`
height:40px;
width:60px;
border:1px solid rgb(0,0,0,0.2);
outline:none;
    
`

 type rowProps={
    img:string,
    name:string, 
    quantity:number,
    productId:string,
    price:number

 }
 
 const Row=({img, name,quantity, productId,price}:rowProps)=>{
  const dispatch=useDispatch() 
  const currency=useSelector(selectCurrency)
  const rates= useSelector(selectRates)
  const rate=rates[currency]
  const symbol=currencies_and_symbols[currency]
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>, )=>{
      dispatch(setQuantity({id:productId,quantity:Number(e.target.value)}))
         
     
 }
  const handleDelete = (id:string) => {
    dispatch(removeFromCart({id}))
    
  };
    
    return (
      <Container>
        <Td>
          <ProductImg src={img} />
        </Td>

        <Td>{name}</Td>

        <Td> {symbol} {Math.ceil(price*rate)}.00</Td>
        <Td>
          <Inp
            min={1}
            type="number"
            value={quantity}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Td>

        <Td>
          <Button
            style={{ border: "none", opacity: 0.7 }}
            onClick={() => {
              handleDelete(productId);
            }}
            variant="outline-danger"
          >
            <FaTrash />
          </Button>
        </Td>
        <Td>{symbol} {Math.ceil(Number(((price * quantity)*rate)))}</Td>
      </Container>
    );
 }
  export default Row