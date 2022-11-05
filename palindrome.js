let str="naman"

function reverse(str){
let bag="";
 for(let i=str.length-1;i>=0;i--){

  bag+=str[i];
}
   return bag;

} let reversed=reverse(str);
   if(str=reversed){
console.log("Palindrome");
} else{
console.log("NA")
}
