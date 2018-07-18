/**
 * zepto源码解析
 */
(function(window){
  var zepto = {}

  function Z(dom, selector){
    var i, len = dom.length || 0
    for(i = 0; i<len;i++){
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  zepto.Z = function(dom, selector){
    return new Z(dom, selector)
  }

  zepto.init = function(selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    return zepto.Z(dom, selector)
  }
  var $ = function(selector) {
    return zepto.init(selector)
  }
  window.$ = $
  $.fn = {
    constructor: zepto.Z,
    css: function(key, value){
      if(this.length > 0){
        for(let i = 0;i<this.length;i++){
          this[i].style[key] = value
        }
      }
    },
    html: function(value){
      if(value && this.length > 0){
        for(let i = 0;i<this.length;i++){
          this[i].innerHTML = value
        }
        return value
      } else if(!value && this.length > 0){
        return this[0].innerHTML
      }
      return ''
    }
  }
  Z.prototype = $.fn
})(window)