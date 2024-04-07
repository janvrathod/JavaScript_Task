
function calculateAvg(one, two, three) {
    return (one + two + three) / 3;
}
function calculateavgscore() {

    var D1st = parseFloat(document.getElementById("D1st").value);
    var D2nd = parseFloat(document.getElementById("D2nd").value);
    var D3rd = parseFloat(document.getElementById("D3rd").value);

    var K1st = parseFloat(document.getElementById("K1st").value);
    var K2nd = parseFloat(document.getElementById("K2nd").value);
    var K3rd = parseFloat(document.getElementById("K3rd").value);


    // Calculate avg score for dolphine and koalas
    var dolphine_avg = calculateAvg(D1st, D2nd, D3rd);
    var koalas_avg = calculateAvg(K1st, K2nd, K3rd);

    console.log(dolphine_avg)
    console.log(koalas_avg)

    // Compare score
    var higher_score = dolphine_avg > koalas_avg && dolphine_avg>=100;

    document.getElementById("comparison_result").textContent = " dolphine have a  higher avg score  " + dolphine_avg.toFixed(2) + " than koalas " + koalas_avg.toFixed(2) + "." 

    // Output
    document.getElementById("Dolphin's_average_Score").textContent = "Dolphine's_Score: " + dolphine_avg.toFixed(2);
    document.getElementById("Koalas's_average_Score").textContent = "Koalas's_Score: " + koalas_avg.toFixed(2);
    
    if (dolphine_avg > koalas_avg && dolphine_avg>=100){
        document.getElementById("comparison_result").textContent = " dolphine won the match"// a  higher average score  " + dolphine_avg.toFixed(2) + " than koalas " + koalas_avg.toFixed(2) + ""
    }
    else if(koalas_avg > dolphine_avg && koalas_avg>=100)
      {  
    document.getElementById("comparison_result").textContent = " koalas won the match"//have a  higher avg score  " + koalas_avg.toFixed(2) + " than dolphine " + dolphine_avg.toFixed(2) + ""

      }
      else if(dolphine_avg === koalas_avg && dolphine_avg>=100){
            document.getElementById("comparison_result").textContent = " match is drawn"// koalas have a  higher avg score  " + koalas_avg.toFixed(2) + " than dolphine " + dolphine_avg.toFixed(2) + ""

        }
        else
        {
            document.getElementById("comparison_result").textContent = "no onw won the match"
  
        }


    }