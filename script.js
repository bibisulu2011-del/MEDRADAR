
/* =========================================
   MEDRADAR — PREMIUM HEALTHCARE DASHBOARD
   ========================================= */

/* 1. DESIGN SYSTEM */

:root {
  --bg: #F5F5F2;
  --surface: #FFFFFF;
  --surface-soft: #F0F2ED;
  --text: #202725;
  --text-secondary: #78827B;
  --lime: #B7D967;
  --sage: #A5B3AA;
  --dark: #202725;
  --border: #E7EAE4;
  --success: #5C9470;
  --warning: #D5A64A;
  --danger: #C66F69;

  --sidebar-width: 260px;
  --radius: 18px;
  --shadow: 0 5px 24px rgba(32, 39, 37, 0.045);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
}

button,
input,
select {
  font: inherit;
}

button,
a,
select {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--lime);
  color: var(--dark);
}

/* 2. MAIN LAYOUT */

.app-container {
  min-height: 100vh;
}

.sidebar {
  width: var(--sidebar-width);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--dark);
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 30px 19px 20px;
  overflow-y: auto;
}

.main-content {
  margin-left: var(--sidebar-width);
  min-height: 100vh;
  padding: 0 38px 30px;
  max-width: 1800px;
}

/* 3. BRAND */

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 7px;
  margin-bottom: 42px;
}

.brand-icon {
  width: 39px;
  height: 39px;
  border-radius: 13px;
  background: var(--lime);
  color: var(--dark);
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 800;
}

.brand h2 {
  font-size: 18px;
  font-weight: 750;
  letter-spacing: -0.6px;
}

.brand span {
  display: block;
  color: #A5B3AA;
  font-size: 9px;
  letter-spacing: 1.6px;
  margin-top: 1px;
}

.sidebar-label {
  color: #829087;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 0 10px;
  margin: 17px 0 10px;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  color: #C0C9C1;
  font-size: 12px;
  font-weight: 500;
  transition: 0.2s ease;
}

.nav-link:hover {
  background: rgba(255,255,255,0.07);
  color: white;
}

.nav-link.active {
  background: var(--lime);
  color: var(--dark);
  font-weight: 700;
}

.sidebar-bottom {
  margin-top: auto;
  padding: 25px 7px 0;
}

.sidebar-bottom > label {
  display: block;
  font-size: 10px;
  color: #A5B3AA;
  margin-bottom: 8px;
}

.sidebar-bottom select {
  width: 100%;
  padding: 10px;
  color: white;
  background: #303A35;
  border: 1px solid #46514A;
  border-radius: 9px;
}

.sidebar-status {
  margin-top: 19px;
  color: #A5B3AA;
  font-size: 10px;
}

.status-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: var(--lime);
  border-radius: 50%;
  margin-right: 6px;
}

/* 4. TOP HEADER */

.topbar {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  gap: 20px;
  margin-bottom: 35px;
}

.search-wrapper {
  position: relative;
  width: min(430px, 55%);
}

.search-wrapper input {
  width: 100%;
  height: 43px;
  padding: 0 45px 0 16px;
  border: 1px solid var(--border);
  background: white;
  border-radius: 11px;
  outline: none;
  color: var(--text);
  font-size: 12px;
  transition: 0.2s;
}

.search-wrapper input:focus {
  border-color: var(--sage);
  box-shadow: 0 0 0 3px rgba(165,179,170,0.15);
}

.search-wrapper span {
  position: absolute;
  right: 15px;
  top: 7px;
  color: var(--text-secondary);
  font-size: 23px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 22px;
}

.icon-button {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  border: 1px solid var(--border);
  background: white;
  font-size: 18px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 37px;
  height: 37px;
  border-radius: 12px;
  background: #DCE6D0;
  display: grid;
  place-items: center;
  color: var(--dark);
  font-weight: 700;
  font-size: 12px;
}

.user-profile strong {
  display: block;
  font-size: 11px;
}

