// complete the given function

function palindrome(str){
	str = str.trim();
	let i = 0;
	let j = str.length-1;

	while(i<=j){
		if(str[i] != str[j]){
			return false;
		}
		i = i+1;
		j = j-1;
	}
	return true;
}
module.exports = palindrome
