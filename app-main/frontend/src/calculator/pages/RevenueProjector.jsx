import React, { useState, useMemo } from 'react';
import ToolLayout from '../components/ToolLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download } from 'lucide-react';

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

const RevenueProjector = () => {
  const [currentMrr, setCurrentMrr] = useState(10000);
  const [mode, setMode] = useState('MRR');
  const [bull, setBull] = useState(20);
  const [base, setBase] = useState(12);
  const [bear, setBear] = useState(5);
  const [churn, setChurn] = useState(3);
  const [horizon, setHorizon] = useState(24);

  const { data, bullFinal, baseFinal, bearFinal } = useMemo(() => {
    const arr = [];
    const m = Number(currentMrr) || 0;
    let b = m, ba = m, br = m;
    const bullG = (Number(bull) || 0) / 100;
    const baseG = (Number(base) || 0) / 100;
    const bearG = (Number(bear) || 0) / 100;
    const churnR = (Number(churn) || 0) / 100;
    for (let i = 0; i <= horizon; i++) {
      arr.push({
        month: monthLabel(i),
        bull: Math.round(b),
        base: Math.round(ba),
        bear: Math.round(br),
      });
      b = b * (1 + bullG - churnR);
      ba = ba * (1 + baseG - churnR);
      br = br * (1 + bearG - churnR);
    }
    return { data: arr, bullFinal: arr[arr.length - 1].bull, baseFinal: arr[arr.length - 1].base, bearFinal: arr[arr.length - 1].bear };
  }, [currentMrr, bull, base, bear, churn, horizon]);

  const displayMul = mode === 'ARR' ? 12 : 1;

  const exportCSV = () => {
    const header = 'Month,Bull,Base,Bear\n';
    const rows = data.map((r) => `${r.month},${r.bull},${r.base},${r.bear}`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revenue-projections.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const Slider = ({ label, value, setValue, min, max, suffix, color }) => (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs text-muted-foreground">{label}</label>
        <span className="text-xs font-medium" style={{ color }}>{value}{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: color }}
      />
    </div>
  );

  return (
    <ToolLayout
      number="02"
      title="Revenue Projector"
      category="Growth"
      categoryColor="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300"
      description="Model month-over-month growth scenarios. Bull, bear, and base cases."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Current MRR</label>
              <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                <span className="text-sm text-muted-foreground mr-2">$</span>
                <input
                  type="number"
                  value={currentMrr}
                  onChange={(e) => setCurrentMrr(e.target.value === '' ? 0 : Number(e.target.value))}
                  className="bg-transparent flex-1 outline-none text-sm"
                />
              </div>
            </div>
            <div className="flex bg-muted rounded-lg p-1 text-xs">
              {['MRR', 'ARR'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 py-1.5 rounded-md transition-colors ${
                    mode === m ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 space-y-5">
            <Slider label="Bull Growth" value={bull} setValue={setBull} min={0} max={50} suffix=" /mo" color="#2e6e4d" />
            <Slider label="Base Growth" value={base} setValue={setBase} min={0} max={50} suffix=" /mo" color="#7e5ea8" />
            <Slider label="Bear Growth" value={bear} setValue={setBear} min={0} max={30} suffix=" /mo" color="#b85b76" />
            <Slider label="Monthly Churn" value={churn} setValue={setChurn} min={0} max={20} suffix="%" color="#c17a3d" />
            <Slider label="Time Horizon" value={horizon} setValue={setHorizon} min={6} max={60} suffix=" mo" color="#4a90c8" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Bull {mode}</p>
              <p className="text-2xl font-serif-display font-medium" style={{ color: '#2e6e4d' }}>{fmtCurrency(bullFinal * displayMul)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Base {mode}</p>
              <p className="text-2xl font-serif-display font-medium" style={{ color: '#7e5ea8' }}>{fmtCurrency(baseFinal * displayMul)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Bear {mode}</p>
              <p className="text-2xl font-serif-display font-medium" style={{ color: '#b85b76' }}>{fmtCurrency(bearFinal * displayMul)}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-medium mb-4">Revenue Projection</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.08} />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.6 }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
                  <YAxis tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.6 }} tickLine={false} axisLine={false} tickFormatter={(v) => fmtCurrency(v * displayMul)} width={55} />
                  <Tooltip
                    contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12 }}
                    formatter={(v, name) => [fmtCurrency(v * displayMul), name.charAt(0).toUpperCase() + name.slice(1)]}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} iconType="circle" />
                  <Line type="monotone" dataKey="base" stroke="#7e5ea8" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="bear" stroke="#b85b76" strokeWidth={2} dot={false} strokeDasharray="5 4" />
                  <Line type="monotone" dataKey="bull" stroke="#2e6e4d" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Projections</h3>
              <button
                onClick={exportCSV}
                className="text-xs inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <Download className="w-3 h-3" />
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto max-h-80 overflow-y-auto no-scrollbar">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card">
                  <tr className="text-left text-xs text-muted-foreground border-b border-border">
                    <th className="py-2 px-1 font-medium">Month</th>
                    <th className="py-2 px-1 font-medium text-right">Bull</th>
                    <th className="py-2 px-1 font-medium text-right">Base</th>
                    <th className="py-2 px-1 font-medium text-right">Bear</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((r, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 px-1 text-muted-foreground">{r.month}</td>
                      <td className="py-2 px-1 text-right tabular-nums">{fmtCurrency(r.bull * displayMul)}</td>
                      <td className="py-2 px-1 text-right tabular-nums">{fmtCurrency(r.base * displayMul)}</td>
                      <td className="py-2 px-1 text-right tabular-nums">{fmtCurrency(r.bear * displayMul)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default RevenueProjector;
