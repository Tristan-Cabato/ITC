document.getElementById("entry").addEventListener("input", () => {
    var income = document.getElementById("entry").value;
    var tax = 0;
  if (income > 8000000) {
        tax = (income - 8000000) * 0.35 + 2410000;
    } else if (income > 2000000) {
        tax = (income - 2000000) * 0.32 + 490000;
    } else if (income > 800000) {
        tax = (income - 800000) * 0.30 + 130000;
    } else if (income > 400000) {
        tax = (income - 400000) * 0.25 + 30000;
    } else if (income > 250000) {
        tax = (income - 250000) * 0.20;
    } 
    document.getElementById("tax").textContent = "Tax is " + tax.toFixed(2);
});