var budget;
var companyName;
var num = 33721;

var mainList = {
  budget: 100,
  companyName: 'Рога и копыта',
  shopGoods: [],
  employers: {},
  open: true
};

// mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
// mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
// mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

budget = mainList.budget / 30;
// alert( 'Бюджет на один день = ' + budget );

function mul(number) {
  let num = number + '';
  let arr = num.split('');  
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = +arr[i] * result;
  }
  
  console.log(Math.pow(result,3));
  return Math.pow(result,3);
}



const p = document.querySelector('.qwe').innerHTML = mul(num);
