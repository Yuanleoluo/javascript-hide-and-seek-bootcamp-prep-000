function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested .target')
}

function increaseRankBy(n){
  var a = document.querySelectorAll('.ranked-list')
  for (let i = 0; i<a[0].length; i++){
    parseInt(document.querySelectorAll('.ranked-list')[0].children[i].innerHTML) + n
  }

  for (let i = 0; i<a[1].length; i++){
    parseInt(document.querySelectorAll('.ranked-list')[1].children[i].innerHTML) + n
  }
}
