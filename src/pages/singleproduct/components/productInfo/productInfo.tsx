import styled from "styled-components";
import Images from "./images/Images";
import Details from "./details/details";
import Footer from "../../../home/components/footer/footer";

const Container=styled. div`
    width:85vw;
    margin:40px auto;
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