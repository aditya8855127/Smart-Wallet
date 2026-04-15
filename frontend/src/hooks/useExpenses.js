import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage('expenses', []);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense, date: new Date().toISOString().split('T')[0] }]);
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(exp => exp.id === id ? { ...exp, ...updatedExpense } : exp));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

  const categories = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Other'];

  return {
    expenses,
    addExpense,
    updateExpense,
    deleteExpense,
    total,
    categories
  };
}

