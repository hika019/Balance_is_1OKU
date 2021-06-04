

window.onload = function(){
  var html_balance_str = '<span class=\"fLeft\">残高</span><span class=\"fRight\">';
  var html_payBalance_str1 = '<span class="fLeft">（お支払い可能残高</span><span class="fRight">';
  var str_end = '&nbsp;&nbsp;円</span></p>';

  var balance = "100000000";
  var balance_str = "";
  while(balance.length>3){
    balance_str = ","+balance.slice( -3) + balance_str;
    balance = balance.slice(0, -3);
  }
  balance_str = balance + balance_str;


  var balance = document.getElementsByClassName('balance')[0];
  balance.innerHTML = html_balance_str + balance_str + str_end;

  var payBalance = document.getElementsByClassName('payBalance')[0];
  payBalance.innerHTML = html_payBalance_str1+ balance_str + str_end;

}
