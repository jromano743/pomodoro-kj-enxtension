// Establecer el tiempo de Pomodoro en minutos
const pomodoroTime = 25;

// Función que se ejecuta cuando se completa el temporizador
function timerComplete() {
  // Mostrar la notificación
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Pomodoro Timer',
    message: '¡Tiempo completado!'
  });
}

// Función que inicia el temporizador
function startTimer() {
  // Establecer el tiempo de finalización del temporizador
  const endTime = Date.now() + (pomodoroTime * 60 * 1000);

  // Establecer una alarma para que se dispare cuando el temporizador llegue a cero
  chrome.alarms.create('timer', { when: endTime });

  // Escuchar la alarma para detectar cuando se completa el temporizador
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'timer') {
      // Llamar a la función timerComplete cuando se completa el temporizador
      timerComplete();
    }
  });
}

// Iniciar el temporizador cuando se hace clic en el botón de la extensión
chrome.action.onClicked.addListener(() => {
  startTimer();
});
