import { useState, useEffect } from 'react';
import { useExpenses } from '../hooks/useExpenses';

export default function ExpenseForm({ editingExpense, onClose }) {
  const { addExpense, updateExpense, categories } = useExpenses();
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Food'
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData({
        description: editingExpense.description,
        amount: editingExpense.amount,
        category: editingExpense.category
      });
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountNum = parseFloat(formData.amount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    if (editingExpense) {
      updateExpense(editingExpense.id, formData);
    } else {
      addExpense(formData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h3>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h3>
      <div className="form-group">
        <label>Description</label>
        <input
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="btn-group">
        <button type="submit">Save</button>
        <button type="button" className="danger" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

