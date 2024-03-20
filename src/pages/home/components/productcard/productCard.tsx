import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./productCard.css";
import {  motion } from "framer-motion";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

const Img = styled.img`
  width: 200px;
  
`;
const Ratings = styled.div`
  display: flex;
  gap: 2px;
  margin: 10px 0px;
`;
const Name = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.7);
`;
const Price = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 600;
`;
const Colors = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;
const Color = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

interface productProps {
  src: string;
  name: string;
  desc?: string;
  price: number;
  rating: number;
}
const ProductCard = (props: productProps) => {
  const { src, name,  price, rating } = props;
  const stars = [];
  const allWholeRatings = Math.floor(rating);
  for (let i = 0; i < allWholeRatings; i++) {
    stars.push("star");
  }
  return (
    <motion.div className="product-card-con">
      <motion.div className="card-bg">
        <Img src={src} />
        <div className="option-con">
          <IoCartOutline size={20} color="rgb(0,0,0,0.5)" />
          <MdFavoriteBorder size={20} color="rgb(0,0,0,0.5)" />

          <IoSearchOutline size={20} color="rgb(0,0,0,0.5)" />
        </div>
      </motion.div>
      {/*ratings  */}
      <Ratings>
        {stars.map(() => (
          
          <FaStar color="#cba229" size={20} />
        ))}
        {stars.length !== rating && <FaStarHalfAlt color="#cba229" size={20} />}
      </Ratings>
      <Name>{name}</Name>
      <Price>${price}</Price>
      <Colors>
        <Color color="#4d4a4a" />
        <Color color="#bebaba" />
      </Colors>
    </motion.div>
  );
};
export default ProductCard;
