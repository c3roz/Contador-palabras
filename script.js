const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const readingTime = document.getElementById('reading-time');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');
const themeToggle = document.getElementById('theme-toggle');

// Actualizar contadores
textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    
    // Contar caracteres
    charCount.textContent = textInput.value.length;
    
    // Contar palabras
    const words = text === '' ? 0 : text.split(/\s+/).length;
    wordCount.textContent = words;
    
    // Tiempo estimado de lectura (200 palabras x minuto)
    const minutes = Math.ceil(words / 200);
    readingTime.textContent = text === '' ? '0 min' : `${minutes} min`;
});

// Limpiar texto
clearBtn.addEventListener('click', () => {
    textInput.value = '';
    textInput.dispatchEvent(new Event('input'));
});

// Copiar texto al portapapeles
copyBtn.addEventListener('click', () => {
    if (textInput.value === '') return;
    
    navigator.clipboard.writeText(textInput.value).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '¡Copiado!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 1500);
    });
});

// Cambiar Modo Oscuro / Claro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
});
