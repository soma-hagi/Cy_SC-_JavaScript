// console.log('テスト123');

// // 変数 変わる数 variable

// // 昔
// // var test = 123;
// // var test = 'テスト';

// // let test = 123;
// // test += 123;

// let test = 123; // constant 定数 数字
// test += 123;

// // 動的型付け言語 変数中身を自動的に判定
// // 静的型付け言語 Java Visual Basic
// // integer int string 

// // 英語、アンダーバー、$

// console.log(test);

// const array = [1, 2, 3];

// console.log(array);

// const array_2 = [
//   ["赤","青","黄"], 
//   ["緑","紫","黒"]
// ];

// console.log(array_2);
// console.log(array_2[0][2]);

// // オブジェクト（モノ）
// const member = {
//   // キー：バリュー
//   'name': '本田', 
//   'height': 170, 
//   'hobby': 'サッカー'
// };

// console.log(member);

// console.log(member['name']);

// console.log(member.hobby);

// const member_2 = {
//   '本田':{
//     'height':170, 
//     'hobby':'サッカー'
//   }, 
//   '香川':{
//     'height':165, 
//     'hobby':'サッカー'
//   }
// };

// console.log(member_2['香川']['height']);

// console.log(member_2.香川.height);

// const member_3 = {
//   '1kumi':{
//     '本田':{
//       'heigit':170, 
//       'hobby':'サッカー'
//     }, 
//     '香川':{}
//   }, 
//   '2kumi':{

//   }
// };

// console.log(member_3['1kumi']['本田']['hobby']);　

// const test_1 = 4; 
// const test_2 = 3; 

// const test_3 = test_1 + test_2; 

// console.log(test_3);

// const height = '90';

// if(height === '90'){
//   console.log('身長は' + height + 'cmです');
// } else {
//   console.log('身長は90cmではありません');
// }

// const signal = 'blue';

// if ( signal === 'red' ){
//   console.log('止まれ'); 
// } else if ( signal === 'yellow'){
//   console.log('一旦停止');
// } else {
//   console.log('進む');
// }

// const speed = 60;

// if (signal === 'blue'){
//   if (speed >= 60){   // ネスト
//     console.log('スピード違反');
//   }
// }

// if(height >= '90'){
//   console.log('身長は' + height + 'cmです');
// } 

// if(height <= '90'){
//   console.log('身長は' + 90 + 'cm以下です');
// } 

// const color = '青'
// const season = '夏'
// if ( color === '青' && season === '夏' ){
//   console.log ( color + 'と' + season );
// }


// const score = 80; 

// const comment = score > 80 ? 'good' : 'not good';  

// console.log(comment)

// const data = 1; 

// switch(data){
//   case 1:
//     console.log('1です'); 
//     break;
//   case 2:
//     console.log('1です'); 
//     break;
//   case 3:
//     console.log('1です'); 
//     break;
//   default:
//     console.log('1-3ではありません');
//     break;
// }


// function test(){
//   console.log('テスト');
// }

// test();


// const comment = 'コメント';

// function getComment(string){
//   console.log(string);
// }

// getComment(comment);

// function sumPrice(int1, int2){
//   let int3 = int1 + int2;
//   return int3;
// }

// const total = sumPrice(3, 5);

// console.log(total);

// const test = 'テスト';
// const test_2 = 'です';

// console.log(test.concat(test_2));

// const myMap = new Map();

// myMap.set('id', 3);
// myMap.set('name', '本田');

// console.log(myMap);
// // keyとvalueがそれぞれ出力される。  

// console.log(myMap.get('name'));
// // 出力：本田

// const valueList = myMap.values();

// for ( value of valueList ){
//   console.log(value);
// }

// // 出力：３、本田

// const fruits = new Array();
const fruits = [ // シンタックスシュガー（簡単に書く書き方）  
  'りんご', 'バナナ'
];

console.log(fruits);

fruits.push('みかん');

console.log(fruits);

fruits.forEach(function(input){
  console.log(input);
});

const test = { // 簡単な書き方
  test1:10, 
  test2:20, 
  test3:30
};

/* console.log(test.values);
Objectの場合は特殊でこれでは出力されない
*/

console.log(Object.values(test));

for ( value of Object.values(test) ){
  console.log(value);
};

const person = {
  name: '本田', 
  age: 30, 

  getName(){
    console.log(this.name);
    return this; // このオブジェクト自体(person)を返す
  }, 
  getAge(){
    console.log(this.age);
    return this; // このオブジェクト自体を返す
  }
};

person.getName().getAge();