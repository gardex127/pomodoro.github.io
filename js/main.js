// НАХОДИМ ВСЕ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА
    const pomodoroBtn = document.getElementById('pomodoroBtn');    // Кнопка Pomodoro
    const shortBreakBtn = document.getElementById('shortBreakBtn'); // Кнопка короткий
    const longBreakBtn = document.getElementById('longBreakBtn');   // Кнопка длинный
    const startBtn = document.getElementById('startBtn');           // Старт
    const pauseBtn = document.getElementById('pauseBtn');           // Пауза
    const resetBtn = document.getElementById('resetBtn');           // Сброс
    const pomodoroCountEl = document.getElementById('pomodoroCount'); // Счетчик сессий

    // ИНИЦИАЛИЗАЦИЯ при запуске
    window.loadState();     // Загружаем сохраненное состояние
    window.updateDisplay(); // Показываем 25:00 и прогресс-бар

    // ОБРАБОТЧИКИ СОБЫТИЙ кнопок
    pomodoroBtn.addEventListener('click', () => window.setTimeType('POMODORO'));
    shortBreakBtn.addEventListener('click', () => window.setTimeType('SHORTBREAK'));
    longBreakBtn.addEventListener('click', () => window.setTimeType('LONGBREAK'));
    startBtn.addEventListener('click', window.startTimer);  // Запуск
    pauseBtn.addEventListener('click', window.pauseTimer);  // Пауза
    resetBtn.addEventListener('click', window.resetTimer);  // Сброс

    // ФУНКЦИЯ ОБНОВЛЕНИЯ интерфейса
    window.updateUI = function() {
        // Подсвечиваем активную кнопку режима (добавляем класс .active)
        pomodoroBtn.classList.toggle('active', window.pomodoroType === 'POMODORO');
        shortBreakBtn.classList.toggle('active', window.pomodoroType === 'SHORTBREAK');
        longBreakBtn.classList.toggle('active', window.pomodoroType === 'LONGBREAK');
        
        // Обновляем текст счетчика
        pomodoroCountEl.textContent = `Pomodoro: ${window.pomodoroCount}`;
        
        // Сохраняем текущее состояние
        window.saveState();
    };

    // ПЕРВЫЙ ЗАПУСК интерфейса
    window.updateUI();
