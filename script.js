/* =====================================================
   PODCAST – THE GAME | script.js
   Vanilla JS, ES6+ — no dependencies
   ===================================================== */

// ══════════════════════════════════════════════════════
// 1. CARD DATABASE (100+ cards across 5 categories)
// ══════════════════════════════════════════════════════

const CARDS = [
  // ── DISCUSSION (25 cards) ──
  { category: "Discussion", title: "Hot Topic", prompt: "What is one opinion everyone in this room has that most people would disagree with?" },
  { category: "Discussion", title: "Deep Dive", prompt: "If you could have one conversation with any historical figure for 30 minutes, who would you choose and why?" },
  { category: "Discussion", title: "Spicy Take", prompt: "What is a commonly held belief that you think is completely wrong? Defend it." },
  { category: "Discussion", title: "Future Cast", prompt: "What job or skill will be completely obsolete in 20 years? Are we okay with that?" },
  { category: "Discussion", title: "Pop Culture Verdict", prompt: "Is social media making people more creative or less creative? Give a real argument." },
  { category: "Discussion", title: "The Unplugged Hour", prompt: "Could you go an entire week without a phone? What would you gain and what would you lose?" },
  { category: "Discussion", title: "Legacy Check", prompt: "What do you want to be remembered for, and are you actually working toward that?" },
  { category: "Discussion", title: "Turning Point", prompt: "Name the one decision that changed the direction of your life the most. Would you change it?" },
  { category: "Discussion", title: "Free Time Trap", prompt: "If you had an extra hour every day, what would you actually do with it?" },
  { category: "Discussion", title: "Trend Report", prompt: "What is a current trend that will seem embarrassing in five years?" },
  { category: "Discussion", title: "The Great Debate", prompt: "Remote work: is it the future of productivity or a productivity disaster? Defend your side." },
  { category: "Discussion", title: "Rewind", prompt: "If you could experience one year of your life again with no changes, which year would it be and why?" },
  { category: "Discussion", title: "Brand New World", prompt: "What is one social norm you would eliminate if you could?" },
  { category: "Discussion", title: "Listener Mail", prompt: "If your life were a podcast, what would its title and tagline be?" },
  { category: "Discussion", title: "The Algorithm", prompt: "Is the internet making society smarter or less intelligent? Give a real case." },
  { category: "Discussion", title: "Career Corner", prompt: "What is one piece of career advice you received that turned out to be completely wrong?" },
  { category: "Discussion", title: "The Friends Question", prompt: "What do your friends genuinely misunderstand about you?" },
  { category: "Discussion", title: "Overrated vs Underrated", prompt: "Name one thing that is overrated and one thing that is underrated in your life right now." },
  { category: "Discussion", title: "Morning Routines", prompt: "What habit have you tried to build for years that never sticks? Why do you think that happens?" },
  { category: "Discussion", title: "The Edit", prompt: "If you could remove one era of pop culture history, what would it be and why?" },
  { category: "Discussion", title: "Good Trouble", prompt: "When was the last time you changed your mind about something important?" },
  { category: "Discussion", title: "Guest Pitch", prompt: "You can invite anyone alive for dinner tonight. Who is it and what is the first question you ask?" },
  { category: "Discussion", title: "The Flex", prompt: "What is something you are really proud of but rarely tell people?" },
  { category: "Discussion", title: "Origin Story", prompt: "Tell the most formative moment of your childhood in under 60 seconds." },
  { category: "Discussion", title: "Guilty Pleasures", prompt: "What is your biggest guilty pleasure and do you actually feel guilty about it?" },
    // ── HOT TAKES (25 cards) ──
  { category: "Hot Takes", title: "", prompt: "Pineapple on pizza is not just acceptable. It is genuinely one of the best combinations. Argue against that." },
  { category: "Hot Takes", title: "", prompt: "Texting is better than calling, and anyone who calls without a warning is being inconsiderate." },
  { category: "Hot Takes", title: "", prompt: "Most bucket list items are just things people say they want to do to sound interesting." },
  { category: "Hot Takes", title: "", prompt: "Streaming has made movies worse, not better. Cinemas were the last real filter." },
  { category: "Hot Takes", title: "", prompt: "Breakfast food is the best type of food and should be available at every meal with no judgment." },
  { category: "Hot Takes", title: "", prompt: "The open office was the worst workplace invention in history, and hybrid work proves it." },
  { category: "Hot Takes", title: "", prompt: "Most passion projects would lose all appeal if they had to be done professionally." },
  { category: "Hot Takes", title: "", prompt: "Work life balance is a myth created by people who want others to love their job unconditionally." },
  { category: "Hot Takes", title: "", prompt: "Reclining a seat on a plane is socially acceptable, and people who disagree are the problem." },
  { category: "Hot Takes", title: "", prompt: "True crime podcasts have gone too far and are entertainment built on real tragedy." },
  { category: "Hot Takes", title: "", prompt: "Most personal style is just what an algorithm suggested recently." },
  { category: "Hot Takes", title: "", prompt: "Following dreams only works if there is financial security behind it." },
  { category: "Hot Takes", title: "", prompt: "The weekend feels short because people spend it recovering instead of living." },
  { category: "Hot Takes", title: "", prompt: "Going to a concert for music that is not well known to you is more fun than seeing a favorite artist." },
  { category: "Hot Takes", title: "", prompt: "Small talk in elevators should be socially banned. Silence should be the norm." },
  { category: "Hot Takes", title: "", prompt: "Most people who say they dislike drama are the ones who create the most of it." },
  { category: "Hot Takes", title: "", prompt: "The best part of a vacation is planning it. The actual trip is often disappointing." },
  { category: "Hot Takes", title: "", prompt: "Group chats are modern torture disguised as community." },
  { category: "Hot Takes", title: "", prompt: "Afternoon naps should be mandatory in every workplace." },
  { category: "Hot Takes", title: "", prompt: "Personality quizzes reveal more about who people want to be than who they are." },
  { category: "Hot Takes", title: "", prompt: "Most networking events are awkward gatherings where everyone pretends to be more successful than they are." },
  { category: "Hot Takes", title: "", prompt: "The best movies were released between 1994 and 2003. Everything since then relies on sequels or franchises." },
  { category: "Hot Takes", title: "", prompt: "Astrology resembles personality psychology without peer review, but it is not entirely wrong." },
  { category: "Hot Takes", title: "", prompt: "If something cannot be said to someone in public, it should not be posted online." },
  { category: "Hot Takes", title: "", prompt: "People who say they do not watch television are not more intelligent. They simply consume content on other platforms." },
    // ── PERSONAL (20 cards) ──
  { category: "Personal", title: "The Confession Booth", prompt: "Share something embarrassing from your past that you can now laugh about." },
  { category: "Personal", title: "Love Language", prompt: "What do you need most from people close to you that you rarely ask for directly?" },
  { category: "Personal", title: "Unfinished Business", prompt: "What is one thing you have been delaying for months that you know you need to complete?" },
  { category: "Personal", title: "Phone Check", prompt: "Read the last three emojis you sent and explain the full context." },
  { category: "Personal", title: "Secret Skill", prompt: "What is a skill or talent you have that almost nobody knows about?" },
  { category: "Personal", title: "The Brag Session", prompt: "You have 30 seconds to talk about yourself with full confidence and no modesty." },
  { category: "Personal", title: "Then vs Now", prompt: "What did you expect adult life to be like as a teenager? How accurate was that expectation?" },
  { category: "Personal", title: "Fear Factor", prompt: "What is an irrational fear you still have even though you know it makes no sense?" },
  { category: "Personal", title: "Unsent Message", prompt: "Is there a message you wish you had sent or avoided sending? What was it?" },
  { category: "Personal", title: "Recent Win", prompt: "What is something you achieved recently that you have not celebrated enough?" },
  { category: "Personal", title: "The Cringe Archive", prompt: "Describe the most embarrassing phase you went through, including style or behavior." },
  { category: "Personal", title: "Dream Decoder", prompt: "What is a recurring dream you have, and what meaning do you give to it?" },
  { category: "Personal", title: "The Recast", prompt: "If a movie were made about your life, who would play your role and why?" },
  { category: "Personal", title: "The Playlist", prompt: "Name three songs that each represent a different chapter of your life." },
  { category: "Personal", title: "Best Day Ever", prompt: "Describe the best day of your life so far and what made it special." },
  { category: "Personal", title: "Alter Ego", prompt: "If you had a secret identity with no consequences, what would it be?" },
  { category: "Personal", title: "The Voice Note", prompt: "Record a 30 second message to your future self without overthinking." },
  { category: "Personal", title: "Apology Tour", prompt: "If you could apologize to one person from your past, who would it be and what would you say?" },
  { category: "Personal", title: "The Weird Habit", prompt: "Describe a strange habit or routine you have never explained to anyone." },
  { category: "Personal", title: "The Advice Column", prompt: "What advice would you give to yourself from five years ago?" },

  // ── SILLY (18 cards) ──
  { category: "Silly", title: "Speed Round", prompt: "Each player has 10 seconds to name a desert island food, movie, and person. Any hesitation means elimination." },
  { category: "Silly", title: "Accent Challenge", prompt: "Read the next card out loud using an accent chosen by the group." },
  { category: "Silly", title: "Impression Off", prompt: "Everyone performs an impression of the current player. The current player rates each performance." },
  { category: "Silly", title: "Animal Kingdom", prompt: "Assign each person an animal based on their vibe and explain the reasoning." },
  { category: "Silly", title: "Ad Break", prompt: "Create a short advertisement for a completely useless product you invent." },
  { category: "Silly", title: "The Nature Documentary", prompt: "Narrate what the current player is doing in the style of a wildlife documentary." },
  { category: "Silly", title: "Conspiracy Corner", prompt: "Invent a ridiculous conspiracy theory about something ordinary." },
  { category: "Silly", title: "Wikipedia Pitch", prompt: "Describe a fictional event that deserves a detailed encyclopedia entry." },
  { category: "Silly", title: "Synonym Challenge", prompt: "Describe a recent meal using only words that mean good." },
  { category: "Silly", title: "Mascot Pitch", prompt: "Design a mascot that represents the current mood of the group." },
  { category: "Silly", title: "Compliment Gauntlet", prompt: "Each person gives the next person an extremely exaggerated compliment." },
  { category: "Silly", title: "The Worst Advice", prompt: "Give the worst possible advice for a common life situation." },
  { category: "Silly", title: "Shark Tank Reject", prompt: "Present a terrible business idea as if it were highly valuable." },
  { category: "Silly", title: "Emoji Summary", prompt: "Summarize your last week using only five emojis, then explain them." },
  { category: "Silly", title: "Plot Twist", prompt: "Recast a famous movie using people in this group and explain each role." },
  { category: "Silly", title: "Two Truths and a Lie", prompt: "Share two true statements and one false statement that sounds believable." },
  { category: "Silly", title: "Speed Debate", prompt: "Debate one of the following: dogs versus cats, morning versus night, or summer versus winter." },
  { category: "Silly", title: "Hot Take Roulette", prompt: "Each person writes a bold opinion. Shuffle them and read one as if it were your own." },

  // ── ROLEPLAY (15 cards) ──
  { category: "Roleplay", title: "Breaking News", prompt: "Act as a news anchor reporting a minor event in this room as if it were global breaking news." },
  { category: "Roleplay", title: "Time Traveller", prompt: "You arrive from the year 1950 and react to modern inventions suggested by the group." },
  { category: "Roleplay", title: "Villain Origin Story", prompt: "Create a dramatic villain story based on a very small and petty event." },
  { category: "Roleplay", title: "The Pitch Meeting", prompt: "Present the concept of going to the bathroom to investors who have never heard of it." },
  { category: "Roleplay", title: "Customer Service", prompt: "One player is a frustrated customer and another is an overly calm service representative." },
  { category: "Roleplay", title: "The Audition", prompt: "Act in a scene where the only action is sitting on a couch, but perform it seriously." },
  { category: "Roleplay", title: "Press Conference", prompt: "Answer questions as an expert in a completely fictional field of study." },
  { category: "Roleplay", title: "Motivational Speaker", prompt: "Deliver an inspiring speech about something meaningless." },
  { category: "Roleplay", title: "The Chef", prompt: "Act as a dramatic chef reviewing your most recent meal." },
  { category: "Roleplay", title: "The Documentary", prompt: "Describe your daily life as if it were a wildlife documentary." },
  { category: "Roleplay", title: "Robot Malfunction", prompt: "Act as a robot that is beginning to develop emotions while answering questions." },
  { category: "Roleplay", title: "Casting Director", prompt: "Assign each player a role in a movie genre and explain the casting choices." },
  { category: "Roleplay", title: "Late Night Host", prompt: "Perform a short monologue about a boring recent experience." },
  { category: "Roleplay", title: "Nature Spirit", prompt: "Act as a houseplant spirit that has observed this group and share observations." },
  { category: "Roleplay", title: "The Review", prompt: "Give a five star review for Mondays as if they were a restaurant." },
];

