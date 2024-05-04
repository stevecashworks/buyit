import styled from "styled-components";
import Images from "./images/Images";
import Details from "./details/details";
import responsive from "../../../../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { responseType } from "../../../Register/register";
import apiEntry from "../../../../apiEntry";
import fetch_helper from "../../../../helpers/fetchhelper";

const Container=styled. div`
    width:85vw;
    margin:40px auto;
    display:flex;
    gap:20px;
    ${responsive(`
      flex-direction:column;
    `)}

`
export type singleProductType = {
  colors: string[];
  price: number;
  productName: string;
  img: string;
  otherImages: string[];
  description:string;
  rating:number
};

const ProductInfo=()=>{
  const location = useLocation();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState<singleProductType>({
  colors: [],
  price: 0,
  productName: "",
  img: "",
  otherImages: [],
  description:"",
  rating:1,
});

  const onSuccess = (data: responseType) => {
    const {colors,price,productName,img,otherImages,description,rating}=data.result as singleProductType;
    setProductDetails({colors,price,productName,img, otherImages,description,rating})
    
  };
  console.log({ productDetails });
  useEffect(() => {
    const productId = location.pathname.split("/")[2];
    if (productId) {
      fetch_helper({
        url: `${apiEntry}/products/${productId}`,
        method: "get",
        onSuccess,
      });
    } else {
      alert("we couldn't fetch product details");
      navigate("/");
    }
  }, []);
  return(
    <Container>
        <Images {...productDetails} />
        <Details {...productDetails}/>
        

    </Container>
  )
}
export default ProductInfo