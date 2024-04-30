import styled from "styled-components";
import Header from "../home/components/header/header";
// import Links from "../home/components/links/Links";
import SearchAndFav from "../home/components/searchandfav/SearchAndFav";
import PageTitle from "./components/PageTitle/pageTitle";
import ProductInfo from "./components/productInfo/productInfo";
import Footer from "../home/components/footer/footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetch_helper from "../../helpers/fetchhelper";
import apiEntry from "../../apiEntry";
import { responseType } from "../Register/register";
const Container= styled.div`
width:100%;
min-height:100vh;
`
 type singleProductType={
colors:string[];
price:number;
productName:string;
img:string;
otherImages:string[];
}
const SingleProduct=()=>{
    const location=useLocation()
    const navigate= useNavigate() 
        const [productDetails, setProductDetails]=useState<singleProductType>()
        
        const onSuccess=(data:responseType)=>{
            setProductDetails(data.result as singleProductType)
        }
        useEffect(()=>{
        const productId=location.pathname.split('/')[2] 
        if(productId){
            fetch_helper({

                url:`${apiEntry}/products/${productId}`,
                method:"get",
                onSuccess
            }
            )
        }
        else {
                alert("we couldn't fetch product details")
                navigate('/')

        }

        })
    return(
        <Container>
            <Header/>
            <SearchAndFav/>
            <PageTitle left="product" right="home/product"/>
            {/* <Links/> */}
            <ProductInfo/>
            <Footer/>

        </Container>
    )
}
export default SingleProduct