// ══════════════════════════════════════════════════════
// 2. BOARD DEFINITION (~20 spaces in a 5x5 grid path)
// ══════════════════════════════════════════════════════

// Board path: 20 active squares arranged as a border path in a 5x5 grid
// Grid indices 0-24 (row-major). Path goes clockwise around perimeter + middle cross
const BOARD_PATH_INDICES = [
  0,  1,  2,  3,  4,   // top row →
  9,                    // right col ↓ (skip 4 which is last of top)
  14,
  19,
  24,                   // bottom-right corner
  23, 22, 21, 20,       // bottom row ←
  15,                   // left col ↑
  10,
  5,                    // back to top-left area
  6, 7, 8,              // inner top
  13, 18, 17, 16, 11,  // inner path
  12,                   // center
];

const SPACE_TYPES = [
  'start',      // 0
  'normal',     // 1
  'hot-take',   // 2
  'normal',     // 3
  'debate',     // 4
  'normal',     // 5
  'roleplay',   // 6
  'wildcard',   // 7
  'hot-take',   // 8
  'normal',     // 9
  'debate',     // 10
  'normal',     // 11
  'hot-take',   // 12
  'roleplay',   // 13
  'normal',     // 14
  'wildcard',   // 15
  'debate',     // 16
  'normal',     // 17
  'hot-take',   // 18
  'normal',     // 19
  'roleplay',   // 20
  'wildcard',   // 21 — bonus: finish
];

