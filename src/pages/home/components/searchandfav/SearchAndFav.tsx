import styled from "styled-components";
import logo from "../../../../assets/Buyit Logo.png";
import { CiSearch, CiSettings } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FavCon, FavValue } from "../header/header";
import responsive from "../../../../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

const Container = styled.div`
  width: 80vw;
  display: flex;
  margin: 30px auto;
  align-items: center;
  justify-content: space-between;
  ${responsive(`
    flex-direction:column;
    gap:20px;
  `)}
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 300;
  display: flex;
  align-items: center;
`;
const InputCon = styled.div`
  display: flex;
  align-items: center;
  padding: auto 10px;
  background-color: rgb(218, 213, 213, 0.2);
  height: 40px;
  width: 450px;
  border: 1px solid gray;
  ${responsive(`
    width:200px;
  `)}
`;
const Inp = styled.input`
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  flex: 5;
  margin-left: 10px;
  color: var(--dark);
`;
const IconsCon = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 30px;
`;

const LogoImg = styled.img`
  height: 40px;
`;
type propType={
  cartLength:number
}
const SearchAndFav = () => {
  const cart= useSelector((state:RootState)=>state.cart)
  return (
    <>
      <Container>
        <Logo>
          <LogoImg src={logo} />
          Uyit
        </Logo>
        <InputCon>
          <Inp placeholder="Start typing to search" />
          <CiSearch style={{ fontSize: "30px", flex: 1 }} />
        </InputCon>
        <IconsCon>
          <CiSettings style={{ fontSize: "30px" }} />
          <Link style={{color:"black"}} to="/cart/id">
          <FavCon>
            <IoCartOutline style={{ fontSize: "30px" }} />
            <FavValue>{cart.products.length}</FavValue>
          </FavCon>
          </Link>
        </IconsCon>
      </Container>
      <hr />
    </>
  );
};
export default SearchAndFav;
