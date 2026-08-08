import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './bmi.css';

// Create functional component: BMICalculator
function BMICalculator() {
    // State hooks matching the first example pattern
    var [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'imperial'
    var [heightCm, setHeightCm] = useState(170);          // for metric (cm)
    var [heightFeet, setHeightFeet] = useState(5);        // for imperial (ft)
    var [heightInches, setHeightInches] = useState(7);    // for imperial (in)
    var [weight, setWeight] = useState(68);              // kg for metric, lbs for imperial
    var [gender, setGender] = useState('male');
    var [age, setAge] = useState(25);

    // Compute height in meters based on unit system
    var heightInMeters = 0;
    if (unitSystem === 'metric') {
        heightInMeters = parseFloat(heightCm) > 0 ? parseFloat(heightCm) / 100 : 0;
    } else {
        var totalInches = (parseFloat(heightFeet) || 0) * 12 + (parseFloat(heightInches) || 0);
        heightInMeters = totalInches * 0.0254;
    }

    // Compute weight in kg based on unit system
    var weightInKg = 0;
    if (unitSystem === 'metric') {
        weightInKg = parseFloat(weight) || 0;
    } else {
        weightInKg = (parseFloat(weight) || 0) * 0.45359237;
    }

    // Calculate BMI score
    var bmi = 0;
    if (heightInMeters > 0 && weightInKg > 0) {
        bmi = weightInKg / (heightInMeters * heightInMeters);
    }

    // Determine BMI Category & Badge Styling
    function getCategoryInfo(bmiValue) {
        if (bmiValue <= 0) return { category: 'Invalid Input', classKey: 'invalid', badgeClass: 'bg-secondary', advice: 'Please enter valid numbers.' };
        if (bmiValue < 18.5) return {
            category: 'Underweight',
            classKey: 'underweight',
            badgeClass: 'bmi-badge-underweight',
            advice: 'You may need to gain weight. Focus on nutrient-rich foods, healthy fats, and strength training.'
        };
        if (bmiValue <= 24.9) return {
            category: 'Normal Weight',
            classKey: 'normal',
            badgeClass: 'bmi-badge-normal',
            advice: 'Great job! Maintain your balanced diet, regular physical exercise, and healthy habits.'
        };
        if (bmiValue <= 29.9) return {
            category: 'Overweight',
            classKey: 'overweight',
            badgeClass: 'bmi-badge-overweight',
            advice: 'Consider introducing more physical activity and controlling portion sizes to manage your weight.'
        };
        return {
            category: 'Obesity',
            classKey: 'obese',
            badgeClass: 'bmi-badge-obese',
            advice: 'Consult with a healthcare professional or nutritionist for personalized fitness & diet advice.'
        };
    }

    var categoryDetails = getCategoryInfo(bmi);

    // Calculate Healthy Weight Range (BMI 18.5 to 24.9)
    var minIdealKg = 18.5 * (heightInMeters * heightInMeters);
    var maxIdealKg = 24.9 * (heightInMeters * heightInMeters);

    var displayMinIdeal = unitSystem === 'metric' 
        ? `${minIdealKg.toFixed(1)} kg` 
        : `${(minIdealKg / 0.45359237).toFixed(1)} lbs`;

    var displayMaxIdeal = unitSystem === 'metric' 
        ? `${maxIdealKg.toFixed(1)} kg` 
        : `${(maxIdealKg / 0.45359237).toFixed(1)} lbs`;

    // Meter Pointer position calculation (mapped between BMI 12 and 38)
    var meterPercent = 0;
    if (bmi > 0) {
        meterPercent = Math.min(Math.max(((bmi - 12) / (38 - 12)) * 100, 2), 98);
    }

    // Toggle unit system helper
    function handleUnitChange(newUnit) {
        if (newUnit === unitSystem) return;
        if (newUnit === 'imperial') {
            var inchesTotal = heightCm / 2.54;
            setHeightFeet(Math.floor(inchesTotal / 12) || 5);
            setHeightInches(Math.round(inchesTotal % 12) || 7);
            setWeight(Math.round(weightInKg * 2.20462) || 150);
        } else {
            var totalIn = (heightFeet * 12) + parseInt(heightInches || 0);
            setHeightCm(Math.round(totalIn * 2.54) || 170);
            setWeight(Math.round(weightInKg) || 68);
        }
        setUnitSystem(newUnit);
    }

    return (
        <div className="container py-5">
            {/* Header matching GST Calculator style */}
            <div className="text-center mb-4 mt-2 calculator-header">
                <h1 className="fw-bold mb-2 display-5">Free BMI Calculator</h1>
                <p className="text-muted fs-5">
                    Calculate your Body Mass Index (BMI) & ideal weight range in seconds.
                </p>
            </div>

            {/* Main Calculator Card Component (Row split into 2 sides) */}
            <div className="card calculator-card mx-auto bg-white" style={{ maxWidth: "950px" }}>
                <div className="row g-0">
                    
                    {/* Left Side: Inputs */}
                    <div className="col-md-7 p-4 p-lg-5">
                        
                        {/* Unit Switcher */}
                        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
                            <span className="fw-semibold text-secondary">Measurement Unit:</span>
                            <div className="unit-switcher">
                                <button
                                    type="button"
                                    className={`btn ${unitSystem === 'metric' ? 'active' : ''}`}
                                    onClick={() => handleUnitChange('metric')}
                                >
                                    Metric (cm / kg)
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${unitSystem === 'imperial' ? 'active' : ''}`}
                                    onClick={() => handleUnitChange('imperial')}
                                >
                                    Imperial (ft / lbs)
                                </button>
                            </div>
                        </div>

                        {/* Gender & Age Inputs */}
                        <div className="row mb-4">
                            <div className="col-6">
                                <label className="form-label">Gender</label>
                                <select 
                                    className="form-select form-select-lg" 
                                    value={gender} 
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Age (years)</label>
                                <input 
                                    type="number" 
                                    className="form-control form-control-lg" 
                                    value={age} 
                                    onChange={(e) => setAge(e.target.value)} 
                                    min="2" 
                                    max="120"
                                />
                            </div>
                        </div>

                        {/* Height Input */}
                        <div className="mb-4 pb-2">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label mb-0">Height</label>
                                <span className="text-primary fw-bold">
                                    {unitSystem === 'metric' 
                                        ? `${heightCm} cm` 
                                        : `${heightFeet} ft ${heightInches} in`}
                                </span>
                            </div>

                            {unitSystem === 'metric' ? (
                                <>
                                    <div className="input-group input-group-lg">
                                        <input
                                            type="number"
                                            className="form-control border-end-0 ps-3"
                                            placeholder="Enter height in cm"
                                            value={heightCm}
                                            onChange={(e) => setHeightCm(e.target.value)}
                                            min="50"
                                            max="250"
                                        />
                                        <span className="input-group-text bg-light border-start-0 fs-5">cm</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        className="form-range mt-2" 
                                        min="100" 
                                        max="220" 
                                        value={heightCm || 170} 
                                        onChange={(e) => setHeightCm(e.target.value)} 
                                    />
                                </>
                            ) : (
                                <div className="row g-2">
                                    <div className="col-6">
                                        <div className="input-group input-group-lg">
                                            <input
                                                type="number"
                                                className="form-control border-end-0 ps-3"
                                                placeholder="Feet"
                                                value={heightFeet}
                                                onChange={(e) => setHeightFeet(e.target.value)}
                                                min="1"
                                                max="8"
                                            />
                                            <span className="input-group-text bg-light border-start-0 fs-6">ft</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group input-group-lg">
                                            <input
                                                type="number"
                                                className="form-control border-end-0 ps-3"
                                                placeholder="Inches"
                                                value={heightInches}
                                                onChange={(e) => setHeightInches(e.target.value)}
                                                min="0"
                                                max="11"
                                            />
                                            <span className="input-group-text bg-light border-start-0 fs-6">in</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Weight Input */}
                        <div className="mb-2">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label mb-0">Weight</label>
                                <span className="text-primary fw-bold">
                                    {weight} {unitSystem === 'metric' ? 'kg' : 'lbs'}
                                </span>
                            </div>
                            <div className="input-group input-group-lg">
                                <input
                                    type="number"
                                    className="form-control border-end-0 ps-3"
                                    placeholder={`Enter weight in ${unitSystem === 'metric' ? 'kg' : 'lbs'}`}
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    min="10"
                                    max="300"
                                />
                                <span className="input-group-text bg-light border-start-0 fs-5">
                                    {unitSystem === 'metric' ? 'kg' : 'lbs'}
                                </span>
                            </div>
                            <input 
                                type="range" 
                                className="form-range mt-2" 
                                min={unitSystem === 'metric' ? "30" : "66"} 
                                max={unitSystem === 'metric' ? "160" : "350"} 
                                value={weight || (unitSystem === 'metric' ? 68 : 150)} 
                                onChange={(e) => setWeight(e.target.value)} 
                            />
                        </div>
                    </div>

                    {/* Right Side: Results Display (matching first example structure) */}
                    <div className="col-md-5 p-4 p-lg-5 results-section d-flex flex-column justify-content-center text-center border-start">
                        
                        {/* Weight Value */}
                        <div className="w-100">
                            <h2 className="result-value">
                                {weight ? weight : 0} <span className="fs-6 text-muted">{unitSystem === 'metric' ? 'kg' : 'lbs'}</span>
                            </h2>
                            <p className="result-title">Weight Value</p>
                        </div>

                        {/* Math Operator */}
                        <div className="math-symbol">÷</div>

                        {/* Height Squared */}
                        <div className="w-100">
                            <h2 className="result-value">
                                {(heightInMeters * heightInMeters).toFixed(2)} <span className="fs-6 text-muted">m²</span>
                            </h2>
                            <p className="result-title">Height Squared (m²)</p>
                        </div>

                        {/* Math Operator */}
                        <div className="math-symbol">=</div>

                        {/* BMI Total Amount Box */}
                        <div className={`w-100 total-box mt-2 bmi-${categoryDetails.classKey}`}>
                            <p className="result-title text-uppercase mb-1" style={{ letterSpacing: '1px' }}>Your BMI Score</p>
                            <h2 className="main-bmi-score my-1" style={{ color: '#0f172a' }}>
                                {bmi > 0 ? bmi.toFixed(1) : '--'}
                            </h2>
                            
                            {/* Category Badge */}
                            <div className="my-2">
                                <span className={`badge px-3 py-2 fs-6 rounded-pill ${categoryDetails.badgeClass}`}>
                                    {categoryDetails.category}
                                </span>
                            </div>

                            {/* Meter Gauge Pointer */}
                            <div className="bmi-meter-container">
                                <div 
                                    className="bmi-meter-pointer" 
                                    style={{ left: `${meterPercent}%` }}
                                ></div>
                            </div>
                            <div className="d-flex justify-content-between text-muted small px-1 mt-1" style={{ fontSize: '0.75rem' }}>
                                <span>15</span>
                                <span>18.5</span>
                                <span>25</span>
                                <span>30</span>
                                <span>35+</span>
                            </div>

                            {/* Ideal Weight Range */}
                            {heightInMeters > 0 && (
                                <div className="mt-3 pt-2 border-top text-muted small">
                                    <span className="fw-semibold text-dark">Healthy Weight Range: </span>
                                    <br />
                                    <span className="text-primary fw-bold fs-6">{displayMinIdeal} – {displayMaxIdeal}</span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Health Recommendation Card */}
            <div className="alert alert-light border shadow-sm mx-auto mt-4 p-3 rounded-4 d-flex align-items-center gap-3" style={{ maxWidth: "950px" }}>
                <div className="p-3 bg-primary-subtle text-primary rounded-circle d-none d-sm-block">
                    💡
                </div>
                <div>
                    <h6 className="fw-bold mb-1">Health Recommendation:</h6>
                    <p className="mb-0 text-secondary small">{categoryDetails.advice}</p>
                </div>
            </div>

            {/* BMI Reference Categories Table with dynamic active row highlight */}
            <div className="card shadow-sm border-0 mx-auto mt-4 rounded-4" style={{ maxWidth: "950px" }}>
                <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">BMI Reference Categories</h5>
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered text-center align-middle mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>BMI Range</th>
                                    <th>Category</th>
                                    <th>Risk Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={bmi > 0 && bmi < 18.5 ? "active-category-row" : ""}>
                                    <td>Below 18.5</td>
                                    <td>
                                        <span className="badge text-bg-warning px-3 py-1">
                                            Underweight
                                        </span>
                                    </td>
                                    <td className="text-muted small">Minimal / Nutritional Risk</td>
                                </tr>
                                <tr className={bmi >= 18.5 && bmi <= 24.9 ? "active-category-row" : ""}>
                                    <td>18.5 – 24.9</td>
                                    <td>
                                        <span className="badge text-bg-success px-3 py-1">
                                            Normal Weight
                                        </span>
                                    </td>
                                    <td className="text-muted small">Lowest Risk</td>
                                </tr>
                                <tr className={bmi >= 25 && bmi <= 29.9 ? "active-category-row" : ""}>
                                    <td>25.0 – 29.9</td>
                                    <td>
                                        <span className="badge text-bg-warning px-3 py-1">
                                            Overweight
                                        </span>
                                    </td>
                                    <td className="text-muted small">Increased Risk</td>
                                </tr>
                                <tr className={bmi >= 30 ? "active-category-row" : ""}>
                                    <td>30.0 or higher</td>
                                    <td>
                                        <span className="badge text-bg-danger px-3 py-1">
                                            Obesity
                                        </span>
                                    </td>
                                    <td className="text-muted small">High Risk</td>
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
root.render(<BMICalculator />);