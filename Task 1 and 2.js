function calculateBMIValue(mass, height) {
  return mass / (height * height);
}

function calculateBMI() {
  // Mark's information
  var mark_mass = parseFloat(document.getElementById("mark_mass").value);
  var mark_height = parseFloat(document.getElementById("mark_height").value);

  // John's information
  var john_mass = parseFloat(document.getElementById("john_mass").value);
  var john_height = parseFloat(document.getElementById("john_height").value);

  // Calculate BMI for Mark and John
  var mark_bmi = calculateBMIValue(mark_mass, mark_height);
  var john_bmi = calculateBMIValue(john_mass, john_height);

  // Compare BMI
  var mark_higher_bmi = mark_bmi > john_bmi;

  // Output
  document.getElementById("mark_bmi").textContent = "Mark's BMI: " + mark_bmi.toFixed(2);
  document.getElementById("john_bmi").textContent = "John's BMI: " + john_bmi.toFixed(2);
  if (mark_higher_bmi)
    document.getElementById("comparison_result").textContent = " Mark have a higher BMI (" + mark_bmi.toFixed(2) + ")  than John's BMI (" + john_bmi.toFixed(2) + ")";
  else
    document.getElementById("comparison_result").textContent = " John have a higher BMI (" + john_bmi.toFixed(2) + ")  than Mark's BMI (" + mark_bmi.toFixed(2) + ")";

}