// ------------- Temperature Conversion ---------------------- //
document.getElementById("fahn").addEventListener("input", () => {
    var fahrenheit = document.getElementById("fahn").value;
    if (fahrenheit !== "") {
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("cel").value = celsius.toFixed(2);
    } else {
        document.getElementById("cel").value = ""; 
    }
});
document.getElementById("cel").addEventListener("input", () => {
    var celsius = document.getElementById("cel").value;
        if (celsius !== "") {
            var fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById("fahn").value = fahrenheit.toFixed(2); 
        } else {
            document.getElementById("fahn").value = "";
        }
     });
// ---------------- Feet to Meters ------------------------ //
document.getElementById("ft").addEventListener("input", () => {
    var foot = document.getElementById("ft").value;
        if (foot !== "") {
            var meter = foot * 0.3048;
            document.getElementById("met").value = meter.toFixed(2);
        } else {
            document.getElementById("met").value = "";
        }
    });
document.getElementById("met").addEventListener("input", () => {
    var meter = document.getElementById("met").value;
        if (meter !== "") {
            var foot = meter * 3.281;
            document.getElementById("ft").value = foot.toFixed(2);
        } else {
            document.getElementById("ft").value = "";
        }
    });
