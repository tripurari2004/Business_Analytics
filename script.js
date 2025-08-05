// ---- ABOUT STORE ----
document.getElementById('about').innerHTML = `
  <h2>About Store</h2>
  <ul>
    <li><b>Name:</b> Shivam Book Depot & Stationery Shop</li>
    <li><b>Location:</b> Vixxxxxxa Colony, India</li>
    <li><b>Established:</b> 2020</li>
    <li><b>Type:</b> Local B2C Retail Shop</li>
    <li><b>Customer Base:</b> Students, College-goers, Office professionals</li>
    <li><b>Core Products:</b> Notebooks, Pens, Geometry Boxes, Office Supplies</li>
  </ul>
`;

// ---- PROBLEM STATEMENT ----
document.getElementById('problem').innerHTML = `
  <h2>Problem Statement & Background</h2>
  <ul>
    <li><b>Overstocking</b> of slow-moving items, tying up working capital</li>
    <li><b>Stockouts</b> during admission/exam peaks</li>
    <li><b>Poor seasonal planning</b></li>
    <li><b>Cash flow constraints</b> from unplanned inventory</li>
  </ul>
  <p>Background: Founded in 2020 to serve local academic and office needs, the shop struggled with efficient inventory control and cash management.</p>
`;

// ---- DATA OVERVIEW ----
document.getElementById('data').innerHTML = `
  <h2>Data Overview & Collection</h2>
  <ul>
    <li><b>Primary Data:</b> Shop owner interviews, physical registers, Tally exports</li>
    <li><b>Duration:</b> June 2024 – May 2025 (monthly, item-wise records)</li>
    <li><b>Collected:</b> Sales, Purchase, Inventory, Revenue</li>
    <li><b>Preprocessing:</b> Excel cleaning, standardizing SKU names, 3-month moving average, ABC & Pareto charting</li>
    <li><b>Techniques:</b> Line charts for trends, 80/20 Pareto, Correlations (<i>r</i> ≈ 0.99), Descriptive statistics</li>
  </ul>
`;

// ---- ANALYSIS METHODS ----
document.getElementById('analysis').innerHTML = `
  <h2>Analysis Methods Used</h2>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <ol>
        <li><b>Trend Analysis:</b> Line graphs for seasonality</li>
        <li><b>Pareto (80/20) Rule:</b> Identify top-revenue SKUs</li>
        <li><b>ABC Classification:</b> Tier items by importance</li>
        <li><b>Correlation:</b> Purchase vs Sales (r ≈ 0.9954)</li>
        <li><b>Statistical Summary:</b> Mean, SD, Range for demand</li>
        <li><b>Action Calendar:</b> Month-wise operational plan</li>
    </ol>

    <table border="1" cellpadding="10">
        <tr><th>Item</th><th>Revenue (₹)</th><th>Share (%)</th></tr>
        <tr><td>Pen</td><td>1,58,700</td><td>40.95%</td></tr>
        <tr><td>Geometry Box</td><td>40,750</td><td>10.51%</td></tr>
        <tr><td>Pencil</td><td>32,040</td><td>8.27%</td></tr>
        <tr><td>Notebook</td><td>22,650</td><td>5.84%</td></tr>
        <tr><td>Eraser</td><td>16,350</td><td>4.22%</td></tr>
    </table>
  </div>
`;

// ---- RESULTS & FINDINGS (with dynamic charts) ----
document.getElementById('results').innerHTML = `
  <h2>Results & Findings</h2>
  <div class="chart-container">
    <canvas id="monthlySalesChart"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="paretoChart"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="abcChart"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="correlationChart"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="revenueChart"></canvas>
  </div>
  <ul>
    <li><b>Strong seasonality:</b> Peaks in June and January.</li>
    <li><b>Pareto effect:</b> Top 5 items ~71% of revenue.</li>
    <li><b>Category A:</b> Pen, Geometry Box (high priority, volatile demand)</li>
    <li><b>High purchase-sales correlation:</b> Timely buying boosts sales.</li>
    <li><b>12% revenue growth & 18% lower unsold stock after interventions.</b></li>
  </ul>
`;

