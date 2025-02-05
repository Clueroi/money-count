import { Header } from "../../components/header/header";
import { Summary } from "../../components/summary/summary";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%' >
                Desenvolvimento de site
              </td>
              <td>
                <PriceHighlight variant="income">
                  R$ 30 mango
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/09/2004</td>
            </tr>
            <tr>
              <td width='50%' > Hamburger </td>
              <td>
              <PriceHighlight variant="outcome">
                - R$ 30 mango
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>22/09/2004</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </ TransactionsContainer>
    </div>
  )
}