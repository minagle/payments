import { ChangeEvent, useState } from "react";
import { PaymentType, getAllPayments } from "./DataFunctions";
import PaymentTableRow from "./PaymentTableRow";

const Table = () : JSX.Element => {

    const transactions: PaymentType[] = getAllPayments();
    const uniqueCountries: string[] = ['Select'].concat(Array.from(new Set(transactions.map((t, index) => t.country))));
    const [currentCountry, setCurrentCountry] = useState<string>();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) : void => {
        setCurrentCountry(e.target.value);
    }

    return(
        <div className="main-content">
            <select onChange={(e) => onChange(e)}>
                {uniqueCountries.map((country, index) => {
                    return (<option key={index} value={country}>{country}</option>)
                })}
            </select>
            <table className="table">            
                <tbody>
                    <tr><th>ID</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th><th>orderId</th></tr>
                        {transactions.map((transaction, index) => {
                            return (currentCountry === transaction.country ? <PaymentTableRow transaction={transaction} key={index} /> : '')})}
                </tbody>
            </table>
        </div>
            )
        }

export default Table;