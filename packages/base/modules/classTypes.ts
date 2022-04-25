/**
 * TypeScript 类的使用
 *  TypeScript除了保留ES6中的类功能外，还增加了一些新的特性
 *
 */

console.log("-------------------Class 类的使用-----------------------");

/**
 * 类的简单使用
 */

// Dog 类
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  // 类属性
  name: string;
  // 类方法
  run() {
    return `The ${this.name} is running`;
  }
}

// Husky 类 是 Dog类的一个子类
class Husky extends Dog {
  constructor(name: string, color: string) {
    // 子类必须在构造方法中调用super()方法
    // super()调用的是父类的构造方法
    super(name);
    this.color = color;
  }
  color: string;
}

// 初始化一只Husky种类的狗
const PiPiXiaHusky = new Husky("PiPiXia", "gray");
console.warn(
  `狗的名字：${PiPiXiaHusky.name} | 狗的颜色：${
    PiPiXiaHusky.color
  } | 狗跑步：${PiPiXiaHusky.run()}`
);

/**
 * Public、Private、Protected、Readonly
 * TypeScript 可以使用三种访问修饰符：Public、Private、Protected
 *      Public：属性和方法是共有的，任何地方都可以被访问到（默认是Public）
 *      Private：属性和方法是私有的，不能在外部访问，只能在声明它的类的内部方法
 *      Protected：属性和方法是受保护的，和Private相似。区别是 Protected 在子类中是可以被访问的
 * Readonly：修饰的属性为只读属性，只允许出现在属性声明或索引签名中
 */
class Animal {
  constructor(name: string) {
    this.name = name;
  }
  // protected 受保护修饰符
  protected name: string;
}

class Cat extends Animal {
  constructor(name: string, color: string) {
    super(name);
    this.catName = name;
    this.color = color;
  }
  catName: string;
  color: string;
  // private 私有修饰符
  private talkCat: string = "喵喵";

  howCatTalk() {
    return `The ${this.name} talking ${this.talkCat}`;
  }
}

const HeiHeiCat = new Cat("HeiHei", "brown");
// 访问 talkCat 会提示你：属性“talkCat”为私有属性，只能在类“Cat”中访问
// HeiHeiCat.talkCat

// 访问 name 会提示你：属性“name”受保护，只能在类“Animal”及其子类中访问
// HeiHeiCat.name
console.warn(`猫的名字：${HeiHeiCat.catName} | 猫的颜色：${HeiHeiCat.color}`);

/**
 * abstract 抽象类的使用
 * 1. 抽象类不允许被实例化
 * 2. 抽象类的抽象方法必须在继承类实现
 */

abstract class ClassPerson {
  constructor(name: string) {
    this.username = name;
  }
  username: string;
  abstract sayHello(): string;
}

class ManPeron extends ClassPerson {
  constructor(name: string) {
    super(name);
  }
  sayHello(): string {
    return `Hello Man！`;
  }
}

const MingMingPerson = new ManPeron("MingMing");
console.warn(
  `人的名字：${
    MingMingPerson.username
  } | 这个人打招呼的方式：${MingMingPerson.sayHello()}`
);

console.log("-------------------Class 类的使用-----------------------");