.user-profile span {
  color: var(--text-secondary);
  font-size: 10px;
  display: block;
}

.mobile-brand {
  display: none;
}

/* 5. PAGE HEADINGS */

.page-section {
  display: none;
  animation: fadeIn 0.3s ease;
}

.page-section.active {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(7px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 27px;
}

.eyebrow {
  color: #829087;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 1.8px;
}

.page-heading h1 {
  font-size: clamp(27px, 3vw, 36px);
  letter-spacing: -1.4px;
  line-height: 1.2;
  margin: 7px 0;
  font-weight: 750;
}

.page-heading p {
  color: var(--text-secondary);
  font-size: 12px;
}

.date-label {
  background: white;
  border: 1px solid var(--border);
  padding: 9px 14px;
  border-radius: 10px;
  color: var(--text-secondary);
  font-size: 11px;
}

.live-label {
  background: #EDF3E3;
  color: #607D43;
  padding: 6px 10px;
  border-radius: 7px;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 0.7px;
  white-space: nowrap;
}

/* 6. WELCOME CARD */

.welcome-card {
  min-height: 220px;
  background: var(--dark);
  border-radius: 21px;
  padding: 35px 38px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 35px;
}

.welcome-card > div:first-child {
  max-width: 520px;
  position: relative;
  z-index: 2;
}

.welcome-tag {
  display: inline-block;
  color: var(--lime);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.7px;
  margin-bottom: 12px;
}

.welcome-card h2 {
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: -1px;
  line-height: 1.25;
  margin-bottom: 12px;
}

.welcome-card p {
  max-width: 430px;
  color: #B8C2BA;
  font-size: 12px;
  line-height: 1.8;
  margin-bottom: 21px;
}

.primary-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background: var(--lime);
  color: var(--dark);
  border: none;
  border-radius: 9px;
  padding: 12px 18px;
  font-weight: 750;
  font-size: 11px;
  transition: 0.2s ease;
}

.primary-button:hover {
  background: #C9E786;
  transform: translateY(-2px);
}

.welcome-graphic {
  width: 210px;
  height: 180px;
  flex-shrink: 0;
  position: relative;
  display: grid;
  place-items: center;
}

.radar-circle {
  position: absolute;
  border: 1px solid rgba(183,217,103,0.35);
  border-radius: 50%;
}

.circle-one {
  width: 75px;
  height: 75px;
}

.circle-two {
  width: 125px;
  height: 125px;
}

.circle-three {
  width: 175px;
  height: 175px;
}

.radar-center {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  background: var(--lime);
  color: var(--dark);
  border-radius: 17px;
  font-size: 25px;
  font-weight: 800;
  z-index: 1;
}

/* 7. SECTION HEADINGS */

.section-heading,
.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.section-heading {
  margin-bottom: 17px;
}

.section-heading h2 {
  font-size: 18px;
  letter-spacing: -0.5px;
}

.section-heading p,
.panel-heading p {
  color: var(--text-secondary);
  font-size: 11px;
  margin-top: 3px;
}

.section-heading .live-label {
  flex-shrink: 0;
}

/* 8. STAT CARDS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px;
  margin-bottom: 27px;
}

.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  position: relative;
  min-width: 0;
  box-shadow: var(--shadow);
  transition: 0.2s;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(32,39,37,0.07);
}

.stat-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #EDF2E7;
  color: #617B4D;
  font-size: 17px;
  margin-bottom: 15px;
}

.stat-label {
  display: block;
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 550;
}

.stat-card strong {
  display: block;
  font-size: 29px;
  letter-spacing: -1.2px;
  margin: 3px 0;
  line-height: 1.3;
}

.stat-card strong small {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0;
}

.stat-note {
  color: #929B94;
  font-size: 9px;
}

.accent-stat {
  background: #EEF3E5;
  border-color: #E1E9D5;
}

/* 9. PANELS AND GRIDS */

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 18px;
  margin-bottom: 20px;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 20px;
}

