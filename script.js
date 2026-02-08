const targetDate = new Date('November 19, 2026 00:00:00').getTime();
const countdownContainer = document.getElementById('countdown');

const units = [
    { id: 'years', label: 'Лет' },
    { id: 'months', label: 'Месяцев' },
    { id: 'weeks', label: 'Недель' },
    { id: 'days', label: 'Дней' },
    { id: 'hours', label: 'Часов' },
    { id: 'minutes', label: 'Минут' },
    { id: 'seconds', label: 'Секунд' }
];

function initTimer() {
    countdownContainer.innerHTML = units.map(unit => `
        <div class="timer-item">
            <span class="value" id="${unit.id}">0</span>
            <span class="label">${unit.label}</span>
        </div>
    `).join('');
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownContainer.innerHTML = "<h1>GTA VI ВЫШЛА!</h1>";
        return;
    }

    // 1. Считаем годы
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let years = Math.floor(d / 365);
    let remainingDays = d % 365;

    // 2. Считаем месяцы (усредненно 30.44 дня, но для красоты берем 30)
    let months = Math.floor(remainingDays / 30);
    remainingDays = remainingDays % 30;

    // 3. Считаем недели
    let weeks = Math.floor(remainingDays / 7);
    let days = remainingDays % 7;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновляем значения в DOM
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('weeks').innerText = weeks;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours < 10 ? '0'+hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0'+minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0'+seconds : seconds;
}

initTimer();
setInterval(updateCountdown, 1000);
updateCountdown();

