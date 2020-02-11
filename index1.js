/**
 * 6种基本类型：string,number,boolean,null,undefined,symbol
 * 1种引用类型：object
 * 
 * 6个值为false的值： '' 0 undefined null false NaN
 * 
 * JSON.
 */
// Object.prototype.toString.call() // [object types]

function instanceOf(left, right){
    let prototype = right.prototype
    let left = left.__proto__
    while(true){
        if(left === null) {
            return false
        }
        if(prototype===left){
            return true
        }
        left = left.__proto__
    }
}
