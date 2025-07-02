// Data Maps
const xpOptions = {
  Foraging:   [{label:"Oak",value:25},{label:"Pine",value:50},{label:"Greatwood",value:75},{label:"Lakewood",value:100},{label:"Ashwood",value:125},{label:"Palm",value:150},{label:"Frostpine",value:175}],
  Mining:     [{label:"Copper",value:25},{label:"Iron",value:50},{label:"Silver",value:75},{label:"Platinum",value:100},{label:"Mithril",value:125},{label:"Zirc",value:150},{label:"Cobalt",value:175}],
  Harvesting: [{label:"Cotton",value:25},{label:"Flax",value:50},{label:"Silk",value:75},{label:"Lilyleaf",value:100},{label:"Scorchleaf",value:125},{label:"Cocoleaf",value:150},{label:"Frostleaf",value:175}],
  Herbalist:  [{label:"IN DEV",value:0}],
  Alchemy:    [{label:"IN DEV",value:0}],
  Fishing:    [{label:"IN DEV",value:0}]
};
// merge all for leveling
xpOptions.Leveling = [].concat(
  xpOptions.Foraging,
  xpOptions.Mining,
  xpOptions.Harvesting,
  xpOptions.Herbalist,
  xpOptions.Alchemy,
  xpOptions.Fishing
);

const xpRequirements = {
  0:100,1:250,2:400,3:600,4:1000,5:1500,6:2000,7:3000,8:4000,9:7000,
  10:10000,11:15000,12:20000,13:30000,14:40000,15:60000,16:100000,
  17:150000,18:200000,19:400000,20:600000,21:800000,22:1000000,
  23:1200000,24:1400000,25:1600000,26:1800000,27:2000000,28:2200000,
  29:2400000,30:2600000,31:2800000,32:3000000,33:3200000,34:3400000,
  35:3600000,36:3800000,37:4000000,38:4200000,39:4400000,40:4600000,
  41:4800000,42:5000000,43:5200000,44:5500000,45:5800000,46:6200000,
  47:6800000,48:7400000,49:8000000,50:8600000,51:9200000,52:9800000,
  53:10400000,54:11000000,55:11600000,56:12200000,57:12800000,
  58:13400000,59:14000000,60:0
};

const levelMultipliers = {
  0:1,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,
  10:12,11:16,12:18,13:24,14:28,15:32,16:38,
  17:42,18:45,19:52,20:75,21:77,22:79,23:81,
  24:84,25:86,26:88,27:90,28:95,29:100,30:110,
  31:125,32:150,33:180,34:210,35:250,36:300,
  37:350,38:400,39:500,40:600,41:700,42:750,
  43:800,44:850,45:900,46:940,47:970,48:990,
  49:1000,50:1020,51:1040,52:1060,53:1080,
  54:1100,55:1120,56:1140,57:1160,58:1180,59:1190
};

const verbMap = {
  Foraging:"Foraged",Mining:"Mined",Harvesting:"Harvested",
  Herbalist:"Brewed",Alchemy:"Crafted",Fishing:"Fished"
};

// Elements
const profItems    = document.querySelectorAll('#profession-list li');
const selProfEl    = document.getElementById('selected-prof');
const viewCalc     = document.getElementById('view-calculator');
const viewLvl      = document.getElementById('view-leveling');
const xpActionEl   = document.getElementById('xp-action');
const tableAction  = document.getElementById('table-action');
const curLevelEl   = document.getElementById('current-level');
const curXpEl      = document.getElementById('current-xp');
const tgtLevelEl   = document.getElementById('target-level');
const boostsEls    = document.querySelectorAll('.boost');
const boostsTable  = document.querySelectorAll('.boost-table');
const actionsEl    = document.getElementById('actions-needed');
const historyLog   = document.getElementById('history-log');
const calcBtn      = document.getElementById('calculate-btn');
const actionBtn    = document.getElementById('action-btn');
const updateTableBtn = document.getElementById('update-table-btn');
const levelTable   = document.querySelector('#level-table tbody');

let currentProf = null;

// Populate dropdown
function populateActions(prof, el) {
  el.innerHTML = '<option value="">-- Select Action --</option>';
  xpOptions[prof].forEach(o => {
    const opt = document.createElement('option');
    opt.value = o.value;
    opt.textContent = `${o.label} (${o.value} XP)`;
    el.append(opt);
  });
}

// Record history
function recordHistory(html) {
  const div = document.createElement('div');
  div.className = 'history-entry';
  div.innerHTML = html;
  historyLog.prepend(div);
}

// Sidebar click
profItems.forEach(li => {
  li.addEventListener('click', () => {
    profItems.forEach(x=>x.classList.remove('active'));
    li.classList.add('active');
    currentProf = li.dataset.prof;
    selProfEl.textContent = currentProf;

    if (currentProf === 'Leveling') {
      viewCalc.classList.remove('active');
      viewLvl.classList.add('active');
      populateActions('Leveling', tableAction);
    } else {
      viewLvl.classList.remove('active');
      viewCalc.classList.add('active');
      populateActions(currentProf, xpActionEl);
      populateActions(currentProf, tableAction);
      actionBtn.textContent = verbMap[currentProf] || 'Act';
    }

    // Reset
    curLevelEl.value = curXpEl.value = tgtLevelEl.value = '';
    xpActionEl.value = tableAction.value = '';
    actionsEl.textContent = '—';
    historyLog.innerHTML = '';
    levelTable.innerHTML = '';
  });
});

// Calculate
calcBtn.addEventListener('click', () => {
  const cl = +curLevelEl.value, curXp = +curXpEl.value, tl = +tgtLevelEl.value;
  const base = +xpActionEl.value;
  if (!currentProf||isNaN(cl)||isNaN(curXp)||isNaN(tl)||!base) return;
  let totalActs = 0;
  for (let lvl = cl; lvl < tl; lvl++) {
    const xpNeed = (lvl === cl ? xpRequirements[lvl] - curXp : xpRequirements[lvl]);
    const xpPerAct = base * (levelMultipliers[lvl]||1);
    const boostPct = [...boostsEls].reduce((s,cb)=>s+(cb.checked?+cb.value:0),0);
    const xpBoosted = xpPerAct * (1+boostPct/100);
    totalActs += Math.ceil(xpNeed / xpBoosted);
  }
  actionsEl.textContent = totalActs;
  recordHistory(
    `<strong>${verbMap[currentProf]}</strong> ${currentProf}: ` +
    `L${cl}→L${tl}, Actions: <strong>${totalActs}</strong>`
  );
});

// Perform Action
actionBtn.addEventListener('click', () => {
  alert("Perform Action advances level and carries over excess XP (not shown).");
});

// Update Table
updateTableBtn.addEventListener('click', () => {
  const base     = +tableAction.value;
  if (!currentProf || !base) return;
  const boostPct = [...boostsTable].reduce((s, cb) => s + (cb.checked ? +cb.value : 0), 0);

  // clear out any existing rows
  levelTable.innerHTML = '';

  let grandTotal = 0;

  // build one row per level
  for (let lvl = 0; lvl < 60; lvl++) {
    const xpNeed   = xpRequirements[lvl];
    const xpPerAct = base * (levelMultipliers[lvl] || 1) * (1 + boostPct / 100);
    const acts     = Math.ceil(xpNeed / xpPerAct);
    grandTotal    += acts;

    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${lvl} → ${lvl + 1}</td><td>${acts}</td>`;
    levelTable.append(tr);
  }

  // append the Total row
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight = 'bold';
  totalRow.innerHTML = `<td>Total</td><td>${grandTotal}</td>`;
  levelTable.append(totalRow);
});
