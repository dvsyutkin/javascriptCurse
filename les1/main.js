let money = prompt('Ваш бюджет?');
let companyName = prompt('Название вашего магазина?');
let time = 23;

let mainList = {
  budget: money,
  companyName: companyName,
  shopGoods: [],
  employers: {},
  open: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Какой тип товаров будем продавать?');
  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
    console.log('Все верно');
    mainList.shopGoods[i] = a; 
  } else {
    let fault = true;
    while (fault) {
      a = prompt('Повторите ввод товара!!!');
      if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
        mainList.shopGoods[i] = a;
        fault = false;
      }
    }
  }
}

if (time < 0) {
  console.log('Такого не может быть');
} else if (time > 8 && time < 20){
      console.log('Время работать');
      } else if (time < 24) {
          console.log('Уже слишком поздно');
        } else {
            console.log('В сутках 24 часа');
          }


alert(mainList.budget / 30);
console.log(mainList);
