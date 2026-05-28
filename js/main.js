    const pomodoroBtn = document.getElementById('pomodoroBtn');   
    const shortBreakBtn = document.getElementById('shortBreakBtn'); 
    const longBreakBtn = document.getElementById('longBreakBtn');  
    const startBtn = document.getElementById('startBtn');        
    const pauseBtn = document.getElementById('pauseBtn');          
    const resetBtn = document.getElementById('resetBtn');        
    const pomodoroCountEl = document.getElementById('pomodoroCount'); 


    window.loadState();    
    window.updateDisplay(); 

    pomodoroBtn.addEventListener('click', () => window.setTimeType('POMODORO'));
    shortBreakBtn.addEventListener('click', () => window.setTimeType('SHORTBREAK'));
    longBreakBtn.addEventListener('click', () => window.setTimeType('LONGBREAK'));
    startBtn.addEventListener('click', window.startTimer); 
    pauseBtn.addEventListener('click', window.pauseTimer); 
    resetBtn.addEventListener('click', window.resetTimer); 

    window.updateUI = function() {
        pomodoroBtn.classList.toggle('active', window.pomodoroType === 'POMODORO');
        shortBreakBtn.classList.toggle('active', window.pomodoroType === 'SHORTBREAK');
        longBreakBtn.classList.toggle('active', window.pomodoroType === 'LONGBREAK');
        
        pomodoroCountEl.textContent = `Pomodoro: ${window.pomodoroCount}`;
        
        window.saveState();
    };

    window.updateUI();
