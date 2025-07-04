// -------- Data Maps --------
const xpOptions = {
  Foraging:   [{label:"Oak",value:25},{label:"Pine",value:50},{label:"Greatwood",value:75},
               {label:"Lakewood",value:100},{label:"Ashwood",value:125},{label:"Palm",value:150},
               {label:"Frostpine",value:175}],
  Mining:     [{label:"Copper",value:25},{label:"Iron",value:50},{label:"Silver",value:75},
               {label:"Platinum",value:100},{label:"Mithril",value:125},{label:"Zirc",value:150},
               {label:"Cobalt",value:175}],
  Harvesting: [{label:"Cotton",value:25},{label:"Flax",value:50},{label:"Silk",value:75},
               {label:"Lilyleaf",value:100},{label:"Scorchleaf",value:125},{label:"Cocoleaf",value:150},
               {label:"Frostleaf",value:175}],
  Herbalist:  [{label:"Apple",value:15},{label:"Moss",value:15},{label:"Vitalshroom",value:15},
               {label:"Lumishroom",value:15},{label:"Pineroot",value:15},{label:"Bahstalk",value:15},
               {label:"Coconut",value:15}],
  Alchemy:    [{label:"Lesser Health Potion",value:75},{label:"Health Potion",value:75},
               {label:"Greater Health Potion",value:75},{label:"Lesser Mana Potion",value:75},
               {label:"Mana Potion",value:75},{label:"Greater Mana Potion",value:75},
               {label:"Lesser Strength Potion",value:75},{label:"Strength Potion",value:75},
               {label:"Greater Strength Potion",value:75},{label:"Lesser Agility Potion",value:75},
               {label:"Agility Potion",value:75},{label:"Greater Agility Potion",value:75},
               {label:"Heat Protection Potion",value:75},{label:"Cold Protection Potion",value:75}],
  Fishing:    [{label:"IN DEV",value:0}],
  Combat: [
    // Normal mobs – Main Game
    { label:"Frog",               value:43.85   },
    { label:"Braelor/Gralthar",   value:134.0625},
    { label:"Banshee",            value:38.75   },
    { label:"Hill Troll",         value:158.4375},
    { label:"Imps",               value:43.75   },
    { label:"Fiend",              value:47.5    },
    { label:"Panther",            value:28.75   },
    { label:"Amphithere",         value:26.25   },
    { label:"Serpent",            value:31.25   },
    { label:"Crocodile",          value:33.75   },
    { label:"Basilisk",           value:121.875 },
    { label:"Crab",               value:117.8125},
    { label:"Spider",             value:28.75   },
    { label:"Adult Spider",       value:33.75   },
    { label:"Skeleton Mage/Melee",value:18.75   },
    { label:"Slime",              value:8.75    },
    { label:"Bee",                value:3.75    },
    { label:"Deer",               value:6.25    },
    { label:"Goblins",            value:21.25   },
    { label:"Mandrake",           value:1.25    },
    { label:"Giant Bee",          value:10      },
    { label:"Boar",               value:16.25   },
    { label:"Wolf",               value:13.75   },
    { label:"Bear",               value:22.5    },
    { label:"Rat",                value:11.25   },
    { label:"Coconut Crab",       value:53.75   },
    { label:"Lobster",            value:50      },
    { label:"Skeleton Pirate",    value:48.75   },
    { label:"Shark/Hammerhead",   value:50      },
    { label:"Vangar/Vamps",       value:43.75   },

    // Normal mobs – Tundra
    { label:"Snowman",            value:170.625 },
    { label:"Snow Wolf",          value:55      },
    { label:"Sabertooth",         value:56.25   },
    { label:"Mammoth",            value:182.8125},
    { label:"Dire Wolf",          value:203.125 },
    { label:"Cyclops",            value:182.8125},
    { label:"Wyvern",             value:182.8125},

    // Bosses – Main Game
    { label:"Drogar",             value:142.1875},
    { label:"Runic Whale",        value:162.5   },
    { label:"Razor Fang",         value:81.25   },
    { label:"Goblin Champion",    value:60.9375 },
    { label:"Rat King",           value:60.9375 },
    { label:"Mandrake King",      value:12.5    },
    { label:"Treant",             value:162.5   },
    { label:"Lycanthar",          value:162.5   },
    { label:"Mommy Spider",       value:162.5   },
    { label:"Dire Bear",          value:171.25  },
    { label:"Lich",               value:50      },
    { label:"Gob. King",          value:162.5   },
    { label:"Slime King",         value:56.875  },

    // Bosses – Tundra
    { label:"Ice Dragon",         value:203.125 },
    { label:"Yeti",               value:182.8125},
    { label:"Ice Golem",          value:182.8125}
  ]
};
xpOptions.Leveling = [
  ...xpOptions.Foraging, ...xpOptions.Mining,
  ...xpOptions.Harvesting, ...xpOptions.Herbalist,
  ...xpOptions.Alchemy,   ...xpOptions.Fishing,  ...xpOptions.Combat
];