const SPACE_META = {
  'start':    { icon: '🎙️', label: 'Start',     color: '#39ff8a', desc: 'Welcome to the show! Get comfortable.' },
  'normal':   { icon: '🎧', label: 'Draw Card', color: '#8888aa', desc: 'Draw a card and discuss. No pressure.' },
  'hot-take': { icon: '🔥', label: 'Hot Take',  color: '#ff3e5f', desc: 'Someone has to take a stand. Who is it?' },
  'debate':   { icon: '⚡', label: 'Debate',    color: '#00e5c8', desc: 'Two players argue opposite sides. May the best take win.' },
  'roleplay': { icon: '🎭', label: 'Roleplay',  color: '#9b59ff', desc: 'Time to perform. Commit to the bit.' },
  'wildcard': { icon: '🃏', label: 'Wildcard',  color: '#ffc94a', desc: 'Anything goes. The group decides your fate.' },
};

// ══════════════════════════════════════════════════════
// 3. PLAYER EMOJIS POOL
// ══════════════════════════════════════════════════════

const PLAYER_EMOJIS = ['🎤','🎧','🎙️','🎵','🎶','🔊','📻','🎸','🥁','🎹','🎺','🎻'];

// ══════════════════════════════════════════════════════
// 4. GAME STATE
// ══════════════════════════════════════════════════════

