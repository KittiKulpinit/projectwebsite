const menuToggle = document.getElementById('menu__toggle');

function handleResize() {
    if (window.innerWidth > 600 && menuToggle.checked) {
        menuToggle.checked = false; // ยกเลิก checkbox เพื่อปิดเมนู
    }
}

window.addEventListener('resize', handleResize);

function gallery1() {
    
}