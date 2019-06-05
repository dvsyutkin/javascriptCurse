let money,
    name,
    time,
    price;


function start() {
  money = prompt('Ваш бюджет?');
  while (isNaN(money) || money == '' || money == null) {
    money = prompt('Ваш бюджет?');
  }
  name = prompt('Название вашего магазина?').toUpperCase();
  time = 21;
}
start();

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false
};


function chooseGoods() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Какой тип товаров будем продавать?');
    if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a; 
    } else {
      i = i - 1;
    }
  }
}
// chooseGoods();

//рабочее время
function workTime(time) {
  if (time < 0) {
    console.log('Такого не может быть');
  } else if (time > 8 && time < 20){
        console.log('Время работать');
        } else if (time < 24) {
            console.log('Уже слишком поздно');
          } else {
              console.log('В сутках 24 часа');
            }
            console.log(time);
            
}
// workTime(time);

// бюджет на день
function budgetDay() {
  mainList.budget = money / 30;
}
// budgetDay();

// дисконтная система
function discountCalc() {
  if (mainList.discount === true) {
    price = price * 0.8;
    console.log(price);
  }
}
// discountCalc();

// найм сотрудника
function employers() {
  for (let i = 0; i < 4; i++) {
    let name = prompt('Имя сотрудника');
    mainList.employers[i] = name;
  }
}


// alert(mainList.budget / 30);
console.log(mainList);
