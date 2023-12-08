function decode() {
    // Get the input values
    const cipherText = document.getElementById('cipherText').value;
    const shift = parseInt(document.getElementById('shift').value);

    // Decode the cipher text
    const decodedText = caesarDecode(cipherText, shift);

    // Display the result
    document.getElementById('result').textContent = `Decoded Text: ${decodedText}`;
}

function caesarDecode(text, shift) {
    return text.replace(/[a-zA-Z]/g, function (char) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const decodedChar = String.fromCharCode((char.charCodeAt(0) - offset - shift + 26) % 26 + offset);
        return isUpperCase ? decodedChar.toUpperCase() : decodedChar;
    });
}