let state = {
  players: [],
  currentPlayerIndex: 0,
  currentTurn: 1,
  maxTurns: 20,
  boardPositions: [],  // index into BOARD_PATH_INDICES for each player
  currentCard: null,
  highlights: [],
  diceResult: 0,
  timerInterval: null,
  timerSeconds: 120,
  timerRunning: false,
  gamePhase: 'idle',   // idle | rolling | moving | card | end
  selectedHighlightType: null,
  votes: {},           // playerName → vote count
  usedCardIndices: new Set(),
  setupPlayerCount: 4,
  setupTurns: 10,
};

// ══════════════════════════════════════════════════════
// 5. SCREEN MANAGEMENT
// ══════════════════════════════════════════════════════

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

// ══════════════════════════════════════════════════════
// 6. SETUP SCREEN LOGIC
// ══════════════════════════════════════════════════════

function initSetupScreen() {
  renderPlayerInputs();
  updatePlayerCountDisplay();
}

function renderPlayerInputs() {
  const container = document.getElementById('player-name-inputs');
  container.innerHTML = '';
  const count = state.setupPlayerCount;
  for (let i = 0; i < count; i++) {
    const emoji = PLAYER_EMOJIS[i % PLAYER_EMOJIS.length];
    const wrap = document.createElement('div');
    wrap.className = 'player-input-wrap';
    wrap.innerHTML = `
      <span class="player-emoji">${emoji}</span>
      <input
        type="text"
        id="player-input-${i}"
        placeholder="Player ${i + 1}"
        maxlength="18"
        autocomplete="off"
        spellcheck="false"
      />
    `;
    container.appendChild(wrap);
  }
}

function updatePlayerCountDisplay() {
  document.getElementById('player-count-display').textContent = state.setupPlayerCount;
}

document.getElementById('btn-players-minus').addEventListener('click', () => {
  if (state.setupPlayerCount > 2) {
    state.setupPlayerCount--;
    updatePlayerCountDisplay();
    renderPlayerInputs();
  }
});

document.getElementById('btn-players-plus').addEventListener('click', () => {
  if (state.setupPlayerCount < 8) {
    state.setupPlayerCount++;
    updatePlayerCountDisplay();
    renderPlayerInputs();
  }
});

// Turns selection
document.querySelectorAll('.btn-option').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.btn-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.setupTurns = parseInt(btn.dataset.turns);
  });
});

document.getElementById('btn-start-setup').addEventListener('click', () => {
  showScreen('screen-setup');
  initSetupScreen();
});

document.getElementById('btn-begin-game').addEventListener('click', () => {
  const count = state.setupPlayerCount;
  const players = [];
  for (let i = 0; i < count; i++) {
    const input = document.getElementById(`player-input-${i}`);
    const name = (input?.value || '').trim() || `Player ${i + 1}`;
    players.push({
      name,
      emoji: PLAYER_EMOJIS[i % PLAYER_EMOJIS.length],
    });
  }
  startGame(players, state.setupTurns);
});

// ══════════════════════════════════════════════════════
// 7. GAME BOARD SETUP
// ══════════════════════════════════════════════════════