.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 23px;
  margin-bottom: 20px;
  box-shadow: var(--shadow);
  min-width: 0;
}

.panel-heading {
  margin-bottom: 20px;
}

.panel-heading h3 {
  font-size: 14px;
  letter-spacing: -0.3px;
}

.panel-menu {
  color: var(--text-secondary);
  letter-spacing: 3px;
}

.chart-container {
  position: relative;
  height: 240px;
  width: 100%;
}

.activity-list {
  display: flex;
  flex-direction: column;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid var(--border);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  background: #EDF2E7;
  color: #667D4F;
  border-radius: 10px;
  flex-shrink: 0;
}

.activity-item strong {
  font-size: 11px;
  display: block;
}

.activity-item p {
  font-size: 10px;
  color: var(--text-secondary);
  margin-top: 3px;
}

/* 10. TABLES */

.table-wrapper {
  overflow-x: auto;
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

th {
  padding: 12px 14px;
  color: #8A948D;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border);
}

td {
  padding: 15px 14px;
  font-size: 11px;
  border-bottom: 1px solid #F0F1ED;
}

tbody tr:hover {
  background: #FAFBF8;
}

tbody tr:last-child td {
  border-bottom: none;
}

.status-badge {
  display: inline-block;
  padding: 5px 9px;
  border-radius: 6px;
  font-size: 9px;
  font-weight: 700;
}

.completed {
  color: #4E8762;
  background: #EAF3EB;
}

.pending {
  color: #A57A36;
  background: #F8F0DF;
}

.scheduled {
  color: #637D91;
  background: #EAF0F4;
}

/* 11. FORMS */

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 17px;
}

.form-group > label {
  display: block;
  font-size: 11px;
  font-weight: 650;
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.sidebar-bottom select {
  font-family: inherit;
}

.form-group input,
.form-group select {
  width: 100%;
  height: 43px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: #FCFCFA;
  color: var(--text);
  outline: none;
  font-size: 11px;
  transition: 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--sage);
  box-shadow: 0 0 0 3px rgba(165,179,170,0.13);
}

.form-group input::placeholder {
  color: #A6AEA8;
}

.form-message {
  color: var(--success);
  font-size: 11px;
  margin-top: 12px;
}

.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 15px;
  border-radius: 9px;
  background: #EDF2E7;
  color: #4F6840;
  border: 1px solid #E0E9D5;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

.secondary-button:hover {
  background: #E4EDD8;
}

.text-button {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 11px;
  margin-left: 12px;
}

.muted-text {
  font-size: 10px;
  color: var(--text-secondary);
  margin: 15px 0;
  line-height: 1.7;
}

/* 12. RAPID LAB TIMER */

.timer-display {
  font-size: 54px;
  font-weight: 750;
  letter-spacing: -3px;
  text-align: center;
  padding: 20px;
  color: var(--dark);
  background: #F0F3EA;
  border-radius: 15px;
  font-variant-numeric: tabular-nums;
}

.compact-stats .stat-card {
  padding: 18px 20px;
}

/* 13. AI RADAR */

.notice-card {
  background: #EEF3E7;
  border: 1px solid #DFE8D5;
  border-left: 4px solid var(--lime);
  border-radius: 12px;
  padding: 17px 20px;
  margin-bottom: 20px;
}

.notice-card strong {
  font-size: 12px;
}

.notice-card p {
  color: #667268;
  font-size: 11px;
  line-height: 1.7;
  margin-top: 5px;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.checkbox-grid label,
.checklist label,
.task-list label {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--text-secondary);
  font-size: 11px;
  cursor: pointer;
}

input[type="checkbox"] {
  accent-color: #819C5D;
  width: 15px;
  height: 15px;
}

.radar-result {
  text-align: center;
  padding: 25px 10px;
  min-height: 210px;
}

