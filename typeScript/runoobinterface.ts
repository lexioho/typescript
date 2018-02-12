interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}
 
function Area(shape : Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area1 " + area + " cm squared";
}
 
console.log( Area( {width: 30, height: 15} ) );
console.log( Area( {name: "square", width: 30, height: 30, color: "blue"} ) );