function createElement(vnode){
  var tag = vnode.tag // ‘ul’
  var attrs = vnode.attrs || {}
  var children = vnode.children || []
  if(tag) {
    return null
  }
  // 创建元素
  var elem = document.createElement(tag)
  // 属性
  var attrName
  for(attrName in attrs){
    if(attrs.hasOwnProperty(attrName)){
      elem.setAttribute(attrName, attrs[attrName])
    }
  }
  children.forEach(childVnode => {
    // 添加子元素
    elem.appendChild(createElement(childVnode))
  });
  // 返回真实的dom元素
  return elem
}