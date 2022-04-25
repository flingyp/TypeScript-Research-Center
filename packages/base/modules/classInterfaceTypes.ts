/**
 * TypeScript 类与接口的使用
 */

console.log("------------------- 类与接口的使用-----------------------");

/**
 * 类实现接口时，必须实现接口中所有定义的属性和方法
 * 类实现接口时，声明接口中定义的属性和方法不能为Private、Protected
 * 接口不能约束类中的构造函数
 */
interface ClockInterface {
  currentTime: Date;
  setTime: (time: Date) => Date;
}

class Clock implements ClockInterface {
  constructor(currentTime: Date) {
    this.currentTime = currentTime;
  }

  currentTime: Date;
  setTime: (time: Date) => Date = (time) => {
    this.currentTime = time;
    return this.currentTime;
  };
}

console.warn("Clock 类 实现 ClockInterface接口");
console.warn("接口和接口、类和类之间可以相互继承");
console.warn("接口可以通过类来实现的（implements），接口只能约束类的公有成员");

console.log("------------------- 类与接口的使用-----------------------");
