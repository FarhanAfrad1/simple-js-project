
const result = document.querySelector('.result');
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target)
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const bmi = (weight / (height*height))*10000;
    result.innerHTML = `Your BMI is : ${bmi.toFixed(2)}`;
    document.getElementById('height').value = ""
    document.getElementById('weight').value = ""
})
