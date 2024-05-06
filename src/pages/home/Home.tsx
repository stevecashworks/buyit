import styled from "styled-components";
import Header from "./components/header/header";
import SearchAndFav from "./components/searchandfav/SearchAndFav";
import Links from "./components/links/Links";
import ProductBanner from "./components/productbanner/ProductBanner";
import Services from "./components/services/services";
import HotDeals from "./components/hotdeals/hotDeals";
import Categories from "./components/categories/categories";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";
import {  useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useEffect, useState } from "react";
import PopUp from "./popup";
import { selectProducts } from "../../state/products/productSlice";
const Container = styled.div`
  width: 100vw;
  background-color: var(--${(props) => props.theme});
`;


const Home = () => {
  
  const user=useSelector((state:RootState)=>state.user)
  const products= useSelector(selectProducts)
 const user_is_a_vendor= user.userDetails.userType==="vendor"
 const [open,setOpen]=useState(user_is_a_vendor)
 useEffect(()=>{setOpen(user_is_a_vendor)}, [user])
  // console.log(user)
 
  
  
  return (
    <Container>
      <PopUp
        open={open}
        message={
          "A vendor account has been detected on this device, visit the vendor page?"
        }
        toggle={setOpen}
      />
      <Header />
      <SearchAndFav />
      <Links />
      <ProductBanner />
      <Services />
      <HotDeals products={products} />
      <Categories />
      <Products products={products} />
      <Footer />
    </Container>
  );
};
export default Home;
