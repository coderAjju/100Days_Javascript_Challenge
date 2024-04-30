//Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appear in the string. The function should be case sensitive.

function countChar(str, char) {
    let newStr = str.replace(/[" "]/g,"");
    let cc = 0;
    for (let i = 0; i < newStr.length; i++) {
        if(char === newStr[i]){
            cc++;
        }
    }
    return cc;
}
let char = 'h'
let str = 'hello i am Ajay Apple'
console.log(`Total occurence of ${char}  is `,countChar(str,char)," in given string ");
