import styled from "styled-components";
import Rating from "../../../../home/components/ratings";
import payment from "../../../../../assets/payment.png"
import {
  FaCheckCircle,
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaShare,
  FaTwitter,
} from "react-icons/fa";
import {  useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { GoBookmarkFill } from "react-icons/go";
import { PiShoppingCartFill } from "react-icons/pi";
import responsive from "../../../../../responsive";
import { singleProductType } from "../productInfo";
import fetch_helper from "../../../../../helpers/fetchhelper";
import apiEntry from "../../../../../apiEntry";
import { responseType } from "../../../../Register/register";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import { useNavigate, useParams } from "react-router-dom";
import { selectCurrency } from "../../../../../state/currency/currencySlice";
import { selectRates } from "../../../../../state/rates/rates";
import currencies_and_symbols from "../../../../../currencies";

const Container = styled.div`
  width: 700px;
`;
const Top = styled.div`
  height: 30px;
  align-items: center;
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
`;
const Payment=styled.img`
${responsive(`
width:300px`)}
  
`
const ProductName = styled.div`
  margin: 20px 0;
  text-transform: uppercase;
  color: var(--dark);
  font-weight: 600;
  font-size: larger;
  opacity: 0.8;
`;
const RatingCon = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
`;
const NoOfRating = styled.div`
  text-transform: uppercase;
`;
const Btn = styled.button`
  background-color: var(--secondary);
  color: white;
  font-size: 12px;
  opacity: 0.8;
`;
const PriceCon = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Price = styled.p`
  font-size: 24px;
  color: var(--dark);
  opacity: 0.6;
  letter-spacing: 1.5;
`;
const FormerPrice = styled.p`
  text-decoration: line-through;
  opacity: 0.8;
  font-size: 14px;
`;
const Discount = styled.p`
  font-size: 16px;
  color: var(--danger);
  letter-spacing: 1px;
`;
const ColorsCon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 30px 0;
`;
const SelectSize = styled.p`
  margin: 20px 0;
  color: rgb(0, 0, 0, 0.5);
`;
// const cols = ["#ddd", "#8ab9e7", "#ecec6a"];/
const Color = styled.div<{ col: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.col};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Line = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 1px dashed rgb(0, 0, 0, 0.3);
`;
const Size = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#ebebeb" : "white")};
  border: rgb(0, 0, 0, 0.2);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.3);
`;
const QuantityCon = styled.div`
  display: flex;
  color: rgb(0, 0, 0, 0.5);
  border-collapse: collapse;
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  height: 40px;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-collapse: collapse;
`;
const ChevronCon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-collapse: collapse;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: var(--info);
    color: white;
  }
`;
const CartBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;
const CartBtn = styled.button`
  color: white;
  background-color: #df392e;
  border-radius: 0;
  text-transform: uppercase;
  border: none;
  padding: 20px 10px;
  box-sizing: border-box;
  width: 180px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  ${responsive(`
    font-size:12px;
    padding:10px 5px;
    width:120px;
  `)}
`;
const SocialIconsCon = styled.div`
  display: flex;
  gap: 15px;
