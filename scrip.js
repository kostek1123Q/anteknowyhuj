let audio = new Audio('sound.mp3');
audio.loop = true;

function startExperience() {
  // Wysyłanie podstawowych danych do webhooka
  fetch("https://discord.com/api/webhooks/YOUR_WEBHOOK_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "Nowy użytkownik odwiedził stronę",
      embeds: [{
        title: "Dane użytkownika",
        fields: [
          { name: "Przeglądarka", value: navigator.userAgent },
          { name: "Język", value: navigator.language }
        ],
        color: 3447003
      }]
    })
  });

  // Głośny dźwięk
  audio.play();

  // Otwieranie popupów
  for (let i = 0; i < 3; i++) {
    window.open("https://example.com", "_blank");
  }

  // Wchodzenie i wychodzenie z fullscreena
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    setTimeout(() => document.exitFullscreen(), 5000);
  }

  // Alert co kilka sekund
  setInterval(() => {
    alert("To tylko eksperyment edukacyjny!");
  }, 15000);
}
