// ZU-TASK:

// Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
// MASALAN: sumOfUnique([1,2,3,2]) return 4


function sumOfUnique(arr: number[]): number {
    return arr.reduce((sum, num) => {
        return arr.indexOf(num) === arr.lastIndexOf(num) ? sum + num : sum;
    }, 0);
}

console.log(sumOfUnique([1, 3, 3, 2])); 


// // ZT-TASK:

// // Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// // MASALAN: firstUniqueCharIndex(“stamp”) return 0

// function firstUniqueCharIndex(s: string): number {
//     for (let i = 0; i < s.length; i++) {
//         let unique = true;
//         for (let j = 0; j < s.length; j++) {
//             if (i !== j && s[i] === s[j]) {
//                 unique = false;
//                 break;
//             }
//         }
//         if (unique) return i;
//     }

//     return -1;
// }

// console.log(firstUniqueCharIndex("stamp"))







// // // ZS-TASK:

// // // Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// // // MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4


// // function singleNumberMath(nums: number[]): number {
// //     const uniqueSum = [...new Set(nums)].reduce((sum, num) => sum + num, 0);
// //     const totalSum = nums.reduce((sum, num) => sum + num, 0);

// //     return 2 * uniqueSum - totalSum;
// // }

// // console.log(singleNumberMath([4, 2, 4, 2, 1])); // 4



















// // // // ZR-TASK:

// // // // Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// // // // MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// // // function Filter(input: string): { number: number, letter: number } {
// // //     const numbers = input.split('').filter(char => char >= '0' && char <= '9').length;
// // //     const letters = input.split('').filter(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')).length;

// // //     return {
// // //         number: numbers,
// // //         letter: letters
// // //     };
// // // }

// // // console.log(Filter("string1847\¥"))




// // // // // // ZQ-TASK:

// // // // // // Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// // // // // // MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// // // // // function findDuplicates(arr: number[]): number[] {
// // // // //     const countMap = arr.reduce((acc, num) => {
// // // // //         acc[num] = (acc[num] || 0) + 1;
// // // // //         return acc;
// // // // //     }, {} as { [key: number]: number });

// // // // //     return Object.keys(countMap)
// // // // //         .filter(key => countMap[Number(key)] >= 2)
// // // // //         .map(Number);
// // // // // }

// // // // // console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // [3, 4]



// // // // // // // ZP-TASK:

// // // // // // // shunday function yozing, u 2 ta array parametr qabul qilsin. Siz bu ikki arrayning qiymatlari o'xshash bo'lishini (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// // // // // // // MASALAN: 
// // // // // // // areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// // // // // // // areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// // // // // // // areArraysEqual([1, 2, 3], [4, 1, 2]) // false

// // // // // // function areArraysEqual(arr1: number[], arr2: number[]): boolean {
// // // // // //     // Arraylarni sortlash
// // // // // //     arr1.sort((a, b) => a - b);
// // // // // //     arr2.sort((a, b) => a - b);

// // // // // //     // Arraylarni tengligini tekshirish
// // // // // //     return JSON.stringify(arr1) === JSON.stringify(arr2);
// // // // // // }

// // // // // // // Testlar
// // // // // // console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
// // // // // // console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // false
// // // // // // console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false



// // // // // // // // ZO-TASK:

// // // // // // // // Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda 
// // // // // // // // ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// // // // // // // // MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true



// // // // // // // function areParenthesesBalanced(input: string): boolean {
// // // // // // //     const result = input.split('').reduce((count, char) => {
// // // // // // //         if (char === '(') {
// // // // // // //             return count + 1;
// // // // // // //         } else if (char === ')') {
// // // // // // //             // Agar yopiq qavs ochiq qavsdan oldin kelsa
// // // // // // //             if (count === 0) {
// // // // // // //                 return -1; // Bu holda balans buziladi
// // // // // // //             }
// // // // // // //             return count - 1;
// // // // // // //         }
// // // // // // //         return count;
// // // // // // //     }, 0);

// // // // // // //     return result === 0;
// // // // // // // }

// // // // // // // console.log(areParenthesesBalanced("())(")); // false
// // // // // // // console.log(areParenthesesBalanced("((())")); // false
// // // // // // // console.log(areParenthesesBalanced("(()))")); // false
// // // // // // // console.log(areParenthesesBalanced("()()")); // true




// // // // // // // // // ZN-TASK:

// // // // // // // // // Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// // // // // // // // // MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
// // // // // // // // function rotateArray(arr: number[], index: number): number[] {
// // // // // // // //     arr.reverse();
// // // // // // // //     const part1 = arr.splice(0, arr.length - index);
// // // // // // // //     return part1.reverse().concat(arr.reverse());
// // // // // // // // }

// // // // // // // // console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)) //[ 3, 4, 5, 6, 1, 2 ]






// // // // // // // // // ZM-TASK:

// // // // // // // // // Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// // // // // // // // // MASALAN: reverseInteger(123456789) return 987654321



// // // // // // // // function reverseInteger(n: number): number {
// // // // // // // //     const reversed = parseInt(
// // // // // // // //         n.toString().split('').reduce((acc, char) => char + acc, ''),
// // // // // // // //         10
// // // // // // // //     );
// // // // // // // //     return Math.sign(n) * reversed;
// // // // // // // // }


// // // // // // // // console.log(reverseInteger(987654321))




// // // // // // // // // ZL-TASK:

// // // // // // // // // Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// // // // // // // // // MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”


// // // // // // // // function stringToKebab(str: string): string {
// // // // // // // //     return str
// // // // // // // //         .split('')
// // // // // // // //         .map(char => char === ' ' ? '-' : char.toLowerCase())
// // // // // // // //         .join('');
// // // // // // // // }

// // // // // // // // console.log(stringToKebab("I love Kebab")); // "i-love-kebab"



// // // // // // // // @Args('input') dekoratori NestJS GraphQL moduli yordamida 
// // // // // // // // resolver funksiyasida GraphQL argumentlarini qabul qilish uchun ishlatiladi. 
// // // // // // // // U so'rov yoki mutatsiyada yuborilgan input argumentini olib, 
// // // // // // // // funksiyaga o'tkazadi, bu esa ma'lumotlarni ishlatishni osonlashtiradi.


// // // // // // // // // ZK-TASK:

// // // // // // // // // Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// // // // // // // // // MASALAN: printNumbers()

// // // // // // // // async function printNumbers() {
// // // // // // // //     for (let i = 1; i <= 5; i++) {
// // // // // // // //         await new Promise(resolve => setTimeout(resolve, 1000));
// // // // // // // //         console.log(i);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // printNumbers();




// // // // // // // // // ZJ-TASK:

// // // // // // // // // Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// // // // // // // // // MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8


// // // // // // // // function NestedArray(arr: any[]): number {
// // // // // // // //     return arr.reduce((sum, item) => 
// // // // // // // //         sum + (Array.isArray(item) ? NestedArray(item) : item), 0);
// // // // // // // // }

// // // // // // // // console.log(NestedArray([2, [3, 6, [2]]]))