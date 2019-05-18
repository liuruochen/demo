
var arrList = document.getElementsByClassName('wrap')

function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    var height  = Math.max(cHeight, sHeight)
    return height
}

//根据ID获取iframe对象
//content.onload = 
function getHeight(content){
    //解决打开高度太高的页面后再打开高度较小页面滚动条不收缩
    content.style.height='0px';
    var iDoc = content.contentDocument || content.document
    var height = calcPageHeight(iDoc)
    if(height < 850){
        height = 850;
    }
    content.style.height = height + 'px'
}

for(let i=0;i<arrList.length;i++){
    arrList[i].onload = getHeight(arrList[i])
}