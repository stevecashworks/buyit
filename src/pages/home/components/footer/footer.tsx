import "./footer.css";
import styled from "styled-components";
import logo from "../../../../assets/Buyit Logo.png";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail, MdRssFeed } from "react-icons/md";
import responsive from "../../../../responsive";
const platforms = [FaFacebookF, FaGoogle, FaTwitter, FaInstagram, MdRssFeed];
const Container = styled.div`
  background-color: rgb(27, 26, 26);
  width: 100vw;
  height: 430px;
  color: rgb(255, 255, 255, 0.4);
  padding: 60px;
  display: flex;
  gap: 15px;
  box-sizing: border-box;
  justify-content: space-between;
  ${responsive(`
    flex-direction:column-reverse;
    height:1700px;
    align-items:center;
    gap:40px;
    padding:60px 0;
    margin-top:20px;
  `)}
`;
const TextLink = styled.div`
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    transition: all 0.5s ease;
    bottom: -5px;
    width: 50px;
    height: 2px;
    background-color: var(--info);
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
const accountLinks = ["mens", "womens", "clothing", "accessories", "featured"];
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoText = styled.span`
  font-size: 40px;
  margin-left: 10px;
  letter-spacing: 2px;
`;
const LogoImg = styled.img`
  width: 50px;
  opacity: 0.4;
`;
const ContactText = styled.p`
  width: 200px;
  margin: 20px 0;
  font-size: 15px;
`;
const Inp = styled.input`
  display: block;
  background-color: white;
  height: 40px;
  padding-left: 20px;
`;
const Btn = styled.button`
  background-color: var(--info);
  width: 200px;
  height: 40px;
  color: white;
  font-weight: bold;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  ${responsive(`
    flex-direction:column-reverse;
  `)}
`;
const Account = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SectionHeader = styled.h3`
  color: var(--light);
  margin-bottom: 30px;
`;
const ContactDetail = styled.div`
  display: flex;
  margin: 15px 0;
`;
const ContactDetailText = styled.div`
  margin-left: 20px;
`;
const Follow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Platforms = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;
const Platform = styled.div`
  background-color: rgb(0, 0, 0, 0.4);
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const infoLinks = [
  "shipping and return",
  "secure shopping",
  "gallery",
  "affiliates",
  "contacts",
];
const Footer = () => {
  return (
    <Container>
      <Contact>
        <Logo>
          <LogoImg src={logo} />
          <LogoText>Uyit</LogoText>
        </Logo>
        <ContactText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </ContactText>

        <ContactDetail>
          <CiLocationOn />
          <ContactDetailText>
            Buyit Demo Store, Demo Store India 345-659
          </ContactDetailText>
        </ContactDetail>

        <ContactDetail>
          <FaPhone />
          <ContactDetailText>Call Us: 123-456-7898</ContactDetailText>
        </ContactDetail>

        <ContactDetail>
          <MdOutlineEmail />
          <ContactDetailText>Email Us: Support@buyit.Com</ContactDetailText>
        </ContactDetail>
      </Contact>

      <Account>
        <SectionHeader>My Account</SectionHeader>
        {accountLinks.map((link) => (
          <TextLink>{link}</TextLink>
        ))}
      </Account>
      <Information>
        <SectionHeader>Information</SectionHeader>
        {infoLinks.map((link) => (
          <TextLink>{link}</TextLink>
        ))}
      </Information>
      <Follow>
        <SectionHeader>Follow Us</SectionHeader>
        {/* <ContactText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </ContactText> */}
        <Inp placeholder="Your Email" />
        <Btn>Subscribe</Btn>
        <Platforms>
          {platforms.map((plat) => {
            const Icon = plat;
            return (
              <Platform>
                <Icon />
              </Platform>
            );
          })}
        </Platforms>
      </Follow>
    </Container>
  );
};
export default Footer;
