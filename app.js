// https://calculator.swiftutors.com/interior-angles-of-a-polygon-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const sumofInteriorAnglesRadio = document.getElementById('sumofInteriorAnglesRadio');
const numberofSidesofaPolygonRadio = document.getElementById('numberofSidesofaPolygonRadio');

let sumofInteriorAngles;
let numberofSidesofaPolygon = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

sumofInteriorAnglesRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of Sides of a Polygon';
  numberofSidesofaPolygon = v1;
  result.textContent = '';
});

numberofSidesofaPolygonRadio.addEventListener('click', function() {
  variable1.textContent = 'Sum of Interior Angles (Degrees)';
  sumofInteriorAngles = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(sumofInteriorAnglesRadio.checked)
    result.textContent = `Sum of Interior Angles = ${computeSumofInteriorAngles().toFixed(5)} Degrees`;

  else if(numberofSidesofaPolygonRadio.checked)
    result.textContent = `Number of Sides of a Polygon = ${computeNumberofSidesofaPolygon().toFixed(5)}`;
})

// calculation

function computeSumofInteriorAngles() {
  return 180 * (Number(numberofSidesofaPolygon.value) - 2);
}

function computeNumberofSidesofaPolygon() {
  return (Number(sumofInteriorAngles.value) / 180) + 2;
}