//creat object

let MyMath = {
    add: function(num1,num2){
       let add = num1 + num2;
       return add; 
    },
    sub: function(num1,num2){
        let sub= num1-num2;
        return sub;
    },
    mul: function(num1,num2){
        let mul = num1 * num2;
        return mul;
    },
    div: function(num1,num2){
        let div = num1 / num2;
        return div;
    }
};

module.exports = MyMath;