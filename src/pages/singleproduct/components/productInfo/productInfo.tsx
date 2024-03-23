import styled from "styled-components";
import Images from "./images/Images";
import Details from "./details/details";
import responsive from "../../../../responsive";

const Container=styled. div`
    width:85vw;
    margin:40px auto;
    display:flex;
    gap:20px;
    ${responsive(`
      flex-direction:column;
    `)}

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