const xpRequirements = { /* levels 0–60 as before */ 0:100,1:250,2:400,3:600,4:1000,5:1500,6:2000,7:3000,8:4000,9:7000,
  10:10000,11:15000,12:20000,13:30000,14:40000,15:60000,16:100000,17:150000,18:200000,19:400000,
  20:600000,21:800000,22:1000000,23:1200000,24:1400000,25:1600000,26:1800000,27:2000000,28:2200000,
  29:2400000,30:2600000,31:2800000,32:3000000,33:3200000,34:3400000,35:3600000,36:3800000,37:4000000,
  38:4200000,39:4400000,40:4600000,41:4800000,42:5000000,43:5200000,44:5500000,45:5800000,46:6200000,
  47:6800000,48:7400000,49:8000000,50:8600000,51:9200000,52:9800000,53:10400000,54:11000000,55:11600000,
  56:12200000,57:12800000,58:13400000,59:14000000,60:0
};

const levelMultipliers = { /* as before */ 0:1,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,
  10:12,11:16,12:18,13:24,14:28,15:32,16:38,17:42,18:45,19:52,20:75,21:77,22:79,23:81,24:84,25:86,
  26:88,27:90,28:95,29:100,30:110,31:125,32:150,33:180,34:210,35:250,36:300,37:350,38:400,39:500,
  40:600,41:700,42:750,43:800,44:850,45:900,46:940,47:970,48:990,49:1000,50:1020,51:1040,52:1060,
  53:1080,54:1100,55:1120,56:1140,57:1160,58:1180,59:1190
};

const verbMap = {
  Foraging:"Foraged",Mining:"Mined",Harvesting:"Harvested",
  Herbalist:"Brewed",Alchemy:"Crafted",Fishing:"Fished",Combat:"Slain"
};

// Element refs
const profItems      = document.querySelectorAll('#profession-list li');
const selProfEl      = document.getElementById('selected-prof');
const viewCalc       = document.getElementById('view-calculator');
const viewLvl        = document.getElementById('view-leveling');
const viewCredits    = document.getElementById('view-credits');
const xpActionEl     = document.getElementById('xp-action');
const tableAction    = document.getElementById('table-action');
const curLevelEl     = document.getElementById('current-level');
const curXpEl        = document.getElementById('current-xp');
const tgtLevelEl     = document.getElementById('target-level');
const boostsEls      = document.querySelectorAll('.boost');
const boostsTable    = document.querySelectorAll('.boost-table');
const actionsEl      = document.getElementById('actions-needed');
const calcBtn        = document.getElementById('calculate-btn');
const updateTableBtn = document.getElementById('update-table-btn');
const levelTableBody = document.querySelector('#level-table tbody');

// Phone calc refs
const openBtn        = document.getElementById('open-phone-calc');
const closeBtn       = document.getElementById('close-phone-calc');
const container      = document.getElementById('phone-calc-container');
const display        = document.getElementById('phone-calc-display');
let expr = '';

// Helpers
function populateActions(profKey, dropdown) {
  dropdown.innerHTML = '<option value="">-- Select Action --</option>';
  xpOptions[profKey].forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.value;
    o.textContent = `${opt.label} (${opt.value} XP)`;
    dropdown.appendChild(o);
  });
}