function startGame(players, maxTurns) {
  state.players = players;
  state.maxTurns = maxTurns;
  state.currentPlayerIndex = 0;
  state.currentTurn = 1;
  state.boardPositions = players.map(() => 0);
  state.highlights = [];
  state.votes = {};
  state.usedCardIndices = new Set();
  state.gamePhase = 'rolling';
  state.timerSeconds = 120;
  state.selectedHighlightType = null;

  players.forEach(p => { state.votes[p.name] = 0; });

  buildBoard();
  renderPlayerList();
  updateCurrentPlayerDisplay();
  updateDiceDisplay(1);
  updateSpaceInfo(0);

  showScreen('screen-board');
}

function buildBoard() {
  const boardEl = document.getElementById('game-board');
  boardEl.innerHTML = '';

  // Create 25 cells (5x5 grid)
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    const pathPos = BOARD_PATH_INDICES.indexOf(i);

    if (pathPos === -1) {
      // Empty center or unused space
      cell.className = 'board-space empty';
    } else {
      const type = SPACE_TYPES[pathPos] || 'normal';
      const meta = SPACE_META[type];
      cell.className = 'board-space';
      cell.dataset.type = type;
      cell.dataset.pathpos = pathPos;
      cell.innerHTML = `
        <div class="board-space-num">${pathPos}</div>
        <div class="board-space-icon">${meta.icon}</div>
        <div class="board-space-label">${meta.label}</div>
      `;
    }

    cell.id = `board-cell-${i}`;
    boardEl.appendChild(cell);
  }

  // Place token at start
  placeTokenAt(0);
}

function placeTokenAt(pathPos, playerEmoji = '🎙️') {
  // Remove existing token
  const existing = document.getElementById('player-token');
  if (existing) existing.remove();

  const gridIndex = BOARD_PATH_INDICES[pathPos];
  const cell = document.getElementById(`board-cell-${gridIndex}`);
  if (!cell) return;

  const token = document.createElement('div');
  token.className = 'token';
  token.id = 'player-token';
  token.textContent = playerEmoji;

  // Position token centered over the cell
  const boardEl = document.getElementById('game-board');
  const boardRect = boardEl.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();

  token.style.position = 'absolute';
  token.style.width = '32px';
  token.style.height = '32px';
  token.style.left = (cellRect.left - boardRect.left + cellRect.width / 2 - 16) + 'px';
  token.style.top = (cellRect.top - boardRect.top + cellRect.height / 2 - 16) + 'px';
  token.style.zIndex = '10';

  boardEl.style.position = 'relative';
  boardEl.appendChild(token);
}

function highlightActiveSpace(pathPos) {
  document.querySelectorAll('.board-space').forEach(s => s.classList.remove('active-space'));
  const gridIndex = BOARD_PATH_INDICES[pathPos];
  const cell = document.getElementById(`board-cell-${gridIndex}`);
  if (cell) cell.classList.add('active-space');
}

// ══════════════════════════════════════════════════════
// 8. PLAYER DISPLAY
// ══════════════════════════════════════════════════════

function renderPlayerList() {
  const container = document.getElementById('players-list');
  container.innerHTML = '';

  state.players.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'player-item' + (i === state.currentPlayerIndex ? ' active' : '');
    item.id = `player-item-${i}`;
    const pos = state.boardPositions[i];
    item.innerHTML = `
      <span class="player-emoji-sm">${p.emoji}</span>
      <span class="player-name-sm">${p.name}</span>
      <span class="player-pos-badge">Sp.${pos}</span>
    `;
    container.appendChild(item);
  });
}

function updateCurrentPlayerDisplay() {
  const p = state.players[state.currentPlayerIndex];
  document.getElementById('current-player-name').textContent = p.name;
  document.getElementById('turn-counter').textContent = `Turn ${state.currentTurn} / ${state.maxTurns}`;
}

// ══════════════════════════════════════════════════════
// 9. DICE ROLLING
// ══════════════════════════════════════════════════════

const DICE_FACES = ['⚀','⚁','⚂','⚃','⚄','⚅'];

function updateDiceDisplay(value) {
  const diceEl = document.getElementById('dice');
  diceEl.innerHTML = `<div class="dice-face visible">${DICE_FACES[value - 1]}</div>`;
}

document.getElementById('btn-roll-dice').addEventListener('click', () => {
  if (state.gamePhase !== 'rolling') return;
  rollDice();
});

function rollDice() {
  state.gamePhase = 'moving';
  const rollBtn = document.getElementById('btn-roll-dice');
  rollBtn.disabled = true;

  const result = Math.ceil(Math.random() * 6);
  state.diceResult = result;

  const diceEl = document.getElementById('dice');
  diceEl.classList.add('rolling');

  // Animate through random faces
  let frames = 0;
  const maxFrames = 12;
  const anim = setInterval(() => {
    const rand = Math.ceil(Math.random() * 6);
    diceEl.innerHTML = `<div class="dice-face visible">${DICE_FACES[rand - 1]}</div>`;
    frames++;
    if (frames >= maxFrames) {
      clearInterval(anim);
      diceEl.classList.remove('rolling');
      updateDiceDisplay(result);
      // Move token after short delay
      setTimeout(() => moveToken(result), 300);
    }
  }, 80);
}

