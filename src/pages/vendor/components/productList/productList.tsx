import { Table } from "react-bootstrap";
import styled from "styled-components";
import cam from "../../../../assets/cam.png";
import Row from "./row";
const Th = styled.th`
  text-transform: capitalize;
`;
const Tbody=styled.tbody`
margin-top:20px;
    
`
const samplerow = {
  image: cam,
  name: "professional HD camera",
  categories: ["electronics", "work"],
  price: 250,
  stock: 3019,
  sales: 401,
};

const ProductList = () => {
  const rowsData = new Array(5).fill(samplerow);
  return (
    <Table responsive >
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
        {rowsData.map((row) => (
          <Row {...row} />
        ))}
      </Tbody>
    </Table>
  );
};
export default ProductList;
