import { Table } from "react-bootstrap";
import styled from "styled-components";
import Row from "./row";
import fetch_helper from "../../../../helpers/fetchhelper";
import apiEntry from "../../../../apiEntry";
import { responseType } from "../../../Register/register";
import { useEffect, useState } from "react";
import responsive from "../../../../responsive";
const Th = styled.th`
  text-transform: capitalize;
`;
const Tbody=styled.tbody`
margin-top:20px;
    
`
const TableCon = styled.div`
  ${responsive(`
    width: 95vw;
    margin: 30px auto;
    overflow-x: auto;
  `)}

  /* Custom scrollbar styles */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  

  &::-webkit-scrollbar {
    height: 8px; /* Slimmer horizontal scrollbar height */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Track background color */
    border-radius: 10px; /* Rounded corners */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Scrollbar thumb color */
    border-radius: 20px; /* More rounded corners */
    border: 2px solid #f1f1f1; /* Padding around the thumb */
    
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Thumb color on hover */
  }
`;

type vendorProductType={
  image:string,
  name:string,
  categories:string[],
  price:number,
  stock:number,
  sales:number
}

type fetchedProductType = { img: string; productName: string };
const ProductList = () => {

  const [fetchedProducts, setFectchedProducts]=useState<vendorProductType[]>([])
  const token=localStorage.getItem("buyit_token")
  const onSuccess=(data:responseType)=>{
    console.log(data.result)
    if(Array.isArray(data.result)){
      const formattedResult:vendorProductType[]=data.result.map((product)=>{
        const {img,productName}=product as fetchedProductType
        return {...product,image:img ,name:productName}

      }) 
      setFectchedProducts(formattedResult)
    }
  }
  useEffect(()=>{
fetch_helper({
  url: `${apiEntry}/products/myproducts`,
  method: "post",
  token,
  onSuccess,
});

  },[])
  

  return (
    <TableCon>

    <Table responsive  striped>
      <thead>
        <Th>Image</Th>
        <Th>Product Name</Th>
        <Th>Category</Th>
        <Th>Price</Th>
        <Th>stock</Th>
        <Th>sales</Th>
        <Th>action</Th>
      </thead>
      <Tbody>
        {fetchedProducts.map((row) => (
          <Row {...row} />
        ))}
      </Tbody>
    </Table>
        </TableCon>
  );
};
export default ProductList;
