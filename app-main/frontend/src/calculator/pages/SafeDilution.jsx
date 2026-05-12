import React, { useState, useMemo } from 'react';
import ToolLayout from '../components/ToolLayout';
import { Plus, X } from 'lucide-react';

const fmtCurrency = (n) => {
  if (!n && n !== 0) return '$0';
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (Math.abs(n) >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};
const fmtNum = (n) => Math.round(n).toLocaleString();
const fmtPct = (n) => `${n.toFixed(2)}%`;

const SafeDilution = () => {
  const [totalFD, setTotalFD] = useState(10000000);
  const [optionsRemaining, setOptionsRemaining] = useState(1000000);
  const [yourShares, setYourShares] = useState(6000000);
  const [safes, setSafes] = useState([
    { id: 1, type: 'post-money', amount: 500000, cap: 8000000, discount: 0 },
  ]);
  const [priced, setPriced] = useState({
    newInvestment: 0,
    preMoney: 0,
    optionPool: 10,
  });

  const addSafe = () => {
    setSafes([
      ...safes,
      { id: Date.now(), type: 'post-money', amount: 250000, cap: 10000000, discount: 0 },
    ]);
  };
  const removeSafe = (id) => setSafes(safes.filter((s) => s.id !== id));
  const updateSafe = (id, field, value) =>
    setSafes(safes.map((s) => (s.id === id ? { ...s, [field]: value } : s)));

  const result = useMemo(() => {
    const fd = Number(totalFD) || 1;
    const yourPct = (Number(yourShares) / fd) * 100;
    // For post-money SAFE: ownership = amount / cap
    // Convert each SAFE
    let totalSafeShares = 0;
    let totalSafePct = 0;
    const rows = safes.map((s) => {
      const amount = Number(s.amount) || 0;
      const cap = Number(s.cap) || 1;
      let ownership = 0;
      let sharePrice = 0;
      let shares = 0;
      if (s.type === 'post-money') {
        ownership = amount / cap;
        sharePrice = cap / fd;
        shares = Math.round(amount / sharePrice);
      } else {
        // pre-money: convert based on current cap table
        sharePrice = cap / fd;
        shares = Math.round(amount / sharePrice);
        ownership = shares / (fd + shares);
      }
      totalSafeShares += shares;
      totalSafePct += ownership;
      return {
        id: s.id,
        type: s.type,
        amount,
        cap,
        sharePrice,
        shares,
        ownership: ownership * 100,
      };
    });
    const postConversionFD = fd + totalSafeShares;
    const yourOwnershipAfter = (Number(yourShares) / postConversionFD) * 100;
    const totalDilution = yourPct - yourOwnershipAfter;
    const optionPoolAfter = (Number(optionsRemaining) / postConversionFD) * 100;
    const otherShareholders =
      100 - yourOwnershipAfter - optionPoolAfter - totalSafePct * 100;

    return {
      yourPct,
      yourOwnershipAfter,
      totalDilution,
      newShares: totalSafeShares,
      postConversionFD,
      optionPoolAfter,
      otherShareholders: Math.max(otherShareholders, 0),
      rows,
      totalSafePct: totalSafePct * 100,
    };
  }, [totalFD, optionsRemaining, yourShares, safes]);

  return (
    <ToolLayout
      number="03"
      title="SAFE Dilution Modeler"
      category="Fundraising"
      categoryColor="bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300"
      description="Stack multiple SAFEs and see the real dilution impact before your priced round. Know what you're actually giving up."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-medium mb-4">Current Cap Table</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Total Fully Diluted Shares
                </label>
                <input
                  type="number"
                  value={totalFD}
                  onChange={(e) => setTotalFD(Number(e.target.value) || 0)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-foreground/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Options Remaining in Pool
                </label>
                <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                  <input
                    type="number"
                    value={optionsRemaining}
                    onChange={(e) => setOptionsRemaining(Number(e.target.value) || 0)}
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                  <span className="text-xs text-muted-foreground ml-2">shares</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Your Ownership</label>
                <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                  <input
                    type="number"
                    value={yourShares}
                    onChange={(e) => setYourShares(Number(e.target.value) || 0)}
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                  <span className="text-xs text-muted-foreground ml-2">shares</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Your current ownership: <span className="font-medium text-foreground">{fmtPct(result.yourPct)}</span>
                </p>
              </div>
            </div>
          </div>

          {safes.map((s, idx) => (
            <div key={s.id} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">SAFE {idx + 1}</h3>
                {safes.length > 1 && (
                  <button
                    onClick={() => removeSafe(s.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">SAFE Type</label>
                  <div className="flex bg-muted rounded-lg p-1 text-xs">
                    {[
                      { key: 'post-money', label: 'Post-money SAFE' },
                      { key: 'pre-money', label: 'Pre-money SAFE' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => updateSafe(s.id, 'type', opt.key)}
                        className={`flex-1 py-1.5 rounded-md transition-colors ${
                          s.type === opt.key
                            ? 'bg-card text-foreground shadow-sm'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Investment Amount</label>
                  <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                    <span className="text-sm text-muted-foreground mr-2">$</span>
                    <input
                      type="number"
                      value={s.amount}
                      onChange={(e) => updateSafe(s.id, 'amount', Number(e.target.value) || 0)}
                      className="bg-transparent flex-1 outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Valuation Cap</label>
                  <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                    <span className="text-sm text-muted-foreground mr-2">$</span>
                    <input
                      type="number"
                      value={s.cap}
                      onChange={(e) => updateSafe(s.id, 'cap', Number(e.target.value) || 0)}
                      className="bg-transparent flex-1 outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Discount</label>
                  <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                    <input
                      type="number"
                      value={s.discount}
                      onChange={(e) => updateSafe(s.id, 'discount', Number(e.target.value) || 0)}
                      className="bg-transparent flex-1 outline-none text-sm"
                    />
                    <span className="text-sm text-muted-foreground ml-2">%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addSafe}
            className="w-full py-2.5 border border-dashed border-border rounded-xl text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            Add Another SAFE
          </button>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Priced Round Details</h3>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">optional</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">New Investment Amount</label>
                <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                  <span className="text-sm text-muted-foreground mr-2">$</span>
                  <input
                    type="number"
                    value={priced.newInvestment}
                    onChange={(e) => setPriced({ ...priced, newInvestment: Number(e.target.value) || 0 })}
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Pre-Money Valuation</label>
                <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                  <span className="text-sm text-muted-foreground mr-2">$</span>
                  <input
                    type="number"
                    value={priced.preMoney}
                    onChange={(e) => setPriced({ ...priced, preMoney: Number(e.target.value) || 0 })}
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Option Pool After Round</label>
                <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2.5 focus-within:border-foreground/30 transition-colors">
                  <input
                    type="number"
                    value={priced.optionPool}
                    onChange={(e) => setPriced({ ...priced, optionPool: Number(e.target.value) || 0 })}
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                  <span className="text-sm text-muted-foreground ml-2">% of FD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Your Ownership Before</p>
              <p className="text-2xl font-serif-display font-medium">{fmtPct(result.yourPct)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Your Ownership After</p>
              <p className="text-2xl font-serif-display font-medium" style={{ color: '#2e6e4d' }}>{fmtPct(result.yourOwnershipAfter)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Total SAFE Dilution</p>
              <p className="text-2xl font-serif-display font-medium" style={{ color: '#b85b76' }}>{fmtPct(result.totalDilution)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">New Shares Issued*</p>
              <p className="text-2xl font-serif-display font-medium">{fmtNum(result.newShares)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Post-Conversion FD</p>
              <p className="text-2xl font-serif-display font-medium">{fmtNum(result.postConversionFD)}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-1">Option Pool After</p>
              <p className="text-2xl font-serif-display font-medium">{fmtPct(result.optionPoolAfter)}</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground px-1">
            * SAFEs do not issue shares at signing - shares are assumed based on current details. A priced round would trigger conversion of all SAFEs, issuing shares at that point and further diluting ownership.
          </p>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-medium mb-4">SAFE Conversion Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b border-border">
                    <th className="py-2 font-medium">SAFE</th>
                    <th className="py-2 font-medium">Type</th>
                    <th className="py-2 font-medium text-right">Amount</th>
                    <th className="py-2 font-medium text-right">Cap</th>
                    <th className="py-2 font-medium text-right">Share Price</th>
                    <th className="py-2 font-medium text-right">Shares</th>
                    <th className="py-2 font-medium text-right">Ownership</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((r, i) => (
                    <tr key={r.id} className="border-b border-border/50">
                      <td className="py-2.5">SAFE {i + 1}</td>
                      <td className="py-2.5 text-muted-foreground">{r.type}</td>
                      <td className="py-2.5 text-right tabular-nums">{fmtCurrency(r.amount)}</td>
                      <td className="py-2.5 text-right tabular-nums">{fmtCurrency(r.cap)}</td>
                      <td className="py-2.5 text-right tabular-nums">${r.sharePrice.toFixed(4)}</td>
                      <td className="py-2.5 text-right tabular-nums">{fmtNum(r.shares)}</td>
                      <td className="py-2.5 text-right tabular-nums">{fmtPct(r.ownership)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-medium mb-4">Post-Conversion Ownership</h3>
            <div className="space-y-3">
              {[
                { label: 'You', value: result.yourOwnershipAfter, color: '#2e6e4d' },
                { label: 'Other Shareholders', value: result.otherShareholders, color: '#7e5ea8' },
                { label: 'Option Pool', value: result.optionPoolAfter, color: '#c17a3d' },
                { label: 'SAFEs', value: result.totalSafePct, color: '#b85b76' },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm">{row.label}</span>
                    <span className="text-sm font-medium tabular-nums">{fmtPct(row.value)}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(row.value, 100)}%`, backgroundColor: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/40 border border-border rounded-xl p-5">
            <h4 className="text-sm font-medium mb-2">How to read this</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Post-money SAFEs give investors a fixed ownership percentage (amount &divide; cap), regardless of other SAFEs. Pre-money SAFEs convert based on your current cap table only - the investor&rsquo;s ownership dilutes alongside yours as more SAFEs convert. Stacking multiple post-money SAFEs compounds dilution fast.
            </p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default SafeDilution;
