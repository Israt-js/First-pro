console.log("nooooo")
document.querySelector('.sc').style.display = 'none'
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
            document.querySelector('.s').style.display = 'inline'
            document.querySelector('.sc').style.display = 'none'
        }
        else{
            document.querySelector('.s').style.display = 'none'
            setTimeout(()=>{
                document.querySelector('.sc').style.display = 'inline'
            }, 350);

        }
})