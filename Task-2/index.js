let moveproduct = document.querySelector('.moveproduct .list');


let items = document.querySelectorAll('.moveproduct .list .item');
let send = document.getElementById('send');
let back = document.getElementById('back');
let ponits = document.querySelectorAll('.moveproduct .ponits li');



let lengthItems = items.length - 1;
let active = 0;


send.onclick = function () {
    
    active = active + 1 <= lengthItems ? active +1:0;
    reloadmoveproduct();
}


back.onclick = function () {

    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadmoveproduct();
}
let refreshInterval = setInterval(() => { send.click() }, 3000);




function reloadmoveproduct() {

    moveproduct.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.moveproduct .ponits li.active');
    last_active_dot.classList.remove('active');
    ponits[active].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { send.click() }, 3000);
}

ponits.forEach((li, key) => {
    
    li.addEventListener('click', () => {
        active = key;
        reloadmoveproduct();
    })
})


window.onresize = function (event) {
    reloadmoveproduct();
};