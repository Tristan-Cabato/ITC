        // Output Line //
    document.getElementById("FSA").addEventListener("input", () => {
        var number = document.getElementById("FSA").value;
        document.getElementById("temporary").textContent = "The __ of " +number+ " is:";
    });
        // Factorial //
    document.getElementById("factr").addEventListener("click", () => {
     var factorial = document.getElementById("FSA").value;
     var holder = 1;
     var number2 = factorial;

    while (factorial > 0) {
        holder *= factorial;
        factorial--;
        }
    document.getElementById("temporary").textContent = "The Factorial of " +number2+ " is: " + holder; 
    });
        // Sum //
    document.getElementById("sumName").addEventListener("click", () => {
        var sum = parseInt(document.getElementById("FSA").value);
        var added = 0;
        var number3 = sum;

    do {
        added += sum;
        sum--;
    } while (sum > 0);
    document.getElementById("temporary").textContent = "The Sum of the first " +number3+ " numbers is: " + added;
    });
        // Average //
    document.getElementById("avr").addEventListener("click", () => {
        var avr = parseInt(document.getElementById("FSA").value);
        var totaller = 0;
        var number4 = avr;
        
    for (; avr > 0; avr--) {
        totaller += avr;
        }
    var totaller = totaller / number4;
    document.getElementById("temporary").textContent = "The Average of the first " +number4+ " numbers is: " +totaller.toFixed(2);
    });