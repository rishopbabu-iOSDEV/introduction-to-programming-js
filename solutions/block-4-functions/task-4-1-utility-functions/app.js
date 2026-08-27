// ============================================================
// TASK 4.1 — Utility Functions
// BLOCK 4: The Function Factory
// ============================================================
// CONCEPTS: function declaration, parameters, return values,
//           arrow functions, Math operations
// ============================================================

// --- FUNCTION 1: Convert Celsius to Fahrenheit ---
// Formula: (C × 9/5) + 32
const convertCelsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

// --- FUNCTION 2: Calculate BMI ---
// Formula: weight(kg) / height(m)²
// BMI Categories: <18.5 Underweight | 18.5–24.9 Normal | 25–29.9 Overweight | 30+ Obese
const calculateBMI = (weightKg, heightMetres) => {
  const bmi = weightKg / (heightMetres * heightMetres);
  return parseFloat(bmi.toFixed(1)); // Round to 1 decimal place
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25)   return "Normal weight ✅";
  if (bmi < 30)   return "Overweight";
  return "Obese";
};

// --- FUNCTION 3: Get Full Name ---
// Combines first and last name, handles extra spaces
const getFullName = (firstName, lastName) => {
  return `${firstName.trim()} ${lastName.trim()}`;
};

// --- FUNCTION 4: Check if a number is even ---
// Returns true (even) or false (odd)
const isEven = (number) => {
  return number % 2 === 0;
};

// ============================================================
// TESTING ALL FUNCTIONS
// ============================================================
console.log("🌡️  Temperature Conversions:");
console.log(`0°C  = ${convertCelsiusToFahrenheit(0)}°F`);     // 32
console.log(`100°C = ${convertCelsiusToFahrenheit(100)}°F`);  // 212
console.log(`37°C  = ${convertCelsiusToFahrenheit(37)}°F`);   // 98.6 (body temp)

console.log("\n⚖️  BMI Calculator:");
const bmi1 = calculateBMI(70, 1.75);
console.log(`70kg, 1.75m → BMI: ${bmi1} (${getBMICategory(bmi1)})`);
const bmi2 = calculateBMI(50, 1.60);
console.log(`50kg, 1.60m → BMI: ${bmi2} (${getBMICategory(bmi2)})`);

console.log("\n👤 Full Name:");
console.log(getFullName("  Priya", "Nair  "));    // "Priya Nair"
console.log(getFullName("Karan", "Mehta"));        // "Karan Mehta"

console.log("\n🔢 Even/Odd Check:");
console.log(`4  is even: ${isEven(4)}`);   // true
console.log(`7  is even: ${isEven(7)}`);   // false
console.log(`100 is even: ${isEven(100)}`); // true

// ✅ What to try next:
//   - Add a convertFahrenheitToCelsius() function (reverse of the first)
//   - Add an isOdd() function that uses isEven() inside it
//   - Add a calculateArea(shape, ...dimensions) function
