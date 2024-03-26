import { table } from "console";

const Table = () : JSX.Element => {
const transactions = [
    { id:1,
        date:"12/12/2023",
        country: "US",
        currency: "USD",
        amount: 123.45,
    },
  
    { id:2,
        date:"1/2/2023",
        country: "FR",
        currency: "EUR",
        amount: 23.45,
    },

    { id:3,
        date:"1/31/2023",
        country: "FR",
        currency: "EUR",
        amount: 12.35,
    },
    
    { id:4,
        date:"8/2/2023",
        country: "FR",
        currency: "EUR",
        amount: 999.87,
    },
    

]

return(<table className="table">
            
            <tbody><tr><th>ID</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th></tr>
            {transactions.map((transaction, index)=> {return (<tr key={index}><td>{transaction.id}</td>
                                                                            <td>{transaction.date}</td>
                                                                            <td>{transaction.country}</td>
                                                                            <td>{transaction.currency}</td>
                                                                            <td>{transaction.amount}</td>
                                                                            </tr>)})}
            </tbody>
        </table>
        )
    }

export default Table;