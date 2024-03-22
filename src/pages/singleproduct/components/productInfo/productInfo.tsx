import styled from "styled-components";
import Images from "./images/Images";
import Details from "./details/details";

const Container=styled. div`
    width:85vw;
    margin:40px auto;
    height:650px;
    display:flex;
    gap:20px;

`

const ProductInfo=()=>{
  return(
    <Container>
        <Images />
        <Details/>

    </Container>
  )
}
export default ProductInfo