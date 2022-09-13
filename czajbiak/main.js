[].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    return new mdc.ripple.MDCRipple(el)
})
document.querySelector('.cat1-button').onclick = function () {
    location.href = '#cat1'
}
document.querySelector('.cat2-button').onclick = function () {
    location.href = '#cat2'
}
document.querySelector('.cat3-button').onclick = function () {
    location.href = '#cat3'
}

document.querySelectorAll('.back-button').forEach((button) => {
  button.onclick = function () {
      location.href = '#menu'
  }
})