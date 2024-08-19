// Функція для оновлення кількості гравців при вході на сторінку
function updatePlayerCount() {
    // Отримуємо поточну кількість гравців з localStorage або 0, якщо вона не існує
    let playerCount = localStorage.getItem('playerCount') || 0;
    
    // Збільшуємо кількість гравців на 1
    playerCount = parseInt(playerCount) + 1;

    // Зберігаємо оновлену кількість гравців у localStorage
    localStorage.setItem('playerCount', playerCount);

    // Оновлюємо текст на сторінці
    document.getElementById('players').innerText = `${playerCount}/6`;
}

// Функція для зменшення кількості гравців при виході зі сторінки
function decreasePlayerCount() {
    // Отримуємо поточну кількість гравців з localStorage
    let playerCount = localStorage.getItem('playerCount') || 0;
    
    // Переконуємось, що кількість гравців більше 0, щоб уникнути негативного значення
    if (playerCount > 0) {
        playerCount = parseInt(playerCount) - 1;
    }

    // Зберігаємо оновлену кількість гравців у localStorage
    localStorage.setItem('playerCount', playerCount);

    // Оновлюємо текст на сторінці (не обов'язково, але можна залишити для оновлення під час виходу)
    document.getElementById('players').innerText = `${playerCount}/6`;
}

// Викликаємо функцію для оновлення рахунку при завантаженні сторінки
window.onload = updatePlayerCount;

// Викликаємо функцію для зменшення рахунку при виході зі сторінки
window.addEventListener('beforeunload', decreasePlayerCount);