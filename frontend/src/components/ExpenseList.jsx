import { useState } from 'react';
import { useExpenses } from '../hooks/useExpenses';
import ExpenseForm from './ExpenseForm';

export default function ExpenseList() {
  const { expenses, deleteExpense, total, categories } = useExpenses();
  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(search.toLowerCase()) ||
    exp.category.toLowerCase().includes(search.toLowerCase())
  );

  const formatCurrency = (amount) => `$${parseFloat(amount).toFixed(2)}`;

  return (
    <div className="expenses-container">
      <div className="expense-list">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
          <h2>Recent Expenses ({filteredExpenses.length})</h2>
          <div style={{display: 'flex', gap: '1rem'}}>
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{padding: '0.5rem 1rem', borderRadius: '20px', border: '2px solid #e1e5e9', width: '200px'}}
            />
            <button onClick={() => {setShowForm(true); setEditingExpense(null);}} className="btn-small">
              + Add Expense
            </button>
          </div>
        </div>
        
        {filteredExpenses.length === 0 ? (
          <p>No expenses found. <button onClick={() => setShowForm(true)} style={{background: 'none', border: 'none', color: '#667eea', fontWeight: 'bold'}}>Add one!</button></p>
        ) : (
          filteredExpenses.map(expense => (
            <div key={expense.id} className="expense-item">
              <div className="expense-details">
                <h3>{expense.description}</h3>
                <div className="expense-meta">
                  {expense.category} • {new Date(expense.date).toLocaleDateString()}
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <div className="expense-amount">{formatCurrency(expense.amount)}</div>
                <div className="btn-group">
                  <button 
                    className="btn-small"
                    onClick={() => setEditingExpense(expense)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-small danger"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="summary-card">
        <h3>Total Spent</h3>
        <div className="summary-total">{formatCurrency(total)}</div>
        <div style={{color: '#666', marginTop: '1rem'}}>
          {categories.map(cat => {
            const catTotal = expenses
              .filter(e => e.category === cat)
              .reduce((sum, e) => sum + parseFloat(e.amount || 0), 0);
            return catTotal > 0 && (
              <div key={cat} style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>
                {cat}: {formatCurrency(catTotal)}
              </div>
            );
          })}
        </div>
      </div>

      {showForm && (
        <div className="modal" onClick={() => setShowForm(false)}>
          <div onClick={e => e.stopPropagation()}>
            <ExpenseForm 
              editingExpense={null} 
              onClose={() => setShowForm(false)} 
            />
          </div>
        </div>
      )}

      {editingExpense && (
        <div className="modal" onClick={() => setEditingExpense(null)}>
          <div onClick={e => e.stopPropagation()}>
            <ExpenseForm 
              editingExpense={editingExpense} 
              onClose={() => setEditingExpense(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

