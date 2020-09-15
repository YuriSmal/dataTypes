 //1. cтворити масив у якому буде 3 юзера описані як обєкти з такими полями - age, name, hobby (теж повинно бути масивом ).

 let users = [
     {
         name: 'Aragorn',
         age: 210,
         hobby: ['Arwen :)', 'Gondor']
     },
     {
         name: 'Frodo',
         age: 53,
         hobby: ['ale', 'writing'] 
     },
     {
         name: 'Sauron',
         age: 500,
         hobby: ['The Ring', 'destruction']
     }
 ];
 
 //2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото.
 // Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 

let uah = +prompt('Введіть суму у UAH, яку необхідно конвертувати');
let usd = uah * 0.036;
let eur = uah * 0.030;
let brent = uah * 0.00031;
let gold = uah * 0.0000181003;

if (uah && isNaN(uah) == false) {
    let currency = prompt('У яку валюту необхідно конвертувати? (usd, eur, brent, gold)').toLowerCase();
        console.log(currency);
    if (currency == 'usd') {
        alert(`${uah}UAH = $${usd}`);
    }  else if (currency == 'eur') {
        alert(`${uah}UAH = ${eur}EUR`);
    } else if (currency == 'brent') {
        alert(`${uah}UAH = ${brent} brent`);
    } else if (currency == 'gold') {
        alert(`${uah}UAH = ${gold} gold`);
    } else {
        alert('Будь ласка, введіть коректну валюту');
    }
} else {
    alert('Ви не ввели жодного значення, або ввели нечислове значення, будь ласка, повторіть спробу');
};


//3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки 
//: до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 

let orderNumber = +prompt('Яка сума вашого замовлення?');
let discount;


if (orderNumber && isNaN(orderNumber) == false) {

    if (orderNumber > 0 && orderNumber < 500) {
        discount = orderNumber * 0.01;
        let orderTotal = orderNumber - discount;
        alert(`Ваша знижка склала ${discount} грн, до оплати - ${orderTotal} грн `);
    } else if (orderNumber >= 500 && orderNumber < 1000) {
        discount = orderNumber * 0.05;
        let orderTotal = orderNumber - discount;
        alert(`Ваша знижка склала ${discount} грн, до оплати - ${orderTotal} грн `);
    } else if (orderNumber >= 1000) {
        discount = orderNumber * 0.1;
        let orderTotal = orderNumber - discount;
        alert(`Ваша знижка склала ${discount} грн, до оплати - ${orderTotal} грн. Вітаємо, ви отримуєте подарунковий сертифікат на суму 200 грн!`);
    }

}  else {
    alert('Ви не ввели жодного значення, або ввели нечислове значення, будь ласка, повторіть спробу')
};

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал,
// якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал.

let questionsAnswers = {
    answerQuestion1: 'КИЇВ',
    answerQuestion2: 'ВАШИНГТОН',
    answerQuestion3: 'ОСЛО',
    answerQuestion4: 'ЛОНДОН',
    answerQuestion5: 'КАНБЕРРА'
};

let points = 0;

let question1 = prompt('Столиця України?').toUpperCase();

if (question1 == questionsAnswers.answerQuestion1) {
    
    points++;
    alert(`Правильно! Ви набрали ${points} балів`);
} else {
    alert('Неправильна відповідь')
};

let question2 = prompt('Столиця США?').toUpperCase();

if (question2 == questionsAnswers.answerQuestion2) {  
    points++;
    alert(`Правильно! Ви набрали ${points} балів`);
} else {
    alert('Неправильна відповідь')
};

let question3 = prompt('Столиця Норвегії?').toUpperCase();

if (question3 == questionsAnswers.answerQuestion3) {  
    points++;
    alert(`Правильно! Ви набрали ${points} балів`);
} else {
    alert('Неправильна відповідь')
};

let question4 = prompt('Столиця Великобританії?').toUpperCase();

if (question4 == questionsAnswers.answerQuestion4) {  
    points++; 
    alert(`Правильно! Ви набрали ${points} балів`);
} else {
    alert('Неправильна відповідь')
};

let question5 = prompt('Столиця Австралії?').toUpperCase();

if (question5 == questionsAnswers.answerQuestion5) {  
    points++; 
    alert(`Правильно! Ви набрали ${points} балів`);
} else {
    alert('Неправильна відповідь')
};

if (points = 5) {
    points = points + 1;
    alert(`Ви відповіли правильно на всі питання і отримуєте додатковий бал! Загальна кількість балів - ${points}.`)
};

//5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 

let number = +prompt('Введіть трьохзначне число');

if (number && isNaN(number) == false && number.toString().length == 3) {

    number = number.toString();
    let arr = number.split('');

    if (arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]) {
        alert(`В числі є однакові цифри -${arr}!`);
    } else {
        alert('Всі цифри в числі унікальні :)')
    }
} else {
    alert('Невірно введене число');
};


//6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

let symbol = prompt('Введіть символ в діапазоні від 1 до = (так, як вони розміщені на клавіатурі), щоб вивести символьний еквівалент');

switch (symbol) {
    case '1':
        alert('!');
        break;
    case '2':
        alert('@');
        break;
    case '3':
        alert('#');
        break;
    case '4':
        alert('$');
        break;
    case '5':
        alert('%');
        break;
    case '6':
        alert('^');
        break;
    case '7':
        alert('&');
        break;
    case '8':
        alert('*');
        break;
    case '9':
        alert('(');
        break;
    case '0':
        alert(')');
        break;
    case '-':
        alert('-');
        break;
    case '=':
        alert('+');
        break;
    default:
        alert('Камон, введіть значення з вказаного діапазону');
}