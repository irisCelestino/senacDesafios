function taboada() {
    let number = parseInt(document.getElementById('number').value)
    const result = document.getElementById('result')

    for(let i = 0; i <= 10; i++) {
        let resultOfMult = number * i

        result.innerHTML += `${number} x ${i} = ${resultOfMult} <br>`
    }
}