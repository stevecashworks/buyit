import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppContext } from "../../../../App";
import { useState } from "react";
import "./links.css";
import responsive from "../../../../responsive";

const Container = styled.div`
  width: 80vw;
  margin: 10px auto;
  display: flex;
  height: 40px;
  overflow-x:hidden;
  background:green;
`;
const CategorySubCon = styled.div`
  background-color: var(--info);
  color: var(--light);
  height: 80px;
  width: 250px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-left: 10px;
  cursor: pointer;
`;
const LinksCon = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: 100px;
  ${responsive(`
    display:none
  `)}
`;

const Link = styled.a<{ theme: string }>`
  color: ${(props) =>
    props.theme === "light" ? "rgb(0,0,0,0.8)" : "rgb(255,255,255,0.8)"};
  /* font-weight:600; */
  text-transform: capitalize;
`;
const CategoryCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  height: 80px;
`;

const LinkData = [
  { text: "home", path: "/" },
  { text: "Login", path: "/login" },
  { text: "Register", path: "/register" },
  { text: "MyCart", path: "/cart" },
];
const categories = [
  "Fashion",
  "tv & audio",
  "air conditioners",
  "refrigerators",
  "washing machines",
  "kitchen",
  "gaming consoles",
  "cameras",
  "heating & cooling",
  "all electronics",
];
const Category = styled.div`
  text-transform: uppercase;
  color: rgb(0, 0, 0, 0.7);
  cursor: pointer;
`;
const variant = {
  initial: {
    scaleY: 0,
    opavity: 0,
  },
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
    },
  },
};
const Links = () => {
  const [catOpen, setCatOpen] = useState(false);
  const { theme } = useContext(AppContext);
  console.log(catOpen);
  return (
    <Container>
      <CategoryCon>
        <CategorySubCon
          onClick={() => {
            setCatOpen(!catOpen);
          }}
        >
          <GiHamburgerMenu style={{ marginRight: "5px" }} />
          Browse by category
        </CategorySubCon>
        <motion.div
          variants={variant}
          initial="initial"
          animate={catOpen ? "open" : "initial"}
          className="category-list-con"
        >
          {categories.map((cat) => (
            <Category>{cat}</Category>
          ))}
        </motion.div>
      </CategoryCon>
      <LinksCon>
        {LinkData.map((link) => (
          <Link theme={theme} href={link.path}>
            {link.text}
          </Link>
        ))}
      </LinksCon>
    </Container>
  );
};
export default Links;
