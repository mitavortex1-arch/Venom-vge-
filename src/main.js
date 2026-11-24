
import "./style.css";

const genesis = {
  name: "VGE",
  fullName: "VENOM Genesis Enterprise",
  classification: "ENTERPRISE CREATION ENGINE",
  version: "1.0.0",
  mission:
    "Transform original concepts into validated, connected, and repeatable enterprise architectures.",
  stages: [
    {
      id: "01",
      name: "ENGINE",
      code: "VGE-ENG",
      description: "Define the idea, foundational logic, operating principles, and core intellectual architecture.",
      deliverable: "FOUNDATIONAL ENGINE",
      gate: "CONCEPT APPROVAL",
    },
    {
      id: "02",
      name: "SOFTWARE",
      code: "VGE-SFT",
      description: "Translate the engine into applications, interfaces, code, and executable digital tools.",
      deliverable: "SOFTWARE PROTOTYPE",
      gate: "FUNCTIONAL REVIEW",
    },
    {
      id: "03",
      name: "SYSTEM",
      code: "VGE-SYS",
      description: "Connect software, data, workflows, permissions, controls, and operational processes.",
      deliverable: "OPERATING SYSTEM",
      gate: "SYSTEM VALIDATION",
    },
    {
      id: "04",
      name: "NETWORK",
      code: "VGE-NET",
      description: "Connect systems, users, infrastructure, partners, and authorized external resources.",
      deliverable: "CONNECTED NETWORK",
      gate: "NETWORK REVIEW",
    },
    {
      id: "05",
      name: "RWA",
      code: "VGE-RWA",
      description: "Identify eligible real-world assets and define their documentation, ownership, and digital representation requirements.",
      deliverable: "ASSET FRAMEWORK",
      gate: "ASSET DUE DILIGENCE",
    },
    {
      id: "06",
      name: "BLOCKCHAIN",
      code: "VGE-BCN",
      description: "Design appropriate ledger, identity, tokenization, transaction, and verification architecture.",
      deliverable: "LEDGER ARCHITECTURE",
      gate: "SECURITY & COMPLIANCE REVIEW",
    },
    {
      id: "07",
      name: "FACTORY",
      code: "VGE-FAC",
      description: "Package validated architecture into a repeatable enterprise build, deployment, and operating model.",
      deliverable: "REPEATABLE FACTORY MODEL",
      gate: "FACTORY READINESS",
    },
  ],
  controls: [
    {
      name: "GENESIS INTAKE",
      detail: "Capture the original concept and intended outcome.",
      code: "GIN-01",
    },
    {
      name: "STAGE CONTROLLER",
      detail: "Manage progression and stage dependencies.",
      code: "STC-02",
    },
    {
      name: "ARCHITECTURE REGISTRY",
      detail: "Preserve architecture, versions, and decisions.",
      code: "ARC-03",
    },
    {
      name: "VALIDATION GATES",
      detail: "Require evidence and approval before advancement.",
      code: "VAL-04",
    },
    {
      name: "GENESIS LEDGER",
      detail: "Record milestones, approvals, and change history.",
      code: "LED-05",
    },
  ],
  integrations: [
    "SHELBY ENTERPRISE",
    "VCON",
    "ELEANOR",
    "ZEUS",
    "VENOM RE:CORE",
    "VEME",
    "SHELBY CHAIN",
  ],
};

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="genesis-shell">
    <div class="background-grid"></div>
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>

    <header class="topbar">
      <div class="brand">
        <div class="brand-icon">V</div>
        <div>
          <strong>SHELBY PREDATOR</strong>
          <small>ENTERPRISE ARCHITECTURE</small>
        </div>
      </div>

      <div class="topbar-meta">
        <span class="live-status"><i></i> GENESIS CORE READY</span>
        <span class="version">VGE / ${genesis.version}</span>
      </div>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><span></span> ENTERPRISE GENESIS / ORIGIN SYSTEM</div>
        <h1>VGE<span>.</span></h1>
        <h2>VENOM GENESIS ENTERPRISE</h2>
        <p>${genesis.mission}</p>

        <div class="hero-tags">
          <span>IDEA TO ENTERPRISE</span>
          <span>7-STAGE FRAMEWORK</span>
          <span>GATED PROGRESSION</span>
        </div>

        <button id="start-genesis" class="primary-button">
          <span>▶</span> INITIATE GENESIS SEQUENCE
        </button>
      </div>

      <div class="genesis-visual">
        <div class="visual-ring ring-outer"></div>
        <div class="visual-ring ring-middle"></div>
        <div class="visual-ring ring-inner"></div>
        <div class="visual-cross cross-one"></div>
        <div class="visual-cross cross-two"></div>
        <div class="genesis-core">
          <div class="core-orbit">V</div>
          <strong>GENESIS</strong>
          <small>CREATION ENGINE</small>
          <span class="core-line"></span>
          <small>SEVEN STAGES</small>
        </div>
        <span class="visual-caption caption-one">ORIGIN</span>
        <span class="visual-caption caption-two">EVOLUTION</span>
        <span class="visual-caption caption-three">DEPLOYMENT</span>
      </div>
    </section>

    <section class="metrics">
      <div>
        <span>GENESIS STAGES</span>
        <strong>07</strong>
      </div>
      <div>
        <span>CONTROL MODULES</span>
        <strong>05</strong>
      </div>
      <div>
        <span>APPROVAL GATES</span>
        <strong>07</strong>
      </div>
      <div>
        <span>ENGINE STATUS</span>
        <strong id="engine-status">STANDBY</strong>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">THE GENESIS FRAMEWORK</span>
          <h2>Seven Stages of Enterprise Creation</h2>
          <p>One controlled progression from concept to repeatable enterprise.</p>
        </div>
        <span class="section-code">VGE / 001</span>
      </div>

      <div class="stage-grid">
        ${genesis.stages.map((stage, index) => `
          <article class="stage-card" data-stage="${index}">
            <div class="stage-top">
              <span class="stage-number">${stage.id}</span>
              <span class="stage-symbol">${["⌘", "⌁", "▦", "◎", "◇", "⛓", "▤"][index]}</span>
            </div>
            <span class="stage-code">${stage.code}</span>
            <h3>${stage.name}</h3>
            <p>${stage.description}</p>
            <div class="stage-output">
              <span>DELIVERABLE</span>
              <strong>${stage.deliverable}</strong>
            </div>
            <div class="stage-gate">
              <span>EXIT GATE</span>
              <strong>${stage.gate}</strong>
            </div>
            <div class="stage-state">AWAITING ACTIVATION</div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="progress-section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">GENESIS SEQUENCE CONTROL</span>
          <h2>Enterprise Progression</h2>
          <p>Run the demonstration to see the seven stages activate in sequence.</p>
        </div>
        <span class="section-code">SEQUENCE / 007</span>
      </div>

      <div class="sequence-track" id="sequence-track">
        ${genesis.stages.map((stage, index) => `
          <div class="sequence-step" data-sequence="${index}">
            <div class="sequence-node">${stage.id}</div>
            <span>${stage.name}</span>
          </div>
        `).join("")}
      </div>

      <div class="progress-panel">
        <div class="progress-info">
          <span id="progress-message">GENESIS SEQUENCE NOT INITIATED</span>
          <strong id="progress-percent">0%</strong>
        </div>
        <div class="progress-track">
          <div id="progress-fill"></div>
        </div>
        <div class="progress-footer">
          <span id="stage-counter">STAGE 00 / 07</span>
          <span>SIMULATED WORKFLOW</span>
        </div>
      </div>

      <div class="sequence-actions">
        <button id="reset-genesis" class="secondary-button">RESET SEQUENCE</button>
        <p>Demo progression does not represent actual project approval or deployment.</p>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">INTERNAL CONTROL ARCHITECTURE</span>
          <h2>The Genesis Control Layer</h2>
          <p>Five control modules govern how an idea becomes an enterprise.</p>
        </div>
        <span class="section-code">CONTROL / 005</span>
      </div>

      <div class="control-grid">
        ${genesis.controls.map((control, index) => `
          <article class="control-card">
            <div class="control-top">
              <span class="control-index">0${index + 1}</span>
              <span class="control-code">${control.code}</span>
            </div>
            <h3>${control.name}</h3>
            <p>${control.detail}</p>
            <div class="control-line"></div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section integration-section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">ENTERPRISE CONNECTIONS</span>
          <h2>Designed for the VENOM Ecosystem</h2>
          <p>Planned interfaces with the wider Shelby Predator architecture.</p>
        </div>
        <span class="section-code">NETWORK / 007</span>
      </div>

      <div class="integration-list">
        ${genesis.integrations.map((name, index) => `
          <div class="integration-item">
            <span class="integration-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="integration-dot"></span>
            <strong>${name}</strong>
            <small>${index === 0 ? "PARENT ENTERPRISE" : "PLANNED INTERFACE"}</small>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="closing">
      <div class="closing-symbol">VGE</div>
      <div>
        <span class="eyebrow">THE GENESIS PRINCIPLE</span>
        <h2>EVERY ENTERPRISE HAS AN ORIGIN.</h2>
        <p>VGE gives that origin a structure, a process, and a path to reality.</p>
      </div>
    </section>

    <footer>
      <span>SHELBY PREDATOR ENTERPRISE</span>
      <span>THE COBRA WAY / 427 PROTOCOL</span>
      <span>VGE / CONCEPT PROTOTYPE</span>
    </footer>
  </main>
`;

const startButton = document.querySelector("#start-genesis");
const resetButton = document.querySelector("#reset-genesis");
const engineStatus = document.querySelector("#engine-status");
const progressMessage = document.querySelector("#progress-message");
const progressPercent = document.querySelector("#progress-percent");
const progressFill = document.querySelector("#progress-fill");
const stageCounter = document.querySelector("#stage-counter");

const stageCards = [...document.querySelectorAll(".stage-card")];
const sequenceSteps = [...document.querySelectorAll(".sequence-step")];

let timer = null;
let activeStage = -1;

function activateStage(index) {
  activeStage = index;

  stageCards.forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === index);
    card.classList.toggle("completed", cardIndex < index);

    const state = card.querySelector(".stage-state");

    if (cardIndex < index) {
      state.textContent = "STAGE COMPLETE";
    } else if (cardIndex === index) {
      state.textContent = "STAGE ACTIVE";
    } else {
      state.textContent = "AWAITING ACTIVATION";
    }
  });

  sequenceSteps.forEach((step, stepIndex) => {
    step.classList.toggle("active", stepIndex === index);
    step.classList.toggle("completed", stepIndex < index);
  });

  const percent = Math.round(((index + 1) / genesis.stages.length) * 100);

  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  stageCounter.textContent =
    `STAGE ${String(index + 1).padStart(2, "0")} / 07`;

  progressMessage.textContent =
    index === 6
      ? "GENESIS DEMONSTRATION COMPLETE"
      : `ACTIVE STAGE: ${genesis.stages[index].name}`;

  engineStatus.textContent = index === 6 ? "DEMO COMPLETE" : "PROCESSING";
}

function resetSequence() {
  clearInterval(timer);
  timer = null;
  activeStage = -1;

  stageCards.forEach((card) => {
    card.classList.remove("active", "completed");
    card.querySelector(".stage-state").textContent = "AWAITING ACTIVATION";
  });

  sequenceSteps.forEach((step) => {
    step.classList.remove("active", "completed");
  });

  progressPercent.textContent = "0%";
  progressFill.style.width = "0%";
  progressMessage.textContent = "GENESIS SEQUENCE NOT INITIATED";
  stageCounter.textContent = "STAGE 00 / 07";
  engineStatus.textContent = "STANDBY";

  startButton.disabled = false;
  startButton.innerHTML = "<span>▶</span> INITIATE GENESIS SEQUENCE";
}

startButton.addEventListener("click", () => {
  if (timer) return;

  if (activeStage === 6) {
    resetSequence();
  }

  startButton.disabled = true;
  startButton.textContent = "GENESIS SEQUENCE RUNNING...";

  let index = 0;
  activateStage(index);

  timer = setInterval(() => {
    index += 1;

    if (index >= genesis.stages.length) {
      clearInterval(timer);
      timer = null;
      startButton.disabled = false;
      startButton.textContent = "RUN GENESIS AGAIN";
      return;
    }

    activateStage(index);
  }, 1100);
});

resetButton.addEventListener("click", resetSequence);

