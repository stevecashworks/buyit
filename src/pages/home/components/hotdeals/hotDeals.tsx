import "./hotDeals.css";
import ProductCard from "../productcard/productCard";
import styled from "styled-components";
import home from "../../../../assets/products/home.png";
import studs from "../../../../assets/products/studs.png";
import sneaker from "../../../../assets/products/sneakers.png";
import headset from "../../../../assets/products/headset.png";
import responsive from "../../../../responsive";
import { Link } from "react-router-dom";
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
const products = [
  {
    src: headset,
    name: "bluetooth wireless headset",
    desc: "Extra Bass speakers",
    price: 20,
    rating: 2.5,
  },
  {
    src: home,
    name: "home appliances",
    desc: "Home appliances for your convinience",
    price: 80,
    rating: 4.5,
  },
  {
    src: studs,
    name: "Wireless bluetooth headphones",
    desc: "Great Sounding music",
    price: 15,
    rating: 3.5,
  },
  {
    src: sneaker,
    name: "Nike  sneaker",
    desc: "Rock with style",
    price: 20,
    rating: 4,
  },
];
export const linkStyle={
color:"unset",
textDecoration:"none"
}

const HotDeals = () => {
  return (
    <>
      <Header> HOt Deals 🔥</Header>
      <Container>
        {products.map((product) => (
          <Link style ={linkStyle} to="/singleproduct/1">
          <ProductCard {...product} />
          </Link>
        ))}
      </Container>
    </>
  );
};
export default HotDeals;
