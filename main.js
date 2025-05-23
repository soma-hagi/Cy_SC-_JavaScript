console.log('テスト123');

// 変数 変わる数 variable

// 昔
// var test = 123;
// var test = 'テスト';

// let test = 123;
// test += 123;

let test = 123; // constant 定数 数字
test += 123;

// 動的型付け言語 変数中身を自動的に判定
// 静的型付け言語 Java Visual Basic
// integer int string 

// 英語、アンダーバー、$

console.log(test);

const array = [1, 2, 3];

console.log(array);

const array_2 = [
  ["赤","青","黄"], 
  ["緑","紫","黒"]
];

console.log(array_2);
console.log(array_2[0][2]);

// オブジェクト（モノ）
const member = {
  // キー：バリュー
  'name': '本田', 
  'height': 170, 
  'hobby': 'サッカー'
};

console.log(member);

console.log(member['name']);

console.log(member.hobby);

const member_2 = {
  '本田':{
    'height':170, 
    'hobby':'サッカー'
  }, 
  '香川':{
    'height':165, 
    'hobby':'サッカー'
  }
};

console.log(member_2['香川']['height']);

console.log(member_2.香川.height);

const member_3 = {
  '1kumi':{
    '本田':{
      'heigit':170, 
      'hobby':'サッカー'
    }, 
    '香川':{}
  }, 
  '2kumi':{

  }
};

console.log(member_3['1kumi']['本田']['hobby']);　

const test_1 = 4; 
const test_2 = 3; 

const test_3 = test_1 + test_2; 

console.log(test_3);

const height = '90';

if(height === '90'){
  console.log('身長は' + height + 'cmです');
} else {
  console.log('身長は90cmではありません');
}

const signal = 'blue';

if ( signal === 'red' ){
  console.log('止まれ'); 
} else if ( signal === 'yellow'){
  console.log('一旦停止');
} else {
  console.log('進む');
}

const speed = 60;

if (signal === 'blue'){
  if (speed >= 60){   // ネスト
    console.log('スピード違反');
  }
}

if(height >= '90'){
  console.log('身長は' + height + 'cmです');
} 

if(height <= '90'){
  console.log('身長は' + 90 + 'cm以下です');
} 