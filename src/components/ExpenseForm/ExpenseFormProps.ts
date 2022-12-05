export interface ExpenseFormProps {
  onSaveExpenseData: (arg0: EnteredData) => NewExpenseData;
}

export interface EnteredData {
  title: string;
  amount: string;
  date: Date;
}

export interface NewExpenseData extends EnteredData {
  id: string;
}