.result-placeholder {
  width: 65px;
  height: 65px;
  border-radius: 20px;
  background: #EDF2E7;
  display: grid;
  place-items: center;
  margin: 0 auto 15px;
  font-size: 30px;
  color: #708B54;
}

.radar-result h3 {
  font-size: 15px;
  margin-bottom: 6px;
}

.radar-result p {
  color: var(--text-secondary);
  font-size: 11px;
}

.risk-legend {
  border-top: 1px solid var(--border);
  padding-top: 17px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.risk-legend strong {
  display: block;
  font-size: 10px;
}

.risk-legend p {
  color: var(--text-secondary);
  font-size: 9px;
  margin-top: 4px;
}

.risk-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
}

.risk-dot.low {
  background: var(--success);
}

.risk-dot.medium {
  background: var(--warning);
}

.risk-dot.high {
  background: var(--danger);
}

/* 14. MEDMOBILE MAP */

.map-container {
  height: 380px;
  width: 100%;
  border-radius: 13px;
  background: #E8EDE5;
  overflow: hidden;
  z-index: 1;
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 13px 0;
  border-bottom: 1px solid var(--border);
  font-size: 11px;
}

.info-row:last-child {
  border-bottom: none;
}

.info-row span {
  color: var(--text-secondary);
}

.info-row strong {
  font-size: 11px;
}

.schedule-item {
  display: flex;
  gap: 15px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.schedule-item:last-child {
  border-bottom: none;
}

.schedule-time {
  color: #71884F;
  font-size: 11px;
  font-weight: 750;
  min-width: 48px;
}

.schedule-item strong {
  display: block;
  font-size: 11px;
}

.schedule-item p {
  color: var(--text-secondary);
  font-size: 10px;
  margin-top: 3px;
}

/* 15. HEALTH PASSPORT */

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.profile-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
}

.large-avatar {
  width: 55px;
  height: 55px;
  font-size: 17px;
  border-radius: 17px;
  margin-bottom: 15px;
}

.profile-id {
  display: block;
  font-size: 9px;
  color: #829087;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.profile-card h3 {
  font-size: 15px;
}

.profile-card p {
  color: var(--text-secondary);
  font-size: 11px;
  margin: 4px 0 13px;
}

.timeline {
  border-left: 2px solid #E3EBDD;
  margin-left: 6px;
  padding-left: 20px;
}

.timeline-item {
  position: relative;
  padding: 0 0 24px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -27px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--lime);
  border: 2px solid white;
  box-shadow: 0 0 0 1px #DAE4D1;
}

.timeline-date {
  display: block;
  color: #829087;
  font-size: 9px;
  margin-bottom: 4px;
}

.timeline-item strong {
  font-size: 11px;
}

.timeline-item p {
  color: var(--text-secondary);
  font-size: 10px;
  margin-top: 3px;
}

.recommendation-list {
  list-style: none;
}

.recommendation-list li {
  position: relative;
  padding: 11px 0 11px 22px;
  font-size: 11px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}

.recommendation-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #78934E;
  font-weight: 800;
}

.next-exam {
  margin-top: 20px;
  padding: 15px;
  border-radius: 11px;
  background: #F0F3EA;
}

.next-exam span {
  display: block;
  color: var(--text-secondary);
  font-size: 10px;
}

.next-exam strong {
  display: block;
  font-size: 17px;
  margin-top: 5px;
}

.qr-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.qr-panel h3 {
  font-size: 14px;
}

.qr-panel p {
  color: var(--text-secondary);
  font-size: 11px;
  margin: 7px 0 12px;
}

