/**
 * TypeScript 基础数据类型的介绍：
 *  String、Number、Boolean、Object（Array | Function）、Symbol、undefined、null
 *  TS新增的数据类型： void、any、never、元祖 Tuple、枚举、高级类型
 *  TS的类型声明：相当于强类型语言（Java）中的类型声明。 语法： XX: Type
 */

console.log("-------------------基础数据类型篇-----------------------");

const sayHello: string = "Hello TypeScript";
console.warn("String类型声明：", sayHello);

const randomNumber: number = Math.floor(Math.random() * 100);
console.warn("Number类型声明：", randomNumber);

const isTrue: boolean = randomNumber > 50 ? true : false;
console.warn("Boolean类型声明：", isTrue);

/**
 * TypeScript 有两种定义数组的方式
 *  1. 可以在元素类型后加上 []
 *  2. 可以使用数组泛型 Array<元素类型> （在元素类型中可以使用联合类型。 符号 | 表示或）
 */
const typeArrOne: number[] = [1, 2, 3];
const typeArrTwo: Array<number> = [4, 5, 6];
const typeArrThree: Array<number | string> = [7, "8", "9", 10];
console.warn(
  `Array类型声明：${typeArrOne} || ${typeArrTwo} || ${typeArrThree}`
);

/**
 * 元组简单的说：就是你知道数组的内部有多少个并且是什么类型的了，那么就可以使用元组来声明数组
 * 不足之处：
 *      就是在访问声明了类型的元素会得到IDEA的类型提示，但是如果想这个数组就push了值，去访问对应的类型元素TS就会报警告
 */
const tupleData: [number, string] = [11, sayHello];
// tupleData.push(3);
// // 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素
// tupleData[2]
console.warn("Tuple元组类型声明：", tupleData);

/**
 * 枚举：可用于定义一些常量。关键字是 enum
 *  数字枚举：初始值为 0, 逐步递增，也可以自定义初始值，之后根据初始值逐步递增
 *  常量枚举：在枚举关键字前添加 const，该常量枚举会在编译阶段被移除
 *  外部枚举：是使用 declare enum 定义的枚举类型
 */

// 数字枚举
enum enumDays {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.warn(`Enum枚举类型声明-数字枚举：${enumDays[2]}：${enumDays.Tue}`);

// 字符串枚举
enum enumCustomMessage {
  Success = "成功",
  Fail = "失败",
  Loading = "加载中...",
}
console.warn(`Enum枚举类型声明-字符串枚举： ${enumCustomMessage.Success}`);

// 常量枚举
const enum enumSize {
  WIDTH = 10,
  HEIGHT = 20,
}
console.warn(`Enum枚举类型声明-常量枚举：${enumSize.WIDTH}`);

console.log("-------------------基础数据类型篇-----------------------");
