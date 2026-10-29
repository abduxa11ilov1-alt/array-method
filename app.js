// 40. String uzunligi (rekursiya bilan, length'siz)
function uzunlik(str) {
  if (str === "") return 0;
  return 1 + uzunlik(str.slice(1));
}

// 41. Bo'linishini tekshirish
function bolinsin(x, y) {
  return x % y === 0;
}

// 42. Stringni raqamga o'girish
function raqam(str) {
  return Number(str);
}

// 43. To'rtburchak yuzi
function tortYuzi(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}

// 44. Ism va familiya
function ismFam(ism, familiya) {
  return `${familiya}, ${ism}`;
}

// 45. Bug funksiyasi
function bug(bugState) {
  return bugState ? "sad days" : "it's a good day";
}

// 46. Massiv boshidan element tushirish
function tushirMassiv(arr, tushirishSoni) {
  return arr.slice(tushirishSoni);
}

// 47. Ovozlar farqi
function ovozlar(ovozObj) {
  return ovozObj.upvotes - ovozObj.downvotes;
}

// 48. Sonning negativini qaytarish
function negativ(son) {
  return -Math.abs(son);
}

// 49. Massivni teskari qilish (reverse'siz)
function almash(arr) {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

// 50. Kinoga kirish
function kinogaKirish(yosh, otaOna) {
  return yosh >= 15 || otaOna;
}

// 51. Har bir elementga 1 qo'shish
function oshir1ga(arr) {
  return arr.map(x => x + 1);
}

// 52. Template string
var ism = "Donyor";
var familiya = "Olimov";
var natija = `${ism} ${familiya}`;

// 53. Ternary operator
var holatiYaxshimi = true;
var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";

// 54. So'z uzunligi juftmi
function sozUzunligi(str) {
  return str.length % 2 === 0;
}

// 55. Darajaga ko'tarish
function daraja(x, y) {
  return Math.pow(x, y);
}

// 56. So'nggi element
function songiElement(arr) {
  return arr[arr.length - 1];
}

// 57. Kabisa yili
function kabisa(yil) {
  return (yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0);
}

// 58. Birinchi harfisiz so'z
function soz(word) {
  return word.slice(1);
}

// 59. Teskari boolean
function teskariBool(bool) {
  return !bool;
}

// 60. Juft yoki toq
function juftMiToqmi(son) {
  return son % 2 === 0 ? "juft" : "toq";
}

// 61. Qutilar soni (n-chi uchburchakli son: n * (n + 1) / 2)
function qutilar(step) {
  return (step * (step + 1)) / 2;
}

// 62. Array to string
function arrayToString(arr) {
  return arr.join('');
}

// 63. Massivlarni birlashtirish
function birlash(arr1, arr2) {
  return arr1.concat(arr2);
}

// 64. Element indeksini topish
function topIndex(arr, str) {
  return arr.indexOf(str);
}

// 65. Indeksdagi element (kichik tomonga yaxlitlash: Math.floor)
function arrElement(arr, index) {
  return arr[Math.floor(index)];
}

// 66. Massiv yig'indisi
function namuna66(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 67. So'z bilan kiritilgan sonni raqamga o'girish
function sozSon(str) {
  const map = {
    "nol": 0, "bir": 1, "ikki": 2, "uch": 3, "to'rt": 4,
    "besh": 5, "olti": 6, "yetti": 7, "sakkiz": 8, "to'qqiz": 9
  };
  return map[str];
}

// 68. Son massivda bormi
function bormi(arr, son) {
  return arr.includes(son);
}

// 69. Massiv elementlarini stringga o'girish
function sonString(arr) {
  return arr.map(String);
}

// 70. Kubik rubik yuzalari soni
function kubikchalar(n) {
  return 6 * n * n;
}

// 71. Sayohat uchun avtomobillar soni (1 ta taksiga 5 kishi: 4 yo'lovchi + 1 haydovchi)
function sayohat(odamlar) {
  return Math.ceil(odamlar / 5);
}

// 72. Bo'sh joy mavjudligi
function boshJoy(str) {
  return str.includes(" ");
}

// 73. Quti hajmi
function hajm(quti) {
  return quti.width * quti.length * quti.height;
}

// 74. Sonlar orasidagi elementlar
function sonlar(son1, son2, arr) {
  return arr.filter(x => x > son1 && x < son2);
}

// 75. Element turlari
function turlar(arr) {
  return arr.map(x => typeof x);
}

// 76. Stringni takrorlash
function qaytarString(str, miqdor) {
  if (typeof str !== "string") return "Not A String !!";
  return str.repeat(miqdor);
}

// 77. Ko'plik shaklini tekshirish (o'zbek tilidagi '-lar'/'-ler' yoki mos qo'shimchalar)
function koplik(str) {
  return str.endsWith("lar") || str.endsWith("ler");
}

// 78. Bosh va oxirgi harf
function boshOxiri(str) {
  return str[0] + str[str.length - 1];
}

// 79. So'zni takrorlab aytish
function sozAytish(word) {
  let sub = word.slice(0, 2);
  return `${sub}... ${sub}... ${word}`;
}

// 80. Ahvolni aniqlash
function ahvol(mood = "neutral") {
  return `Today, I am feeling ${mood}`;
}

// 81. Bo'g'inlar soni
function bogin(word) {
  return word.length / 2;
}

// 82. ASCII kodi
function ascii(belgi) {
  return belgi.charCodeAt(0);
}

// 83. So'zlar tengligi (katta-kichik harfga qaramay)
function tengmi(soz1, soz2) {
  return soz1.toLowerCase() === soz2.toLowerCase();
}

// 84. Belgilar soni (length'siz)
function belgiSoni(word) {
  let count = 0;
  for (let char of word) {
    count++;
  }
  return count;
}

// 85. Koronavirus tugash kunlari
function endCorona(recovered, newCases, activeCases) {
  return Math.ceil(activeCases / (recovered - newCases));
}

// 86. Elementlarni 2 ga ko'paytirish
function namuna86(arr) {
  return arr.map(x => x * 2);
}

// 87. So'zlar uzunligi massivi
function wordLengths(arr) {
  return arr.map(x => x.length);
}

// 88. Taksi haqi bo'yicha masofa (1-km = 4000 so'm, keyingilari = 1000 so me)
function taksi(summa) {
  if (summa <= 4000) return 1;
  return 1 + (summa - 4000) / 1000;
}

// 89. 'd' harflari soni
function dlar(str) {
  let matches = str.match(/d/gi);
  return matches ? matches.length : 0;
}

// 90. Har bir belgi orasiga bo'sh joy
function boshJoySpace(str) {
  return str.split('').join(' ');
}

// 91. Katta va 2-songa bo'linadigan eng kichik son
function namuna91(a, b) {
  let res = a + 1;
  while (res % b !== 0) {
    res++;
  }
  return res;
}

// 92. Tekin kofe hisobi (har 3 ta kofega +1 tekin)
function namuna92(n) {
  return n + Math.floor(n / 3);
}

// 93. Oxirgi belgini takrorlash
function namuna93(str, n) {
  let lastChar = str[str.length - 1];
  return str + lastChar.repeat(n - 1);
}

// 94. 5 dan katta elementlar yig'indisi
function namuna94(arr) {
  return arr.filter(x => x > 5).reduce((acc, curr) => acc + curr, 0);
}

// 95. Barcha elementlar yig'indisi
function namuna95(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 96. Fayl nomini ajratish
function getFileName(path) {
  return path.split('/').pop().split('\\').pop();
}

// 97. Uyga qaytish masofasi (barcha bosib o'tilgan masofalar abs yig'indisi)
function namuna97(arr) {
  let totalDist = arr.reduce((acc, curr) => acc + Math.abs(curr), 0);
  let finalPos = arr.reduce((acc, curr) => acc + curr, 0);
  return totalDist - Math.abs(finalPos);
}

// 98. Uchburchak hosil qilish sharti
function namuna98(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 99. Ikki son orasidagi sonlar massivi
function namuna99(a, b) {
  let res = [];
  for (let i = a + 1; i < b; i++) {
    res.push(i);
  }
  return res;
}

// 100. Emmet qisqartmasi (masalan: "div*2" -> "<div></div><div></div>")
function namuna100(str) {
  let [tag, count] = str.split('*');
  return `<${tag}></${tag}>`.repeat(Number(count));
}


// --- CONSOLEGA CHIQARIB TEKSHIRISH ---

console.log("40:", uzunlik("apple")); // 5
console.log("41:", bolinsin(98, 7)); // true
console.log("42:", raqam("6")); // 6
console.log("43:", tortYuzi(3, 4)); // 12
console.log("44:", ismFam("First", "Last")); // "Last, First"
console.log("45:", bug(true)); // "sad days"
console.log("46:", tushirMassiv([1, 2, 3], 1)); // [2, 3]
console.log("47:", ovozlar({ upvotes: 13, downvotes: 0 })); // 13
console.log("48:", negativ(4)); // -4
console.log("49:", almash([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log("50:", kinogaKirish(14, true)); // true
console.log("51:", oshir1ga([0, 1, 2, 3])); // [1, 2, 3, 4]
console.log("52:", natija); // "Donyor Olimov"
console.log("53:", holati); // "yaxshi"
console.log("54:", sozUzunligi("apples")); // true
console.log("55:", daraja(5, 5)); // 3125
console.log("56:", songiElement([1, 2, 3])); // 3
console.log("57:", kabisa(2020)); // true
console.log("58:", soz("apple")); // "pple"
console.log("59:", teskariBool(true)); // false
console.log("60:", juftMiToqmi(3)); // "toq"
console.log("61:", qutilar(2)); // 4
console.log("62:", arrayToString([1, 2, 3, 4, 5, 6])); // "123456"
console.log("63:", birlash([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]
console.log("64:", topIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
console.log("65:", arrElement([1, 2, 3, 4, 5, 6], 8.0 / 2)); // 5
console.log("66:", namuna66([1, 2, 3, 4, 5])); // 15
console.log("67:", sozSon("bir")); // 1
console.log("68:", bormi([1, 2, 3, 4, 5], 3)); // true
console.log("69:", sonString([1, 2, "a", "b"])); // ["1", "2", "a", "b"]
console.log("70:", kubikchalar(2)); // 24
console.log("71:", sayohat(11)); // 3
console.log("72:", boshJoy("hello, world")); // true
console.log("73:", hajm({ width: 2, length: 5, height: 1 })); // 10
console.log("74:", sonlar(3, 8, [1, 5, 95, 0, 4, 7])); // [5, 4, 7]
console.log("75:", turlar([1, 2, "null", []])); // ["number", "number", "string", "object"]
console.log("76:", qaytarString("Mubashir", 2)); // "MubashirMubashir"
console.log("77:", koplik("daraxtlar")); // true
console.log("78:", boshOxiri("ganesh")); // "gh"
console.log("79:", sozAytish("incredible")); // "in... in... incredible"
console.log("80:", ahvol("happy")); // "Today, I am feeling happy"
console.log("81:", bogin("Hehehehehehe")); // 6
console.log("82:", ascii("A")); // 65
console.log("83:", tengmi("hello", "hELLo")); // true
console.log("84:", belgiSoni("Hello World")); // 11
console.log("85:", endCorona(4000, 2000, 77000)); // 39
console.log("86:", namuna86([2, 5, 3])); // [4, 10, 6]
console.log("87:", wordLengths(["hello", "world"])); // [5, 5]
console.log("88:", taksi(7000)); // 4
console.log("89:", dlar("My friend Dylan got distracted in school.")); // 4
console.log("90:", boshJoySpace("space")); // "s p a c e"
console.log("91:", namuna91(17, 8)); // 24
console.log("92:", namuna92(10)); // 13
console.log("93:", namuna93("Hello", 3)); // "Hellooo"
console.log("94:", namuna94([1, 5, 20, 30, 4, 9, 18])); // 77
console.log("95:", namuna95([2, 7, 4])); // 13
console.log("96:", getFileName("C:/Projects/pil_tests/ascii/edabit.txt")); // "edabit.txt"
console.log("97:", namuna97([2, 4, 2, 5])); // 13
console.log("98:", namuna98(2, 3, 4)); // true
console.log("99:", namuna99(2, 11)); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log("100:", namuna100("div*2")); // "<div></div><div></div>"