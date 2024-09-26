import styled from "styled-components";
import Header from "../home/components/header/header";
// import Links from "../home/components/links/Links";
import SearchAndFav from "../home/components/searchandfav/SearchAndFav";
import PageTitle from "./components/PageTitle/pageTitle";
import ProductInfo from "./components/productInfo/productInfo";
import Footer from "../home/components/footer/footer";
const Container= styled.div`
width:100%;
min-height:100vh;
`
 
const SingleProduct=()=>{
    
    return(
        <Container>
            <Header showNav={true}/>
            <SearchAndFav/>
            <PageTitle left="product" right="home/product"/>
            {/* <Links/> */}
            <ProductInfo/>
            <Footer/>

        </Container>
    )
}
export default SingleProduct
