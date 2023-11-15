const width = parseFloat(prompt("Enter a width of a rectangle?"));

const height = parseFloat(prompt("Enter a height of a rectangle?"));

const area= parseFloat(width*height)

const html3 = `<p>Width: ${width}</p>

<p>Height: ${height}</p>

<p>Area: ${area.toFixed(3)}</p>`;

document.write(html3);