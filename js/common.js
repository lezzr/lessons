const message = document.querySelector('.message');

export default function renderError(text) {
  message.textContent = text;
}

export function resetMessage() {
  message.textContent = '';
}

export function renderDiff(diff) {
  message.innerHTML = `<span>
  Лет: ${diff.years}
  Месяцев: ${diff.months}
  Дней: ${diff.days}
    </span>`;
}
