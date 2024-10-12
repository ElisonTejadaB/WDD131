const PI = 3.14;

function circleArea(radius) {
    const area = radius * radius * PI; // Local area variable
    return area;
}

let area1 = circleArea(3); // Calculate area for radius 3
console.log("Area1:", area1);

let area2 = circleArea(4); // Calculate area for radius 4
console.log("Area2:", area2);

// Display results in the HTML
document.getElementById('results').innerHTML = `
    <p>Area for radius 3: ${area1}</p>
    <p>Area for radius 4: ${area2}</p>
`;
