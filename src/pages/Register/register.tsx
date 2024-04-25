import { CiUnlock } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import styled from "styled-components";
import logoPlaceholder from "../../assets/uploadImg.jpg"
import React, { useState } from "react";
import uploadLogo from "./uploadLogo";
import fetch_helper from "../../helpers/fetchhelper";
import apiEntry from "../../apiEntry";
import { Link, useNavigate } from "react-router-dom";



export const linkStyle= {
  textDecoration:"none",
  color:"unset"
}

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
const LogoInpCon=styled.div`
    display:flex;
    flex-direction: column;
    gap:8px;
    justify-content:center;
    align-items:center;
`
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
const FigCaption=styled.figcaption`
    font-size:14px;
    text-align:center;
`

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
const LogoImg=styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
    object-fit: cover;
    margin:20px auto;

`
export type responseType={success:boolean, result:object|string}
 type resultType={token:string}
// type userType="vendor"|"customer"
const Register = () => {
    const navigate=useNavigate()
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>,setLogo:React.Dispatch<React.SetStateAction<string>>)=>{
if(e.target.files&&e.target.files[0]){
    uploadLogo({file:e.target.files[0],setImg:setLogo})
    
}
        
    }

    const [userType,setUserType]= useState<string>("customer")
    const [logo, setLogo]=useState<string>(logoPlaceholder)
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [checkPassword,setCheckPassword]=useState<string>("")

    const onSuccess=(data:responseType)=>{
        console.log(data.result)
        const {token}=data.result as resultType
        localStorage.setItem("buyit_token", token)

        navigate("/")
        
    }
    

const add_user = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
  const compulsory_fields = [name, email, password];
  const some_fields_were_omitted = compulsory_fields.some((field) => !field);
  if (some_fields_were_omitted) {
    alert("fill form correctly to proceed");
  } else {
    const passwords_match = password === checkPassword;
    if (!passwords_match) {
      alert("passwords do not match");
    } else {
      const logo_has_not_changed = logo === logoPlaceholder;
      const body = logo_has_not_changed
        ? { email, userName:name, password,userType,  }
        : { email, userName:name, password,userType, logo };
      fetch_helper({ method: "post", url: `${apiEntry}/users/register`,onSuccess, body });
    }
  }
};




  return (
    <Container>
      <FormCon>
        <PageHeader>Register</PageHeader>
        {userType == "vendor" && (
          <LogoInpCon>
            <InpLabel htmlFor="logo">
              <figure>
                <LogoImg src={logo} />
                <FigCaption>Logo</FigCaption>
              </figure>
            </InpLabel>
            <Inp
              type="file"
              style={{ display: "none" }}
              id="logo"
              onChange={(e) => {
                handleChange(e, setLogo);
              }}
            />
          </LogoInpCon>
        )}

        <FormGroup>
          <Label>Username</Label>
          <InpCon>
            <InpLabel>
              <IoPerson />
            </InpLabel>
            <Inp
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="name"
              placeholder="type your username"
            />
          </InpCon>
        </FormGroup>
        <FormGroup>
          <Label>user type</Label>
          <InpCon>
            <InpGroup>
              <InpLabel htmlFor="customer">
                <Inp
                  className="radio"
                  id="customer"
                  type="radio"
                  value="customer"
                  name="userType"
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                />
                Buyer
              </InpLabel>
            </InpGroup>
            <InpGroup>
              <InpLabel htmlFor="vendor">
                <Inp
                  className="radio"
                  id="vendor"
                  type="radio"
                  value="vendor"
                  name="userType"
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                />
                Seller
              </InpLabel>
            </InpGroup>
          </InpCon>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <InpCon>
            <InpLabel>
              <IoPerson />
            </InpLabel>
            <Inp
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              placeholder="type your email"
            />
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InpCon>
        </FormGroup>
        <FormGroup>
          <Label>Retype Password</Label>
          <InpCon>
            <InpLabel htmlFor="repassword">
              <CiUnlock />
            </InpLabel>
            <Inp
              type="password"
              id="repassword"
              placeholder="re-type your password"
              onChange={(e) => {
                setCheckPassword(e.target.value);
              }}
            />
          </InpCon>
        </FormGroup>

        <Btn
          onClick={(e) => {
            add_user(e);
          }}
        >
          Register
        </Btn>
        <Path className="center">
          <Link to="/login" style={linkStyle}>Login instead</Link>
        </Path>
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
