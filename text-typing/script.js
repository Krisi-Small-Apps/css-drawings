const textElement = document.querySelector("[data-text]");

function start() {
  const content = textElement.textContent;
  textElement.textContent = null;
  if (!content) return alert("No content!");

  let currentIndex = 0;

  function appendNextChar() {
      if (currentIndex < content.length) {
          textElement.textContent += content[currentIndex];
          currentIndex++;
          setTimeout(appendNextChar, 20);
      }
  }

  appendNextChar();
}

start();
