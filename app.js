function calc() {
    let eng = document.getElementById('eng').value;
    let urd = document.getElementById('urd').value;
    let cem = document.getElementById('cem').value;
    let phy = document.getElementById('phy').value;
    let mat = document.getElementById('mat').value;

    
    let sum = parseFloat(eng) + parseFloat(urd) + parseFloat(cem) + parseFloat(phy) + parseFloat(mat);
    document.getElementById('demo1').innerHTML = `Total marks = ${sum}`;
    
    
    let percentage = (sum / 500) * 100;  
    document.getElementById('demo2').innerHTML = `Percentage = ${percentage}%`;

    
    if (percentage >= 90) {
        document.getElementById('demo2').innerHTML += `<br>Excellent`;
    } else if (percentage >= 80) {
        document.getElementById('demo2').innerHTML += `<br>Very Good`;
    } else if (percentage >= 60) {
        document.getElementById('demo2').innerHTML += `<br>Good`;
    } else if (percentage >= 40) {
        document.getElementById('demo2').innerHTML += `<br>Need Hard Work`;
    } else {
        document.getElementById('demo2').innerHTML += `<br>Fail`;
    }
}
