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
import {  useDispatch } from "react-redux";
const Container = styled.div`
  width: 100vw;
  background-color: var(--${(props) => props.theme});
`;

const Home = () => {
  const dispatch=useDispatch()
  const token= localStorage.getItem("buyit_token")
  console.log(token)
  return (
    <Container>
      <Header />
      <SearchAndFav />
      <Links />
      <ProductBanner />
      <Services />
      <HotDeals />
      <Categories />
      <Products/>
      <Footer/>
    </Container>
  );
};
export default Home;
