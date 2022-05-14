function cf_CHECK()
{
    let regExp = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
    let cf = document.getElementById('input');
    if (cf.value.search(regExp) == -1) {
        document.getElementById("result").innerHTML = '<span  class=\"fas fa-window-close"\ style=\"font-size:28px;color:red"\></span>';
    }else{
        document.getElementById("result").innerHTML = '<span class=\"fas fa-check-square"\  style=\"font-size:28px;color:green"\></span>';
    }
}