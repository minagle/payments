import { table } from "console";
import { PaymentType, getAllPayments } from "./DataFunctions";

const PaymentTableRow = ({transaction} : {transaction: PaymentType}) : JSX.Element => {
    return(
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.country}</td>
            <td>{transaction.currency}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.orderId}</td>
        </tr>
        )  
    }

export default PaymentTableRow;