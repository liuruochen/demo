var content = document.getElementById('content')
var iwindow = content.contentWindow;

function onloadeFooter(){
    var footer = document.getElementById('footer')
    footer.innerHTML = 'smile ^v^'
    footer.style.display = 'block'
    footer.style.height = '70px'
    footer.style.textAlign= 'center'
    footer.style.fontSize = '25px'
    footer.style.backgroundColor = 'rgb(6, 121, 136)'
    footer.style.lineHeight = '70px'
}
onloadeFooter()
function toHome(){
    content.src = 'home.html'
}

function toInfo(){
    content.src = 'info.html'
}

function toManage(){
    content.src = 'manage.html'
}

function toHistory(){
    content.src = 'history.html'
}

function toHonour(){
    content.src = 'honour.html'
}

function toAbout(){
    content.src = 'about.html'
}

// 计算页面的实际高度，iframe自适应会用到
function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    var height  = Math.max(cHeight, sHeight)
    return height
}
//根据ID获取iframe对象
content.onload = ()=>{
    change()
}
function change() {
    //解决打开高度太高的页面后再打开高度较小页面滚动条不收缩
    content.style.height='0px';
    var iDoc = iwindow.contentDocument || iwindow.document
    var height = calcPageHeight(iDoc)
    /*if(height < 850){
        height = 850;
    }*/
    content.style.height = height + 30 + 'px'
}

window.onload = ()=>{
    change()
}
window.onresize= ()=> {
    change()
}
