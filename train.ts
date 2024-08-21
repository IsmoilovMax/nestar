// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”


function stringToKebab(str: string): string {
    return str
        .split('')
        .map(char => char === ' ' ? '-' : char.toLowerCase())
        .join('');
}

console.log(stringToKebab("I love Kebab")); // "i-love-kebab"



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