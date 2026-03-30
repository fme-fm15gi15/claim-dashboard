// =============================================================
// ===== MOCK DATA — 請依照「資料填寫說明.md」修改以下資料 =====
// =============================================================

// ----- 1. 各倉儲單位（名稱、總金額、總件數，順序需對應） -----
const UNITS        = ['台北倉', '桃園倉', '台中倉', '台南倉', '高雄倉', '花蓮倉'];
const UNIT_AMOUNTS = [842000, 615000, 531000, 487000, 432000, 189000]; // 元
const UNIT_COUNTS  = [328, 241, 208, 191, 169, 74];                    // 件

// ----- 2. 賠償原因統計 -----
const REASON_DATA = [
  { name: '貨物損毀', count: 488, total: 1840000, color: '#00e5ff' },
  { name: '配送延誤', count: 295, total: 623000,  color: '#748ffc' },
  { name: '貨物遺失', count: 154, total: 510000,  color: '#ffd43b' },
  { name: '包裝問題', count: 218, total: 189000,  color: '#51cf66' },
  { name: '地址錯誤', count: 129, total: 118000,  color: '#ff8787' },
];

// ----- 3. 月度趨勢（依時間先後排序） -----
const MONTHLY_DATA = [
  { month: '10月', amount: 892000,  count: 312 },
  { month: '11月', amount: 1050000, count: 389 },
  { month: '12月', amount: 980000,  count: 362 },
  { month: '1月',  amount: 1120000, count: 415 },
  { month: '2月',  amount: 960000,  count: 357 },
  { month: '3月',  amount: 1280000, count: 451 },
];

