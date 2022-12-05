export interface ExpenseFormProps {
  onSaveExpenseData: (arg0: EnteredData) => NewExpenseData;
  onCancel: () => void;
}

export interface EnteredData {
  title: string;
  amount: string | number;
  date: Date;
}

export interface NewExpenseData extends EnteredData {
  id: string;
}