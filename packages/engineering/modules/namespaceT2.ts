import { Shape1 } from "./namespaceT1";

/**
 * 命名空间 Shape
 */
export namespace Shape2 {
  export const square = (x: number) => {
    return x * x;
  };
}

console.log("-------------------命名空间-------------------");

console.warn("命名空间的使用：", Shape1.circle(1));
console.warn("命名空间的使用：", Shape2.square(2));

console.log("-------------------命名空间-------------------");