`;
const SocialIconCon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color:rgb(0,0,0,0.5);
  transition:all 0.5s linear;
  &:hover {
    color: var(--danger);
  }
`;
const sizes = ["s", "m", "l", "xl"];
const Details = ({productName,img,rating, description,price,colors}:singleProductType) => {
const [currentColor, setCurrentColor] = useState(colors[0]);
const [currentSize, setCurrentSize] = useState(sizes[0]);
const [quantity, setQuantity] = useState(1);
const isLogged=useSelector((state:RootState)=>state.user.is_logged_in)
const currency= useSelector(selectCurrency)
const rates=useSelector(selectRates)
const rate= rates[currency]
const symbol = currencies_and_symbols[currency]
const params=useParams();
const navigate=useNavigate()
const productId= params["id"]

  
  

  
  console.log({colors})

  const add_to_cart=()=>{
    const onSuccess=(data:responseType)=>{
      console.log(data.result)
      navigate("/cart")

    }
    if (!isLogged) {
      alert("you must be logged in first");
    } else {
      const token= localStorage.getItem("buyit_token")
      fetch_helper({
        method:"post",
        url: `${apiEntry}/cart/addproduct`,
        body:{quantity, productId,price,img, name:productName},
        
        token,
        onSuccess
      })
    }
  }
  return (
    <Container>
      {/* product stats starts */}
      <Top>🔥  {productName}</Top>
      <ProductName>{description}</ProductName>
      <RatingCon>
        <Rating no={rating} />
        <NoOfRating>120 ratings</NoOfRating>
      </RatingCon>
      <RatingCon>
        <Btn>#1 Bestseller</Btn>
        <NoOfRating style={{ fontSize: "12px" }}>in fashion</NoOfRating>
      </RatingCon>
      {/* products stats end */}
      <PriceCon>
        <Price>{symbol} {Math.ceil(price*rate)}</Price>
        <FormerPrice>{symbol}8999.99</FormerPrice>
        <Discount> 30% off</Discount>
      </PriceCon>
      {/* color selection starts */}
      <ColorsCon>
        {colors.map((col) => {
          return (
            <Color
              onClick={() => {
                setCurrentColor(col);
              }}
              col={col}
            >
              {currentColor === col && <FaCheckCircle size="14" />}
            </Color>
          );
        })}
      </ColorsCon>
      {/* color selection ends */}
      <Line />
      {/* sizes selection section starts */}
      <SelectSize>Select Size</SelectSize>

      <ColorsCon>
        {sizes.map((size) => {
          return (
            <Size
              onClick={() => {
                setCurrentSize(size);
              }}
              selected={currentSize === size}
            >
              {size}
            </Size>
          );
        })}
      </ColorsCon>

      {/* sizes selection section ends */}

      {/* quantity selection section starts */}
      <SelectSize>Quantity</SelectSize>
      <QuantityCon>
        <ChevronCon
          onClick={() => {
            setQuantity(quantity === 0 ? quantity : quantity - 1);
          }}
        >
          <FaChevronLeft />
        </ChevronCon>
        <Quantity>{quantity}</Quantity>
        <ChevronCon>
          <FaChevronRight
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </ChevronCon>
      </QuantityCon>
      {/* quantity selection ends */}

      {/* cart btns  start*/}
      <CartBtns>
        <CartBtn onClick={add_to_cart}>
          <PiShoppingCartFill style={{ marginRight: "10px" }} />
          add to cart
        </CartBtn>
        <CartBtn>
          <GoBookmarkFill style={{ marginRight: "10px" }} /> wishlist
        </CartBtn>
      </CartBtns>
      {/* cart btns  end*/}

      {/* free shipping */}
      <Top>🛳 free shipping for orders above 500USD</Top>
      <Line />
      {/* free shipping ends */}

      {/* shipping info  starts*/}

      <SelectSize style={{ color: "rgb(0,0,0)", fontWeight: "600" }}>
        Shipping info
      </SelectSize>
      <SelectSize>100% Original Products</SelectSize>
      <SelectSize>Free Delivery on order above Rs. 799</SelectSize>
      <SelectSize>Pay on delivery is available</SelectSize>
      <SelectSize>Easy 30 days returns and exchanges</SelectSize>
      {/* shipping info  ends*/}
      <Line />
      {/* shareProduct starts */}
      <SelectSize style={{ color: "rgb(0,0,0)", fontWeight: "600" }}>
        Share It
      </SelectSize>
      <SocialIconsCon>
        <SocialIconCon>
          <FaFacebookF />
        </SocialIconCon>
        <SocialIconCon>
          <FaGooglePlusG />
        </SocialIconCon>
        <SocialIconCon>
          <FaTwitter />
        </SocialIconCon>
        <SocialIconCon>
          <FaInstagram />
        </SocialIconCon>
        <SocialIconCon>
          <FaShare />
        </SocialIconCon>
      </SocialIconsCon>

      {/* shareProduct ends */}
      <Line />

      {/* secure payments starts  */}

      <SelectSize style={{ color: "rgb(0,0,0)", fontWeight: "600" }}>
        100% Secure Payments
      </SelectSize>
      <Payment src={payment}/>
      {/* secure payments  end  */}
    </Container>
  );
};
export default Details;
