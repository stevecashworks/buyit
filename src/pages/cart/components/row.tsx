import styled from "styled-components";
import { useContext,  } from "react";
import { Button } from "react-bootstrap";
import responsive from "../../../responsive";
import { CartContext } from "../../../state";
import { FaTrash } from "react-icons/fa";

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
    image:string,
    name:string, 
    quantity:number,
    id:number,
    price:number

 }
 
 const Row=({image, name,quantity, id,price}:rowProps)=>{
  console.log({id})
const {dispatch}=useContext(CartContext)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>, )=>{
      dispatch({type:"changeQuantity",payload:{id,quantity:Number(e.target.value)}})
         
     
 }
  const handleDelete = (id:number) => {
    dispatch({ type: "removeProduct", payload: { id } });
  };
    
    return (
      <Container>
        <Td>
          <ProductImg src={image} />
        </Td>

        <Td>{name}</Td>

        <Td> $ {price}.00</Td>
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
            style={{border:"none",opacity:0.7}}
            onClick={() => {
              handleDelete(id);
            }}
            variant="outline-danger"
          >
            <FaTrash />
          </Button>
        </Td>
        <Td>$ {price * quantity}.00</Td>
      </Container>
    );
 }
  export default Row