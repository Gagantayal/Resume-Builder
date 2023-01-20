function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
function checkname(str){
var text=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
return text.test(str);
}

module.exports={
    checkPassword,
   checkname
} 
    
