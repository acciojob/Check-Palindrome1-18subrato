// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/\W/g,'')
    let newStr = str.split('').reverse().join('')
    console.log(newStr)
    console.log(str)
    if(newStr == str){
        return true;
    }
    
    return false;
}
module.exports = palindrome
