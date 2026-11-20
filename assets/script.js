// =========================================================================
// CONFIGURACIÓN DE TUS TÍTULOS, CERTIFICACIONES Y CURSOS
// Soporta imágenes verticales/horizontales (.jpg, .png, .webp) y archivos .pdf
// =========================================================================

const credenciales = [
{
  id: 1,
  titulo: "Ingeniería en Sistemas y Computación",
  categoria: "titulo",
  institucion: "Universidad Tecnológica de El Salvador",
  fecha: "Septiembre 2018",
  duracion: "5 años (Carrera Universitaria)",

  descripcion:
    "Formación profesional integral orientada a la arquitectura y desarrollo de software empresarial, diseño y administración avanzada de bases de datos, gestión de proyectos TI e interoperabilidad de sistemas.",
  archivo: "diplomas/Ingenieria.png",

  habilidades: [
    "Arquitectura de Software",
    "Desarrollo Full Stack",
    "Gestión de Bases de Datos",
    "Interoperabilidad de Sistemas",
    "Gestión de Proyectos TI",
    "Ingeniería de Requisitos",
    "Seguridad Informática"
  ]
},



  {
    id: 2,
    titulo: "Técnico en Ingeniería de Sistemas Informáticos",
    categoria: "titulo",
    institucion: "Itca Fepade",
    fecha: "Junio 2012",
    duracion: "2 años (Carrera tecnica)",

    descripcion:
      "Formación técnica integral enfocada en el análisis, diseño y desarrollo de aplicaciones de software, administración de bases de datos relacionales, configuración de redes y soporte técnico de infraestructura TI",
    archivo: "diplomas/tecnico.png", // También soporta PDF, ej: "diplomas/ingles-c1.pdf"

      habilidades: [
    "Desarrollo de Software",
    "Bases de Datos SQL",
    "Redes y Conectividad",
    "Soporte Técnico",
    "Análisis de Sistemas",
    "Programación Orientada a Objetos"
  ]
  },
 {
  id: 3,
  titulo: "Gestión de una plataforma empresarial de datos mediante Oracle 12c - Interoperabilidad",
  categoria: "certificacion",
  institucion: "Universidad Tecnológica de El Salvador",
  fecha: "Mayo 2018",
  duracion: "10 meses",

  descripcion:
    "Pre-especialización enfocada en la administración, optimización y alta disponibilidad de bases de datos empresariales con Oracle 12c, así como en la integración e intercambio seguro de datos entre sistemas heterogéneos.",
  archivo: "diplomas/CertiOracle.jpg",


  habilidades: [
    "Oracle Database 12c",
    "Administración de Bases de Datos (DBA)",
    "PL/SQL",
    "Interoperabilidad de Datos",
    "Arquitectura Multitenant",
    "Seguridad y Respaldo de Datos",
    "Integración de Sistemas"
  ]
},
{
  id: 4,
  titulo: "Developing ASP.NET Core MVC Web Applications",
  categoria: "certificacion",
  institucion: "Microsoft Partner",
  fecha: "Octubre 2020",
  duracion: "40 horas",
  credencialId: "Course 20486-D",
  descripcion:
    "Desarrollo de aplicaciones web empresariales multiplataforma utilizando C# y el patrón Modelo-Vista-Controlador (MVC), incluyendo acceso a datos con Entity Framework Core, creación de APIs REST, autenticación y seguridad web.",
  archivo: "diplomas/asp.net.png",

  habilidades: [
    "ASP.NET Core MVC",
    "C#",
    ".NET Core",
    "Entity Framework Core",
    "APIs REST",
    "Seguridad Web (Identity)",
    "HTML5 / CSS3 / JavaScript"
  ]
},


{
  id: 5,
  titulo: "Implementing a SQL Data Warehouse",
  categoria: "certificacion",
  institucion: "Microsoft Partner",
  fecha: "Abril 2019",
  duracion: "40 horas",
  credencialId: "Course 20767",
  descripcion:
    "Diseño e implementación de almacenes de datos empresariales (Data Warehouse), modelado dimensional (esquemas estrella y copo de nieve) y desarrollo de flujos de extracción, transformación y carga (ETL) con SQL Server Integration Services (SSIS).",
  archivo: "diplomas/warehouse.png",

  habilidades: [
    "SQL Server",
    "Data Warehousing",
    "Procesos ETL (SSIS)",
    "Modelado Dimensional",
    "T-SQL",
    "Calidad e Integración de Datos",
    "Business Intelligence (BI)"
  ]
},

{
  id: 6,
  titulo: "Developing SQL Data Models",
  categoria: "certificacion",
  institucion: "Microsoft Partner",
  fecha: "Noviembre 2019",
  duracion: "40 horas",
  credencialId: "Course 20768",
  descripcion:
    "Implementación de soluciones empresariales de Inteligencia de Negocios (BI) utilizando SQL Server Analysis Services (SSAS), creación de modelos de datos multidimensionales y tabulares, diseño de cubos OLAP, dimensiones, medidas y consultas mediante MDX y DAX.",
  archivo: "diplomas/models.png",
  urlVerificacion: "",
  habilidades: ["SQL Server (SSAS)", "Modelado de Datos", "Business Intelligence (BI)", "Cubos OLAP", "MDX y DAX"]
},



{
  id: 7,
  titulo: "Ruta de aprendizaje de Inglés para TI",
  categoria: "curso",
  institucion: "Cisco Networking Academy",
  fecha: "Agosto 2024",
  duracion: "80 horas",

  descripcion:
    "Formación especializada en terminología técnica del sector TI, redes, soporte técnico y desarrollo de software, fortaleciendo la comprensión lectora de documentación oficial y la comunicación efectiva en entornos tecnológicos internacionales.",
  archivo: "diplomas/InglesGobierno.pdf",


  habilidades: [
    "Inglés Técnico (English for IT)",
    "Lectura de Documentación Técnica",
    "Terminología de Redes y Software",
    "Comunicación Profesional TI",
    "Soporte Técnico Bilingüe"
  ]
},

{
  id: 8,
  titulo: "Ciencia de Datos (Python)",
  categoria: "curso",
  institucion: "Secretaría de Innovación de la Presidencia",
  fecha: "Noviembre 2021",
  duracion: "36 horas",

  descripcion:
    "Fundamentos de análisis y ciencia de datos utilizando Python, abarcando la extracción, limpieza y transformación de conjuntos de datos, análisis estadístico exploratorio y creación de visualizaciones para la toma de decisiones.",
  archivo: "diplomas/CienciaDatos.pdf",

  habilidades: [
    "Python",
    "Ciencia de Datos",
    "Análisis Exploratorio de Datos (EDA)",
    "Pandas y NumPy",
    "Visualización de Datos",
    "Limpieza y Transformación de Datos"
  ]
},
  {
  id: 9,
  titulo: "English for IT 1",
  categoria: "curso",
  institucion: "Cisco Networking Academy",
  fecha: "Mayo 2024",
  duracion: "40 horas",
 
  descripcion:
    "Certificación de inglés técnico de nivel intermedio orientada a la comunicación profesional en ingeniería de software, redes, seguridad informática y soporte técnico, capacitando para argumentar soluciones tecnológicas y colaborar en proyectos internacionales.",
  archivo: "diplomas/English_for_IT_2(CISCO).pdf",
  urlVerificacion: "https://www.credly.com/badges/aa6790c6-163c-418e-8e47-dd5218b39320/linked_in_profile",

  habilidades: [
  "Inglés Técnico (Nivel B1+)",
  "Vocabulario de Ingeniería de Redes y Software",
  "Gramática y Redacción Técnica"
  ]
},


  {
  id: 10,
  titulo: "English for IT 2",
  categoria: "curso",
  institucion: "Cisco Networking Academy",
  fecha: "Mayo 2024",
  duracion: "40 horas",

  descripcion:
    "Certificación de inglés técnico de nivel intermedio-alto orientada a la comunicación profesional en ingeniería de software, redes, seguridad informática y soporte técnico, capacitando para argumentar soluciones tecnológicas y colaborar en proyectos internacionales.",
  archivo: "diplomas/English_for_IT_2(CISCO).pdf",
  urlVerificacion: "https://www.credly.com/badges/01ea7b8c-1ecd-4f70-bb0c-6e6cb4992796/linked_in_profile",

  habilidades: [
  "Inglés Técnico (Nivel B2)",
  "Vocabulario de Computación en la Nube",
  "Vocabulario de Redes y Software",
  "Vocabulario de Soporte al Cliente",
  "Comunicación y Retroalimentación en Equipo",
  "Gramática Avanzada en Inglés"
  ]
},
  {
  id: 11,
  titulo: "Metodologías para la Gestión de pruebas de calidad de software",
  categoria: "curso",
  institucion: "Secretaría de Innovación de la Presidencia",
  fecha: "Noviembre 2023",
  duracion: "20 horas",

  descripcion:
    "Planificación, diseño y ejecución de casos de prueba, control de calidad (QA), seguimiento de defectos y aseguramiento de estándares en el ciclo de vida del software.",
  archivo: "diplomas/GestionPruebas.pdf",

  habilidades: ["Control de Calidad (QA)", "Testing", "Casos de Prueba", "Gestión de Defectos"]
},
 {
  id: 12,
  titulo: "Introducción a metodología de gestión de proyectos SCRUM",
  categoria: "curso",
  institucion: "Secretaría de Innovación de la Presidencia",
  fecha: "Noviembre 2025",
  duracion: "20 horas",

  descripcion:
    "Fundamentos del marco de trabajo ágil Scrum, roles del equipo (Product Owner, Scrum Master, Developers), gestión del Product Backlog, Sprints y ceremonias ágiles.",
  archivo: "diplomas/scrum.pdf",
  urlVerificacion: "",
  habilidades: ["Scrum", "Metodologías Ágiles", "Gestión de Proyectos", "Trabajo en Equipo"]
},


 {
  id: 13,
  titulo: "Programación en Angular Intermedio",
  categoria: "curso",
  institucion: "WEBCOMMSERVICE",
  fecha: "Febrero 2023",
  duracion: "24 horas",
  credencialId: "C065P-83031-022-2023-06",
  descripcion:
    "Especialización en desarrollo frontend utilizando Angular 12, abarcando arquitectura basada en módulos y componentes, directivas, pipes (tuberías), enlaces de datos, servicios e inyección de dependencias, formularios reactivos, programación reactiva (multidifusión), escalabilidad y manejo de errores.",
  archivo: "diplomas/AngularIntermedio.pdf",
  urlVerificacion: "",

  habilidades: [
    "Angular (v12)",
    "TypeScript / JavaScript",
    "Componentes, Módulos y Directivas",
    "Inyección de Dependencias y Servicios",
    "Formularios Reactivos",
    "Pipes y Enlace de Datos (Data Binding)",
    "Desarrollo Frontend"
  ]
},


{
  id: 14,
  titulo: "Inglés Avanzado 2 (Certificación Nivel B2 CEFR)",
  categoria: "certificacion", // o "certificacion" según tu filtro
  institucion: "Speak English",
  fecha: "Febrero 2024",
  duracion: "Programa Completo", // Puedes poner las horas si las tienes
  credencialId: "",
  descripcion:
    "Certificación de dominio avanzado del idioma inglés (Nivel B2 del Marco Común Europeo), acreditando fluidez para participar en reuniones técnicas, colaborar con equipos internacionales, redactar documentación ejecutiva y resolver problemas en entornos laborales bilingües.",
  archivo: "diplomas/SpeakEnglishB2.pdf",


  habilidades: [
    "Inglés Fluido (Nivel B2)",
    "Comunicación en Equipos Internacionales",
    "Reuniones y Presentaciones Técnicas",
    "Comprensión Auditiva y Conversación",
    "Redacción Profesional en Inglés"
  ]
},
 /* {
  id: 15,
  titulo: "Desarrollar Aplicaciones Web Empresariales con Java - Nivel Intermedio",
  categoria: "curso",
  institucion: "INSAFORP / New Millennium",
  fecha: "Mayo 2019",
  duracion: "24 horas",
  credencialId: "",
  descripcion:
    "Desarrollo de aplicaciones web empresariales en Java bajo estándares de programación corporativa, abarcando conectividad y ejecución de sentencias SQL en bases de datos mediante JDBC, manejo de peticiones y respuestas HTTP con Servlets y construcción de interfaces web con Facelets (XHTML) y JavaServer Faces (JSF).",
  archivo: "diplomas/java.jpg",
  urlVerificacion: "",

  habilidades: [
    "Java EE (Jakarta EE)",
    "JDBC y Conectividad SQL",
    "Java Servlets (HTTP)",
    "JavaServer Faces (JSF)",
    "Facelets y XHTML",
    "Desarrollo Backend Empresarial"
  ]
},*/
 
{
  id: 16,
  titulo: "Curso de Power BI",
  categoria: "curso",
  institucion: "Platzi",
  fecha: "Octubre 2026",
  duracion: "17 horas",
  credencialId: "",
  descripcion:
    "Análisis de datos empresariales y creación de reportes visuales interactivos en Power BI, desde la carga y limpieza de datos hasta la publicación de informes usando DAX, Power Query y mejores prácticas de modelado.",
  archivo: "diplomas/Powerbi.pdf",
  urlVerificacion: "https://platzi.com/p/davidrivera565/curso/10200-course/diploma/detalle/",
  habilidades: ["Power BI", "DAX", "Power Query", "Análisis de Datos", "Visualización de Datos"]
},



{
  id: 17,
  titulo: "Curso de DAX para Power BI",
  categoria: "curso",
  institucion: "Platzi",
  fecha: "Noviembre 2026",
  duracion: "19 horas",
  credencialId: "8121-course",
  descripcion:
    "Generación de visualizaciones e indicadores avanzados en Power BI mediante DAX, creando columnas, medidas y tablas calculadas con funciones de texto, tiempo y lógica, optimizando modelos de datos con herramientas externas.",
  archivo: "diplomas/dax.pdf",
  urlVerificacion: "https://platzi.com/p/davidrivera565/curso/8121-course/diploma/detalle/",
  habilidades: ["DAX", "Power BI", "Modelado de Datos", "KPIs e Indicadores", "Inteligencia de Tiempo"]
},

{
  id: 18,
  titulo: "Curso de Inglés para Servicio al Cliente",
  categoria: "curso",
  institucion: "Platzi",
  fecha: "Octubre 2026",
  duracion: "11 horas",
  credencialId: "8619-course",
  descripcion:
    "Desarrollo de habilidades para atender clientes en inglés, saludar por teléfono, formular preguntas corteses, empatizar, manejar quejas y ofrecer soluciones utilizando un tono profesional y expresiones clave del sector.",
  archivo: "diplomas/customerservice.pdf",
  urlVerificacion: "https://platzi.com/p/davidrivera565/curso/8619-course/diploma/detalle/",
  habilidades: ["Inglés Profesional", "Servicio al Cliente", "Comunicación Efectiva", "Resolución de Conflictos", "Atención Telefónica"]
},

{
  id: 19,
  titulo: "Curso de Inglés Avanzado C1: Presentaciones y Expresión Oral",
  categoria: "curso",
  institucion: "Platzi",
  fecha: "Octubre 2026",
  duracion: "11 horas",
  credencialId: "2730-course",
  descripcion:
    "Desarrollo de habilidades para presentaciones y expresión oral en inglés avanzado (C1), utilizando vocabulario de alto impacto, moderación de debates, storytelling efectivo, expresiones idiomáticas y acrónimos en contextos profesionales.",
  archivo: "diplomas/expresiones-idiomaticas.pdf",
  urlVerificacion: "https://platzi.com/p/davidrivera565/curso/2730-course/diploma/detalle/",
  habilidades: ["Inglés Avanzado (C1)", "Oratoria y Presentaciones", "Storytelling", "Moderación de Debates", "Expresiones Idiomáticas"]
},

{
  id: 20,
  titulo: "Curso de Inglés Intermedio Alto B2: Pasado Perfecto y Frases Adverbiales",
  categoria: "curso",
  institucion: "Platzi",
  fecha: "Noviembre 2026",
  duracion: "12 horas",
  credencialId: "5118-course",
  descripcion:
    "Dominio de estructuras gramaticales de nivel intermedio alto (B2), enfocándose en el uso del pasado perfecto, frases adverbiales, expresiones complejas y verbos aplicados a situaciones reales de negocios y entornos laborales.",
  archivo: "diplomas/frases-adverbiales.pdf",
  urlVerificacion: "https://platzi.com/p/davidrivera565/curso/5118-course/diploma/detalle/",
  habilidades: ["Inglés Intermedio Alto (B2)", "Gramática Avanzada", "Inglés de Negocios", "Comunicación Profesional"]
}



];

