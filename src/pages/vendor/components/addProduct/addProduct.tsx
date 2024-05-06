import { Button } from "react-bootstrap";
import styled from "styled-components";
import upload from "../../../../assets/uploadImg.jpg";
import React, { useState } from "react";
import uploadFile from "../../../../upload/addImg";
import Spinner from "react-bootstrap/Spinner";
import ErrorsModal from "./errorsModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import fetch_helper from "../../../../helpers/fetchhelper";
import apiEntry from "../../../../apiEntry";
import {   useNavigate } from "react-router-dom";
import { responseType } from "../../../Register/register";

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: rgb(21, 21, 43);
  padding-top: 20px;
  color: white;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid rgb(255, 255, 255, 0.3);
  border-bottom: 1px solid rgb(255, 255, 255, 0.3);
  width: 100%;
  height: 70px;
  align-items: center;
  margin-top: 20px;
`;
const HeaderText = styled.div`
  font-size: 20px;
  padding-left: 30px;
`;
const BtnsCon = styled.div`
  display: flex;
  gap: 30px;
`;
const ProductInfoCon = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  padding: 40px;
`;
const ProductInformation = styled.div``;

const DetailText = styled.p`
  font-size: 16px;
`;
const DetailCon = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgb(255, 255, 255, 0.1);
  &.noBorder {
    border: none;
  }
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;
const Label = styled.label`
  cursor: poibnter;
`;
const ColorInp = styled.input`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
const ProductImgCon = styled.div`
  display: flex;
  gap: 10px;
`;
const ProductImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;
const ImgCon = styled.div`
  width: 300px;
  height: 200px;
  background-color: rgb(238, 236, 241);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
const PreviewImg = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 4px;
`;
const Inp = styled.input`
  background-color: rgba(13, 46, 90, 0.322);
  border: none;
  outline: none;
  height: 40px;
  width: 350px;
  color: white;
  &.small-radio {
    height: 20px;
    width: 20px;
  }
`;
const TextArea = styled.textarea`
  background-color: rgba(13, 46, 90, 0.322);
  border: none;
  outline: none;
  height: 80px;
  width: 350px;
  color: white;
`;
const PreviewDetailCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin: 15px auto;
  align-items: center;
`;
const PreviewDetail = styled.div`
  &.title {
    width: 200px;
  }
`;
const Preview = styled.div`
  padding: 0 40px;
`;

const HiddenInp = styled.input`
  display: none;
`;
const ColorsCon = styled.div`
  display: flex;
  gap: 8px;
`;
const PicCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RadioButton = styled.div`
  display: flex;
  text-transform: capitalize;
`;
const Color = styled.div<{ col: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.col};
  position: relative;
  overflow-y: hidden;
  cursor: pointer;
  &:after {
    content: "x";
    color: white;
    background-color: rgb(255, 255, 255, 0.1);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    left: 0;
    transform: translateY(100%);
    transition: all 0.4s ease;
  }
  &:hover:after {
    transform: translateY(0);
  }
