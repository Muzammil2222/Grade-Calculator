function calc() {
    let eng = parseFloat(document.getElementById('eng').value);
    let urd = parseFloat(document.getElementById('urd').value);
    let cem = parseFloat(document.getElementById('cem').value);
    let phy = parseFloat(document.getElementById('phy').value);
    let mat = parseFloat(document.getElementById('mat').value);

    let sum = eng + urd + cem + phy + mat;
    document.getElementById('demo1').innerHTML = `Total marks = ${sum}`;

    let percentage = (sum / 500) * 100;

    if (eng < 33 || urd < 33 || cem < 33 || phy < 33 || mat < 33) {
        document.getElementById('demo2').innerHTML = `Fail ❌`;
    } else {
        document.getElementById('demo2').innerHTML = `Percentage = ${percentage}%`;

        if (percentage >= 90) {
            document.getElementById('demo2').innerHTML += `<br>Excellent &#x2661;`;
        } else if (percentage >= 80) {
            document.getElementById('demo2').innerHTML += `<br>Very Good &#11088;`;
        } else if (percentage >= 60) {
            document.getElementById('demo2').innerHTML += `<br>Good &#128077;`;
        } else if (percentage >= 40) {
            document.getElementById('demo2').innerHTML += `<br>Need Hard Work &#128078;`;
        } else {
            document.getElementById('demo2').innerHTML += `<br>Fail ❌`;
        }
    }
}
