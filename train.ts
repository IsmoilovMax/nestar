// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
function rotateArray(arr: number[], index: number): number[] {
    arr.reverse();
    const part1 = arr.splice(0, arr.length - index);
    return part1.reverse().concat(arr.reverse());
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)) //[ 3, 4, 5, 6, 1, 2 ]






// // ZM-TASK:

// // Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// // MASALAN: reverseInteger(123456789) return 987654321



// function reverseInteger(n: number): number {
//     const reversed = parseInt(
//         n.toString().split('').reduce((acc, char) => char + acc, ''),
//         10
//     );
//     return Math.sign(n) * reversed;
// }


// console.log(reverseInteger(987654321))




// // ZL-TASK:

// // Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// // MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”


// function stringToKebab(str: string): string {
//     return str
//         .split('')
//         .map(char => char === ' ' ? '-' : char.toLowerCase())
//         .join('');
// }

// console.log(stringToKebab("I love Kebab")); // "i-love-kebab"



// @Args('input') dekoratori NestJS GraphQL moduli yordamida 
// resolver funksiyasida GraphQL argumentlarini qabul qilish uchun ishlatiladi. 
// U so'rov yoki mutatsiyada yuborilgan input argumentini olib, 
// funksiyaga o'tkazadi, bu esa ma'lumotlarni ishlatishni osonlashtiradi.


// // ZK-TASK:

// // Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// // MASALAN: printNumbers()

// async function printNumbers() {
//     for (let i = 1; i <= 5; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         console.log(i);
//     }
// }

// printNumbers();




// // ZJ-TASK:

// // Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// // MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8


// function NestedArray(arr: any[]): number {
//     return arr.reduce((sum, item) => 
//         sum + (Array.isArray(item) ? NestedArray(item) : item), 0);
// }

// console.log(NestedArray([2, [3, 6, [2]]]))