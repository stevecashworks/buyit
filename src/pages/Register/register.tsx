import { CiUnlock } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import styled from "styled-components";
import uploadFile from "../../upload/addImg";
import { useState } from "react";



const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background-color: var(--grad-background);
  background-image: var(--grad);
  display: flex;
  padding-top: 20px;
  justify-content: center;
  height:1500px;

`;
const FormCon = styled.form`
  background-color: white;
  width: 400px;
  height: 600px;
  border-radius: 20px;
  padding: 20px 50px;
  height:fit-content;
`;
const PageHeader = styled.p`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.6);
  margin-bottom: 40px;
`;
const FormGroup = styled.div`
  margin-bottom: 40px;
  color: rgb(0, 0, 0, 0.4);
`;
const InpCon = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;
const Label = styled.p`
  color: black;
  font-weight: 600;
`;
const InpLabel = styled.label`
  font-size: 24px;
`;
const InpGroup=styled.div`
    display:flex;
    align-items: center;
    margin-right:20px;
    gap:10x;

`
const Inp = styled.input`
  border: none;
  outline: none;
  &.radio{
    width:20px;
    height:20px;
  }

`;
const Path = styled.a`
  float: right;
  text-decoration: none;
  color: inherit;
  margin-top: 5px;
  font-size: 14px;
  &.center {
    float: left;
    text-align: center;
    width: 100%;
    text-transform: capitalize;
    font-size: 16px;
    color: rgb(0, 0, 0, 0.6);
  }
`;
const IconsCon = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  top: 20px;
  margin: 20px auto;
  justify-content: center;
`;
const IconCon = styled.div<{ col: string }>`
  color: white;
  background-color: ${(props) => props.col};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s linear;
  &:hover {
    background-color: rgb(0, 0, 0, 0.8);
  }
`;

const Btn = styled.button`
  background-color: #00dbde;
  background-image: linear-gradient(90deg, #08989b 0%, #c205c5 100%);
  width: 350px;
  height: 50px;
  color: white;
  margin: 35px auto;
  display: block;
  border-radius: 15px;
  position: relative;
  right: 20px;

  &:before {
    content: "";
    border-radius: 15px;
    position: absolute;
    transition: all 0.3s ease;
    background-color: rgb(255, 255, 255, 0.1);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: scaleX(0%);
    transform-origin: left;
  }
  &:hover:before {
    transform: scaleX(100%);
  }
`;
type userType="vendor"|"customer"
const Register = () => {
    const [userType,setUserType]= useState<userType>("customer")
  return (
    <Container>
      <FormCon>
        <PageHeader>Register</PageHeader>
        <FormGroup>
          <Label>Username</Label>
          <InpCon>
            <InpLabel>
              <IoPerson />
            </InpLabel>
            <Inp type="text" id="name" placeholder="type your username" />
          </InpCon>
        </FormGroup>
        <FormGroup>
          <Label>user type</Label>
          <InpCon>
            {/* <InpLabel>
              <IoPerson />
            </InpLabel>
            <Inp type="text" id="name" placeholder="type your username" /> */}

            <InpGroup>
              <InpLabel htmlFor="customer">Buyer</InpLabel>
              <Inp
                className="radio"
                id="customer"
                type="radio"
                value="customer"
                name="userType"
              />
            </InpGroup>
            <InpGroup>
              <InpLabel htmlFor="vendor">Seller</InpLabel>
              <Inp
                className="radio"
                id="vendor"
                type="radio"
                value="vendor"
                name="userType"
              />
            </InpGroup>
          </InpCon>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <InpCon>
            <InpLabel>
              <IoPerson />
            </InpLabel>
            <Inp type="email" id="name" placeholder="type your email" />
          </InpCon>
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <InpCon>
            <InpLabel htmlFor="password">
              <CiUnlock />
            </InpLabel>
            <Inp
              type="password"
              id="password"
              placeholder="type your password"
            />
          </InpCon>
        </FormGroup>

        <Btn>Register</Btn>
        <Path className="center">Login instead</Path>
        <IconsCon>
          <IconCon col="var(--primary)">
            <FaFacebookF />
          </IconCon>
          <IconCon col="var(--info)">
            <FaTwitter />
          </IconCon>
          <IconCon col="var(--danger)">
            <FaGoogle />
          </IconCon>
        </IconsCon>
      </FormCon>
    </Container>
  );
};

export default Register;
