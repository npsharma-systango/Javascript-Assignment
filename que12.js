const number = prompt("Enter a number: ");
function is_even_recursion(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
      alert("even number")
    return true;
  }
  if (number===1) 
  {
    alert("odd number")
    return false;
  }
  else 
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
document.write(is_even_recursion(number)); 
