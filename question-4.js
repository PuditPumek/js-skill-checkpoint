// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderTotal) {
  // เริ่มเขียนโค้ดที่นี่
  
  if (orderTotal > 5000) {
    return "Shipping is free.";
  } else if (orderTotal >= 1000 && orderTotal <= 5000) {
    return "Shipping cost is 250 Baht.";
  } else {
    return "Shipping cost is 500 Baht.";
  }
}

// ตัวอย่างการใช้งาน
const orderTotal = [6000, 3000, 150]; 


console.log(calculateShippingCost(orderTotal[0])); // "Shipping is free."
console.log(calculateShippingCost(orderTotal[1])); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal[2])); // "Shipping cost is 500 Baht."
