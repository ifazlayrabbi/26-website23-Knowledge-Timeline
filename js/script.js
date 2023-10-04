/* Javascript code to find
   if each item is in the Viewport */

const items = document.querySelectorAll ('#timeline li')

function isInViewport (item1) {
  const rect = item1.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const run = () => 
  items.forEach (item => {
    if (isInViewport (item)) {
      item.classList.add ('show')
    }
  })

window.addEventListener('load', run)
window.addEventListener('resize', run)
window.addEventListener('scroll', run)


