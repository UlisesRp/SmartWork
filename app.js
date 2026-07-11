const WHATSAPP_NUMBER = "5215630896635"; // Reemplaza por el WhatsApp real del cliente.
const WHATSAPP_MESSAGE = "Hola, quiero información sobre los servicios de Smart Work Capital Humano.";

const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");
const whatsappLinks = document.querySelectorAll(".js-whatsapp");
const year = document.querySelector("#year");
const cvFile = document.querySelector("#cvFile");
const fileName = document.querySelector("#fileName");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const currentPage = document.body.dataset.page;
document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add("is-active");
  }
});

whatsappLinks.forEach((link) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  link.setAttribute("href", url);
});

if (cvFile && fileName) {
  cvFile.addEventListener("change", () => {
    const file = cvFile.files?.[0];
    fileName.textContent = file ? file.name : "PDF, DOC o DOCX";
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const cvForm = document.querySelector("#cvForm");
if (cvForm) {
  cvForm.addEventListener("submit", (event) => {
    const file = cvFile?.files?.[0];
    const maxMB = 8;

    if (file && file.size > maxMB * 1024 * 1024) {
      event.preventDefault();
      alert(`El CV pesa más de ${maxMB} MB. Por favor adjunta un archivo más ligero.`);
    }
  });
}


// Flip de tarjetas de valores: hover en escritorio y click/tap en móvil.
document.querySelectorAll(".flip-values .value-card").forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.classList.contains("is-flipped");

    document.querySelectorAll(".flip-values .value-card.is-flipped").forEach((item) => {
      if (item !== card) item.classList.remove("is-flipped");
    });

    card.classList.toggle("is-flipped", !isOpen);
  });
});
