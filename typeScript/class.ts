// TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
// es6中的类实际上就是一个函数

// 下文中的函数 shape类 有两个属性 area和color 一个方法名为shoutout 和一个构造器（指针）constructor
// 指针中的参数 name width height 都是局部变量 作用域仅为constructor 所以在shoutout中访问不到三个参数
// 所以在命令版中 会显示 属性name等 在shape上 不存在
// class Shape {
 
//     area: number;
//     color: string;
 
//     constructor ( name: string, width: number, height: number ) {
//         this.area = width * height;
//         this.color = "pink";
//     };
 
//     shoutout() {
//         return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
//     }
// }
 
// var square = new Shape("square", 30, 30);
// console.log(Shape);
// console.log( square.shoutout() );
// console.log( 'Area of Shape: ' + square.area );
// // 
// console.log( 'Name of Shape: ' + square.name );
// // name和width 和 height 是在constructor中的  所以访问不到
// console.log( 'Color of Shape: ' + square.color );
// console.log( 'Width of Shape: ' + square.width );
// console.log( 'Height of Shape: ' + square.height );