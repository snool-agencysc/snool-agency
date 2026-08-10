export function initFaq() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = question.getAttribute("aria-expanded") === "true";

      items.forEach((other) => {
        if (other === item) return;
        const otherQuestion = other.querySelector(".faq-question");
        const otherAnswer = other.querySelector(".faq-answer");
        if (otherQuestion && otherAnswer) {
          otherQuestion.setAttribute("aria-expanded", "false");
          otherAnswer.style.maxHeight = "0px";
        }
      });

      question.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? "0px" : `${answer.scrollHeight}px`;
    });
  });
}