// Sidebar navigation
profItems.forEach(li => {
  li.addEventListener('click', () => {
    profItems.forEach(x=>x.classList.remove('active'));
    li.classList.add('active');
    const prof = li.dataset.prof;
    selProfEl.textContent = prof;
    if (prof==="Leveling") {
      viewCalc.classList.remove('active');
      viewCredits.classList.remove('active');
      viewLvl.classList.add('active');
      populateActions("Leveling", tableAction);
    } else if (prof==="Credits") {
      viewCalc.classList.remove('active');
      viewLvl.classList.remove('active');
      viewCredits.classList.add('active');
    } else {
      viewLvl.classList.remove('active');
      viewCredits.classList.remove('active');
      viewCalc.classList.add('active');
      populateActions(prof, xpActionEl);
      populateActions(prof, tableAction);
    }
    // reset
    curLevelEl.value=curXpEl.value=tgtLevelEl.value="";
    xpActionEl.value=tableAction.value="";
    actionsEl.textContent="—";
    levelTableBody.innerHTML="";
  });
});

// XP calculator
calcBtn.addEventListener('click', () => {
  const cl = +curLevelEl.value, cx = +curXpEl.value, tl = +tgtLevelEl.value;
  const base = +xpActionEl.value;
  if (!base||isNaN(cl)||isNaN(cx)||isNaN(tl)) return;
  const boostPct = Array.from(boostsEls).reduce((s,cb)=>s+(cb.checked?+cb.value:0),0);
  let sumActs=0;
  for (let lvl=cl; lvl<tl; lvl++){
    const xpToNext = (lvl===cl? xpRequirements[lvl]-cx : xpRequirements[lvl]);
    const xpPerAct = base * (levelMultipliers[lvl]||1) * (1+boostPct/100);
    sumActs += xpToNext/xpPerAct;
  }
  actionsEl.textContent = Math.ceil(sumActs);
});

// Leveling table
updateTableBtn.addEventListener('click', () => {
  const base = +tableAction.value;
  if (!base) return;
  const boostPct = Array.from(boostsTable).reduce((s,cb)=>s+(cb.checked?+cb.value:0),0);
  levelTableBody.innerHTML="";
  let grand=0;
  for (let lvl=0; lvl<60; lvl++){
    const xpNeed = xpRequirements[lvl];
    const xpPerAct = base*(levelMultipliers[lvl]||1)*(1+boostPct/100);
    const frac = xpNeed/xpPerAct;
    grand += frac;
    const ceil = Math.ceil(frac);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${lvl} → ${lvl+1}</td><td>${ceil}</td>`;
    levelTableBody.appendChild(tr);
  }
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight="bold";
  totalRow.innerHTML = `<td>Total</td><td>${Math.ceil(grand)}</td>`;
  levelTableBody.appendChild(totalRow);
});

// Phone calculator logic
openBtn.addEventListener('click',() => container.classList.remove('hidden'));
closeBtn.addEventListener('click',() => container.classList.add('hidden'));
container.querySelectorAll('.phone-calc-buttons button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const v=btn.getAttribute('data-val'), o=btn.getAttribute('data-op');
    if (v!==null){ expr+=v; display.textContent=expr; }
    else if (o){ expr+=o; display.textContent=expr; }
  });
});
document.getElementById('phone-calc-equals').addEventListener('click',()=>{
  try{ expr=String(Function(`"use strict";return(${expr})`)()); display.textContent=expr; }
  catch{ display.textContent="Error"; expr=""; }
});
document.getElementById('phone-calc-clear').addEventListener('click',()=>{
  expr=""; display.textContent="0";
});

// Draggable logic (any direction)
const calcWin = document.getElementById('phone-calc-container');
const header  = calcWin.querySelector('.phone-calc-header');
let dragging = false, offsetX = 0, offsetY = 0;

header.addEventListener('mousedown', e => {
  dragging = true;
  const rect = calcWin.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', e => {
  if (!dragging) return;
  // compute new positions
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;
  // optional: clamp to viewport
  const maxX = window.innerWidth  - calcWin.offsetWidth;
  const maxY = window.innerHeight - calcWin.offsetHeight;
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
  // apply
  calcWin.style.left = x + 'px';
  calcWin.style.top  = y + 'px';
});

document.addEventListener('mouseup', () => {
  if (dragging) {
    dragging = false;
    document.body.style.userSelect = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (profItems.length) profItems[0].click();
});