// ----- 4. 賠償明細清單（每筆案件完整資料） -----
// 欄位說明：id=案件編號, unit=賠償單位, reason=賠償原因,
//           status=狀態(已結案/處理中/待審核), staff=負責人,
//           amount=賠償金額(元), date=申請日期, endDate=結案日期(未結案填'-')
const ALL_RECORDS = [
  { id:'CL-10001', unit:'台北倉', reason:'貨物損毀', status:'已結案', staff:'林志宏', amount:15200, date:'2025/1/3',  endDate:'2025/1/18' },
  { id:'CL-10002', unit:'桃園倉', reason:'配送延誤', status:'已結案', staff:'陳美玲', amount:3800,  date:'2025/1/4',  endDate:'2025/1/20' },
  { id:'CL-10003', unit:'台中倉', reason:'貨物遺失', status:'處理中', staff:'王建國', amount:28000, date:'2025/1/5',  endDate:'-' },
  { id:'CL-10004', unit:'台南倉', reason:'包裝問題', status:'已結案', staff:'張淑芬', amount:1200,  date:'2025/1/6',  endDate:'2025/1/15' },
  { id:'CL-10005', unit:'高雄倉', reason:'地址錯誤', status:'待審核', staff:'李明哲', amount:600,   date:'2025/1/7',  endDate:'-' },
  { id:'CL-10006', unit:'花蓮倉', reason:'配送延誤', status:'已結案', staff:'吳秀英', amount:1800,  date:'2025/1/8',  endDate:'2025/1/22' },
  { id:'CL-10007', unit:'台北倉', reason:'貨物損毀', status:'已結案', staff:'林志宏', amount:9500,  date:'2025/1/9',  endDate:'2025/1/25' },
  { id:'CL-10008', unit:'桃園倉', reason:'貨物遺失', status:'處理中', staff:'陳美玲', amount:48500, date:'2025/1/10', endDate:'-' },
  { id:'CL-10009', unit:'台中倉', reason:'包裝問題', status:'已結案', staff:'王建國', amount:2200,  date:'2025/1/11', endDate:'2025/1/28' },
  { id:'CL-10010', unit:'台南倉', reason:'貨物損毀', status:'已結案', staff:'張淑芬', amount:7800,  date:'2025/1/12', endDate:'2025/1/30' },
  { id:'CL-10011', unit:'高雄倉', reason:'配送延誤', status:'待審核', staff:'李明哲', amount:450,   date:'2025/1/13', endDate:'-' },
  { id:'CL-10012', unit:'花蓮倉', reason:'地址錯誤', status:'已結案', staff:'吳秀英', amount:320,   date:'2025/1/14', endDate:'2025/2/1' },
  { id:'CL-10013', unit:'台北倉', reason:'貨物遺失', status:'已結案', staff:'林志宏', amount:33000, date:'2025/1/15', endDate:'2025/2/5' },
  { id:'CL-10014', unit:'桃園倉', reason:'包裝問題', status:'處理中', staff:'陳美玲', amount:980,   date:'2025/1/16', endDate:'-' },
  { id:'CL-10015', unit:'台中倉', reason:'貨物損毀', status:'已結案', staff:'王建國', amount:12400, date:'2025/1/17', endDate:'2025/2/8' },
  { id:'CL-10016', unit:'台南倉', reason:'配送延誤', status:'已結案', staff:'張淑芬', amount:2100,  date:'2025/1/18', endDate:'2025/2/10' },
  { id:'CL-10017', unit:'高雄倉', reason:'貨物損毀', status:'待審核', staff:'李明哲', amount:5600,  date:'2025/1/19', endDate:'-' },
  { id:'CL-10018', unit:'花蓮倉', reason:'配送延誤', status:'已結案', staff:'吳秀英', amount:760,   date:'2025/1/20', endDate:'2025/2/12' },
  { id:'CL-10019', unit:'台北倉', reason:'包裝問題', status:'已結案', staff:'林志宏', amount:1650,  date:'2025/2/1',  endDate:'2025/2/18' },
  { id:'CL-10020', unit:'桃園倉', reason:'地址錯誤', status:'已結案', staff:'陳美玲', amount:420,   date:'2025/2/2',  endDate:'2025/2/20' },
  { id:'CL-10021', unit:'台中倉', reason:'貨物損毀', status:'處理中', staff:'王建國', amount:19800, date:'2025/2/3',  endDate:'-' },
  { id:'CL-10022', unit:'台南倉', reason:'貨物遺失', status:'已結案', staff:'張淑芬', amount:22000, date:'2025/2/4',  endDate:'2025/2/25' },
  { id:'CL-10023', unit:'高雄倉', reason:'配送延誤', status:'已結案', staff:'李明哲', amount:3200,  date:'2025/2/5',  endDate:'2025/2/28' },
  { id:'CL-10024', unit:'花蓮倉', reason:'包裝問題', status:'待審核', staff:'吳秀英', amount:880,   date:'2025/2/6',  endDate:'-' },
  { id:'CL-10025', unit:'台北倉', reason:'貨物損毀', status:'已結案', staff:'林志宏', amount:6700,  date:'2025/2/7',  endDate:'2025/3/1' },
  { id:'CL-10026', unit:'桃園倉', reason:'配送延誤', status:'已結案', staff:'陳美玲', amount:1900,  date:'2025/2/8',  endDate:'2025/3/3' },
  { id:'CL-10027', unit:'台中倉', reason:'地址錯誤', status:'已結案', staff:'王建國', amount:510,   date:'2025/2/9',  endDate:'2025/3/5' },
  { id:'CL-10028', unit:'台南倉', reason:'貨物損毀', status:'處理中', staff:'張淑芬', amount:41000, date:'2025/2/10', endDate:'-' },
  { id:'CL-10029', unit:'高雄倉', reason:'包裝問題', status:'已結案', staff:'李明哲', amount:1380,  date:'2025/2/11', endDate:'2025/3/8' },
  { id:'CL-10030', unit:'花蓮倉', reason:'貨物遺失', status:'已結案', staff:'吳秀英', amount:16500, date:'2025/2/12', endDate:'2025/3/10' },
  { id:'CL-10031', unit:'台北倉', reason:'配送延誤', status:'待審核', staff:'林志宏', amount:2700,  date:'2025/3/1',  endDate:'-' },
  { id:'CL-10032', unit:'桃園倉', reason:'貨物損毀', status:'已結案', staff:'陳美玲', amount:8900,  date:'2025/3/2',  endDate:'2025/3/18' },
  { id:'CL-10033', unit:'台中倉', reason:'包裝問題', status:'已結案', staff:'王建國', amount:1750,  date:'2025/3/3',  endDate:'2025/3/20' },
  { id:'CL-10034', unit:'台南倉', reason:'配送延誤', status:'已結案', staff:'張淑芬', amount:3100,  date:'2025/3/4',  endDate:'2025/3/22' },
  { id:'CL-10035', unit:'高雄倉', reason:'貨物遺失', status:'處理中', staff:'李明哲', amount:27500, date:'2025/3/5',  endDate:'-' },
  { id:'CL-10036', unit:'花蓮倉', reason:'地址錯誤', status:'已結案', staff:'吳秀英', amount:290,   date:'2025/3/6',  endDate:'2025/3/25' },
  { id:'CL-10037', unit:'台北倉', reason:'貨物損毀', status:'已結案', staff:'林志宏', amount:13200, date:'2025/3/7',  endDate:'2025/3/28' },
  { id:'CL-10038', unit:'桃園倉', reason:'地址錯誤', status:'待審核', staff:'陳美玲', amount:180,   date:'2025/3/8',  endDate:'-' },
  { id:'CL-10039', unit:'台中倉', reason:'配送延誤', status:'已結案', staff:'王建國', amount:4400,  date:'2025/3/9',  endDate:'2025/3/28' },
  { id:'CL-10040', unit:'台南倉', reason:'包裝問題', status:'已結案', staff:'張淑芬', amount:920,   date:'2025/3/10', endDate:'2025/3/28' },
];

