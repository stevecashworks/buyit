import styled from "styled-components";
import { FaPhone } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { PiSunDimLight } from "react-icons/pi";
import { LuMoonStar } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import responsive from "../../../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../../../state/theme/themeSlice";
import Menu from "./menu";

const Container = styled.div<{ theme: string }>`
  width: 100vw;
  height: 50px;
  display: flex;
  
  align-items: center;
  background-color: var(
    --${(props) => (props.theme === "light" ? "dark" : "light")}
  );
  color: var(--${(props) => props.theme});
  background-color: var(--top-gray);
  color: var(--light);
  justify-content: space-around;
  ${responsive(`
    flex-direction:row-reverse;
  `)}
`;
const NavBtn=styled.div`
  
`
const Contact = styled.div`
  display: flex;
  ${responsive(`
    display:none;
  `)}
`;
const ThemeAndFav = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const FavCon = styled.div`
  position: relative;
  top: 10px;
`;
export const FavValue = styled.div`
  color: var(--light);
  background-color: var(--primary);
  position: absolute;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -15px;
  top: -15px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
`;
const ContactDetail = styled.span`
  display: flex;
  align-items: center;
`;
const ThemeCon = styled.div`
  display: flex;
  align-items: center;
  ${responsive(`
    display:none;
  `)}
`;
const ThemeInp = styled.div<{ theme: string }>`
  height: 10px;
  width: 30px;
  border-radius: 10px;
  background-color: var(--${(props) => props.theme});
  background-color: var(--light);
`;
const Circle = styled.div<{ theme: string }>`
  background-color: var(--primary);
  height: 10px;
  width: 10px;
  border-radius: 50%;
  transform: translateX(
    ${(props) => (props.theme === "light" ? "0px" : "20px")}
  );
  transition: all 0.5s linear;
`;
const Hr = styled.div`
  background-color: rgb(255, 255, 255, 0.1);
  height: 0.5px;
  width: 100%;
  margin-top: 20px;
`;
const AccountCon = styled.div`
  display: flex;
  align-items: center;
`;
const Header = () => {
  const theme= useSelector(selectTheme)
  const dispatch=useDispatch()
  return (
    <>
      <Container theme={theme}>
        <NavBtn>
          {/* <GiHamburgerMenu size={"24"}/> */}
          <Menu/>
        </NavBtn>
        <Contact>
          <ContactDetail>Welcome to our store at Buyit</ContactDetail>
          <ContactDetail style={{ marginLeft: "20px" }}>
            <FaPhone style={{ marginRight: "10px" }} /> call us on
            +123-456-789-0
          </ContactDetail>
        </Contact>
        <ThemeAndFav>
          <FavCon>
            <MdFavorite style={{ color: "gray", fontSize: "20px" }} />
            <FavValue>0</FavValue>
          </FavCon>
          <ThemeCon
            onClick={() => {
              dispatch(toggleTheme())
            }}
          >
            <PiSunDimLight />
            <ThemeInp theme={theme}>
              <Circle theme={theme} />
            </ThemeInp>
            <LuMoonStar />
          </ThemeCon>
        </ThemeAndFav>
        <AccountCon>
          <IoPerson style={{ marginRight: "10px" }} /> My Account
        </AccountCon>
      </Container>
      <Hr />
    </>
  );
};
export default Header;
