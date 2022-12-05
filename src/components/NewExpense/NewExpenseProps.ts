import { NewExpenseData } from 'components/ExpenseForm/ExpenseFormProps';

export interface NewExpenseProps {
  onAddExpense: (arg0: NewExpenseData) => void;
}
