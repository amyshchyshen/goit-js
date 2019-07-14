// function name() {
//     console.log('Hello')
// };
//сумма элементов

//#1
// let summ = [2, 3, 4, 5, 6];

// function name(...rest) {
//     let newArr = 0;
//     for (let item of summ) {
//         newArr += item;
//     }
//     return newArr
// }
// console.log(name(2, 3, 4, 45));


//обЪекты
// let model = 'toyota',
//     color = 'red',
//     wheels = 4,
//     topSpeed = 220;

// const car = {
//     model: 'toyota',
//     color: 'red',
//     wheels: 4,
//     topSpeed: 220
// };
// car.newKey = 'key';
// delete car.wheels;
// console.log(car);

// const hasOv = car.hasOwnPropety('model') //перебрать объект
// console.log // don't finish
 
// #1 **********************************
const gun = 'Beretta';

const man = {
    name: 'Bob',
    age: 22,
    hobby: 'killer',
    isActive: true,
    car: ['bmw', 'audi'],
    children: [1,2,3,4],
    girlfriens: {
        USA: 'Ann',
        China: 'Cho'
    },
    showName: function () {
        return this.name
    },
    plusAge(age) {
        console.log(this.age + age)
    },
    gun,
    deleteChildren() {
        delete this.children
    },
    showThis() {
        console.log(this)
    },
    };
//деструкторизация
    // const {name, age, car, plane = true} = man;
    // console.log(name, age, car, plane);
     
    // const result = man.showName();
    // console.log(result);
    // man.plusAge(20);

//     const summ = people.children;
//     let i = 0;
//     let result;
//     for (let key of summ) {
//         result = i += key;
//     };
// console.log(result);
// console.log(people.car[1]);

man.deleteChildren();
console.log(people);
man.showThis();

//******************************** * массив

// const bob = [{
//     name: 'Bob',
//     age: 22,
//     hobby: 'killer',
//     isActive: true,
//     car: ['bmw', 'audi'],
//     children: [1,2,3,4],
//     gun: 'Beretta',
//     girlfriens: {
//         USA: 'Ann',
//         China: 'Cho'
//     },
//     showName: function () {
//         return this.name
//     },
//     plusAge(age) {
//         console.log(this.age + age)
//     },
//     deleteChildren() {
//         delete this.children
//     },
//     showThis() {
//         console.log(this)
//     },
//     }];

// ********************************************

// const bobby = {
//     name: 'Bob',
//     age: 22,
//     hobby: 'killer',
//     isActive: true,
//     car: ['bmw', 'audi'],
//     children: [1,2,3,4],
//     gun: 'Beretta',
//     girlfriens: {
//         USA: 'Ann',
//         China: 'Cho'
//     },
//     showName: function () {
//         return this.name
//     },
//     plusAge(age) {
//         console.log(this.age + age)
//     },
//     deleteChildren() {
//         delete this.children
//     },
//     showThis() {
//         console.log(this)
//     },
//     }

    // for (let key in bobby) {
    //     console.log(bobby[key]);
    // };

    // методы

    // const keys = Object.keys(bobby);
    // const values = Object.values(bobby); 
    
    // const entries = Object.entries(bobby);
    // for (let key of entries) {
    //         const left = key[0]
    //         const right = key[1]
    //         console.log('left', left, 'right', right)
    //     };

//******************************************8 */

    // const shop = {
    //     name: 'Nick',
    //     time: new Date().toLocaleTimeString(),
    //     products: {
    //         apple: 3,
    //         bananas: 2,
    //         mango: 1,
    //         kiwi: 4,
    //     },
    //     countProducts() {
    //         const summ = Object.values(this.products)
    //         return summ;
    //     },

    //     plusProducts() {
    //         let total = 0;
    //         let result = '';
    //         const numbers = this.countProducts();
    //         for(let key of numbers) {
    //             result = total += key;
    //         }
    //         return result
    //     }
    // }

    // const res = shop.plusProducts()
    // console.log(res);
    
    // console.log(shop.name, shop.time, res)

    // ****************************************

    // const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
    // const copy = [...houses.slice(0,4), ...houses.slice(5)];

    // console.log(copy); //исключили 

    // const a = {x: 'white', y: 2};
    // const b = {x: 'dark', z: 3};
    // // const newObj = Object.assign({}, b,a) - старый подход

    // const newObj = {...a, ...b}; //новый подход
    // console.log(newObj);

//************************************** * пуребор

// const shop = [
//     {
//       name : 'Bond',
//       time : new Date().toLocaleTimeString(),
//       products : {
//         apple : 3,
//         bananas : 10,
//         juce : 2,
//         mango : 1,
//       },
//       countProducts() {
//         const summ = Object.values(this.products)
//         return summ;
//       },
//       plusProducts() {
//         let total = 0;
//         let result;
//         const numbers = this.countProducts()
//         for(let key of numbers) {
//           result = total += key
//         }
//         return result
//       }
//     },
//     {
//       name : 'Halk',
//       time : new Date().toLocaleTimeString(),
//       products : {
//         apple : 123,
//         bananas : 110,
//         juce : 222,
//         mango : 21,
//       },
//       countProducts() {
//         const summ = Object.values(this.products)
//         return summ;
//       },
//       plusProducts() {
//         let total = 0;
//         let result;
//         const numbers = this.countProducts()
//         for(let key of numbers) {
//           result = total += key
//         }
//         return result
//       }
//     },
//     {
//       name : 'Flash',
//       time : new Date().toLocaleTimeString(),
//       products : {
//         apple : 1,
//         bananas : 1,
//         juce : 2,
//         mango : 1,
//       },
//       countProducts() {
//         const summ = Object.values(this.products)
//         return summ;
//       },
//       plusProducts() {
//         let total = 0;
//         let result;
//         const numbers = this.countProducts()
//         for(let key of numbers) {
//           result = total += key
//         }
//         return result
//       }
//     }
//   ]
​
// const res = shop.plusProducts()
​
​
// console.log(shop.name, shop.time, res)
​
​
​
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
​
​
// const copy = [...houses.slice(0,4), ...houses.slice(5)]
​
​
// console.log(copy)
​
​
// const a = { x: 'white', y: 2 };
// const b = { x: 'dark', z: 3 };
​
// // const newObj = Object.assign({}, b,a)
​
// const newObj = {...a, ...b}
​
// console.log(newObj)

​//магазин
​
// console.log(shop)
// ​
// const findUsers = 'Bond'
// ​
// const arr = []
// for(let key of shop) {
//   if(key.name.includes(findUsers)) {
//     arr.push(key)
//   }
// }
// ​
// const user = arr[0]
// ​
// ​
// const result = `покупатель ${user.name} Купил ${user.plusProducts()} товаров в ${user.time}`
// ​
// ​
// document.body.append(result)
// wrap long lines