// ----- 5. 儀表板 KPI 數字 -----
const KPI = {
  totalCount:    1284,
  totalAmount:   '$3.28M',
  avgAmount:     2554,      // 元
  closedCount:   1107,
  countVsPct:    -8.3,      // 負數=下降(↓), 正數=上升(↑)
  amountVsPct:   +4.1,
};

// ----- 6. 金額分析區間 -----
const AMOUNT_RANGES = [
  { label: '$0 - $500',       count: 142 },
  { label: '$501 - $2,000',   count: 389 },
  { label: '$2,001 - $5,000', count: 387 },
  { label: '$5,001 - $10,000',count: 279 },
  { label: '$10,001 以上',    count: 87  },
];

// =============================================
// ===== 以下為程式邏輯，一般不需要修改 =====
// =============================================

// ----- 頁面設定 -----
const PAGE_INFO = {
  overview:  ['儀表板總覽',   '2025 年 Q1 物流賠償彙整'],
  'by-unit':   ['賠償單位報表', '各倉儲單位賠償統計'],
  'by-amount': ['賠償金額分析', '金額分佈與高額案件'],
  'by-reason': ['賠償原因分析', '依原因分類統計'],
  'by-trend':  ['月度趨勢報表', '近 6 個月走勢'],
  'by-detail': ['賠償明細清單', '全部案件一覽'],
};

// ----- 工具函式 -----
const fmt = n => '$' + Number(n).toLocaleString('zh-TW');
const pct = (a, b) => ((a / b) * 100).toFixed(1) + '%';

function statusBadge(s) {
  const map = { '已結案': 'badge-green', '處理中': 'badge-yellow', '待審核': 'badge-blue' };
  return `<span class="badge ${map[s] || 'badge-blue'}">${s}</span>`;
}

function trendHtml(val) {
  if (val === 0) return `<span class="text-ink-mute">—</span>`;
  const up = val > 0;
  const cls = up ? 'text-red-400' : 'text-emerald-400';
  return `<span class="${cls}">${up ? '↑' : '↓'} ${Math.abs(val)}%</span>`;
}

