const showMenu =(tooggleId,navId)=>{
    const toggle=document.getElementById(tooggleId);
    const nav=document.getElementById(navId)

    if(toggle && nav){
toggle.addEventListener('click',()=>{
    console.log("BUtoonclicked")
    nav.classList.toggle('show')
})
    }
}
showMenu('nav-toggle','nav__menu')


// remove menubar
const navLink=document.querySelectorAll('.nav__link');
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    //remove menu  mobile
    const navMenu=document.getElementById('nav__menu')
 navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))