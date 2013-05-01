function stripBad(string) {
    for (var i=0, output='', valid="0123456789."; i<string.length; i++)
       if (valid.indexOf(string.charAt(i)) != -1)
          output += string.charAt(i);
    //console.log(output);
    return output;
} 

function comma(num) {
 var n = Math.floor(num);
 var myNum = num + "";
 var myDec = ""
 
 if (myNum.indexOf('.',0) > -1){
  myDec = myNum.substring(myNum.indexOf('.',0),myNum.length);
 }

  var arr=new Array('0'), i=0; 
  while (n>0) 
    {arr[i]=''+n%1000; n=Math.floor(n/1000); i++;}
  arr=arr.reverse();
  for (var i in arr) if (i>0) //padding zeros
    while (arr[i].length<3) arr[i]='0'+arr[i];
  return arr.join() + myDec;
}

function resetAnswer()
{
  document.TipForm.tipResult.value = "0";
  document.TipForm.totalResult.value = "0";
  //document.TipForm.tipEachResult.value = "";
  document.TipForm.totalEachResult.value = "0";
}

function cent(amount)
{
  amount -= 0;
  amount = Math.round(amount * 100)/100;
  return (amount == Math.floor(amount)) ? amount + '.00' : (  (amount*10 == Math.floor(amount*10)) ? amount + '0' : amount);
}

function calculateTip()
{
  var billAmount = parseFloat(stripBad(document.TipForm.billAmount.value));
  if (isNaN(billAmount)) billAmount = 0.0;
  document.TipForm.billAmount.value = comma(cent(billAmount));

  var tipPercentage = parseFloat(stripBad(document.TipForm.tipPercentage.value));
  if (isNaN(tipPercentage)) tipPercentage = 0.0;
  document.TipForm.tipPercentage.value = tipPercentage;

  var qtyPeople = parseInt(stripBad(document.TipForm.qtyPeople.value));
  if (isNaN(qtyPeople)) qtyPeople = 1;
  if (qtyPeople < 1) qtyPeople = 1;
  document.TipForm.qtyPeople.value = qtyPeople;

  var tipResult = 0;
  var totalResult = 0;
  //var tipEachResult = 0;
  var totalEachResult = 0;

  tipResult = (tipPercentage / 100) * billAmount;
  totalResult = tipResult + billAmount;
  //tipEachResult = tipResult / qtyPeople;
  totalEachResult = totalResult / qtyPeople;

  document.TipForm.tipResult.value = comma(cent(tipResult));
  document.TipForm.totalResult.value = comma(cent(totalResult));
  //document.TipForm.tipEachResult.value = comma(cent(tipEachResult));
  document.TipForm.totalEachResult.value = comma(cent(totalEachResult));
  return false;
}
