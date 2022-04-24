/**
 * TypeScript 接口
 *  可以使用接口来定义对象的类型
 */

console.log("---------------------接口篇---------------------");

interface Person {
  readonly name: string; // readonly 只读属性
  age: number;
  hobby: Array<string>;
  character?: string; // ? 可选属性
  [key: string]: any; // 任意属性（除上面属性外，可添加任意的属性）
}
const tomMan: Person = {
  name: "Tom",
  age: 20,
  hobby: ["sing", "jump", "rap"],
  character: "活泼",
};
console.warn("声明一个Person类型的对象：", tomMan);

interface AddFunction {
  (x: number, y: number): number;
}
const addFun: AddFunction = (firstNum, secondNum) => {
  return firstNum + secondNum;
};
console.warn("使用接口声明一个函数：", addFun(10, 22));

console.log("---------------------接口篇---------------------");
