// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field").value;


  const newDepositAmountNum = parseFloat(newDepositAmount);

  if(newDepositAmountNum<0 || isNaN(newDepositAmountNum)){
    alert('Please type a positive number!!')
    return
  }

  
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = document.getElementById("deposit-total").innerText;

  const previousDepositTotalNum = parseFloat(previousDepositTotal);
   
  // calculate new deposit total
  const newDepositTotal = previousDepositTotalNum + newDepositAmountNum;

 
  // set deposit total value
  
  document.getElementById('deposit-total').innerText = newDepositTotal;

  // get previous balance by using the function
  const previousBalanceTotal = document.getElementById("balance-total").innerText;

  const previousBalanceTotalNum = parseFloat(previousBalanceTotal);

  

  const newBalanceTotal = previousBalanceTotalNum + newDepositAmountNum;


  // setTextElementValueById("balance-total", newBalanceTotal);

  document.getElementById('balance-total').innerText = newBalanceTotal;

  const newDepositAmount2 = document.getElementById("deposit-field").value = '';

  
})

