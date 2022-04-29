/**
 * 声明合并：是指编译器将针对同一个名字的多个独立声明的进行合并为一个
 * 合并后的声明同时拥有所有声明的特性
 */

console.log("-------------------声明合并-------------------");

/**
 * 合并接口：从根本上说，合并的机制是把双方的成员放到一个同名的接口里
 * 接口的非函数成员应该是唯一的。 如果它们不是唯一的，那么它们必须是相同的类型。
 * 如果两个接口中同时声明了同名的非函数成员 并且 类型不同，则编译器会报错
 */
interface Box {
  width: number;
  height: number;
}

interface Box {
  color: string;
}

const box: Box = {
  width: 10,
  height: 20,
  color: "#E3E3E3",
};

/**
 * 对于函数成员，同名函数声明都会被当做成这个函数的重载
 * 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。
 */
interface AddSum {
  add(a: number, b: number): number;
}

interface AddSum {
  add(a: string, b: string): number;
}

// 接口就会被合并为
// interface AddSum {
//   add(a: number, b: number): number;
//   add(a: string, b: string): number;
// }

const addSum: AddSum["add"] = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return Number(a + b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
};

/**
 * 命名空间的合并 和 接口的合并是一样的概念
 * 但是 非导出成员， 只在原有的命名空间可见，
 * 就是说合并后，如果其他同名的命名空间引入了 非导出成员 则会报错
 */

console.log("-------------------声明合并-------------------");
