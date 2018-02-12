function Area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area1 " + area + " cm squared";
}
console.log(Area({ name: "rectangle", width: 30, height: 15 }));
console.log(Area({ name: "square", width: 30, height: 30, color: "blue" }));