// ══════════════════════════════════════════════════════
// 10. TOKEN MOVEMENT
// ══════════════════════════════════════════════════════

async function moveToken(steps) {
  const playerEmoji = state.players[state.currentPlayerIndex].emoji;
  let currentPos = state.boardPositions[state.currentPlayerIndex];
  const totalSpaces = BOARD_PATH_INDICES.length;

  for (let s = 0; s < steps; s++) {
    await sleep(280);
    currentPos = (currentPos + 1) % totalSpaces;
    state.boardPositions[state.currentPlayerIndex] = currentPos;
    placeTokenAt(currentPos, playerEmoji);
    highlightActiveSpace(currentPos);

    // Update position badge
    const badge = document.querySelector(`#player-item-${state.currentPlayerIndex} .player-pos-badge`);
    if (badge) badge.textContent = `Sp.${currentPos}`;
  }

  // Update space info & trigger card
  updateSpaceInfo(currentPos);
  await sleep(400);
  triggerSpaceEvent(currentPos);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateSpaceInfo(pathPos) {
  const type = SPACE_TYPES[pathPos] || 'normal';
  const meta = SPACE_META[type];
  document.getElementById('space-info-type').textContent = `${meta.icon} ${meta.label}`;
  document.getElementById('space-info-desc').textContent = meta.desc;
}

// ══════════════════════════════════════════════════════
// 11. SPACE EVENT TRIGGER
// ══════════════════════════════════════════════════════

function triggerSpaceEvent(pathPos) {
  const type = SPACE_TYPES[pathPos] || 'normal';
  state.gamePhase = 'card';

  // Select card based on space type
  let categoryFilter = null;
  switch (type) {
    case 'hot-take': categoryFilter = 'Hot Takes'; break;
    case 'roleplay': categoryFilter = 'Roleplay'; break;
    case 'debate':   categoryFilter = null; break; // any card, two players discuss
    case 'wildcard': categoryFilter = null; break; // any card
    default:         categoryFilter = null; break; // normal or start
  }

  if (type === 'start') {
    // Special: start space just says welcome
    showToast('🎙️ Back to the start! Welcome back.');
    endTurn();
    return;
  }

  const card = drawCard(categoryFilter);
  state.currentCard = card;
  showCardModal(card, type);
}

function drawCard(categoryFilter) {
  let pool = CARDS.filter((c, i) => {
    if (state.usedCardIndices.has(i)) return false;
    if (categoryFilter && c.category !== categoryFilter) return false;
    return true;
  });

  // If exhausted, reset used cards for this category
  if (pool.length === 0) {
    CARDS.forEach((c, i) => {
      if (!categoryFilter || c.category === categoryFilter) {
        state.usedCardIndices.delete(i);
      }
    });
    pool = CARDS.filter((c, i) =>
      (!categoryFilter || c.category === categoryFilter) && !state.usedCardIndices.has(i)
    );
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  const card = pool[randomIndex];
  const globalIndex = CARDS.indexOf(card);
  state.usedCardIndices.add(globalIndex);
  return card;
}

// ══════════════════════════════════════════════════════
// 12. CARD MODAL
// ══════════════════════════════════════════════════════

function showCardModal(card, spaceType) {
  const badge = document.getElementById('card-category-badge');
  badge.textContent = card.category;
  badge.dataset.cat = card.category;

  document.getElementById('card-title').textContent = card.title || '';
  document.getElementById('card-prompt').textContent = card.prompt;

  // Reset highlight form
  document.getElementById('highlight-form').classList.add('hidden');
  document.getElementById('highlight-note').value = '';
  state.selectedHighlightType = null;
  document.querySelectorAll('.btn-highlight-type').forEach(b => b.classList.remove('selected'));

  // Add debate note if applicable
  if (spaceType === 'debate') {
    const debateNote = document.createElement('div');
    debateNote.style.cssText = 'background:rgba(0,229,200,0.1);border:1px solid rgba(0,229,200,0.3);border-radius:10px;padding:12px;font-size:13px;color:#00e5c8;font-family:var(--font-mono);margin-top:-4px;';
    debateNote.textContent = '⚡ DEBATE: Two players must take opposing sides.';
    document.getElementById('card-prompt').after(debateNote);
    setTimeout(() => debateNote.remove(), 8000);
  }

  // Reset and start timer
  resetTimer();
  startTimer();

  document.getElementById('modal-card').classList.remove('hidden');
  document.getElementById('highlight-count').textContent = state.highlights.length;
}

document.getElementById('btn-skip-card').addEventListener('click', () => {
  const newCard = drawCard(null);
  state.currentCard = newCard;
  const badge = document.getElementById('card-category-badge');
  badge.textContent = newCard.category;
  badge.dataset.cat = newCard.category;
  document.getElementById('card-title').textContent = newCard.title || '';
  document.getElementById('card-prompt').textContent = newCard.prompt;
  resetTimer();
  startTimer();
});

document.getElementById('btn-next-turn').addEventListener('click', () => {
  stopTimer();
  document.getElementById('modal-card').classList.add('hidden');
  endTurn();
});

// ══════════════════════════════════════════════════════
// 13. TIMER
// ══════════════════════════════════════════════════════

function startTimer() {
  state.timerSeconds = 120;
  state.timerRunning = true;
  document.getElementById('btn-timer-toggle').textContent = '⏸ Pause';
  runTimer();
}

function runTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    if (!state.timerRunning) return;
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      document.getElementById('timer-display').textContent = '0:00';
      showToast("⏰ Time's up! Move to the next turn.");
      return;
    }
    state.timerSeconds--;
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    const display = document.getElementById('timer-display');
    display.textContent = `${m}:${s.toString().padStart(2, '0')}`;

    if (state.timerSeconds <= 30) {
      display.classList.add('warning');
    } else {
      display.classList.remove('warning');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  state.timerRunning = false;
}

function resetTimer() {
  stopTimer();
  state.timerSeconds = 120;
  document.getElementById('timer-display').textContent = '2:00';
  document.getElementById('timer-display').classList.remove('warning');
}

document.getElementById('btn-timer-toggle').addEventListener('click', () => {
  const btn = document.getElementById('btn-timer-toggle');
  if (state.timerRunning) {
    state.timerRunning = false;
    btn.textContent = '▶ Resume';
  } else {
    state.timerRunning = true;
    btn.textContent = '⏸ Pause';
    runTimer();
  }
});

document.getElementById('btn-timer-reset').addEventListener('click', () => {
  resetTimer();
  startTimer();
});

// ══════════════════════════════════════════════════════
// 14. HIGHLIGHTS
// ══════════════════════════════════════════════════════

document.getElementById('btn-mark-highlight').addEventListener('click', () => {
  const form = document.getElementById('highlight-form');
  form.classList.toggle('hidden');
});

document.querySelectorAll('.btn-highlight-type').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.btn-highlight-type').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.selectedHighlightType = btn.dataset.type;
  });
});

