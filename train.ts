// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8


function NestedArray(arr: any[]): number {
    return arr.reduce((sum, item) => 
        sum + (Array.isArray(item) ? NestedArray(item) : item), 0);
}

console.log(NestedArray([2, [3, 6, [2]]]))