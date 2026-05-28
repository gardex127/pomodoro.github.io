const POMODORO_TIME = 1500;  
const SHORT_BREAK = 300;     
const LONG_BREAK = 900;      

let timerValue = 1500;       
let timerInterval;           

const timerDisplay = document.getElementById('timerDisplay');   
const progressbar = document.querySelector('.progressbar');        

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);  
    const secs = seconds % 60;              
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timerValue);
    
    const angle = (timerValue / POMODORO_TIME) * 360;
    progressbar.style.background = `conic-gradient(#f3486d ${angle}deg, crimson 0deg)`;
}

function setTimeType(type) {
    window.pomodoroType = type;
    
    switch(type) {
        case 'POMODORO':  timerValue = POMODORO_TIME; break;  
        case 'SHORTBREAK': timerValue = SHORT_BREAK;  break; 
        case 'LONGBREAK':  timerValue = LONG_BREAK;   break;  
    }
    updateDisplay();
}
function startTimer() {
    if (timerInterval) return; 
    
    timerInterval = setInterval(() => {
        timerValue--;         
        updateDisplay();       
        
        if (timerValue <= 0) {  
            clearInterval(timerInterval); 
            timerInterval = null;
            
            window.pomodoroCount++;       
            alert('Время вышло!');      
            
            window.updateUI();           
        }
    }, 1000); 
}

function pauseTimer() {
    clearInterval(timerInterval);  
    timerInterval = null;          
}

function resetTimer() {
    pauseTimer();                  
    window.pomodoroCount = 0;     
    setTimeType('POMODORO');      
    window.updateUI();             
}

window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
window.setTimeType = setTimeType;
window.updateDisplay = updateDisplay;
