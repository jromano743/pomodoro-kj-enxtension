// Función que se ejecuta cuando se hace clic en el botón del temporizador
function handleTimerClick() {
    // Obtener la pestaña activa en la ventana actual
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Enviar un mensaje a la pestaña activa para que inicie el temporizador
      chrome.tabs.sendMessage(tabs[0].id, { message: 'start-timer' });
    });
  
    // Cerrar la ventana emergente
    //window.close();
  }
  
  // Escuchar el evento de clic en el botón del temporizador
  document.getElementById('timer-button').addEventListener('click', handleTimerClick);
  