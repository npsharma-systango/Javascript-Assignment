<script>
function findUnique(str){
  // The variable that contains the unique values
  let uniq = "";
   
  for(let i = 0; i < str.length; i++){
    // Checking if the uniq contains the character
    if(uniq.includes(str[i]) === false){
      // If the character not present in uniq
      // Concatenate the character with uniq
      uniq += str[i]
    }
  }
  return uniq;
}
 
console.log(findUnique("Geeksforgeeks"))
console.log(findUnique("Geeksforgeeks Is a great site for computer science"))
</script>