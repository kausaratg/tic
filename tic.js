var restart = document.querySelector('#bu')
var select = document.querySelectorAll('td')
function clearboard(){
 for (i = 0; i < select.length; i++ ){
     select[i].textContent = ''
    }
}
restart.addEventListener('click', clearboard)

function funcSpace(){
    if (this.textContent === ''){
        this.textContent = 'X'
        this.style.color = 'red'
    }else if (this.textContent === 'X'){
        this.textContent = 'O'
        this.style.color = 'blue'
    }else{
        this.textContent = ' '
    }
}
for (var i = 0 ; i < select.length; i++){
    select[i].addEventListener('click', funcSpace)
}



