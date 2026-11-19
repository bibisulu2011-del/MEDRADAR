
/* ==========================================
   MEDRADAR — INTERACTIVE PLATFORM
   Vanilla JavaScript | GitHub Pages
   ========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. NAVIGATION
  // ==========================================

  const sections = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll(".nav-link");

  function showSection(sectionId) {
    const target = document.getElementById(sectionId);

    if (!target || !target.classList.contains("page-section")) return;

    sections.forEach(section => {
      section.classList.toggle("active", section.id === sectionId);
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.section === sectionId
      );
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (sectionId === "medmobile") {
      setTimeout(initializeMap, 150);
    }

    if (sectionId === "overview") {
      setTimeout(initializeChart, 100);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const id = link.dataset.section;
      showSection(id);
      history.replaceState(null, "", `#${id}`);
    });
  });

  // Handle links elsewhere on the page.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);

      if (target && target.classList.contains("page-section")) {
        event.preventDefault();
        showSection(id);
        history.replaceState(null, "", `#${id}`);
      }
    });
  });

  const initialSection = location.hash.slice(1);
  if (initialSection && document.getElementById(initialSection)?.classList.contains("page-section")) {
    showSection(initialSection);
  } else {
    showSection("overview");
  }

  // ==========================================
  // 2. CURRENT DATE
  // ==========================================

  const dateElement = document.getElementById("currentDate");

  if (dateElement) {
    dateElement.textContent = new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date());
  }

  // ==========================================
  // 3. OVERVIEW CHART
  // ==========================================

  let analyticsChart = null;

  function initializeChart() {
    const canvas = document.getElementById("analyticsChart");

    if (!canvas || !window.Chart || analyticsChart) return;

    analyticsChart = new Chart(canvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Illustrative village coverage",
            data: [35, 42, 48, 57, 68, 80],
            borderColor: "#829D5B",
            backgroundColor: "rgba(183,217,103,0.18)",
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: "#B7D967"
          },
          {
            label: "Illustrative medical clusters",
            data: [5, 7, 9, 12, 16, 20],
            borderColor: "#A5B3AA",
            backgroundColor: "rgba(165,179,170,0.08)",
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              boxWidth: 7,
              padding: 18,
              font: { size: 10 }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: "#EDF0EA" },
            ticks: { font: { size: 10 } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        }
      }
    });
  }

  initializeChart();

  // ==========================================
  // 4. RAPID LAB FORM
  // ==========================================

  const labForm = document.getElementById("labForm");
  const labMessage = document.getElementById("labMessage");
  const labResultsBody = document.getElementById("labResultsBody");

  let sampleCounter = 3;

  if (labForm) {
    labForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("labPatientName").value.trim();
      const patientId = document.getElementById("labPatientId").value.trim();
      const village = document.getElementById("labVillage").value.trim();
      const test = document.getElementById("labTestType").value;

      if (!name || !patientId || !village || !test) {
        labMessage.textContent = "Please complete all fields.";
        return;
      }

      const sampleId = `LAB-${String(sampleCounter++).padStart(3, "0")}`;

      const row = document.createElement("tr");

      [
        sampleId,
        test,
        "Awaiting professional review",
        "Not started",
        "Registered"
      ].forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;

        if (index === 4) {
          const badge = document.createElement("span");
          badge.className = "status-badge scheduled";
          badge.textContent = value;
          cell.textContent = "";
          cell.appendChild(badge);
        }

        row.appendChild(cell);
      });

      if (labResultsBody) {
        labResultsBody.prepend(row);
      }

      labMessage.textContent =
        `${sampleId} registered for ${name} (${patientId}) at ${village}. Demo record only.`;

      labForm.reset();
    });
  }

  // ==========================================
  // 5. RAPID LAB TIMER
  // ==========================================

  const timerDisplay = document.getElementById("labTimer");
  const startTimerButton = document.getElementById("startLabTimer");
  const resetTimerButton = document.getElementById("resetLabTimer");
  const timerStatus = document.getElementById("labTimerStatus");

  let timerSeconds = 15 * 60;
  let timerInterval = null;

  function updateTimerDisplay() {
    if (!timerDisplay) return;

    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;

    timerDisplay.textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  if (startTimerButton) {
    startTimerButton.addEventListener("click", () => {
      if (timerInterval) return;

      if (timerSeconds <= 0) timerSeconds = 15 * 60;

      if (timerStatus) timerStatus.textContent = "Running";

      timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();

        if (timerSeconds <= 0) {
          clearInterval(timerInterval);
          timerInterval = null;

          if (timerStatus) timerStatus.textContent = "Complete";
        }
      }, 1000);
    });
  }

  if (resetTimerButton) {
    resetTimerButton.addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
      timerSeconds = 15 * 60;
      updateTimerDisplay();

      if (timerStatus) timerStatus.textContent = "Ready";
    });
  }

  updateTimerDisplay();

  // ==========================================
  // 6. AI HEALTH RADAR — EDUCATIONAL SIMULATION
  // ==========================================

  const radarForm = document.getElementById("radarForm");
  const radarResult = document.getElementById("radarResult");

  if (radarForm) {
    radarForm.addEventListener("submit", event => {
      event.preventDefault();

      const age = Number(document.getElementById("radarAge").value);
      const familyHistory = document.getElementById("familyHistory").value;
      const previousExams = document.getElementById("previousExams").value;

      const symptoms = [
        ...document.querySelectorAll('input[name="symptoms"]:checked')
      ].map(input => input.value);

      if (!Number.isInteger(age) || age < 1 || age > 120) {
        radarResult.innerHTML = `
          <h3>Check the entered information</h3>
          <p>Please enter a valid age for this demonstration.</p>
        `;
        return;
      }

      /*
        This is a fictional interface demonstration.
        It is NOT a clinically validated risk model.
        The categories below only demonstrate UI behavior.
      */

      let points = 0;

      if (age >= 65) points += 1;
      if (familyHistory === "yes") points += 1;
      if (previousExams === "followup") points += 1;
      if (symptoms.length >= 2) points += 1;

      let level = "Low";
      let color = "#5C9470";
      let explanation = "Illustrative routine information category.";

      if (points >= 3) {
        level = "High";
        color = "#C66F69";
        explanation = "This sample category demonstrates priority professional review.";
      } else if (points >= 1) {
        level = "Medium";
        color = "#D5A64A";
        explanation = "This sample category demonstrates additional review.";
      }

      radarResult.innerHTML = "";

      const heading = document.createElement("span");
      heading.style.cssText = `
        display:inline-block;
        padding:8px 14px;
        border-radius:8px;
        background:${color}20;
        color:${color};
        font-size:12px;
        font-weight:700;
        margin-bottom:15px;
      `;
      heading.textContent = `${level} · DEMO CATEGORY`;

      const title = document.createElement("h3");
      title.textContent = "Demonstration result";

      const description = document.createElement("p");
      description.textContent = explanation;

      const details = document.createElement("p");
      details.style.marginTop = "12px";
      details.textContent =
        `Selected symptoms: ${symptoms.length}. Age and other inputs were included in this simplified demonstration.`;

      const disclaimer = document.createElement("p");
      disclaimer.style.cssText = "margin-top:15px;font-size:10px;color:#A16B48;";
      disclaimer.textContent =
        "Not a diagnosis. This simulation is not validated for clinical use. Consult a qualified healthcare professional.";

      radarResult.append(heading, title, description, details, disclaimer);
    });
  }

  // ==========================================
  // 7. MEDMOBILE MAP
  // ==========================================

  let medMap = null;

  function initializeMap() {
    const mapElement = document.getElementById("map");

    if (!mapElement || !window.L || medMap) return;

    // Illustrative regional map centered on Aktobe, Kazakhstan.
    medMap = L.map("map").setView([50.2839, 57.1670], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(medMap);

    const demoVillages = [
      { name: "Demo Village A", cluster: "Cluster 01", lat: 50.35, lng: 57.30 },
      { name: "Demo Village B", cluster: "Cluster 01", lat: 50.18, lng: 57.05 },
      { name: "Demo Village C", cluster: "Cluster 02", lat: 50.50, lng: 56.85 },
      { name: "Demo Village D", cluster: "Cluster 02", lat: 50.05, lng: 57.45 },
      { name: "Demo Village E", cluster: "Cluster 03", lat: 50.65, lng: 57.50 },
      { name: "Demo Village F", cluster: "Cluster 03", lat: 49.95, lng: 56.75 },
      { name: "Demo Village G", cluster: "Cluster 04", lat: 50.42, lng: 57.75 },
      { name: "Demo Village H", cluster: "Cluster 04", lat: 50.12, lng: 57.90 }
    ];

    demoVillages.forEach(village => {
      L.marker([village.lat, village.lng])
        .addTo(medMap)
        .bindPopup(`
          <strong>${village.name}</strong><br>
          ${village.cluster}<br>
          <small>Illustrative location — not a verified medical facility.</small>
        `);
    });

    const centerIcon = L.divIcon({
      className: "medradar-map-marker",
      html: '<div style="background:#B7D967;color:#202725;padding:8px 11px;border-radius:10px;font-weight:800;border:2px solid white;">MED</div>',
      iconSize: [50, 35],
      iconAnchor: [25, 17]
    });

    L.marker([50.2839, 57.1670], { icon: centerIcon })
      .addTo(medMap)
      .bindPopup("<strong>Demo network center</strong><br>Aktobe · Illustrative marker");

    setTimeout(() => medMap.invalidateSize(), 100);
  }

  // ==========================================
  // 8. SEARCH
  // ==========================================

  const searchInput = document.getElementById("globalSearch");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();

      const searchableRows = document.querySelectorAll(
        "tbody tr, .activity-item, .profile-card, .schedule-item, .info-row"
      );

      searchableRows.forEach(item => {
        const matches = item.textContent.toLowerCase().includes(query);
        item.style.display = !query || matches ? "" : "none";
      });
    });
  }

  // ==========================================
  // 9. NOTIFICATIONS
  // ==========================================

  const notificationButton = document.getElementById("notificationButton");

  if (notificationButton) {
    notificationButton.addEventListener("click", () => {
      alert(
        "MEDRADAR DEMO NOTIFICATIONS\n\n" +
        "• Sample Rapid Lab record registered\n" +
        "• Illustrative mobile team schedule available\n" +
        "• Demonstration referral awaiting review\n\n" +
        "All information is fictional."
      );
    });
  }

  // ==========================================
  // 10. LANGUAGE SELECTOR
  // ==========================================

  const languageSelect = document.getElementById("languageSelect");

  const translations = {
    en: {
      overview: "Overview",
      rapid: "RAPID LAB",
      radar: "AI HEALTH RADAR",
      mobile: "MEDMOBILE",
      passport: "HEALTH PASSPORT",
      referrals: "Smart Referrals",
      preventive: "Preventive Care",
      journey: "Patient Journey",
      closed: "Closed-Loop Care",
      doctor: "Doctor Dashboard",
      patient: "Patient Dashboard"
    },
    ru: {
      overview: "Обзор",
      rapid: "БЫСТРАЯ ЛАБОРАТОРИЯ",
      radar: "ИИ РАДАР ЗДОРОВЬЯ",
      mobile: "МЕДМОБИЛЬ",
      passport: "ПАСПОРТ ЗДОРОВЬЯ",
      referrals: "Направления",
      preventive: "Профилактика",
      journey: "Путь пациента",
      closed: "Непрерывность помощи",
      doctor: "Панель врача",
      patient: "Панель пациента"
    },
    kz: {
      overview: "Шолу",
      rapid: "ЖЕДЕЛ ЗЕРТХАНА",
      radar: "ДЕНСАУЛЫҚ РАДАРЫ",
      mobile: "МЕДМОБИЛЬ",
      passport: "ДЕНСАУЛЫҚ ПАСПОРТЫ",
      referrals: "Жолдамалар",
      preventive: "Алдын алу",
      journey: "Пациент жолы",
      closed: "Үздіксіз көмек",
      doctor: "Дәрігер панелі",
      patient: "Пациент панелі"
    }
  };

  const translationKeys = {
    overview: "overview",
    "rapid-lab": "rapid",
    "ai-radar": "radar",
    medmobile: "mobile",
    "health-passport": "passport",
    referrals: "referrals",
    "preventive-care": "preventive",
    "patient-journey": "journey",
    "closed-loop": "closed",
    "doctor-dashboard": "doctor",
    "patient-dashboard": "patient"
  };

  function changeLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    navLinks.forEach(link => {
      const key = translationKeys[link.dataset.section];
      if (key) {
        const iconAndText = link.textContent.trim().split(" ");
        const icon = iconAndText[0];
        link.textContent = `${icon} ${dictionary[key]}`;
      }
    });

    const activeSection = document.querySelector(".page-section.active");
    const title = activeSection?.querySelector(".page-heading h1");

    if (title && activeSection.id === "overview") {
      title.textContent = dictionary.overview;
    }
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      changeLanguage(languageSelect.value);
    });
  }

  // ==========================================
  // 11. DEMO PATIENT SEARCH / TABLE
  // ==========================================

  const patientTableBody = document.getElementById("patientTableBody");

  if (patientTableBody) {
    patientTableBody.querySelectorAll("tr").forEach(row => {
      row.setAttribute("data-demo-record", "true");
    });
  }

  // ==========================================
  // 12. CONSOLE MESSAGE
  // ==========================================

  console.info(
    "%cMEDRADAR",
    "font-size:22px;font-weight:bold;color:#829D5B;"
  );
  console.info("Rural Healthcare Platform — demonstration mode.");
  console.info("All patient records and simulated assessments are fictional.");

});
