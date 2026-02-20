const guessBtn = document.getElementById('guess-btn');
if (guessBtn) {
  const secret = Math.floor(Math.random() * 20) + 1;
  let tries = 5;

  guessBtn.addEventListener('click', () => {
    const input = document.getElementById('guess-input');
    const msg = document.getElementById('guess-msg');
    const value = Number(input.value);

    if (!value || value < 1 || value > 20) {
      msg.className = 'msg error';
      msg.textContent = 'Elegí un número entre 1 y 20.';
      return;
    }

    tries -= 1;
    if (value === secret) {
      msg.className = 'msg ok';
      msg.textContent = `¡Correcto! Era ${secret}.`;
      guessBtn.disabled = true;
    } else if (tries > 0) {
      msg.className = 'msg';
      msg.textContent = `${value < secret ? 'Muy bajo' : 'Muy alto'}. Te quedan ${tries} intentos.`;
    } else {
      msg.className = 'msg error';
      msg.textContent = `Perdiste. El número era ${secret}.`;
      guessBtn.disabled = true;
    }
  });
}

const triviaBtn = document.getElementById('trivia-btn');
if (triviaBtn) {
  triviaBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="trivia"]:checked');
    const msg = document.getElementById('trivia-msg');

    if (!answer) {
      msg.className = 'msg error';
      msg.textContent = 'Seleccioná una opción.';
      return;
    }

    const ok = answer.value === '24';
    msg.className = `msg ${ok ? 'ok' : 'error'}`;
    msg.textContent = ok
      ? '¡Bien! 24 fps es el estándar clásico del cine.'
      : 'No exactamente. La respuesta esperada es 24 fps.';
  });
}

const rpsButtons = document.querySelectorAll('[data-rps]');
if (rpsButtons.length > 0) {
  const options = ['piedra', 'papel', 'tijera'];
  rpsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const user = btn.dataset.rps;
      const cpu = options[Math.floor(Math.random() * options.length)];
      const msg = document.getElementById('rps-msg');

      let result = 'Empate';
      if (
        (user === 'piedra' && cpu === 'tijera') ||
        (user === 'papel' && cpu === 'piedra') ||
        (user === 'tijera' && cpu === 'papel')
      ) result = 'Ganaste';
      else if (user !== cpu) result = 'Perdiste';

      msg.className = 'msg';
      msg.textContent = `Vos: ${user} | CPU: ${cpu} → ${result}`;
    });
  });
}
