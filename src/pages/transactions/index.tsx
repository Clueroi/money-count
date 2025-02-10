import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { Summary } from "../../components/summary/summary";
import { SearchForm } from "./searchForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

interface transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {

  const [transactions, setTransactions] = useState<transactions[]>([])

  async function loadTransacionts() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }


  useEffect(() => {
    loadTransacionts()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%' >
                    {transaction.description}
                  </td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </ TransactionsContainer>
    </div>
  )
}