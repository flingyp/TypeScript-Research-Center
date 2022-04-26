/**
 * 高级类型：
 *      交叉类型、联合类型、索引类型、映射类型、条件类型
 */

console.log("---------------------高级类型篇---------------------");

// 一：交叉类型：& 符号，多个类型合并为一个类型，新的类型具有所有类型的特性
interface AnimalInterface {
  type: string;
}

interface DogInterface {
  dogType: string;
}

const huskyDog: AnimalInterface & DogInterface = {
  type: "Dog",
  dogType: "Husky",
};

// 二：联合类型：| 符号，取值可以为多种类型的一种
let currentYear: number | string = 2022; // "2022"

// 字面量的联合类型 （只能取：2022 | 2021 | 2020 其中的一个）
let checkYears: 2022 | 2021 | 2020 = 2021;

// 三：索引类型：keyof T， 表示类型 T 的所有公共属性的Key的联合类型
interface UserParams {
  id: number;
  username: string;
  password: string;
  iphone: string;
  age: number;
}
// UserKeys 可以取的值就是 UserParams 所有公共属性的Key
let UserKeys: keyof UserParams = "password";

function getObjValues<T, K extends keyof T>(obj: T, keys: K[]) {
  return keys.map((key) => obj[key]);
}
const UserParamsOne: UserParams = {
  id: 25,
  username: "超级管理员",
  password: "123456",
  iphone: "1234567890",
  age: 20,
};

console.warn(
  "索引类型的引用：",
  getObjValues(UserParamsOne, ["id", "username", "password", "iphone", "age"])
);

// 四：映射类型：可以将一个类型经过某种方式处理生成一个新的类型
// TS 提供了很多内置的映射类型
// 接口所有的属性设置为只读属性
type ReadonlyUserParams = Readonly<UserParams>;
// type ReadonlyUserParams = {
//     readonly id: number;
//     readonly username: string;
//     readonly password: string;
//     readonly iphone: string;
//     readonly age: number;
// }

// 接口所有属性设置为可选属性
type PartialUserParams = Partial<UserParams>;
// type PartialUserParams = {
//     id?: number;
//     username?: string;
//     password?: string;
//     iphone?: string;
//     age?: number;
// }

// 提取 UserParams 的 username 和 password 属性
type LoginParams = Pick<UserParams, "username" | "password">;
// type LoginParams = {
//     username: string;
//     password: string;
// }

// 五：条件类型：形式为 T extends U ? X : Y

console.log("---------------------高级类型篇---------------------");
