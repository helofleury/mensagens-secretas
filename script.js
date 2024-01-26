function encryptText() {
    var inputText = document.getElementById('inputText').value;
  
    if (!inputText) {
      alert('Por favor, insira o texto.');
      return;
    }
  
    var encryptedText = encryptCC(inputText);
    document.getElementById('resultText').innerText = 'Texto Criptografado: ' + encryptedText;
  
    // Mover o texto criptografado para a área de mensagens escondidas
    document.getElementById('hiddenText').innerText = encryptedText;
    document.getElementById('hiddenMessages').style.display = 'block';
  }
  
  function decryptText() {
    var inputText = document.getElementById('inputText').value;
  
    if (!inputText) {
      alert('Por favor, insira o texto criptografado.');
      return;
    }
  
    var decryptedText = decryptCC(inputText);
    document.getElementById('resultText').innerText = 'Texto Descriptografado: ' + decryptedText;
  }
  
  function copyToClipboard() {
    var hiddenText = document.getElementById('hiddenText');
    var textArea = document.createElement('textarea');
    textArea.value = hiddenText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Texto copiado para a área de transferência. Cole no campo "Texto" para descriptografar.');
  }
  
  function encryptCC(text) {
    return text.split('').map(function (char) {
      if (char.match(/[a-zA-Z]/)) {
        var code = char.charCodeAt(0);
        var offset = code >= 65 && code <= 90 ? 65 : 97;
        var shift = 3;
        return String.fromCharCode(((code - offset + shift) % 26) + offset);
      }
      return char;
    }).join('');
  }
  
  function decryptCC(text) {
    return text.split('').map(function (char) {
      if (char.match(/[a-zA-Z]/)) {
        var code = char.charCodeAt(0);
        var offset = code >= 65 && code <= 90 ? 65 : 97;
        var shift = 3;
        return String.fromCharCode(((code - offset - shift + 26) % 26) + offset);
      }
      return char;
    }).join('');
  }