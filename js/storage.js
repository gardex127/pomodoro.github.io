let pomodoroCount = 0; 
let pomodoroType = 'POMODORO'; 

function saveState() {
    const state = { 
        pomodoroCount,   
        pomodoroType       
    };
    localStorage.setItem('pomodoroState', JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem('pomodoroState');
    if (saved) { 
        const state = JSON.parse(saved); 
        pomodoroCount = state.pomodoroCount || 0; 
        pomodoroType = state.pomodoroType || 'POMODORO'; 
    }
}

window.saveState = saveState;
window.loadState = loadState;
window.pomodoroCount = pomodoroCount; 
window.pomodoroType = pomodoroType;    
