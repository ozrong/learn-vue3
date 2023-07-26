// 布尔
let isDone: boolean = false

// 数字
// JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number
let a: number = 6
let b: number = 0xf00d

// 字符串
let str: string = 'name'
// 模版字符串
let str2: string = `${a}-name`

// 数组
//1. 数字类型数组 表示由此类型元素组成的一个数组
let list: number[] = [1,2,3]
// 2. 泛型定义数组 表示由此类型元素组成的一个数组
let list2: Array<number> = [1,2,3]

// 元组
let xTuple: [string, number]
xTuple = ['xxx', 10]
// xTuple = [10, 'xxxxx'] // 错， 需要按定义的顺序来放
console.log(xTuple[0])
console.log(xTuple[1])
