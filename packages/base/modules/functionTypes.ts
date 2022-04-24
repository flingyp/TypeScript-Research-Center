/**
 * TypeScript 函数
 * 注意：声明函数的多种写法
 */

console.log("---------------------函数篇---------------------");

function reduceRandomNumFun1(reduceNum: number): number {
  return reduceNum - Math.floor(Math.random() * 100);
}

const reduceRandomNumFun2: (reduceNum: number) => number = (
  reduceNum: number
) => {
  return reduceNum - Math.floor(Math.random() * 100);
};

// 接口声明函数类型
interface ReduceRandomNumFun1 {
  (reduceNum: number): number;
}

// 使用类型别名Type 声明函数类型
type ReduceRandomNumFun2 = (reduceNum: number) => number;

// 将 reduceRandomNumFun2 进行改造
const reduceRandomNumFun3: ReduceRandomNumFun1 = function (reduceNum: number) {
  return reduceNum - Math.floor(Math.random() * 100);
};

const reduceRandomNumFun4: ReduceRandomNumFun2 = (reduceNum: number) => {
  return reduceNum - Math.floor(Math.random() * 100);
};

interface BuildRandomName {
  (firstName: string, secondName: string, thirdName?: string): string;
}
// thirdName?: string 是可选参数 （可选参数必须在必选参数的后面）
const buildName: BuildRandomName = (
  firstName,
  secondName = "默认参数",
  thirdName
) => {
  if (!thirdName) {
    return `${firstName}-${secondName}`;
  }
  return `${firstName}-${secondName}-${thirdName}`;
};
console.warn("函数-可选参数：", buildName("TypeScript", "Webpack"));
console.warn("函数-默认参数：", buildName("TypeScript", undefined, "Webpack"));

// 剩余参数必须在必选参数之后，可选参数不允许和剩余参数共同出现在一个函数内
const resetName: (firstName: string, ...restNames: string[]) => string = (
  firstName,
  ...restNames
) => {
  return `${firstName}+${restNames.join("+")}`;
};
console.warn(
  "函数-剩余参数",
  resetName("TypeScript", "Vue3", "Webpack", "Vite", "React", "Rollup")
);

// 编写函数重载函数
function twoNumAdd(x: string, y: string): number;
function twoNumAdd(x: number, y: string): number;
function twoNumAdd(x: number, y: number): number;
function twoNumAdd(x: string, y: number): number;

// 最后 再编写 通用函数
function twoNumAdd(x: any, y: any): number {
  if (typeof x === "string") {
    x = Number(x);
  }
  if (typeof y === "string") {
    y = Number(y);
  }
  return x + y;
}

console.warn("函数-函数重载：", twoNumAdd("20", 35));

console.log("---------------------函数篇---------------------");
