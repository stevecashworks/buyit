import styled from "styled-components";
import logo from "../../../assets/Buyit Logo.png";
import { contentKey } from "./content";
import React from "react";


const NavCon = styled.div`
  height: 600px;
  background-color: #e7f3d7;
  box-sizing: border-box;
  padding-top:60px;
  
  width: 300px;
`;
const Img = styled.img`
  margin: 20px auto;
  width: 100px;
  display: block;
  opacity: 0.6;
`;
const Category = styled.p`
  text-align: center;
  font-weight: 600;
  color: #352e2e;
  font-size: 20px;
`;
const Stat= styled.p`
    font-weight:bold;
    font-size:14px;
    text-align: center;
    color:rgb(0,0,0,0.5);

`
const Link = styled.div<{ active: boolean }>`
  padding: 8px 20px;
  text-transform: capitalize;
  color:${props=>props.active?"red":"black"};
  border-right: ${(props) =>
    props.active ? "2px solid red" : "none"};
  &:hover {
    border-right: "2px solid red";
    color:red;
  }
`;
const links=[
    {text:"dashboard",id:"vendorLinkText1"},
    {text:"products",id:"vendorLinkText2"},
    {text:"orders",id:"vendorLinkText3"},
    {text:"profile",id:"vendorLinkText4"},
    {text:"settings",id:"vendorLinkText5"},
    {text:"logout",id:"vendorLinkText6"},
]
type navProps = {
  fn: React.Dispatch<React.SetStateAction<contentKey>>,
  currentLink?:string
};
const Nav = ({fn,currentLink}:navProps) => {
  
  return (
    <NavCon>
      <Img src={logo} />
      <Category>Fashion Store</Category>
      <Stat>750 followers | 25 reviews</Stat>
      <Stat>info@buyit.com</Stat>
      {links.map(link=><Link key={link.id} active={link.text===currentLink} onClick={()=>{fn(link.text as contentKey)}} >{link.text}</Link>)}
    </NavCon>
  );
};
export default Nav;
