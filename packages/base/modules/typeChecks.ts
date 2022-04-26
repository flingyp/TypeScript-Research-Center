/**
 * 类型检查机制
 *      TypeScript 编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为
 *      主要分为：类型推断、类型兼容性、类型保护
 */

console.log("---------------------类型检查机制篇---------------------");

/**
 * 一：类型推断
 * 不需要指定类型的变化，TypeScript 可以根据某些规则自动为其推断出一个类型
 * 基础类型推断、最佳通用类型推断：都是从右向左推断（根据表达式的值去推断变量的类型）
 */

// 基础类型推断：TS会自动帮助我们推断一些简单的类型
let baseTypeCheckNum = 2020;

// 不能将类型“string”分配给类型“number”
// baseTypeCheckNum = "Hello World"

/**
 * 最佳通用类型推断：当需要从多个类型中推断出一个类型时，ts 就会尽可能的推断出一个最佳通用类型
 */

//  let baseTypeCheckArr: (string | number | boolean)[]
let baseTypeCheckArr = ["Hello TypeScript", 20, true];

/**
 * 上下文类型推断：通常发生在事件处理中
 */

// event: Event。TS 会根据左侧的事件绑定推断出右侧事件的类型
window.addEventListener("load", (event) => {
  console.warn("体验上下文类型推断：Window is loading...", event);

  console.log("---------------------类型检查机制篇---------------------");
});

/**
 * 二：类型兼容性
 * 当一个类型 Y 可以赋值给另一个类型 X 时，我们可以认为类型 X 兼容类型 Y
 */

// 变量兼容性
let constantStr = "Hello TypeScript";
// 这里需要 tsconfig.json 内的 strictNullChecks 的值设置为 false 这时编译就不会报错
// 可以看出来 string 类型兼容 null 类型
constantStr = null;

// 接口兼容性：接口之间相互赋值时，成员少的会兼容成员多的
interface LoginInterfaceCompatible {
  username: string;
  password: string;
}

interface UserInterfaceCompatible {
  username: string;
  password: string;
  age: number;
}
let userOne: LoginInterfaceCompatible = {
  username: "Root",
  password: "123456789",
};
let userOneInfo: UserInterfaceCompatible = {
  username: "Root",
  password: "123456789",
  age: 20,
};
// 接口之间相互赋值时，成员少的会兼容成员多的
userOne = userOneInfo;
// 这里访问userOne.age 在TS中依然会报错但是 userOne确实会有age这个属性
console.warn("接口兼容性：", userOne);

// 函数兼容性：函数参数个数，参数多的兼容参数少的
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// // 函数只有一个参数，将 handlerOne 传入 hof 方法作为参数（兼容）
// let handlerOne = (a: number) => {};
// hof(handlerOne)

// // 函数有三个参数，handlerTwo 同样作为参数传入 hof 方法（不兼容）
// let handlerTwo = (a: number, b: number, c: number) => {};
// hof(handlerTwo);

// //  函数参数类型与目标函数参数类型不同（不兼容）
// let handlerThree = (a: string) => {};
// hof(handlerThree);

// 枚举兼容性：枚举类型和数值(number)类型相互兼容，枚举与枚举之间相互不兼容
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}

let fruitOne: Fruit = 20;
let fruitColorTwo: number = Color.Yellow;
console.warn("枚举兼容性：fruitOne", fruitOne);
console.warn("枚举兼容性：fruitColorTwo", fruitColorTwo);

// 报错：不能将类型“Color.Red”分配给类型“Fruit.Apple”
// let mutualEnum: Fruit.Apple = Color.Red

/**
 * 三：类型保护：TS 能够在特定的区块中保证变量属于某种确定的类型
 */

// instanceof：判断实例是否属于某个类
// in：判断一个属性是否属于某个对象
// typeof 判断变量的类型
