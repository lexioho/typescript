var shape = {
    name: "rectangle",
    popup: function () {
        // console.log(this);
        // console.log('This inside popup(): ' + this.name);
        name="gagag";
        setTimeout(function () {
            
            console.log('This inside setTimeout(): ' + this.name);
            //这里的 this 指的是popup
            console.log("I'm a " + this.name + "!");
        }, 3000);
    }
};
shape.popup();
// 这不是箭头函数  箭头函数可以自动将函数中的this附加到上下文中 
