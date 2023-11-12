/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = document.getElementById("withdraw-field").value;

  const newWithdrawAmountNum = parseFloat(newWithdrawAmount);

  if(newWithdrawAmountNum<0 || isNaN(newWithdrawAmountNum)){
    alert('Please type a positive number!!')
    return
  }

  const previousBalanceTotal = document.getElementById("balance-total").innerText;

  const previousBalanceTotalNum = parseFloat(previousBalanceTotal);

  if(newWithdrawAmountNum>previousBalanceTotalNum){
    alert('Tomar kasa Ato taka nai');
    return
  }


  const previousWithdrawTotal = document.getElementById("withdraw-total").innerText;

  const previousWithdrawTotalNum = parseFloat(previousWithdrawTotal);


  const newWithdrawTotal = previousWithdrawTotalNum + newWithdrawAmountNum;


  // setTextElementValueById(withdraw - total, newWithdrawTotal);

  document.getElementById('withdraw-total').innerText = newWithdrawTotal;

  

  

  const newBalanceTotal = previousBalanceTotalNum - newWithdrawAmount;
  document.getElementById("balance-total").innerText = newBalanceTotal;

  document.getElementById("withdraw-field").value = '';

  if(newWithdrawAmountNum>previousBalanceTotalNum){
    alert('Tomar kasa Ato taka nai');
    return
  }
  
});
