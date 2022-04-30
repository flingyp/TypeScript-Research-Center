## 文件选项

### files

它的含义是编译器需要编译的相对或绝对文件路径的单个文件列表

```json
{
  "files": ["src/index.ts"]
}
```

### include

它的含义是编译器需要编译的文件或者目录。

```json
{
  "include": ["src/**/*"]
}
```

### exclude

它的含义是编译器需要排除的文件或者目录。默认会排除 node_modules 目录下的所有文件。

```json
{
  "include": ["node_modules", "lib"]
}
```

### 注意

1. 如果 files 和 includes 都没有指定，编译器默认包含当前目录下所有的 ts 文件。（.ts、.d.ts、.tsx）

2. 如果 exclude 存在，exclude 配置优先级高于 files 和 includes 配置

3. exclude 和 includes 配置支持 glob 通配符：\*、?、\*\*

### extends

我们可以把一些配置抽离出一个配置文件，再 tsconfig.json 文件引入，方便以后管理与维护。

```json
{
  "extends": "./base.json"
}
```

在主配置文件中，设置文件选项会覆盖调继承文件中的相同的配置项。

### compileOnSave

它可以让 IDE 在保存文件时，编译器自动编译。

```json
{
  "extends": true
}
```

## 编译选项

```json
{
  "compilerOptions": {
    "incremental": true, // 增量编译
    "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
    "diagnostics": true, // 打印编译信息

    "target": "es5", // 目标语言的版本
    "module": "commonjs", // 生成代码的模块标准
    "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在 AMD 模块中

    "lib": [], // TS 需要引用的库，即声明文件，es5 默认 "dom", "es5", "scripthost"

    "allowJs": true, // 允许编译 JS 文件（js、jsx）
    "checkJs": true, // 允许在 JS 文件中报错，通常与 allowJS 一起使用
    "outDir": "./out", // 指定输出目录
    "rootDir": "./", // 指定输入文件目录（用于输出）

    "declaration": true, // 生成声明文件
    "declarationDir": "./d", // 声明文件的路径
    "emitDeclarationOnly": true, // 只生成声明文件
    "sourceMap": true, // 生成目标文件的 sourceMap
    "inlineSourceMap": true, // 生成目标文件的 inline sourceMap
    "declarationMap": true, // 生成声明文件的 sourceMap
    "typeRoots": [], // 声明文件目录，默认 node_modules/@types
    "types": [], // 声明文件包

    "removeComments": true, // 删除注释

    "noEmit": true, // 不输出文件
    "noEmitOnError": true, // 发生错误时不输出文件

    "noEmitHelpers": true, // 不生成 helper 函数，需额外安装 ts-helpers
    "importHelpers": true, // 通过 tslib 引入 helper 函数，文件必须是模块

    "downlevelIteration": true, // 降级遍历器的实现（es3/5）

    "strict": true, // 开启所有严格的类型检查
    "alwaysStrict": false, // 在代码中注入 "use strict";
    "noImplicitAny": false, // 不允许隐式的 any 类型
    "strictNullChecks": false, // 不允许把 null、undefined 赋值给其他类型变量
    "strictFunctionTypes": false, // 不允许函数参数双向协变
    "strictPropertyInitialization": false, // 类的实例属性必须初始化
    "strictBindCallApply": false, // 严格的 bind/call/apply 检查
    "noImplicitThis": false, // 不允许 this 有隐式的 any 类型

    "noUnusedLocals": true, // 检查只声明，未使用的局部变量
    "noUnusedParameters": true, // 检查未使用的函数参数
    "noFallthroughCasesInSwitch": true, // 防止 switch 语句贯穿
    "noImplicitReturns": true, // 每个分支都要有返回值

    "esModuleInterop": true, // 允许 export = 导出，由import from 导入
    "allowUmdGlobalAccess": true, // 允许在模块中访问 UMD 全局变量
    "moduleResolution": "node", // 模块解析策略
    "baseUrl": "./", // 解析非相对模块的基地址
    "paths": {
      // 路径映射，相对于 baseUrl
      "jquery": ["node_modules/jquery/dist/jquery.slim.min.js"]
    },
    "rootDirs": ["src", "util"], // 将多个目录放在一个虚拟目录下，用于运行时

    "listEmittedFiles": true, // 打印输出的文件
    "listFiles": true // 打印编译的文件（包括引用的声明文件）
  }
}
```