// ---- RECOMMENDATIONS ----
document.getElementById('recommend').innerHTML = `
  <h2>Recommendations</h2>
  <ul>
    <li>Track Category A items weekly, add 30% buffer stock in May & December.</li>
    <li>Monthly sales forecast using 3-month moving average for each SKU.</li>
    <li>Barcode-based POS for auto–sales logging and stock alerts.</li>
    <li>Bundle slow-movers for promotions; 10–15% discount after 3 months unsold.</li>
    <li>Assign 60% shelf space to Category A items; stock Category C on demand only.</li>
    <li>Continuous staff training on digital tools and demand planning.</li>
  </ul>
`;

// ---------- DYNAMIC CHARTS (SAMPLE DATA) ----------

// 1. Monthly Sales Trend – Top 5 Items
new Chart(document.getElementById("monthlySalesChart"), {
  type: 'line',
  data: {
    labels: [
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'
    ],
    datasets: [
      {label:'Pen', data: [78, 65, 43, 60, 65, 52, 41, 93, 80, 75, 99, 56], borderColor:'#1b7f71', fill:false},
      {label:'Geometry Box', data: [67,63,49,64,80,59,45,95,67,80,93,53], borderColor:'#264fa1', fill:false},
      {label:'Pencil', data: [69, 61, 50, 58, 72, 53, 44, 93, 72, 76, 89, 63], borderColor:'#f6c200', fill:false},
      {label:'Eraser', data: [62, 54, 43, 59, 67, 52, 42, 100, 68, 70, 84, 61], borderColor:'#9f3636', fill:false},
      {label:'Notebook', data: [60, 58, 50, 57, 65, 55, 42, 90, 71, 65, 83, 62], borderColor:'#5ab7a7', fill:false},
    ]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'Monthly Sales Trends – Top 5 Items' } }
  }
});

// 2. Pareto Chart – Revenue Share by Items (bar)
new Chart(document.getElementById("paretoChart"), {
  type: 'bar',
  data: {
    labels: ['Pen', 'Geometry Box', 'Pencil', 'Notebook', 'Eraser', 'Others'],
    datasets: [{
      label: 'Revenue (₹)',
      data: [158700, 40750, 32040, 22650, 16350, 44000],
      backgroundColor: ['#264fa1', '#5ab7a7', '#f6c200','#9f3636','#523068','#b5c6c6'],
    }]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'Pareto Analysis – Revenue Concentration' } }
  }
});

// 3. ABC Classification (doughnut)
new Chart(document.getElementById("abcChart"), {
  type: 'doughnut',
  data: {
    labels: ['A (Pen + G.Box)', 'B (Pencil)', 'C (Others)'],
    datasets: [{
      data: [69.5, 17.5, 13],
      backgroundColor: ['#1b7f71', '#f6c200', '#b5c6c6'],
    }]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'ABC Classification – Sales Contribution (%)' } }
  }
});

// 4. Sales vs Purchase Correlation (scatter)
new Chart(document.getElementById("correlationChart"), {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Purchase vs Sales',
      data: [
        {x:60, y:62}, {x:65, y:67}, {x:75, y:78}, {x:80, y:79}, {x:92, y:95}, {x:45, y:41}, {x:58,y:60}, {x:70,y:68}, {x:85, y:86}
      ],
      backgroundColor: '#264fa1'
    }]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'Correlation: Sales vs Purchase (r ≈ 0.99)' } },
    scales:{
      x: {title: {display:true, text:'Monthly Purchases'}},
      y: {title: {display:true, text:'Monthly Sales'}}
    }
  }
});

// 5. Revenue Contribution Pie
new Chart(document.getElementById("revenueChart"), {
  type: 'pie',
  data: {
    labels: ['Pen', 'Geometry Box', 'Pencil', 'Notebook', 'Eraser', 'Others'],
    datasets: [{
      data: [40.95, 10.51, 8.27, 5.84, 4.22, 30.21],
      backgroundColor: ['#1b7f71','#f6c200','#5ab7a7','#523068','#e18801','#bababa'],
    }]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: 'Revenue Share by Item (%)' } }
  }
});
