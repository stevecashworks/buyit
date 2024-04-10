import styled from "styled-components"
import Header from "../home/components/header/header"
import SearchAndFav from "../home/components/searchandfav/SearchAndFav"
import Nav from "./components/nav"
import Content from "./components/content"
import Footer from "../home/components/footer/footer"
import { contentKey } from "./components/content"
import { useState } from "react"


const  Container=styled.div`
    width:100%;
`
const VendorCon=styled.div`
    width:85vw;
    display: flex;
    gap:20px;
    margin:60px auto;

`
const Vendor=()=>{
    const [currentSlide, setCurrentSlide]=useState<contentKey>("dashboard")
 return(
    <Container>
    <Header/>
    <SearchAndFav/>
    <VendorCon>
        <Nav currentLink={currentSlide} fn={setCurrentSlide}/>
        <Content currentSlide={currentSlide}/>
    </VendorCon>
    <Footer/>
    </Container>
 )   
}
export default Vendor