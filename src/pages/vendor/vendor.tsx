import styled from "styled-components"
import Header from "../home/components/header/header"
import SearchAndFav from "../home/components/searchandfav/SearchAndFav"
import Nav from "./components/nav"
import Content from "./components/content"
import Footer from "../home/components/footer/footer"
import { contentKey } from "./components/content"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { useNavigate } from "react-router-dom"


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
    const navigate= useNavigate()
    
    const {is_logged_in}=useSelector((state:RootState)=>state.user)
    useEffect(() => {
        if(!is_logged_in){
            navigate("/")
        }
    }, []);
    
    

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