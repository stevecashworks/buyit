import "./productCard.css";
import {  motion } from "framer-motion";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";
import Rating from "../ratings";
import { useSelector } from "react-redux";
import { selectCurrency } from "../../../../state/currency/currencySlice";
import currency_and_symbol from "../../../../currencies"
import { selectRates } from "../../../../state/rates/rates";

const Img = styled.img`
  width: 200px;
  
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

export interface productProps {
  img: string;
  productName: string;
  description: string;
  price: number;
  rating: number;
  _id:string;
  mileage:"new"|"featured"
  
}
const ProductCard = (props: productProps) => {
  const { img, productName,  price, rating , } = props;
  const currency=useSelector(selectCurrency)
  const rates=useSelector(selectRates)
  const rate=rates[currency]
  const symbol:any=currency_and_symbol[currency]
 
  return (
    <motion.div className="product-card-con">
      <motion.div className="card-bg">
        <Img src={img} />
        <div className="option-con">
          <IoCartOutline size={20} color="rgb(0,0,0,0.5)" />
          <MdFavoriteBorder size={20} color="rgb(0,0,0,0.5)" />

          <IoSearchOutline size={20} color="rgb(0,0,0,0.5)" />
        </div>
      </motion.div>
      {/*ratings  */}
      <Rating no={rating} />

      
      <Name>{productName}</Name>
      <Price>{symbol} {Math.ceil(price*rate)}</Price>
      <Colors>
        <Color color="#4d4a4a" />
        <Color color="#bebaba" />
      </Colors>
    </motion.div>
  );
};
export default ProductCard;
