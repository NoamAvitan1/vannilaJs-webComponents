// function clearDigits(s) {
//   let str = "";
//   let i = 0;
//   let length = s.length;
//   for (let i = 1; i < length; i++) {
//     if (s[i] >= "0" && s[i] <= "9") {
//       str = s.substring(0, i - 1) + s.substring(i + 1, s.length);
//       length = str.length;
//     }
//   }
//   return str;
// }

// console.log(clearDigits("cb34"));

function numberOfSpecialChars(word) {
  let counter = 0;
  let str = "";
  for (let i = 0; i < word.length; i++) {
    let charAsciiValue = word.charCodeAt(i);
    if (charAsciiValue <= 90) charAsciiValue += 32;
    else charAsciiValue -= 32;
    let char = String.fromCharCode(charAsciiValue);
    if (
      word.indexOf(char) >= 0 &&
      str.indexOf(char) < 0 &&
      str.indexOf(word[i]) < 0
    ) {
      str += char;
      counter++;
    }
  }
  return counter;
}

// console.log(numberOfSpecialChars('aaAbcBC'))

// function bubbleSort(arr){
//   for(let i = 0; i< arr.length; i++){
//     let boolean = false;
//     for(let j = 0; j < arr.length -1 - i; j++){
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//         boolean = true;
//       }
//     }
//     if(!boolean) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([45, 23, 3, 5346, 5, 356, 243, 35]));

// function findWordsContaining(words, x){
//   let arr = [];
//   for(let i = 0; i< words.length; i++){
//     if(words[i].indexOf(x) >= 0) arr.push(i);
//   }
//   return arr;
// };

// console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"))

// function capitalizeTitle(title){
//   let str = title.toLowerCase();
//   let arr = str.split(' ');
//   for(let i = 0 ;i < arr.length ;i++){
//       if(arr[i].length > 2){
//           arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//       }
//   }
//   title = arr.join(' ');
//   return title;
// };

// console.log(capitalizeTitle("capiTalIze tHe titLe"))

// function reversePrefix(word, ch){
//   let index = word.indexOf(ch);
//   let str = word;
//   if(index == -1) return word;
//   word = word.substring(0,index+1);
//   let arr = word.split('');
//   arr = arr.reverse();
//   word = arr.join('');
//   if(index+1 > word.length) return word;
//   word = word + str.substring(index+1,str.length+1);
//   return word;
// };

// console.log(reversePrefix("abcdefd", ch = "d"))

function OuterFunction() {
  this.value = 1;

  // Regular function
  this.regularFunction = function () {
    console.log(this.value); // 'this' refers to the context where regularFunction is called
  };

  // Arrow function
  this.arrowFunction = () => {
    console.log(this.value); // 'this' refers to the context where arrowFunction is defined (OuterFunction)
  };
}

const instance = new OuterFunction();
// instance.regularFunction(); // undefined, because 'this' is now the global object (or undefined in strict mode)
// instance.arrowFunction();   // 1, because 'this' is lexically inherited from OuterFunction

const obj = {
  value: 2,
  regularFunction: function () {
    console.log(this.value); // 'this' refers to obj
  },
};

const anotherFunction = obj.regularFunction;

// obj.regularFunction(); // 2, because 'this' refers to obj
// anotherFunction();     // undefined, because 'this' is now the global object (or undefined in strict mode)

var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (const word of wordDict) {
      if (
        i - word.length >= 0 &&
        dp[i - word.length] &&
        s.substring(i - word.length, i) === word
      ) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

wordBreak("leetcode", (["leet", "code"]));

