const form = document.getElementById('form');
const result = document.getElementById('result');
const select = document.getElementById('select');
form.style.display = 'none';
select.onclick = () => {
  form.style.display = 'block';
};

select.onchange = (e) => {
  console.log(e);
  form.onsubmit = (b) => {
    b.preventDefault();
    if (e.target.value === 'resverseString') {
      reverseStr(b.target[0].value);
    } else if (e.target.value === 'palindrome') {
      palindrome(b.target[0].value);
    } else if (e.target.value === 'reverseWord') {
      reverseWord(b.target[0].value);
    } else if (e.target.value === 'commonLetter') {
      commonLetter(b.target[0].value);
    } else if (e.target.value === 'findVowel') {
      findVowel(b.target[0].value);
    }
  };
};

const reverseWord = (str) => {
  let arr = str.split('').reverse().join('');
  result.innerText = str.split('').reverse().join('');
  return arr;
};

const reverseStr = (str) => {
  let arr = str.split(' ').reverse().join(' ');
  result.innerText = str.split(' ').reverse().join(' ');
  return arr;
};

const palindrome = (str) => {
  let regex = /[\W_0-9]/g;
  let lowReg = str.toLowerCase().replace(regex, '');
  let reverseSt = lowReg.split('').reverse().join('');

  lowReg === reverseSt
    ? (result.innerText = `${str} =>ist eine Palindrome`)
    : (result.innerText = `${str} =>ist leider keine Palindrome`);
};
const commonLetter = (str) => {
  let count = 0;
  let commonLet = '';
  str
    .toLowerCase()
    .split('')
    .forEach((e) => {
      if (str.toLowerCase().split(e).length > count) {
        count = str.toLowerCase().split(e).length;
        commonLet = e;
      }
    });
  result.innerText = `Der häufigste Buchstabe ist '${commonLet}'`;
};

const findVowel = (str) => {
  let consonantRegex = /[bcdfghjklmnpqrstvwxyzs]/gi;
  result.innerText = `Der eingegebene Satz enthält diese Vokale ${str
    .split(' ')
    .join('')
    .replace(consonantRegex, '')
    .split('')
    .join(',')}`;
};

let re = /[\W_0-9]/g; //alfanumeric olmayanlar
let rem = /[A-Za-z_]/g; // sadece letter olanlar
let num = /[0-9]/g; // sadece number olanlar

const isLeapYear = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  } else {
    if (year % 4 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
};

// isLeapYear(64);
// isLeapYear(1900);
// isLeapYear(2000);
// isLeapYear(1912);

// // second way:
// function leapYear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// const roman = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// let str = '';
// let nummer = 19;

// for (let i of Object.keys(roman)) {
//   let q = Math.floor(nummer / roman[i]);
//   nummer -= q * roman[i];
//   str += i.repeat(q);
// }
// console.log(str);
// const date = new Date('2020-05-12T23:50:21.817Z');
// const date1 = new Date();

// console.log(date);
// console.log(date1);
// ************************ ---1-----******************
const romanNummer = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
let str = '';
let nummer = 430;
let count;
for (let i in romanNummer) {
  count = Math.floor(nummer / romanNummer[i]);

  nummer %= romanNummer[i];
  str += i.repeat(count);
}
console.log(str);

//********** --2--********************** */
/* Girilen kelimenin ortasindaki harfi bulan bir fonksiyon yazin.Ama kelimenin
ama kelimenin uzunlugu tek ise ortadaki harfi cift ise oratdaki iki harfi döndürün

Beispiel => test    === es
            testing === t
            middle  === dd
            A       === a

*/
function getMiddle(s) {
  let yeni = s.split('');

  if (yeni.length % 2 === 0) {
    return (
      yeni[[Math.floor(yeni.length / 2)] - 1] +
      yeni[[Math.floor(yeni.length / 2)]]
    );
  } else {
    return yeni[[Math.floor(yeni.length / 2)]];
  }
}

function getMiddle(s) {
  let middle = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.slice(middle - 1, middle + 1)
    : s.slice(middle, middle + 1);
}

function getMiddle(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}
//**************** ---3-----*********************** */
/* İzogram tekrar eden harfleri olmayan bir kelimedir.
Bir kelimenin izogram olup olmadığını bulan bir fonksiyon yazin

Beispiel => "terminal" --> true
            "helfen" --> false
            "Ausdrucken" --> false (ignore letter case)
*/

function isIsogram(str) {
  const arr = str.toLowerCase().split('');
  const filt = arr.filter((e, i) => arr.indexOf(e) === i);

  return filt.length === arr.length ? true : false;
}

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
//***************--4--*************** */
/* girilen sayilari kendi degerlerine göre degilde basamak toplamlarinin degerine göre sort eden bir program yazi

Beispeil => '56 65 74 100 99 68 86 180 90' ---> '100', '180', '90', '56', '65', '74', '68', '86', '99'

*/
const sayi = '56 65 74 100 99 68 86 180 90'.split(' ');

const arre = sayi.map((e) => {
  // console.log(`${e} => ${e.split('')}`);
  return {
    key: e,
    val: e.split('').reduce((a, b) => parseFloat(a) + parseFloat(b)),
  };
});
console.log(arre.sort((a, b) => a.val - b.val).map((e) => e.key));

function orderWeight(strng) {
  return strng
    .split(' ')
    .map((value) => {
      return {
        val: value,
        key: value.split('').reduce((acc, cur) => {
          return parseInt(acc) + parseInt(cur);
        }, 0),
      };
    })
    .sort((a, b) => {
      return a.key === b.key ? a.val.localeCompare(b.val) : a.key - b.key;
    })
    .map((el) => {
      return el.val;
    })
    .join(' ');
}

/* ------ 5----------
Her kelimenin ilk harfini sonuna taşıyın, ardından kelimenin sonuna "ay" ekleyin. Noktalama işaretlerine dokunmadan bırakın. 

beispiel => Pig latin is cool --->igPay atinlay siay oolcay

            Hello world-->>elloHay orldway !



*/

// function pigIt(str) {
//   const wort = str.split(' ');
//   let newWort = '';
//   let re = /[\W_0-9]/g;
//   for (i of wort) {
//     let asr = i.split('');
//     let sar = i.split('');
//     if (!re.test(i)) {
//       newWort += asr.slice(asr.shift()).join('') + sar[0] + 'ay ';
//     } else {
//       newWort += i;
//     }
//   }
//   return newWort.trim();
// }

console.log(pigIt('Pig latin is cool'));

function pigIt(str) {
  return str
    .split(' ')
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(' ');
}
/**substr() yöntemi, bir dizenin bir bölümünü çıkarır.

substr() yöntemi, belirtilen bir konumda başlar ve belirtilen sayıda karakter döndürür.

substr() yöntemi, orijinal dizeyi değiştirmez.

Dizenin sonundan karakterleri çıkarmak için negatif bir başlangıç konumu kullanın. */

const vorName = 'Ibrahim Coban'.split(' ');
let newName = '';
for (i of vorName) {
  newName += i.split('')[0] + '*'.repeat(i.split('').length - 1) + ' ';
}

console.log(newName);