`;
const Prog = styled.div<{ progress: progressType }>`
  width: 36px;
  height: 36px;
  background-color: ${(props) =>
    props.progress === "success" ? "transparent" : "var(--danger)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
`;
export type previewType = {
  id: string;
  img: string;
};

type pictureProp = {
  id: string;
  fn: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        img: string;
      }[]
    >
  >;
  previewImages: {
    id: string;
    img: string;
  }[];
  productName: string;
};

const imgIds = ["img1", "img2", "img3", "img4"];
const defaultPreviewImages = [
  { id: "img1", img: upload },
  { id: "img2", img: upload },
  { id: "img3", img: upload },
  { id: "img4", img: upload },
];
export type progressType = "loading" | "success" | "failed" | "pending";

const Picture = ({ id, fn, previewImages, productName }: pictureProp) => {
  function BasicExample() {
    return (
      <Spinner
        style={{
          width: "15px",
          color: "#2b2b7a",
          height: "15px",
          marginTop: "5px",
        }}
        animation="border"
        role="status"
      ></Spinner>
    );
  }
  // el stands for element
  const [progress, setProgress] = useState<progressType>("pending");
  const El =
    progress === "pending"
      ? () => <></>
      : progress == "loading"
      ? BasicExample
      : () => (
          <Prog progress={progress}>{progress === "failed" ? "x" : "☑"}</Prog>
        );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
    
      uploadFile({
        setProgress,
        file: e.target.files[0],
        setUrls: fn,
        prevState: previewImages,
        productName,
        id,
      });

      // fn(
      //   previewImages.map((img) => {
      //     if (img.id === id) {
      //       return { ...img, img: selectedImg };
      //     }
      //     return img;
      //   })
      // );
    }
  };
  const currentImg = previewImages.filter((img) => img.id === id)[0];
  console.log({ currentImg });

  return (
    <PicCon>
      <Label htmlFor={id}>
        <ProductImage src={currentImg.img} />
      </Label>
      <HiddenInp type="file" onChange={(e) => handleChange(e)} id={id} />
      <El />
    </PicCon>
  );
};

const AddProduct = () => {

  
  const token = localStorage.getItem("buyit_token");
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  if (!user.is_logged_in || !token) {
    navigate("/");
  }
  const [uploadingProduct,setUploadingProduct]= useState<boolean>(false)
  const [mileage,setMileage] = useState<string>("new");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [description, setDescription] = useState("");

  const [colors, setColors] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState("#fffff");
  const [modalOpen, setModalOpen] = useState(false);
  const [previewImages, setPreviewImages] = useState(defaultPreviewImages);
  const [errors, setErrors] = useState<string[]>([]);
  const [stock, setStock] = useState(1);
  console.log(mileage);

  const add_products = () => {
    const onSuccess = (data: responseType) => {
      console.log(data);
      alert("product was added successfully");
      setUploadingProduct(false);
      window.location.reload()
      

      
    };
    // first empty the list of errors
    setErrors([]);
    const temporary_errors = [];

    // checks if user uploaded an image
    const images_were_added =
      JSON.stringify(previewImages) !== JSON.stringify(defaultPreviewImages);
    if (!images_were_added) {
      temporary_errors.push("At least one image is required");
    }
    if (colors.length === 0) {
      temporary_errors.push("At least one color is required");
    }
    if (title.length === 0) {
      temporary_errors.push("Product name cannot be left blank");
    }
    if (price === 0) {
      temporary_errors.push("Product price cannot be left blank");
    }

    if (temporary_errors.length > 0) {
      setModalOpen(!modalOpen);
    } else {
      setUploadingProduct(true)
      fetch_helper({

        method: "post",
        url: `${apiEntry}/products/new`,
        onSuccess,
        token,
        body: {
          productName: title,
          stock,
          img: previewImages[0].img,
          price: price - 0.01,
          description,
          colors,
          otherImages: previewImages
            .filter((img) => img.img !== upload)
            .map((img) => img.img),
            mileage
        },
      });
    }

    setErrors(temporary_errors);
  };
  console.log(previewImages);
  return (
    <Container>
      <ProductHeader>
        <HeaderText>Add Product</HeaderText>
        <BtnsCon>
          <Button variant="outline-success"> Save Draft</Button>
          <Button onClick={add_products} disabled={uploadingProduct} variant="primary">
            {" "}
            {
            uploadingProduct&&(<Spinner

              style={{
                width: "15px",
                color: "#ffffff",
                height: "15px",
                marginTop: "5px",
                marginRight:"10px"
              }}
              animation="border"
              role="status"
            ></Spinner>)
            }
            Add Product
          </Button>
        </BtnsCon>
      </ProductHeader>
      <ProductInfoCon>
        <ProductInformation>
          <DetailText>Product Information</DetailText>
          <DetailCon>
            <Detail>
              <Label>Product title:</Label>
              <Inp
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Detail>

            <Detail>
              <Label>Product Description:</Label>
              <TextArea
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(e.target.value);
                }}
              ></TextArea>
            </Detail>
            <Detail>
              <Label>Price:</Label>
              <Inp
                type="number"
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                }}
              />
            </Detail>
          </DetailCon>
          <DetailCon className="noBorder">
            <DetailText>Pictures</DetailText>

            <ProductImgCon>
              {imgIds.map((img) => (
                <Picture
                  productName={title}
                  previewImages={previewImages}
                  fn={setPreviewImages}
                  id={img}
                />
              ))}
            </ProductImgCon>
          </DetailCon>
        </ProductInformation>

        {/* preview */}

        <Preview>
          <DetailText>Preview</DetailText>
          <ImgCon
            onClick={() => {
              setIndex(index === 3 ? 0 : index + 1);
            }}
          >
            <PreviewImg src={previewImages[index].img} />
          </ImgCon>

          <PreviewDetailCon>
            <PreviewDetail className="title">{title}</PreviewDetail>
            <PreviewDetail>
              <span style={{ marginRight: "8px" }}>$</span>
              {price}
            </PreviewDetail>
          </PreviewDetailCon>
          <Detail>
            <Label>Stock:</Label>
            <Inp
              onChange={(e) => {
                setStock(Number(e.target.value));
              }}
              type="number"
              value={stock}
            />
          </Detail>
          <PreviewDetailCon>
            <RadioGroup>
              <RadioButton>
                <Label htmlFor="new">New product</Label>
                <Inp
                  className="small-radio"
                  type="radio"
                  name="new/featured"
                  id="new"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setMileage(e.target.id);
                    }
                  }}
                />
              </RadioButton>

              <RadioButton>
                <Label htmlFor="featured">featured product</Label>
                <Inp
                  className="small-radio"
                  id="featured"
                  name="new/featured"
                  type="radio"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setMileage(e.target.id);
                    }
                  }}
                />
              </RadioButton>
            </RadioGroup>
          </PreviewDetailCon>
          <PreviewDetailCon>
            <ColorInp
              value={currentColor}
              onChange={(e) => {
                setCurrentColor(e.target.value);
              }}
              id="colorinp"
              type="color"
            />

            <Button
              onClick={() => {
                setColors(Array.from(new Set([...colors, currentColor])));
              }}
              variant="primary"
            >
              Add Color
            </Button>
          </PreviewDetailCon>

          <ColorsCon>
            {colors.map((col) => (
              <Color
                onClick={() => {
                  setColors(colors.filter((x) => x !== col));
                }}
                col={col}
              />
            ))}
          </ColorsCon>
        </Preview>
      </ProductInfoCon>
      <ErrorsModal
        closeModal={setModalOpen}
        modalOpen={modalOpen}
        errors={errors}
      />
    </Container>
  );
};
export default AddProduct;
