function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear the amount deposited in deposit-input
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    /* debugger; */
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;


}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')

   /*  const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {

        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}

//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    //     //get the amount deposited

    //     const depositInput = document.getElementById('deposit-input');
    //     const depositAmountText = depositInput.value;
    //     const depositAmount = parseFloat(depositAmountText);

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    else{
        alert("Sorry!!!, You can't deposite negative amount. ");
    }




    //add the amount that deposited to see
    /* 
        const depositTotal = document.getElementById('deposit-total');
        const depositTotalText = depositTotal.innerText;
        const previousDepositTotal = parseFloat(depositTotalText);
        depositTotal.innerText = previousDepositTotal + depositAmount;  */
    //clear the amount deposited in deposit-input
    // depositInput.value = '';


    /*  updateTotalField('deposit-total', depositAmount); */

    //update balance
    /* 
        const balanceTotal = document.getElementById('balance-total')
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText =  previousBalanceTotal + depositAmount;  */


    /*   updateBalance(depositAmount,true); */

});

//handlw withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    /*  const withdrawAmount = getInputValue('withdraw-input'); */

    //update Withdraw total

    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
   */
    // withdrawInput.value = '';

    /*   updateTotalField('withdraw-total', withdrawAmount); */


    //update balance after withdraw total
    /* 
        const balanceTotal = document.getElementById('balance-total')
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText =  previousBalanceTotal - withdrawAmount; 
     */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){

        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount, false);
    } 
    if (withdrawAmount>currentBalance){
       alert("Sorry!!!, Your current balance is not enough to withdraw. ");
    }
});