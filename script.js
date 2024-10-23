function firstNonRepeatedChar(str) {
 // Write your code here
	let count = 1;
	let store = Array(26).fill(0);
	for(let i=0;i<str.length;i++)
		{
			store[str[i].charCodeAt()-97]++;
		}
	for(let i=0;i<str.length;i++)
		{if(store[str[i].charCodeAt()-97]==1) return str[i];}
	
	return null;
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
