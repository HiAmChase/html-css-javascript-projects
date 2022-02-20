const toggle = () => {
  let checkBox = document.getElementsByTagName('input')[0]

  if (checkBox.checked) {
    document.body.style.backgroundColor = '#e3e3e3'
    document.getElementsByTagName('label')[0].style.backgroundColor = '#d1cfcf'
    document.getElementsByTagName('span')[0].style.backgroundColor = '#e3e3e3'
    document.getElementsByTagName('span')[0].style.border = '5px #d1cfcf solid'
  } else {
    document.body.style.backgroundColor = '#333'
    document.getElementsByTagName('label')[0].style.backgroundColor = '#222'
    document.getElementsByTagName('span')[0].style.backgroundColor = '#333'
    document.getElementsByTagName('span')[0].style.border = '5px #222 solid'
  }
}
