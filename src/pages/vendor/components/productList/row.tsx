import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import styled from "styled-components";

const Tr = styled.tr`
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);

  align-items: center;
`;
const Td = styled.td``;
const Img = styled.img`
  height: 60px;
`;
type rowProps = {
  image: string;
  name: string;
  categories: string[];
  price: number;
  stock: number;
  sales: number;
};
const Row = ({ image, name, categories, price, stock, sales }: rowProps) => {
  return (
    <Tr>
      <Td>
        <Img src={image} />
      </Td>
      <Td>{name}</Td>
      <Td>{categories.join(", ")}</Td>
      <Td>{price}</Td>
      <Td>{stock}</Td>
      <Td>{sales}</Td>
      <Td>
        <MdOutlineDeleteForever
          style={{ marginRight: "10px", color: "var(--danger)" }}
        />
        <FaEdit style={{ color: "var(--success)" }} />
      </Td>
    </Tr>
  );
};
export default Row;
