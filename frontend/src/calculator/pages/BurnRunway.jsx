import React, { useState, useMemo } from 'react';
import ToolLayout from '../components/ToolLayout';
import { Plus, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const fmtCurrency = (n) => {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (Math.abs(n) >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
};

const monthLabel = (offset) => {
  const d = new Date();
  d.setMonth(d.getMonth() + offset);
  return d.toLocaleString('en-US', { month: 'short', year: '2-digit' });
};

const NumberInput = ({ value, onChange, prefix = '$', placeholder = '0' }) => (
  <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
    <span className="text-sm text-muted-foreground mr-2">{prefix}</span>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
      className="bg-transparent flex-1 outline-none text-sm"
      placeholder={placeholder}
    />
  </div>
);

const BurnRunway = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, label: 'Salaries', amount: 20000 },
    { id: 2, label: 'Cloud / Infra', amount: 7000 },
    { id: 3, label: 'Office', amount: 3000 },
  ]);
  const [mrr, setMrr] = useState(8000);
  const [cash, setCash] = useState(500000);
  const [growth, setGrowth] = useState(10);

  const addExpense = () => {
    const newId = Date.now();
    setExpenses([...expenses, { id: newId, label: 'New Expense', amount: 0 }]);
  };
  const removeExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id));
  const updateExpense = (id, field, value) =>
    setExpenses(expenses.map((e) => (e.id === id ? { ...e, [field]: value } : e)));

  const { grossBurn, netBurn, runway, chartData, expenseChart } = useMemo(() => {
    const gb = expenses.reduce((a, e) => a + (Number(e.amount) || 0), 0);
    const nb = Math.max(gb - (Number(mrr) || 0), 0);
    let r = nb > 0 ? Math.floor((Number(cash) || 0) / nb) : 999;
    const months = Math.min(r + 2, 60);
    const data = [];
    let currentCash = Number(cash) || 0;
    let currentMrr = Number(mrr) || 0;
    const g = (Number(growth) || 0) / 100;
    for (let i = 0; i <= months; i++) {
      data.push({ month: monthLabel(i), cash: Math.max(currentCash, 0) });
      currentCash = currentCash - gb + currentMrr;
      currentMrr = currentMrr * (1 + g);
      if (currentCash < 0) {
        data.push({ month: monthLabel(i + 1), cash: 0 });
        break;
      }
    }
    const ec = expenses.map((e) => ({ label: e.label, amount: Number(e.amount) || 0 }));
    return { grossBurn: gb, netBurn: nb, runway: r, chartData: data, expenseChart: ec };
  }, [expenses, mrr, cash, growth]);

  const expenseColors = ['#c17a3d', '#2e6e4d', '#7e5ea8', '#b85b76', '#4a90c8'];

  return (
    <ToolLayout
      number="01"
      title="Burn Runway Modeler"
      category="Finance"
      categoryColor="bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
      description="Plug in your expenses and MRR, see your exact runway. Know when to fundraise before it's too late."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Monthly Expenses</h3>
              <button
                onClick={addExpense}
                className="text-xs inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Plus className="w-3 h-3" />
                Add
              </button>
            </div>
            <div className="space-y-2">
              {expenses.map((e) => (
                <div key={e.id} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={e.label}
                    onChange={(ev) => updateExpense(e.id, 'label', ev.target.value)}
                    className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-foreground/30 transition-colors"
                  />
                  <div className="flex items-center bg-background border border-border rounded-lg px-2.5 py-2 w-28 focus-within:border-foreground/30 transition-colors">
                    <span className="text-xs text-muted-foreground mr-1">$</span>
                    <input
                      type="number"
                      value={e.amount}
                      onChange={(ev) => updateExpense(e.id, 'amount', ev.target.value === '' ? 0 : Number(ev.target.value))}
                      className="bg-transparent flex-1 outline-none text-sm w-full"
                    />
                  </div>
                  <button
                    onClick={() => removeExpense(e.id)}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Remove expense"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Monthly Revenue (MRR)</label>
              <NumberInput value={mrr} onChange={setMrr} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Cash in Bank</label>
              <NumberInput value={cash} onChange={setCash} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-muted-foreground">MRR Growth Rate</label>
                <span className="text-xs font-medium">{growth}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={growth}
                onChange={(e) => setGrowth(Number(e.target.value))}
                className="w-full accent-[#2e6e4d]"
              />
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Gross Burn</p>
              <p className="text-2xl font-serif-display font-medium">{fmtCurrency(grossBurn)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Net Burn</p>
              <p className="text-2xl font-serif-display font-medium">{fmtCurrency(netBurn)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Runway</p>
              <p className="text-2xl font-serif-display font-medium">
                {runway >= 60 ? '60+ mo' : `${runway} mo`}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Cash Projection</h3>
              <span className="text-xs text-muted-foreground">
                Cash-Out: {runway >= 60 ? '60+ months' : `${runway} months`}
              </span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cashGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2e6e4d" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#2e6e4d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.08} />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.6 }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
                  <YAxis tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.6 }} tickLine={false} axisLine={false} tickFormatter={fmtCurrency} width={55} />
                  <Tooltip
                    contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12 }}
                    formatter={(v) => [fmtCurrency(v), 'Cash']}
                  />
                  <Line type="monotone" dataKey="cash" stroke="#2e6e4d" strokeWidth={2.5} dot={false} fill="url(#cashGradient)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-medium mb-4">Expense Breakdown</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseChart} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.08} horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.6 }} tickLine={false} axisLine={false} tickFormatter={fmtCurrency} />
                  <YAxis type="category" dataKey="label" tick={{ fontSize: 12, fill: 'currentColor', opacity: 0.8 }} tickLine={false} axisLine={false} width={90} />
                  <Tooltip
                    cursor={{ fill: 'currentColor', fillOpacity: 0.04 }}
                    contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12 }}
                    formatter={(v) => [fmtCurrency(v), 'Amount']}
                  />
                  <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                    {expenseChart.map((_, idx) => (
                      <Cell key={idx} fill={expenseColors[idx % expenseColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default BurnRunway;