document.getElementById('btn-save-highlight').addEventListener('click', () => {
  if (!state.selectedHighlightType) {
    showToast('Pick a highlight type first!');
    return;
  }
  const note = document.getElementById('highlight-note').value.trim();
  const player = state.players[state.currentPlayerIndex];

  state.highlights.push({
    type: state.selectedHighlightType,
    player: player.name,
    emoji: player.emoji,
    note,
    turn: state.currentTurn,
  });

  document.getElementById('highlight-count').textContent = state.highlights.length;
  document.getElementById('highlight-form').classList.add('hidden');
  document.getElementById('highlight-note').value = '';
  state.selectedHighlightType = null;
  document.querySelectorAll('.btn-highlight-type').forEach(b => b.classList.remove('selected'));

  showToast('⭐ Highlight saved!');
});

// Highlights Peek
document.getElementById('btn-highlights-peek').addEventListener('click', () => {
  renderHighlightsList();
  document.getElementById('modal-highlights').classList.remove('hidden');
});

document.getElementById('btn-close-highlights').addEventListener('click', () => {
  document.getElementById('modal-highlights').classList.add('hidden');
});

function renderHighlightsList() {
  const container = document.getElementById('highlights-list');
  container.innerHTML = '';

  if (state.highlights.length === 0) {
    container.innerHTML = '<div class="highlights-empty">No highlights yet. Mark something memorable!</div>';
    return;
  }

  state.highlights.forEach(h => {
    const item = document.createElement('div');
    item.className = 'highlight-item';
    const typeLabels = {
      funniest: '😂 Funniest Moment',
      quote: '💬 Best Quote',
      player: '🏆 Best Player',
    };
    item.innerHTML = `
      <div class="highlight-item-type">${typeLabels[h.type] || h.type}</div>
      <div class="highlight-item-player">${h.emoji} ${h.player} — Turn ${h.turn}</div>
      ${h.note ? `<div class="highlight-item-note">"${h.note}"</div>` : ''}
    `;
    container.appendChild(item);
  });
}

// ══════════════════════════════════════════════════════
// 15. TURN MANAGEMENT
// ══════════════════════════════════════════════════════

