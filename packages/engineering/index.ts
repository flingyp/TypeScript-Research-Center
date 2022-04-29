console.warn("TypeScript工程篇包");

/**
 * 命名空间：通过命名空间可以有效的避免全局污染
 * 1. 如果想要命名空间里的变量、接口等被外部空间访问，需要使用 export 关键字
 * 2. 如果不需要被外部访问，这不用使用 export 关键字就行
 * 3. 访问命名空间被export的变量、接口时 在前面加上 命名空间的名字即可
 */
import "./modules/namespaceT2";

/**
 * 声明合并
 */
import "./modules/declarationMerge";

/**
 * 声明语法
 */
import "./modules/declareUse";
