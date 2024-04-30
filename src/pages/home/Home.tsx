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
import {  useDispatch, useSelector } from "react-redux";
import fetch_helper from "../../helpers/fetchhelper";
import apiEntry from "../../apiEntry";
import { responseType } from "../Register/register";
import { log_user_in, user_details_type } from "../../state/users/userslice";
import { RootState } from "../../state/store";
import { useEffect, useState } from "react";
import PopUp from "./popup";
import { productProps } from "./components/productcard/productCard";
const Container = styled.div`
  width: 100vw;
  background-color: var(--${(props) => props.theme});
`;


const Home = () => {
  const [open,setOpen]=useState(false)
  const [products,setProducts]=useState<productProps[]>([])
  const user=useSelector((state:RootState)=>state.user)
  console.log(user)
  const dispatch=useDispatch()
  const onSuccessfulProductsFetch=(data:responseType)=>{
    if(Array.isArray(data.result)){

      setProducts(data.result)
    }
  }
  
  const onSuccess=(data:responseType)=>{
    const {result}=data
    const {_id, userName, userType}=result as user_details_type
    if(userType==="vendor"){
      setOpen(true)
    }
  
    const details={_id,userName,userType}
    console.log(user)
    dispatch(log_user_in(details))
  

  }
  useEffect(()=>{
      const token = localStorage.getItem("buyit_token");
      if(token){
          fetch_helper({
            method: "post",
            url: `${apiEntry}/users/token`,
            token,
            onSuccess,
          });


      }
      fetch_helper({
        url:`${apiEntry}/products/all`,
        method:"get",
        onSuccess:onSuccessfulProductsFetch
      })
      

  },[])
  
  
  return (
    <Container>
      <PopUp open={open} toggle={setOpen} />
      <Header />
      <SearchAndFav />
      <Links />
      <ProductBanner />
      <Services />
      <HotDeals products={products} />
      <Categories />
      <Products products={products}/>
      <Footer/>
    </Container>
  );
};
export default Home;
