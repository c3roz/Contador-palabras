// 1. Seleccionar los elementos del HTML
const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const readingTime = document.getElementById('reading-time');
const clearBtn = document.getElementById('clear-btn');

// 2. Función para actualizar los contadores
function updateStats() {
  const text = textInput.value;

  // Contar caracteres totales
  charCount.textContent = text.length;

  // Contar palabras (separamos por espacios y filtramos elementos vacíos)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const totalWords = text.trim() === '' ? 0 : words.length;
  wordCount.textContent = totalWords;

  // Calcular tiempo estimado de lectura (promedio de 200 palabras por minuto)
  const minutes = Math.ceil(totalWords / 200);
  readingTime.textContent = totalWords === 0 ? '0 min' : `${minutes} min`;
}

// 3. Escuchar el evento de escritura en el textarea
textInput.addEventListener('input', updateStats);

// 4. Funcionalidad para el botón de limpiar
clearBtn.addEventListener('click', () => {
  textInput.value = '';
  updateStats();
});