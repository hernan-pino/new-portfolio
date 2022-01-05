let copy = document.querySelector('.copy')

copy.querySelector('button').addEventListener('click',() => {
    let input = copy.querySelector('input.text')
    input.select()
    document.execCommand('copy')

    copy.classList.add('active')

    window.getSelection().removeAllRanges()

    setTimeout(() => {
        copy.classList.remove('active')
    }, 1500)
})




function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    console.log('funciona')
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)