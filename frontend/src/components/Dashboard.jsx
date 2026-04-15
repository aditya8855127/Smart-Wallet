import { useState } from 'react';
import { useExpenses } from '../hooks/useExpenses';
import { useAuth } from '../hooks/useAuth';
import ExpenseForm from './ExpenseForm';

export default function Dashboard() {
  const { expenses, deleteExpense, total, categories } = useExpenses();
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(search.toLowerCase()) ||
    exp.category.toLowerCase().includes(search.toLowerCase())
  );

  const formatCurrency = (amount) => `$${Math.abs(parseFloat(amount)).toFixed(2)}`;
  const mockIncome = 2500.00;
  const balance = mockIncome - total;

  return (
    <div className="dashboard">
      <div className="dashboard-welcome container">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome back, {user?.email.split('@')[0]}!</h1>
          <p className="welcome-subtitle">Here's what's happening with your finances today.</p>
        </div>
      </div>

      <div className="stats-section container">
        <div className="stats-grid">
          <div className="stat-card balance-card">
            <div className="stat-icon">💰</div>
            <div className="stat-label">Total Balance</div>
            <div className="stat-value balance-positive">{formatCurrency(balance)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-label">Monthly Income</div>
            <div className="stat-value income">{formatCurrency(mockIncome)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📉</div>
            <div className="stat-label">Total Expenses</div>
            <div className="stat-value expense">{formatCurrency(total)}</div>
          </div>
        </div>
      </div>

      <div className="expenses-section container">
        <div className="section-header">
          <div>
            <h2>Recent Expenses ({filteredExpenses.length})</h2>
            <p className="section-subtitle">This month</p>
          </div>
          <div className="section-actions">
            <input
              type="text"
              placeholder="🔍 Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input enhanced"
            />
            <button className="add-btn enhanced" onClick={() => {setShowForm(true); setEditingExpense(null);}}>
              + New Expense
            </button>
          </div>
        </div>
        
        {filteredExpenses.length === 0 ? (
          <div className="empty-state enhanced">
            <div className="empty-icon">📝</div>
            <h3>No expenses yet</h3>
            <p>Start tracking your spending to see your financial overview here.</p>
            <button onClick={() => setShowForm(true)} className="empty-btn enhanced">
              Add your first expense
            </button>
          </div>
        ) : (
          <div className="expense-list enhanced">
            {filteredExpenses.map(expense => (
              <div key={expense.id} className="expense-item enhanced">
                <div className="expense-left">
                  <div className="expense-category-badge">{expense.category}</div>
                  <div className="expense-details">
                    <h3>{expense.description}</h3>
                    <div className="expense-meta">
                      {new Date(expense.date).toLocaleDateString()} • Receipt available
                    </div>
                  </div>
                </div>
                <div className="expense-right">
                  <div className="expense-amount negative">-{formatCurrency(expense.amount)}</div>
                  <div className="expense-actions">
                    <button className="action-btn edit">
                      <span>✏️</span> Edit
                    </button>
                    <button className="action-btn delete" onClick={() => deleteExpense(expense.id)}>
                      <span>🗑️</span> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className="modal-overlay enhanced" onClick={() => setShowForm(false)}>
          <div className="modal-content enhanced" onClick={e => e.stopPropagation()}>
            <ExpenseForm 
              editingExpense={null} 
              onClose={() => setShowForm(false)} 
            />
          </div>
        </div>
      )}

      {editingExpense && (
        <div className="modal-overlay enhanced" onClick={() => setEditingExpense(null)}>
          <div className="modal-content enhanced" onClick={e => e.stopPropagation()}>
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
