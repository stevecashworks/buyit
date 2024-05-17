import styled from "styled-components"
import Header from "../home/components/header/header"
import SearchAndFav from "../home/components/searchandfav/SearchAndFav"
import Nav from "./components/nav"
import Content, { contentData } from "./components/content"
import Footer from "../home/components/footer/footer"
import { contentKey } from "./components/content"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { useNavigate } from "react-router-dom"
import responsive from "../../responsive"


const  Container=styled.div`
    width:100%;
`
const VendorCon=styled.div`
    width:85vw;
    display: flex;
    gap:20px;
    margin:60px auto;
    ${responsive(`
        width:100vw;
        gap:0;
    `)}

`
const VendorItem=styled.div`
font-size:16px;
font-weight:500;
text-transform:capitalize;
    
`
type responsiveNavProps = {
    fn:React.Dispatch<React.SetStateAction<contentKey>>
} ;

const vendorItems:string[]=Object.keys(contentData)




const Vendor=()=>{
    const navigate= useNavigate()
    const [showNav, setShowNav] = useState<boolean>(false);
    
    const toggleNav = () => {
      setShowNav(!showNav);
    };
    
    
    const ResponsiveNav = ({ fn }: responsiveNavProps) => {
      

      return (
        <>
          {vendorItems.map((item) => {
            return (
              <VendorItem
                onClick={() => {
                  fn(item as contentKey);
                  toggleNav();
                }}
              >
                {item}
              </VendorItem>
            );
          })}
        </>
      );
    };
    
    const {is_logged_in}=useSelector((state:RootState)=>state.user)
    useEffect(() => {
        if(!is_logged_in){
            navigate("/")
        }
    }, []);
    
    

    const [currentSlide, setCurrentSlide]=useState<contentKey>("dashboard")

 return(
    <Container>
    <Header showNav={showNav} toggleNav={toggleNav} children={<ResponsiveNav fn={setCurrentSlide}/>}/>
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