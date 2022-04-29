/**
 * 命名空间 Shape
 */
export namespace Shape1 {
  const pi = Math.PI;
  export const circle = (r: number) => {
    return pi * r ** 2;
  };
}
