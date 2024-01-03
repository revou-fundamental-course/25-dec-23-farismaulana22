function calculate() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Masukkan nilai yang valid untuk alas dan tinggi!');
        return;
    }

    var area = 0.5 * base * height;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Hasil:</h3>
                           <p>Luas Segitiga: ${area.toFixed(2)}</p>`;
}

function resetForm() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
}

function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Masukkan nilai yang valid untuk sisi 1, sisi 2, dan sisi 3!');
        return;
    }

    var perimeter = sideA + sideB + sideC;

    var resultDiv = document.getElementById('resultPerimeter');
    resultDiv.innerHTML = `<h3>Hasil:</h3>
                           <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>`;
}
function resetForm() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('resultPerimeter').textContent = '';
}
