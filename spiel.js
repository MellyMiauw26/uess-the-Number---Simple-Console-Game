const geheimzahl = Math.floor(Math.random() * 100) + 1;
let beendet = false;

function checkGuess() {
  if (beendet) return;

  const eingabe = document.getElementById('guessInput').value;
  const ausgabe = document.getElementById('message');

  if (eingabe.toLowerCase() === 'exit') {
    endGame();
    return;
  }

  const rateVersuch = Number(eingabe);

  if (isNaN(rateVersuch) || rateVersuch < 1 || rateVersuch > 100) {
    ausgabe.textContent = " Bitte gib eine gültige Zahl zwischen 1 und 100 ein.";
    return;
  }

  if (rateVersuch === geheimzahl) {
    ausgabe.textContent = ` Glückwunsch! Du hast die Zahl ${geheimzahl} richtig erraten!`;
    beendet = true;
  } else if (rateVersuch < geheimzahl) {
    ausgabe.textContent = " Zu niedrig! Versuch's nochmal.";
  } else {
    ausgabe.textContent = " Zu hoch! Versuch's nochmal.";
  }

  document.getElementById('guessInput').value = '';
}

function endGame() {
  const ausgabe = document.getElementById('message');
  ausgabe.textContent = `Spiel beendet. Die Zahl war: ${geheimzahl}`;
  beendet = true;
}
