/**
 * TypeScript 泛型的使用
 * 泛型：指在定义函数、接口或类的时候，不预先指定具体的类型，而是在使用的时候指定具体的类型
 * 技巧：直接把泛型理解为代表类型的参数
 */

console.log("---------------------泛型篇---------------------");

const createArray = <T>(...value: T[]): T[] => {
  const result = [];
  for (let i = 0; i < value.length; i++) {
    result[i] = value[i];
  }
  return result;
};

console.warn(
  "泛型的简单使用：",
  createArray<string>("TypeScript", "Hello World")
);

const swapTwoNumber = <T, K>(numberArr: [T, K]): [K, T] => {
  return [numberArr[1], numberArr[0]];
};
console.warn("设置多个泛型参数：", swapTwoNumber(["Hello TypeScript", 2022]));

/**
 * 泛型约束：在函数内容使用泛型变量的时候，由于定义变量是一个泛型，所以不能随意操作它的属性和方法
 *
 * 解决方法：让泛型去继承你含有的属性或方法的类型
 */
// const logGenericsParam = <T>(param: T): void => {
//   // 提示：类型“T”上不存在属性“length”
//   console.log(param.length);
// };

const logGenericsParam = <T extends string>(param: T): void => {
  // 这样就不会报错了
  console.log(param.length);
};

/**
 * 泛型接口：使用含有泛型的接口
 * 如果将泛型定义在接口名上，则在类型声明是就需要标明泛型的类型
 * 如果泛型定义在函数上，则需要在调用该方法的时候声明泛型的类型。大多数情况也可不去声明泛型，TS有类型推断机制
 */
interface CreateArrayFunc<T> {
  <T>(...value: Array<T>): Array<T>;
}

const createArray2: CreateArrayFunc<string> = (...value) => {
  const result = [];
  for (let i = 0; i < value.length; i++) {
    result[i] = value[i];
  }
  return result;
};

console.warn("泛型接口的使用：", createArray2("TypeScript", "Hello World"));

/**
 * 泛型类
 */
type PersonParam = string | number;
class GenericsPersonClass<T extends PersonParam> {
  constructor(birthYear: T) {
    this.birthYear = birthYear;
  }

  birthYear: T;
}

const GenericsPerson = new GenericsPersonClass("2022");
console.warn("泛型类的使用：", GenericsPerson.birthYear);

console.log("---------------------泛型篇---------------------");
