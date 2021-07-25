addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.navbar__btn')
    if(btnMenu){
        btnMenu.addEventListener('click', ()=>{
            const menuItems = document.querySelector('.navbar__menu')
            
            menuItems.classList.toggle('show')


            const menu = document.querySelector('.navbar__contenedor')
            menu.classList.toggle('show__menu')

            const body = document.querySelector('.landing')
            body.classList.toggle('no_scroll')

           
        } )
    }
})