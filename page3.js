
function result() {
    let amount = document.getElementById('amount').value;
    let balance = document.getElementById('balance').value;
    const correctbalance= "50000";


    
    let remainingbalance = correctbalance - amount;
           
    if (amount === correctbalance) {
        alert("Zero balance");
    
    } else if (amount< correctbalance ) {
        alert("Remaining balance:" +remainingbalance);
    } 
}

   function res(){
    
    let icon = document.getElementById('icon').onclick = function() {
        window.location.href = 'dashboard.html';
   }  
     
   }
 