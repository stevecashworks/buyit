import styled from "styled-components";

const RowCon = styled.tr``;
const Btn = styled.button<{ text?: string }>`
  background-color: ${(props) => {
    let color;
    switch (props.text) {
      case "cancelled":
        color = "rgb(226, 102, 102)";
        break;
      case "completed":
        color = "rgb(122, 206, 122)";
        break;
      case "pending":
        color = "rgb(238, 228, 94)";
        break;

      default:
        color = "white";

        break;
    }

    return color;
}};

color: ${(props) => {
    let color;
    switch (props.text) {
        case "cancelled":
            color = "rgb(175, 5, 5)";
            break;
      case "completed":
        color = "rgb(2, 63, 2)";
        break;
      case "pending":
        color = "rgb(117, 111, 17)";
        break;
        
        default:
            color = "white";
            
            break;
        }
        
        return color;
    }};
width:120px;
border-radius: 10px;
opacity:0.7;
text-transform:capitalize;
`;
const Td = styled.td``;
type RowProps = {
  name: string;
  orderId: string;
  price: number;
};

const OrderRow = ({ name, orderId, price }: RowProps) => {
  const statusOptions = ["pending", "completed", "cancelled"];
  const status =
    statusOptions[Math.floor(Math.random() * statusOptions.length)];
  return (
    <RowCon>
      <Td>{orderId}</Td>
      <Td>{name}</Td>
      <Td>
        <Btn text={status}>{status}</Btn>
      </Td>
      <Td>${price}</Td>
    </RowCon>
  );
};
export default OrderRow;
