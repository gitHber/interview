/** 
 * js实现继承的几种方式
 */
// 父类
function Animal (name) {
  this.name = name || 'Animal'
  this.sleep = function(){
    console.log(this.name + '正在睡觉！')
  }
}
// 原型方法
Animal.prototype.eat = function(food){
  console.log(this.name + '正在吃: ' + food)
}
// 1、原型链继承
function Cat() {
}
Cat.prototype = new Animal()
Cat.prototype.name = 'cat'
// testcode
var cat = new Cat()
console.log(cat.name)
console.log(cat.eat('fish'))
console.log(cat.sleep())
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)

// 2、构造继承
function Cat() {
  Animal.call(this)
  this.name = name  
}
// 3、实例继承
function Cat(name) {
  var instance = new Animal()
  instance.name = name
  return instance
}
// 4.拷贝继承
function Cat(name) {
  var animal = new Animal() 
  for(var p in animal) {
    Cat.prototype[p] = animal[p]
  }
  Cat.prototype.name = name || 'Tom'
}
// 5、组合继承
function Cat(name){
  Animal.call(this)
  this.name = name || 'Tom'
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
// 寄生组合继承
function Cat(name){
  Animal.call(this)
  this.name = name || 'Tom'
}
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){}
  Super.prototype = Animal.prototype
  // 将实例作为子类的原型
  Cat.prototype = new Super()
  Cat.prototype.constructor = Cat
})()