function endTurn() {
  state.currentTurn++;

  if (state.currentTurn > state.maxTurns) {
    endGame();
    return;
  }

  // Next player
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  state.gamePhase = 'rolling';

  // Update position display for all players
  renderPlayerList();
  updateCurrentPlayerDisplay();
  updateDiceDisplay(1);

  const rollBtn = document.getElementById('btn-roll-dice');
  rollBtn.disabled = false;

  // Place token at current player's position
  const playerEmoji = state.players[state.currentPlayerIndex].emoji;
  const pos = state.boardPositions[state.currentPlayerIndex];
  placeTokenAt(pos, playerEmoji);
  highlightActiveSpace(pos);
  updateSpaceInfo(pos);

  showToast(`🎙️ ${state.players[state.currentPlayerIndex].name}'s turn!`);
}

// ══════════════════════════════════════════════════════
// 16. END GAME
// ══════════════════════════════════════════════════════

function endGame() {
  state.gamePhase = 'end';
  stopTimer();
  renderEndScreen();
  showScreen('screen-end');
  setTimeout(launchConfetti, 300);
}

function renderEndScreen() {
  // Recap highlights
  const recapContainer = document.getElementById('recap-highlights');
  recapContainer.innerHTML = '';

  if (state.highlights.length === 0) {
    recapContainer.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">No highlights were saved during this episode.</p>';
  } else {
    const typeIcons = { funniest: '😂', quote: '💬', player: '🏆' };
    const typeLabels = { funniest: 'Funniest Moment', quote: 'Best Quote', player: 'Best Player' };
    state.highlights.forEach(h => {
      const item = document.createElement('div');
      item.className = 'recap-highlight-item';
      item.innerHTML = `
        <div class="recap-hl-icon">${typeIcons[h.type] || '⭐'}</div>
        <div class="recap-hl-body">
          <div class="recap-hl-type">${typeLabels[h.type] || h.type}</div>
          <div class="recap-hl-player">${h.emoji} ${h.player}</div>
          ${h.note ? `<div class="recap-hl-note">"${h.note}"</div>` : ''}
        </div>
      `;
      recapContainer.appendChild(item);
    });
  }

  // Vote cards
  const voteContainer = document.getElementById('vote-options');
  voteContainer.innerHTML = '';
  state.players.forEach(p => {
    const card = document.createElement('div');
    card.className = 'vote-card';
    card.innerHTML = `
      <div class="vote-player-emoji">${p.emoji}</div>
      <div class="vote-player-name">${p.name}</div>
      <div class="vote-count" id="vote-${p.name.replace(/\s/g,'_')}">0</div>
    `;
    card.addEventListener('click', () => {
      state.votes[p.name] = (state.votes[p.name] || 0) + 1;
      document.getElementById(`vote-${p.name.replace(/\s/g,'_')}`).textContent = state.votes[p.name];
      card.classList.add('voted');
      setTimeout(() => card.classList.remove('voted'), 600);
    });
    voteContainer.appendChild(card);
  });
}

document.getElementById('btn-restart').addEventListener('click', () => {
  clearConfetti();
  showScreen('screen-intro');
});

// ══════════════════════════════════════════════════════
// 17. CONFETTI
// ══════════════════════════════════════════════════════

const CONFETTI_COLORS = [
  '#ff3e5f','#ffc94a','#00e5c8','#9b59ff','#39ff8a','#fff'
];

function launchConfetti() {
  const zone = document.getElementById('confetti-zone');
  zone.innerHTML = '';
  const count = 70;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const left = Math.random() * 100;
    const duration = 2.5 + Math.random() * 2;
    const delay = Math.random() * 1.5;
    const drift = (Math.random() - 0.5) * 200;

    piece.style.cssText = `
      left: ${left}%;
      background: ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      --drift: ${drift}px;
      width: ${6 + Math.random() * 8}px;
      height: ${10 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;

    zone.appendChild(piece);
  }

  setTimeout(clearConfetti, 5000);
}

function clearConfetti() {
  document.getElementById('confetti-zone').innerHTML = '';
}

// ══════════════════════════════════════════════════════
// 18. TOAST NOTIFICATIONS
// ══════════════════════════════════════════════════════

let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add('hidden'), 2800);
}

// ══════════════════════════════════════════════════════
// 19. BOARD RESIZE HANDLER (reposition token on resize)
// ══════════════════════════════════════════════════════

window.addEventListener('resize', () => {
  if (state.gamePhase !== 'idle' && state.players.length > 0) {
    const playerEmoji = state.players[state.currentPlayerIndex]?.emoji;
    const pos = state.boardPositions[state.currentPlayerIndex];
    if (pos !== undefined && playerEmoji) {
      setTimeout(() => placeTokenAt(pos, playerEmoji), 100);
    }
  }
});

// ══════════════════════════════════════════════════════
// 20. INIT
// ══════════════════════════════════════════════════════

// Set intro as active on load
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-intro');
});
