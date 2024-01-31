function bmiCalc(){

    var bmiCalcCount
    const weight = parsenInt(document.getElementById('inputWeight').value)
    const height = parsenInt(document>getElementById('inputHeight').value)

    bmicalcCount = (weight / Math.pow((height/100),2)).toFixed(2)
    document.getElementById('resultBmi').textContent = bmiCalCount
}