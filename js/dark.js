const botonDark = document.querySelector('#botonDark');
const body = document.querySelector('body');
const logo = document.querySelector('.logo')
const headertxt  = document.querySelector('.header-txt');
const nosotrostxt  = document.querySelector('.nosotros-txt');
const navbar  = document.querySelector('.navbar');
const products  = document.querySelector('.products');
const info  = document.querySelector('.tecnologias-container');
// const product  = document.querySelector('.product');



// botonDark.addEventListener('click', e=>{
//     body.classList.toggle('darkmode');
// })



botonDark.addEventListener('click', e=>{
    body.classList.toggle('darkmode');
    logo.classList.toggle('darkmode');
    headertxt.classList.toggle('darkmode');
    nosotrostxt.classList.toggle('darkmode');
    navbar.classList.toggle('darkmode');
    products.classList.toggle('darkmode');
    info.classList.toggle('darkmode');
    // product.classList.toggle('darkmode');
    //------------- menu
    botonDark.classList.toggle('bxs-sun',);
    botonDark.classList.toggle('bxs-moon');
})
