const color = prompt("Выберите цвет светофора")

switch(color) {
    case 'Красный':
        alert("СТОП!!!")
        break
    case 'Жёлтый':    
    case 'Желтый': 
        alert("Готовиться!")
        break
    case 'Зеленый':
    case 'Зелёный':
        alert("Идем!")
        break
    default:
        alert("Введите правильный цвет светофора")
}


for (let a = 20; a >= 0; a--) {
    console.log(a)
}

const array = [10, 20, 30, 50, 235, 30000, 5000439857]

array.forEach((array) => {
    perv = String(array)[0]
    if (["1", "2", "5"].includes(perv)) {
        console.log(array)
    }
})


const arr = []

for(let i = 0; i <= 10; i++) {
    arr.push(i)
} 

console.log(arr)

