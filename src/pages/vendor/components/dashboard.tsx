import styled from "styled-components";
import { FaDropbox } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { IconType } from "react-icons";
import CompChart from "./charts/Compchart";
import RoundChart from "./charts/roundchart";

const Container = styled.div`
  width: 100%;
`;
const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Stat = styled.div`
  background-color: #d8e2cb;
  width: 250px;
  height: 120px;
  display: flex;
  gap: 30px;
`;
const IconCon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
`;
const DetailsCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const Value = styled.div`
  color: blueviolet;
  font-size: 30px;
`;
const DetailText = styled.div``;
const ChartsCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  top: 80px;
`;
const statsData = [
  { icon: FaDropbox, text: "Total Products", value: 25 },
  { icon: FaBagShopping, text: "Total Sales", value: 12500 },
  { icon: MdPendingActions, text: "Pending Orders", value: 50 },
];
type cardProps = {
  text: string;
  icon: IconType;
  value: number;
};

const StatCard = ({ text, icon, value }: cardProps) => {
  const Icon = icon;
  return (
    <Stat>
      <IconCon>
        <Icon style={{ fontSize: "35px", color: "blueviolet" }} />
      </IconCon>
      <DetailsCon>
        <Value>{value}</Value>
        <DetailText>{text}</DetailText>
      </DetailsCon>
    </Stat>
  );
};
const Dashboard = () => {
  return (
    <Container>
      <Stats>
        {statsData.map((st) => (
          <StatCard {...st} />
        ))}
      </Stats>
      <ChartsCon>
        <CompChart />
        <RoundChart/>
      </ChartsCon>
    </Container>
  );
};
export default Dashboard;
