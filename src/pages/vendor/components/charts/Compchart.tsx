import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line,  Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    "name": "This month",
    "orders": 4000,
    "products": 2400,
    "sales": 2400
  },
  {
    "name": "Last month",
    "orders": 3000,
    "products": 1398,
    "sales": 2210
  },
  {
    "name": "Previous month",
    "orders": 2000,
    "products": 9800,
    "sales": 2290
  }
]

const CompChart=()=>{

    return(
        

        <ComposedChart width={500} height={280} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip/>
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="sales" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="products" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="orders" stroke="#ff7300" />
</ComposedChart>
        
    )
}                            
export default CompChart