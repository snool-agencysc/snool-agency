// Edite este número para o WhatsApp oficial da SNOOL (formato: 55 + DDD + número)
const WHATSAPP_NUMBER = "5547984733407";

const DEFAULT_MESSAGE =
  "Olá, SNOOL! Vi o site de vocês e gostaria de saber mais sobre uma solução digital para o meu negócio.";

function generateWhatsAppLink(message = DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function initWhatsApp() {
  const links = document.querySelectorAll("[data-whatsapp]");
  links.forEach((link) => {
    const customMessage = link.getAttribute("data-whatsapp-message");
    link.setAttribute(
      "href",
      generateWhatsAppLink(customMessage || DEFAULT_MESSAGE)
    );
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const servico = (data.get("servico") || "").toString();
    const mensagemCliente = (data.get("mensagem") || "").toString().trim();

    if (!nome) {
      if (status) {
        status.textContent = "Preencha seu nome para continuar.";
        status.dataset.state = "error";
      }
      return;
    }

    const partes = [
      `Olá, SNOOL! Meu nome é ${nome}.`,
      servico ? `Tenho interesse em: ${servico}.` : "",
      mensagemCliente ? `Mensagem: ${mensagemCliente}` : "",
    ].filter(Boolean);

    const link = generateWhatsAppLink(partes.join(" "));

    if (status) {
      status.textContent = "Abrindo o WhatsApp para finalizar o contato...";
      status.dataset.state = "success";
    }

    window.open(link, "_blank", "noopener,noreferrer");
    form.reset();
  });
}
