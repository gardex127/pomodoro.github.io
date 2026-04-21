// Глобальные переменные для хранения состояния (доступны всем файлам)
let pomodoroCount = 0;  // Счетчик завершенных Pomodoro-сессий
let pomodoroType = 'POMODORO'; // Текущий режим: 'POMODORO', 'SHORTBREAK', 'LONGBREAK'

// ФУНКЦИЯ СОХРАНЕНИЯ в localStorage
function saveState() {
    // Создаем объект с текущим состоянием
    const state = { 
        pomodoroCount,     // Количество сессий
        pomodoroType       // Текущий режим
    };
    // Сохраняем в браузер как JSON-строку
    localStorage.setItem('pomodoroState', JSON.stringify(state));
    // JSON.stringify превращает объект в строку вида '{"pomodoroCount":3,"pomodoroType":"POMODORO"}'
}

// ФУНКЦИЯ ЗАГРУЗКИ из localStorage
function loadState() {
    // Получаем сохраненную строку из браузера
    const saved = localStorage.getItem('pomodoroState');
    if (saved) { // Если есть сохраненные данные
        const state = JSON.parse(saved); // JSON.parse превращает строку обратно в объект
        pomodoroCount = state.pomodoroCount || 0; // Загружаем счетчик (или 0 если нет)
        pomodoroType = state.pomodoroType || 'POMODORO'; // Загружаем режим (или POMODORO по умолчанию)
    }
}

// Делаем функции доступными для других JS файлов через window (глобальный объект)
window.saveState = saveState;
window.loadState = loadState;
window.pomodoroCount = pomodoroCount;  // Глобальная переменная счетчика
window.pomodoroType = pomodoroType;    // Глобальная переменная режима