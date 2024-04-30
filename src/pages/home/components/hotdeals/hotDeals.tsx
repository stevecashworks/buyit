import "./hotDeals.css";
import ProductCard, { productProps } from "../productcard/productCard";
import styled from "styled-components";
import home from "../../../../assets/products/home.png";
import studs from "../../../../assets/products/studs.png";
import sneaker from "../../../../assets/products/sneakers.png";
import headset from "../../../../assets/products/headset.png";
import responsive from "../../../../responsive";
import { Link } from "react-router-dom";
import fetch_helper from "../../../../helpers/fetchhelper";
import apiEntry from "../../../../apiEntry";
import { responseType } from "../../../Register/register";
import { useState } from "react";
const Container = styled.div`
  width: 80vw;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  ${responsive(`flex-direction:column;align-items:center; gap:20px; width:100vw;`)}
`;
const Header = styled.div`
  font-size: 20px;
  margin: 40px auto;
  text-transform: uppercase;
  font-weight: 600;
  width: 80vw;
`;
// const products = [
//   {
//     src: headset,
//     name: "bluetooth wireless headset",
//     description: "Extra Bass speakers",
//     price: 20,
//     rating: 2.5,
//     _id: "prod1",
//   },
//   {
//     src: home,
//     name: "home appliances",
//     description: "Home appliances for your convinience",
//     price: 80,
//     rating: 4.5,
//     _id: "prod2",
//   },
//   {
//     src: studs,
//     name: "Wireless bluetooth headphones",
//     description: "Great Sounding music",
//     price: 15,
//     rating: 3.5,
//     _id: "prod3",
//   },
//   {
//     src: sneaker,
//     name: "Nike  sneaker",
//     description: "Rock with style",
//     price: 20,
//     rating: 4,
//     _id: "prod4",
//   },
// ];
export const linkStyle={
color:"unset",
textDecoration:"none"
}
 export type productListType={
  products :productProps[]
}

const HotDeals = ({products}:productListType) => {


  return (
    <>
      <Header> HOt Deals 🔥</Header>
      <Container>
        {products.map((product) => (
          <Link style={linkStyle} to={`/singleproduct/${product._id}`}>
            <ProductCard {...product}  />
          </Link>
        ))}
      </Container>
    </>
  );
};
export default HotDeals;