// Referencias del DOM
const gridEl = document.getElementById("credentialsGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const filterBtns = document.querySelectorAll(".filter-btn");
const resultsCountEl = document.getElementById("resultsCount");
const emptyStateEl = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

// Referencias del Modal
const modalEl = document.getElementById("diplomaModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const viewerStage = document.getElementById("viewerStage");
const viewerHint = document.getElementById("viewerHint");
const zoomToggleBtn = document.getElementById("zoomToggleBtn");
const zoomBtnText = document.getElementById("zoomBtnText");

let activeCategory = "todos";
let searchQuery = "";
let isZoomed = false;

function normalizeText(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function isPdfFile(path) {
  return path.toLowerCase().split("?")[0].endsWith(".pdf");
}

function getCategoryLabel(cat) {
  const labels = {
    titulo: "Título",
    certificacion: "Certificación",
    curso: "Curso"
  };
  return labels[cat] || "Credencial";
}

function renderCredentials() {
  const queryNorm = normalizeText(searchQuery.trim());

  const filtered = credenciales.filter((item) => {
    const matchCategory =
      activeCategory === "todos" || item.categoria === activeCategory;

    if (!matchCategory) return false;
    if (!queryNorm) return true;

    const searchableBlob = normalizeText(
      [
        item.titulo,
        item.institucion,
        item.fecha,
        item.credencialId,
        item.descripcion,
        ...(item.habilidades || [])
      ].join(" ")
    );

    return searchableBlob.includes(queryNorm);
  });

  // Actualizar contador
  if (filtered.length === credenciales.length) {
    resultsCountEl.textContent = `Mostrando ${filtered.length} credenciales en total`;
  } else {
    resultsCountEl.textContent = `Mostrando ${filtered.length} de ${credenciales.length} credenciales`;
  }

  gridEl.innerHTML = "";

  if (filtered.length === 0) {
    emptyStateEl.hidden = false;
    return;
  }

  emptyStateEl.hidden = true;

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "credential-card";

    const pdfMode = isPdfFile(item.archivo);
    const previewMedia = pdfMode
      ? `<div class="pdf-preview-box">
           <iframe src="${item.archivo}#toolbar=0&navpanes=0&scrollbar=0&view=Fit" title="${item.titulo}"></iframe>
           <span class="pdf-badge-corner">PDF</span>
         </div>`
      : `<img src="${item.archivo}" alt="${item.titulo}" loading="lazy" />`;

    const verifiedBadge = item.urlVerificacion
      ? `<span class="badge-verified">&#10003; Verificable</span>`
      : "";

    const verifyButton = item.urlVerificacion
      ? `<a href="${item.urlVerificacion}" target="_blank" rel="noopener noreferrer" class="btn-verify-sm">Verificar &#8599;</a>`
      : "";

    card.innerHTML = `
      <div class="card-preview" data-id="${item.id}">
        ${previewMedia}
        <div class="preview-overlay">
          <span class="preview-pill">Ampliar diploma</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-top-meta">
          <span class="badge-category" data-cat="${item.categoria}">${getCategoryLabel(item.categoria)}</span>
          ${verifiedBadge}
        </div>
        <h3 class="card-title">${item.titulo}</h3>
        <p class="card-institution">${item.institucion}</p>
        <p class="card-date">${item.fecha}</p>
        <div class="card-actions">
          <button type="button" class="btn-view" data-id="${item.id}">Ver detalles</button>
          ${verifyButton}
        </div>
      </div>
    `;

    gridEl.appendChild(card);
  });
}

function setZoomState(zoom) {
  isZoomed = zoom;
  if (isZoomed) {
    viewerStage.classList.add("zoomed");
    zoomBtnText.textContent = "- Ajustar vista";
  } else {
    viewerStage.classList.remove("zoomed");
    zoomBtnText.textContent = "+ Zoom";
  }
}

function openModal(id) {
  const item = credenciales.find((c) => c.id === Number(id));
  if (!item) return;

  setZoomState(false);

  const pdfMode = isPdfFile(item.archivo);
  viewerStage.innerHTML = "";

  if (pdfMode) {
    zoomToggleBtn.hidden = true;
    viewerHint.textContent = "Documento PDF ajustado al ancho";
    const iframe = document.createElement("iframe");
    iframe.src = `${item.archivo}#view=FitH&toolbar=1`;
    iframe.title = item.titulo;
    viewerStage.appendChild(iframe);
  } else {
    zoomToggleBtn.hidden = false;
    viewerHint.textContent = "Haz clic en el diploma para acercar o alejar";
    const img = document.createElement("img");
    img.src = item.archivo;
    img.alt = item.titulo;
    img.addEventListener("click", () => setZoomState(!isZoomed));
    viewerStage.appendChild(img);
  }

  // Llenar ficha técnica
  const catBadge = document.getElementById("modalCategory");
  catBadge.textContent = getCategoryLabel(item.categoria);
  catBadge.setAttribute("data-cat", item.categoria);

  document.getElementById("modalVerifiedBadge").hidden = !item.urlVerificacion;
  document.getElementById("modalTitle").textContent = item.titulo;
  document.getElementById("modalInstitution").textContent = item.institucion;
  document.getElementById("modalDescription").textContent = item.descripcion || "";
  document.getElementById("modalDate").textContent = item.fecha || "—";
  document.getElementById("modalDuration").textContent = item.duracion || "—";
  document.getElementById("modalCredentialId").textContent = item.credencialId || "No aplica";

  const skillsContainer = document.getElementById("modalSkills");
  const skillsBlock = document.getElementById("modalSkillsBlock");
  skillsContainer.innerHTML = "";

  if (item.habilidades && item.habilidades.length > 0) {
    skillsBlock.hidden = false;
    item.habilidades.forEach((skill) => {
      const span = document.createElement("span");
      span.className = "skill-tag";
      span.textContent = skill;
      skillsContainer.appendChild(span);
    });
  } else {
    skillsBlock.hidden = true;
  }

  const verifyLink = document.getElementById("modalVerifyLink");
  if (item.urlVerificacion) {
    verifyLink.href = item.urlVerificacion;
    verifyLink.hidden = false;
  } else {
    verifyLink.hidden = true;
  }

  const downloadLink = document.getElementById("modalDownloadLink");
  downloadLink.href = item.archivo;

  modalEl.classList.add("open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalEl.classList.remove("open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  viewerStage.innerHTML = "";
}

// Eventos
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.hidden = searchQuery.length === 0;
  renderCredentials();
});

clearSearchBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  renderCredentials();
  searchInput.focus();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.filter;
    renderCredentials();
  });
});

resetFiltersBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  activeCategory = "todos";
  filterBtns.forEach((b) => b.classList.toggle("active", b.dataset.filter === "todos"));
  renderCredentials();
});

gridEl.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-id]");
  if (trigger) {
    openModal(trigger.dataset.id);
  }
});

zoomToggleBtn.addEventListener("click", () => setZoomState(!isZoomed));
closeModalBtn.addEventListener("click", closeModal);

modalEl.addEventListener("click", (e) => {
  if (e.target === modalEl) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalEl.classList.contains("open")) {
    closeModal();
  }
});

// Inicializar
renderCredentials();
