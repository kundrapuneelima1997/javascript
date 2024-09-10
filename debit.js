
function result() {
    let amount =parseFloat(document.getElementById('amount').value);
    let balance = parseFloat(document.getElementById('balance').value);
    const correctbalance= 50000;


    
    let remainingbalance = correctbalance - amount;
           
    if (amount === correctbalance) {
        alert("Zero balance");
    
    } else if (amount < correctbalance ) {
        alert("Remaining balance:" +remainingbalance);
    } 
    document.getElementById('amount').value = '';
    document.getElementById('balance').value = '';
}

   function res(){
    
    let icon = document.getElementById('icon').onclick = function() {
        window.location.href = 'dashboard.html';
   }  
     
   }
 function add(){
    let amount = parseFloat(document.getElementById('amount').value);
    let balance = parseFloat(document.getElementById('balance').value);
    const correctbalance = 50000;
     
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let totalbalance = correctbalance + amount;
    
        alert("Totalbalance:" +totalbalance);
    document.getElementById('amount').value = '';
    document.getElementById('balance').value = '';
}
