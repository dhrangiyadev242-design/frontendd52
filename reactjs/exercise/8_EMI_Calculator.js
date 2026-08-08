import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


// Create function component: EMICalculator
function EMICalculator() {
    // React State Hooks
    var [amount, setAmount] = useState(500000);
    var [rate, setRate] = useState(8.5);
    var [tenure, setTenure] = useState(5);
    var [tenureUnit, setTenureUnit] = useState('years'); // 'years' or 'months'

    // Numerical conversions
    var principal = parseFloat(amount) || 0;
    var annualRate = parseFloat(rate) || 0;
    var tenureValue = parseFloat(tenure) || 0;

    // Monthly interest (R) and total months (N)
    var totalMonths = tenureUnit === 'years' ? tenureValue * 12 : tenureValue;
    var monthlyRate = annualRate / 12 / 100;

    // Mathematical EMI Calculation: E = P * r * (1+r)^n / ((1+r)^n - 1)
    var emi = 0;
    if (principal > 0 && totalMonths > 0) {
        if (monthlyRate > 0) {
            var mathPower = Math.pow(1 + monthlyRate, totalMonths);
            emi = (principal * monthlyRate * mathPower) / (mathPower - 1);
        } else {
            emi = principal / totalMonths; // 0% interest fallback
        }
    }

    // Total calculations
    var totalPayment = emi * totalMonths;
    var totalInterest = totalPayment > principal ? totalPayment - principal : 0;

    // Percentage breakdown
    var principalPercent = totalPayment > 0 ? ((principal / totalPayment) * 100).toFixed(1) : 0;
    var interestPercent = totalPayment > 0 ? ((totalInterest / totalPayment) * 100).toFixed(1) : 0;

    // Currency Formatter
    function formatCurrency(val) {
        if (isNaN(val) || val <= 0) return '₹0';
        return '₹' + Math.round(val).toLocaleString('en-IN');
    }

    return (
        <div className="container py-5">
            {/* Header */}
            <div className="text-center mb-5 mt-3 calculator-header">
                <h1 className="fw-bold mb-3 display-5">Free EMI Calculator</h1>
                <p className="text-muted fs-5">
                    Calculate your monthly loan EMI, interest payable, and payment schedule.
                </p>
            </div>

            {/* Main Calculator Card Component */}
            <div className="card calculator-card mx-auto bg-white" style={{ maxWidth: "950px" }}>
                <div className="row g-0">

                    {/* Left Side: Form Inputs */}
                    <div className="col-md-7 p-4 p-lg-5">
                        {/* Loan Amount */}
                        <div className="mb-4 pb-2">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label mb-0 fw-semibold">Loan Amount</label>
                                <span className="text-primary fw-bold fs-6">{formatCurrency(principal)}</span>
                            </div>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text border-end-0 fs-5">₹</span>
                                <input
                                    type="number"
                                    className="form-control border-start-0 ps-0"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter principal amount"
                                />
                            </div>
                            <input
                                type="range"
                                className="form-range mt-2"
                                min="10000"
                                max="10000000"
                                step="10000"
                                value={amount || 500000}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        {/* Interest Rate */}
                        <div className="mb-4 pb-2">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label mb-0 fw-semibold">Annual Interest Rate (%)</label>
                                <span className="text-primary fw-bold fs-6">{annualRate}% p.a.</span>
                            </div>
                            <div className="input-group input-group-lg">
                                <input
                                    type="number"
                                    step="0.1"
                                    className="form-control border-end-0"
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                    placeholder="Enter rate"
                                />
                                <span className="input-group-text border-start-0 fs-5">%</span>
                            </div>
                            <input
                                type="range"
                                className="form-range mt-2"
                                min="1"
                                max="30"
                                step="0.1"
                                value={rate || ''}
                                onChange={(e) => setRate(e.target.value)}
                            />
                        </div>

                        {/* Loan Tenure */}
                        <div className="mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label mb-0 fw-semibold">Loan Tenure</label>
                                <div className="btn-group btn-group-sm" role="group">
                                    <button
                                        type="button"
                                        className={`btn ${tenureUnit === 'years' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setTenureUnit('years')}
                                    >
                                        Years
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn ${tenureUnit === 'months' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setTenureUnit('months')}
                                    >
                                        Months
                                    </button>
                                </div>
                            </div>
                            <div className="input-group input-group-lg">
                                <input
                                    type="number"
                                    className="form-control border-end-0"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    placeholder="Enter tenure"
                                />
                                <span className="input-group-text border-start-0 fs-5">
                                    {tenureUnit === 'years' ? 'Yr' : 'Mo'}
                                </span>
                            </div>
                            <input
                                type="range"
                                className="form-range mt-2"
                                min="1"
                                max={tenureUnit === 'years' ? "30" : "360"}
                                value={tenure || 5}
                                onChange={(e) => setTenure(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Right Side: Results Display */}
                    <div className="col-md-5 p-4 p-lg-5 results-section d-flex flex-column justify-content-center text-center border-start">
                        {/* Principal Amount */}
                        <div className="w-100">
                            <h2 className="result-value">{formatCurrency(principal)}</h2>
                            <p className="result-title">Principal Loan Amount</p>
                        </div>

                        {/* Math Symbol */}
                        <div className="math-symbol">+</div>

                        {/* Total Interest */}
                        <div className="w-100">
                            <h2 className="result-value text-danger">{formatCurrency(totalInterest)}</h2>
                            <p className="result-title">Total Interest Payable</p>
                        </div>

                        {/* Math Symbol */}
                        <div className="math-symbol">=</div>

                        {/* Total Monthly EMI Box */}
                        <div className="w-100 total-box mt-2">
                            <p className="result-title text-primary mb-1">Monthly EMI</p>
                            <h2 className="main-emi-score mb-1">{formatCurrency(emi)}</h2>
                            <div className="border-top pt-2 mt-2">
                                <p className="text-muted small mb-0">
                                    Total Amount Payable: <strong className="text-dark fs-6">{formatCurrency(totalPayment)}</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Loan Payment Breakdown Card */}
            <div className="card shadow-sm border-0 mx-auto mt-4 rounded-4" style={{ maxWidth: "950px" }}>
                <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Loan Payment Breakdown</h5>
                    
                    {/* Visual Progress Bar */}
                    <div className="progress mb-4" style={{ height: "16px", borderRadius: "10px" }}>
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${principalPercent}%` }}
                            title={`Principal: ${principalPercent}%`}
                        >
                            {principalPercent}%
                        </div>
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: `${interestPercent}%` }}
                            title={`Interest: ${interestPercent}%`}
                        >
                            {interestPercent}%
                        </div>
                    </div>

                    {/* Breakdown Table */}
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered text-center align-middle mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>Category</th>
                                    <th>Amount (₹)</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start ps-3">
                                        <span className="d-inline-block rounded-circle bg-success me-2" style={{ width: "10px", height: "10px" }}></span>
                                        Principal Amount
                                    </td>
                                    <td className="fw-semibold">{formatCurrency(principal)}</td>
                                    <td>
                                        <span className="badge text-bg-success px-3 py-1">{principalPercent}%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start ps-3">
                                        <span className="d-inline-block rounded-circle bg-warning me-2" style={{ width: "10px", height: "10px" }}></span>
                                        Total Interest
                                    </td>
                                    <td className="fw-semibold text-danger">{formatCurrency(totalInterest)}</td>
                                    <td>
                                        <span className="badge text-bg-warning px-3 py-1">{interestPercent}%</span>
                                    </td>
                                </tr>
                                <tr className="table-light fw-bold">
                                    <td className="text-start ps-3">Total Payable Amount</td>
                                    <td className="text-primary">{formatCurrency(totalPayment)}</td>
                                    <td>
                                        <span className="badge text-bg-primary px-3 py-1">100%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EMICalculator />);