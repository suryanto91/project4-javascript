var cars = 'Hello Word'
document.writeln(cars)
console.log(cars)


//Ini console log

/*
Ini komen multiline
Ini baris kedua
*/


console.log("Hey Hello Word") //string
console.log(5) //number
console.log(true) // boolean
console.log(false) //boolean
console.log(3/2) //aritmetic

//variable
var fullname = "Suryanto"

//operation aritmatika
const result = 5 + 5
console.log(result)

const resultkurang = 5 - 3
console.log(resultkurang)

const resultbagi = 10 / 2
console.log(resultbagi)

const resultkali = 3 * 3
console.log(resultkali)

const resultsisa = 10 % 3
console.log(resultsisa)

//prompt
// const number1 = prompt('Number 1')
// const number2 = prompt('Number 2')
// const result2 = number1 * number2
// alert ("Hasil perkalian = " + result2)


// operator perbandingan
const result3 = 3 == '3' //tidak mengecek tipe data
console.log(result3)

const result4 = 2 === '2' //mengecek tipe data
console.log(result4)

const result5 = 5 > 2
console.log(result5)

const result6 = 5 < 3
console.log(result6)

//operator logika
const nilaiujian = 75
const nilaiabsen = 80

const lulusujian = nilaiujian >= 70
const lulusabsen = nilaiabsen >= 70

const lulus = lulusujian && lulusabsen //dan - dua syarat harus terpenuhi
const lulus2 = lulusujian || lulusabsen //atau - salah satu syarat terpenuhi
console.log('hasil akhir', lulus)
console.log('hasil akhir', lulus2)

//ternery operator
const lulus3 = nilaiujian >= 70 && nilaiabsen >= 70 ? 'LULUS' : 'TIDAK LULUS'
console.log(lulus3)

//string template
const nama = 'Suryanto'
const age = 32
console.log("Nama: " + nama + ", Usia: " + age)

//ARRAY
const carss = ['Ayla', 'Agya', 'Cayla', 'Avanza']
const motorcycle = [
    'Vario',
    'Beat',
    'Scoopy',
    'Nmax'
]
console.log('Data Mobil :' , carss)
console.log('Data Motor :' , motorcycle)
document.writeln('Data Mobil : ' , carss + '<br>')
document.writeln('Data Mobil : ' , motorcycle + '<br>')
console.table(carss)
console.table(motorcycle)

//get data index
console.log(carss[3])
console.log(motorcycle[2])

//find length
console.log(carss.length)

//array method
console.log(carss.toString()) //ubah array jadi string

console.log(carss.join (' - ')) //array jadi string tubah tanda penghubung

console.log(carss.pop()) //remote data terakhir
console.log(carss)

carss.push('Kijang') //nambah data terakhir
console.log(carss)

carss.shift()
console.log(carss) //remove data pertama

delete carss[0]
console.log(carss)
console.log(carss[0])

const groupvehicle = carss.concat(motorcycle) //gabung data
console.log(groupvehicle)
groupvehicle.shift()
console.log(groupvehicle)

//lopping
for(i = 0; i < groupvehicle.length; i++ ){
    console.log(groupvehicle[i] + '<br>')
    document.writeln('<br><br>' + groupvehicle[i] + '<br>')
}

//for in
const users = {
    fullname : "Sur",
    email : "sur@mail.com",
    age : "30"
}
let text = ""
for (let a in users) {
    text += users[a] +" "
}
console.log(text)
document.writeln(text)

//for of
let txt = ""
for (let b of groupvehicle) {
    txt += b + '<br>'
}
document.writeln('<br><br>' + txt)

//conditional
const score = 60

if(score <= 60){
    document.writeln('TIDAK LULUS')
}else{
    document.writeln('LULUS')
}

if(score < 60){
    document.writeln('TIDAK LULUS')
}else if(score >= 60 && score <= 75){
    document.writeln('CUKUP')
}else{
    document.writeln('SEMPURNA')
}

const hasilujian = score < 60 ? 'TIDAK LULUS' : score >= 60 && score <= 75 ? 'CUKUP' : 'SEMPURNA'
document.writeln(hasilujian)

//conditional switch case
const role = 'PROGRAMER'
switch (role){
    case 'PROGRAMER' :
        document.writeln('coding')
        break
    case 'DESIGNER' :
        document.writeln('Mendesign')
        break
    case 'PRODUCT MANAGER' :
        document.writeln('Lead')
        break
    default:
        document.writeln('Kerja')            
}

//function

//decalaration
function user(fullname, email){
    document.writeln('<br><br> Full Name: ${fullname}, Email: ${email}')
}
user('Sur', 'sur@gmail.com')


//expression1
const user2 = function(fullname, email){
    const resultuser = '<br><br> Full Name: ${fullname}, Email: ${email}'
    return resultuser
}
document.writeln(user2('Sur', 'sur@gmail.com'))


