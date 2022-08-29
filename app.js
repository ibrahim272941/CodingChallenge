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
  let consonantRegex = /[bcdfghjklmnpqrstvwxys]/gi;
  result.innerText = `Der eingegebene Satz enthält diese Konsonanten ${str
    .split(' ')
    .join('')
    .replace(consonantRegex, '')
    .split('')
    .join(',')}`;
};
// const str = 'A man, a plan, a canal. Panama';
let re = /[\W_0-9]/g; //alfanumeric olmayanlar
// let re = /[A-Za-z_]/g;// sadece letter olanlar
let num = /[0-9]/g; // sadece number olanlar

// let vowel = /[aeiou]/g;
let consonantRegex = /[bcdfghjklmnpqrstvwxys]/gi;
let vowel = ['a', 'e', 'u', 'i', 'o', 'ü', 'ä'];
let som = 'merhaba dunya';

console.log(
  som.split(' ').join('').replace(consonantRegex, '').split('').join(',')
);

// const fin = som.split('').filter((e, i) => e === vowel[i]);
// let ar = '';
// vowel.forEach((e) => {
//   if (som.includes(e)) {
//     ar += e;
//   }
// });

// console.log(fin);
