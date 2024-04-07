let tip1=15
let tip2=20

function calculateTip1(bill,tip1) {
    return (bill*tip1)+bill 
  }
  
function calculateTip2(bill,tip2) {
    return (bill*tip2)+bill 
  }

  function calculateBill() {
    // Mark's information
    var bill = parseFloat(document.getElementById("bill").value);
  
    let tip_1  = (bill*tip1)/100
    let tip_2 = (bill*tip2)/100
  

    // Output
    if(bill <=0){
      document.getElementById("total_bill").textContent ="Not Proper Amount";
   
    }
 if(bill>=50 && bill<=300)
 {
    document.getElementById("tip_1").textContent = "tip is : " + tip1+"%";
    document.getElementById("total_bill").textContent = " The bill was " + bill.toFixed(2) + ",the tip was " + tip_1.toFixed(2) + " and the total value is "+(tip_1+bill)+"";
 }
 else if(bill<=50 || bill>=300)
 {
    document.getElementById("tip_2").textContent = "tip is: " + tip2+"%";
    document.getElementById("total_bill").textContent = " The bill was " + bill.toFixed(2) + ",the tip was  " + tip_2.toFixed(2) + " and the total value is "+(tip_2+bill) +"";
 }
}