// ----- 導覽切換 -----
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.getElementById('tab-' + tab).classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  const btn = document.querySelector(`[data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');
  const [title, sub] = PAGE_INFO[tab] || ['', ''];
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-subtitle').textContent = sub;
  if (tab === 'overview') triggerBarAnimation();
}

// ----- BAR 動畫 -----
function triggerBarAnimation() {
  setTimeout(() => {
    document.querySelectorAll('.bar-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w;
    });
  }, 80);
}

// ----- OVERVIEW -----
function renderOverview() {
  // KPI
  const k = KPI;
  document.getElementById('kpi-total-count').textContent  = k.totalCount.toLocaleString();
  document.getElementById('kpi-total-amount').textContent = k.totalAmount;
  document.getElementById('kpi-avg-amount').textContent   = fmt(k.avgAmount);
  document.getElementById('kpi-closed-count').textContent = k.closedCount.toLocaleString();
  document.getElementById('kpi-count-vs').innerHTML  = trendHtml(k.countVsPct) + ' <span class="text-ink-mute">vs 上季</span>';
  document.getElementById('kpi-amount-vs').innerHTML = trendHtml(k.amountVsPct) + ' <span class="text-ink-mute">vs 上季</span>';

  const closeRate = ((k.closedCount / k.totalCount) * 100).toFixed(1);
  document.getElementById('kpi-close-rate').innerHTML = `<span class="text-emerald-400">結案率 ${closeRate}%</span>`;

  // Unit bars
  const maxAmt = Math.max(...UNIT_AMOUNTS);
  const barColors = ['#00e5ff','#00c4d4','#748ffc','#9775fa','#51cf66','#6b7280'];
  document.getElementById('overview-unit-bars').innerHTML = UNITS.map((u, i) => `
    <div>
      <div class="flex justify-between text-[11px] text-ink-mute mb-1.5">
        <span>${u}</span><span class="font-mono">${fmt(UNIT_AMOUNTS[i])}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" data-w="${(UNIT_AMOUNTS[i]/maxAmt*100).toFixed(1)}%"
          style="background:${barColors[i]}"></div>
      </div>
    </div>`).join('');

  // Donut
  const totalCount = REASON_DATA.reduce((s, r) => s + r.count, 0);
  document.getElementById('donut-center').textContent = totalCount.toLocaleString();
  const r = 38, circ = 2 * Math.PI * r;
  let offset = 0;
  const svg = document.getElementById('donut-svg');
  svg.innerHTML = `<circle cx="50" cy="50" r="${r}" fill="none" stroke="#1c2540" stroke-width="13"/>`;
  REASON_DATA.forEach(d => {
    const dash = (d.count / totalCount) * circ;
    svg.innerHTML += `<circle cx="50" cy="50" r="${r}" fill="none" stroke="${d.color}"
      stroke-width="13" stroke-dasharray="${dash.toFixed(2)} ${circ.toFixed(2)}"
      stroke-dashoffset="${(-offset).toFixed(2)}" stroke-linecap="butt"/>`;
    offset += dash;
  });

  document.getElementById('donut-legend').innerHTML = REASON_DATA.map(d => `
    <div class="flex items-center justify-between text-[11px]">
      <span class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${d.color}"></span>
        ${d.name}
      </span>
      <span class="text-ink-mute font-mono">${(d.count/totalCount*100).toFixed(0)}%</span>
    </div>`).join('');

  // Recent table (latest 8)
  document.getElementById('overview-table-body').innerHTML = ALL_RECORDS.slice(-8).reverse().map(r => `
    <tr>
      <td class="px-6 py-2.5 font-mono" style="color:#00e5ff">${r.id}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.unit}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.reason}</td>
      <td class="px-6 py-2.5 text-right font-mono text-ink">${fmt(r.amount)}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.date}</td>
      <td class="px-6 py-2.5">${statusBadge(r.status)}</td>
    </tr>`).join('');
}

// ----- BY UNIT -----
function renderUnit() {
  const total = UNIT_AMOUNTS.reduce((s, v) => s + v, 0);
  document.getElementById('unit-table-body').innerHTML = UNITS.map((u, i) => `
    <tr>
      <td class="py-2.5 text-ink font-medium">${u}</td>
      <td class="py-2.5 text-right font-mono text-ink-mute">${UNIT_COUNTS[i].toLocaleString()}</td>
      <td class="py-2.5 text-right font-mono text-ink">${fmt(UNIT_AMOUNTS[i])}</td>
      <td class="py-2.5 text-right font-mono text-ink-mute">${fmt(Math.round(UNIT_AMOUNTS[i]/UNIT_COUNTS[i]))}</td>
      <td class="py-2.5 text-right text-ink-mute">${(UNIT_AMOUNTS[i]/total*100).toFixed(1)}%</td>
    </tr>`).join('');

  const maxAmt = Math.max(...UNIT_AMOUNTS);
  const colors = ['#00e5ff','#00c4d4','#748ffc','#9775fa','#51cf66','#6b7280'];
  document.getElementById('unit-rank-bars').innerHTML = UNITS.map((u, i) => `
    <div>
      <div class="flex justify-between text-[11px] text-ink-mute mb-1.5">
        <span>${u}</span><span class="font-mono">${fmt(UNIT_AMOUNTS[i])}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="background:${colors[i]};width:${(UNIT_AMOUNTS[i]/maxAmt*100).toFixed(1)}%"></div>
      </div>
    </div>`).join('');

  document.getElementById('unit-kpi-row').innerHTML = `
    <div class="card rounded-xl p-5">
      <p class="text-[11px] text-ink-mute mb-1 uppercase tracking-wider">最高賠償單位</p>
      <p class="text-lg font-bold text-ink">${UNITS[0]}</p>
      <p class="text-[11px] text-ink-faint mt-1">${UNIT_COUNTS[0]} 件 ／ ${fmt(UNIT_AMOUNTS[0])}</p>
    </div>
    <div class="card rounded-xl p-5">
      <p class="text-[11px] text-ink-mute mb-1 uppercase tracking-wider">最低賠償單位</p>
      <p class="text-lg font-bold text-ink">${UNITS[UNITS.length-1]}</p>
      <p class="text-[11px] text-ink-faint mt-1">${UNIT_COUNTS[UNITS.length-1]} 件 ／ ${fmt(UNIT_AMOUNTS[UNIT_AMOUNTS.length-1])}</p>
    </div>
    <div class="card rounded-xl p-5">
      <p class="text-[11px] text-ink-mute mb-1 uppercase tracking-wider">單位平均賠償</p>
      <p class="text-lg font-bold font-mono text-ink">${fmt(Math.round(total/UNITS.length))}</p>
      <p class="text-[11px] text-ink-faint mt-1">${UNITS.length} 個單位平均值</p>
    </div>`;
}

// ----- BY AMOUNT -----
function renderAmount() {
  const sorted = [...ALL_RECORDS].sort((a, b) => b.amount - a.amount);
  const max = sorted[0];
  const min = sorted[sorted.length - 1];
  const amounts = sorted.map(r => r.amount);
  const mid = amounts[Math.floor(amounts.length / 2)];
  const highCount = amounts.filter(v => v > 10000).length;

  document.getElementById('amt-max').textContent = fmt(max.amount);
  document.getElementById('amt-max-desc').textContent = `${max.unit} ／ ${max.reason}`;
  document.getElementById('amt-min').textContent = fmt(min.amount);
  document.getElementById('amt-min-desc').textContent = `${min.unit} ／ ${min.reason}`;
  document.getElementById('amt-median').textContent = fmt(mid);
  document.getElementById('amt-high').textContent = highCount + '件';
  document.getElementById('amt-high-pct').textContent = `佔總件數 ${(highCount/amounts.length*100).toFixed(1)}%`;

  const maxCount = Math.max(...AMOUNT_RANGES.map(r => r.count));
  const rangeColors = ['#51cf66','#00e5ff','#748ffc','#ffd43b','#ff8787'];
  document.getElementById('amount-dist-bars').innerHTML = AMOUNT_RANGES.map((r, i) => `
    <div>
      <div class="flex justify-between text-[11px] text-ink-mute mb-1.5">
        <span>${r.label}</span>
        <span class="font-mono">${r.count.toLocaleString()} 件（${(r.count/KPI.totalCount*100).toFixed(1)}%）</span>
      </div>
      <div class="bar-track" style="height:8px">
        <div class="bar-fill" style="background:${rangeColors[i]};width:${(r.count/maxCount*100).toFixed(1)}%;height:8px"></div>
      </div>
    </div>`).join('');

  document.getElementById('top10-table-body').innerHTML = sorted.slice(0, 10).map((r, i) => `
    <tr>
      <td class="px-6 py-2.5 text-ink-mute font-mono">#${i+1}</td>
      <td class="px-6 py-2.5 font-mono" style="color:#00e5ff">${r.id}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.unit}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.reason}</td>
      <td class="px-6 py-2.5 text-right font-mono font-bold" style="color:#ffd43b">${fmt(r.amount)}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.date}</td>
    </tr>`).join('');
}

// ----- BY REASON -----
function renderReason() {
  const totalCount = REASON_DATA.reduce((s, r) => s + r.count, 0);
  document.getElementById('reason-cards').innerHTML = REASON_DATA.map(r => `
    <div class="reason-card">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" style="background:${r.color}"></span>
          <h4 class="text-sm font-semibold text-ink">${r.name}</h4>
        </div>
        <span class="text-[11px] text-ink-mute font-mono">${(r.count/totalCount*100).toFixed(1)}%</span>
      </div>
      <div class="flex gap-6 mb-4">
        <div><p class="text-[10px] text-ink-faint uppercase tracking-wider mb-1">件數</p>
          <p class="text-2xl font-bold font-mono text-ink">${r.count}</p></div>
        <div><p class="text-[10px] text-ink-faint uppercase tracking-wider mb-1">總金額</p>
          <p class="text-2xl font-bold font-mono text-ink">${fmt(r.total)}</p></div>
        <div><p class="text-[10px] text-ink-faint uppercase tracking-wider mb-1">平均金額</p>
          <p class="text-2xl font-bold font-mono" style="color:${r.color}">${fmt(Math.round(r.total/r.count))}</p></div>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="background:${r.color};width:${(r.count/totalCount*100).toFixed(1)}%"></div>
      </div>
    </div>`).join('');

  document.getElementById('reason-table-body').innerHTML = REASON_DATA.map(r => `
    <tr>
      <td class="px-6 py-2.5">
        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${r.color}"></span>
          ${r.name}
        </span>
      </td>
      <td class="px-6 py-2.5 text-right font-mono text-ink-mute">${r.count.toLocaleString()}</td>
      <td class="px-6 py-2.5 text-right font-mono text-ink">${fmt(r.total)}</td>
      <td class="px-6 py-2.5 text-right font-mono text-ink-mute">${fmt(Math.round(r.total/r.count))}</td>
      <td class="px-6 py-2.5 text-right font-mono" style="color:#ffd43b">${fmt(Math.round(r.total/r.count*2.1))}</td>
      <td class="px-6 py-2.5 text-right text-ink-mute">${(r.count/totalCount*100).toFixed(1)}%</td>
    </tr>`).join('');
}

// ----- BY TREND -----
function renderTrend() {
  const maxAmt = Math.max(...MONTHLY_DATA.map(m => m.amount));
  const maxCnt = Math.max(...MONTHLY_DATA.map(m => m.count));

  document.getElementById('trend-amount-chart').innerHTML = MONTHLY_DATA.map(m => `
    <div class="trend-bar" style="background:linear-gradient(to top,#0078ff,#00e5ff);height:${(m.amount/maxAmt*100).toFixed(1)}%"
      title="${m.month}: ${fmt(m.amount)}"></div>`).join('');
  document.getElementById('trend-amount-labels').innerHTML = MONTHLY_DATA.map(m =>
    `<span class="trend-label">${m.month}</span>`).join('');

  document.getElementById('trend-count-chart').innerHTML = MONTHLY_DATA.map(m => `
    <div class="trend-bar" style="background:#748ffc;height:${(m.count/maxCnt*100).toFixed(1)}%"
      title="${m.month}: ${m.count}件"></div>`).join('');
  document.getElementById('trend-count-labels').innerHTML = MONTHLY_DATA.map(m =>
    `<span class="trend-label">${m.month}</span>`).join('');

  document.getElementById('trend-table-body').innerHTML = MONTHLY_DATA.map((m, i) => {
    const prev = MONTHLY_DATA[i - 1];
    const diff = prev ? ((m.amount - prev.amount) / prev.amount * 100).toFixed(1) : null;
    return `<tr>
      <td class="py-2.5 text-ink-mute">${m.month}</td>
      <td class="py-2.5 text-right font-mono text-ink-mute">${m.count.toLocaleString()}</td>
      <td class="py-2.5 text-right font-mono text-ink">${fmt(m.amount)}</td>
      <td class="py-2.5 text-right">${diff === null ? '<span class="text-ink-faint">—</span>' : trendHtml(parseFloat(diff))}</td>
    </tr>`;
  }).join('');
}

// ----- BY DETAIL -----
let filteredRecords = [...ALL_RECORDS];
let currentPage = 1;
const PAGE_SIZE = 15;

function populateFilters() {
  const unitSel = document.getElementById('filter-unit');
  const reasonSel = document.getElementById('filter-reason');
  UNITS.forEach(u => { const o = document.createElement('option'); o.textContent = u; unitSel.appendChild(o); });
  REASON_DATA.forEach(r => { const o = document.createElement('option'); o.textContent = r.name; reasonSel.appendChild(o); });
}

function renderDetailTable() {
  const start = (currentPage - 1) * PAGE_SIZE;
  const rows = filteredRecords.slice(start, start + PAGE_SIZE);
  document.getElementById('detail-table-body').innerHTML = rows.map(r => `
    <tr>
      <td class="px-6 py-2.5 font-mono" style="color:#00e5ff">${r.id}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.unit}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.reason}</td>
      <td class="px-6 py-2.5 text-right font-mono text-ink">${fmt(r.amount)}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.date}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.endDate}</td>
      <td class="px-6 py-2.5">${statusBadge(r.status)}</td>
      <td class="px-6 py-2.5 text-ink-mute">${r.staff}</td>
    </tr>`).join('');

  const pages = Math.ceil(filteredRecords.length / PAGE_SIZE);
  const end = Math.min(start + PAGE_SIZE, filteredRecords.length);
  document.getElementById('detail-count').textContent =
    `共 ${filteredRecords.length} 筆，顯示第 ${start + 1}–${end} 筆`;
  document.getElementById('pagination').innerHTML =
    Array.from({ length: pages }, (_, i) => i + 1).map(p =>
      `<button class="page-btn ${p === currentPage ? 'active' : ''}" onclick="goPage(${p})">${p}</button>`
    ).join('');
}

function goPage(p) { currentPage = p; renderDetailTable(); }

function applyFilters() {
  const q      = document.getElementById('search-input').value.toLowerCase();
  const unit   = document.getElementById('filter-unit').value;
  const reason = document.getElementById('filter-reason').value;
  const status = document.getElementById('filter-status').value;
  filteredRecords = ALL_RECORDS.filter(r =>
    (!q      || r.id.toLowerCase().includes(q) || r.unit.includes(q) || r.staff.includes(q)) &&
    (!unit   || r.unit   === unit) &&
    (!reason || r.reason === reason) &&
    (!status || r.status === status)
  );
  currentPage = 1;
  renderDetailTable();
}

// ----- INIT -----
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('last-updated').textContent =
    new Date().toLocaleString('zh-TW', { year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' });

  renderOverview();
  renderUnit();
  renderAmount();
  renderReason();
  renderTrend();
  populateFilters();
  renderDetailTable();

  document.getElementById('search-input').addEventListener('input', applyFilters);
  document.getElementById('filter-unit').addEventListener('change', applyFilters);
  document.getElementById('filter-reason').addEventListener('change', applyFilters);
  document.getElementById('filter-status').addEventListener('change', applyFilters);

  // Trigger bar animation after paint
  requestAnimationFrame(() => setTimeout(triggerBarAnimation, 100));
});
