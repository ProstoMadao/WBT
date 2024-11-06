function verify() {
    console.log("number")
    let a = parseInt(elementA.value);
    console.log(number)
    
    const form = document.getElementById('UserEnter');
    const result = document.getElementById('result');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const number = parseFloat(document.getElementById('number').value);
        let sign;
        if (number > 0) {
            sign = 'Положительное';
        } else if (number < 0) {
            sign = 'Отрицательное';
        } else {
            sign = 'Ноль';
        }
    })
};
let result;
let check;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