.qr-demo {
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  border: 8px solid #202725;
  background:
    repeating-conic-gradient(#202725 0% 25%, white 0% 50%)
    0 0 / 13px 13px;
  display: grid;
  place-content: center;
  text-align: center;
  color: var(--lime);
  font-weight: 800;
}

.qr-demo span {
  background: var(--dark);
  padding: 3px;
  font-size: 13px;
}

.qr-demo small {
  background: var(--dark);
  font-size: 8px;
}

/* 16. WORKFLOW AND JOURNEY */

.workflow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.workflow-step {
  flex: 1;
  min-width: 110px;
  background: #F5F7F1;
  border: 1px solid #E7EDE0;
  border-radius: 13px;
  padding: 16px;
}

.workflow-step > span {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  background: var(--lime);
  color: var(--dark);
  border-radius: 8px;
  font-size: 10px;
  font-weight: 800;
  margin-bottom: 12px;
}

.workflow-step strong {
  display: block;
  font-size: 11px;
}

.workflow-step p {
  color: var(--text-secondary);
  font-size: 9px;
  margin-top: 5px;
}

.workflow-arrow {
  color: #9BA99B;
  font-size: 19px;
}

.journey {
  max-width: 650px;
  margin: 0 auto;
}

.journey-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #F5F7F1;
  border: 1px solid #E5EBDE;
  padding: 22px;
  border-radius: 14px;
}

.journey-number {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  background: var(--lime);
  border-radius: 11px;
  font-weight: 800;
  margin-bottom: 9px;
}

.journey-step h3 {
  font-size: 13px;
}

.journey-step p {
  max-width: 390px;
  font-size: 10px;
  color: var(--text-secondary);
  margin-top: 5px;
}

.journey-connector {
  text-align: center;
  padding: 7px;
  color: #8FA477;
  font-size: 20px;
}

/* 17. CHECKLISTS */

.checklist,
.task-list {
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 5px 0;
}

/* 18. FOOTER */

.footer {
  border-top: 1px solid var(--border);
  padding: 23px 0 5px;
  margin-top: 35px;
  text-align: center;
}

.footer-brand {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
}

.footer-brand span {
  color: #8DA85D;
}

.footer p {
  color: var(--text-secondary);
  font-size: 10px;
  margin-top: 5px;
}

.footer .footer-disclaimer {
  font-size: 9px;
  color: #A0A8A1;
  margin-top: 9px;
}

/* 19. ACCESSIBILITY */

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 2px solid #8DA85D;
  outline-offset: 3px;
}

/* 20. RESPONSIVE TABLETS */

@media (max-width: 1100px) {
  :root {
    --sidebar-width: 220px;
  }

  .main-content {
    padding: 0 23px 25px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .workflow {
    justify-content: center;
  }
}

/* 21. RESPONSIVE MOBILE */

@media (max-width: 760px) {
  :root {
    --sidebar-width: 0px;
  }

  .sidebar {
    display: none;
  }

  .main-content {
    margin-left: 0;
    padding: 0 16px 25px;
  }

  .topbar {
    height: auto;
    min-height: 70px;
    flex-wrap: wrap;
    padding: 13px 0;
    margin-bottom: 25px;
  }

  .mobile-brand {
    display: block;
    font-size: 17px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .search-wrapper {
    order: 3;
    width: 100%;
  }

  .topbar-actions {
    gap: 10px;
  }

  .user-profile > div:last-child {
    display: none;
  }

  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .welcome-card {
    padding: 25px;
    min-height: 210px;
  }

  .welcome-graphic {
    display: none;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .stat-card {
    padding: 15px;
  }

  .stat-card strong {
    font-size: 25px;
  }

  .two-column-layout,
  .profile-grid {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 17px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .workflow {
    flex-direction: column;
  }

  .workflow-step {
    width: 100%;
  }

  .workflow-arrow {
    transform: rotate(90deg);
  }

  .risk-legend {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 300px;
  }

  .qr-panel {
    align-items: flex-start;
  }

  .chart-container {
    height: 210px;
  }
}

/* 22. SMALL SCREENS */

@media (max-width: 390px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .checkbox-grid {
    grid-template-columns: 1fr;
  }

  .welcome-card h2 {
    font-size: 23px;
  }

  .timer-display {
    font-size: 43px;
  }
}
