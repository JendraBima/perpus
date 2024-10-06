//deklarasi tombol dan menu
const tombol = document.querySelector(".tombol");
const menu = document.querySelector(".menu");
//membuat event click
//pada saat tombol di click, tambahkan class aktif pada class menu
//saat diklik , maka class aktif dihilangkan dari class menu (toglle)
tombol.addEventListener("click", () => {
    menu.classList.toggle("aktif");
});
