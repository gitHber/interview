function updateChildren(vnode, newVnode){
  var children = vnode.children || []
  var newChildren = newVnode.children || []

  children.forEach((childVnode, index) => {
    var newChildVnode = newChildren[index]
    if(childVnode.tag === newChildVnode.tag){
      // 继续对比
      updateChildren(childVnode, newChildVnode)
    }else{
      replaceNode(childVnode, newChildVnode)
    }
  });
}
function replaceNode(vnode, newVnode){
  var elem = vnode.elem // 真实的都没节点
  var newElem = createElement(newVnode)

  // 替换
  
}