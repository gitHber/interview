(function(window){
  var jQuery = function(selector){
    return new jQuery.fn.init(selector)
  }
  jQuery.fn = {
    constructor: jQuery,
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
    },
    extends: function(key, fn){
      init.prototype[key] = fn
    }
  }
  var init = jQuery.fn.init = function(selector){
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    var i, len = dom.length || 0
    for(i=0; i<len; i++){
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  init.prototype = jQuery.fn
  window.$ = jQuery
})(window)