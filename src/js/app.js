
const showMenu  = (toggleId,navId)=>{
const toggle = document.getElementById (toggleId),
      nav = document.getElementById (navId)
      if(toggle && nav){
        toggle.addEventListener("click",()=>{
              nav.classList.toggle("show")
          })
      }
}
showMenu("main-menu-hamburger","main-nav")

// const getScrollBarWidth=()=>innerWidth -
// document.documentElement.clientWidth
// document.documentElement.style.setProperty("--scroll-bar",getScrollBarWidth())