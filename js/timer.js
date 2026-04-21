// Константы времени в СЕКУНДАХ
const POMODORO_TIME = 1500;  // 25 минут = 25*60 = 1500 сек
const SHORT_BREAK = 300;     // 5 минут = 5*60 = 300 сек  
const LONG_BREAK = 900;      // 15 минут = 15*60 = 900 сек

// Переменные состояния таймера
let timerValue = 1500;       // Текущее оставшееся время (сек)
let timerInterval;           // ID интервала для setInterval (для остановки)

// Элементы интерфейса (находим через DOM)
const timerDisplay = document.getElementById('timerDisplay');     // Цифры MM:SS
const progressbar = document.querySelector('.progressbar');        // Круглый прогресс-бар

// ФУНКЦИЯ ФОРМАТИРОВАНИЯ времени MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);  // Целые минуты
    const secs = seconds % 60;              // Остаток секунд
    // padStart(2,'0') добавляет 0 слева если число однозначное
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    // Результат: 25:00, 24:59, 05:05, 00:01
}

// ФУНКЦИЯ ОБНОВЛЕНИЯ дисплея и прогресс-бара
function updateDisplay() {
    // Обновляем цифры времени
    timerDisplay.textContent = formatTime(timerValue);
    
    // Вычисляем угол прогресс-бара (0-360 градусов)
    const angle = (timerValue / POMODORO_TIME) * 360;
    // Меняем conic-gradient: от красного к серому по часовой
    progressbar.style.background = `conic-gradient(#f3486d ${angle}deg, crimson 0deg)`;
}

// ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ режима таймера
function setTimeType(type) {
    // Сохраняем новый режим глобально
    window.pomodoroType = type;
    
    // Устанавливаем соответствующее время
    switch(type) {
        case 'POMODORO':  timerValue = POMODORO_TIME; break;  // 25:00
        case 'SHORTBREAK': timerValue = SHORT_BREAK;  break;  // 05:00
        case 'LONGBREAK':  timerValue = LONG_BREAK;   break;  // 15:00
    }
    // Обновляем дисплей
    updateDisplay();
}

// ФУНКЦИЯ СТАРТА таймера
function startTimer() {
    if (timerInterval) return; // Если уже идет — не запускаем повторно
    
    // Каждую секунду уменьшаем таймер
    timerInterval = setInterval(() => {
        timerValue--;           // Минус 1 секунда
        updateDisplay();        // Обновляем экран
        
        if (timerValue <= 0) {  // Время вышло!
            clearInterval(timerInterval);  // Останавливаем таймер
            timerInterval = null;
            
            window.pomodoroCount++;        // +1 к счетчику сессий
            alert('Время вышло!');         // Уведомление
            
            window.updateUI();             // Обновляем интерфейс
        }
    }, 1000); // Интервал 1 секунда
}

// ФУНКЦИЯ ПАУЗЫ таймера
function pauseTimer() {
    clearInterval(timerInterval);  // Останавливаем интервал
    timerInterval = null;          // Сбрасываем ID
}

// ФУНКЦИЯ СБРОСА таймера
function resetTimer() {
    pauseTimer();                  // Сначала останавливаем
    window.pomodoroCount = 0;      // Обнуляем счетчик
    setTimeType('POMODORO');       // Возвращаемся к 25:00
    window.updateUI();             // Обновляем UI
}

// Выводим все функции в глобальное пространство (для main.js)
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
window.setTimeType = setTimeType;
window.updateDisplay = updateDisplay;