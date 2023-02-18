// getting views
const triangle_b = document.getElementById('triangle-b');
const triangle_h = document.getElementById('triangle-h');

const rectangle_w = document.getElementById('rectangle-w');
const rectangle_l = document.getElementById('rectangle-l');

const para_b = document.getElementById('para-b');
const para_h = document.getElementById('para-h');

const rhombus_d1 = document.getElementById('rhombus-d1');
const rhombus_d2 = document.getElementById('rhombus-d2');

const pentagon_p = document.getElementById('pentagon-p');
const pentagon_b = document.getElementById('pentagon-b');

const ellipse_a = document.getElementById('ellipse-a');
const ellipse_b = document.getElementById('ellipse-b');

const cards = document.querySelectorAll('.cards-holder .card');


const resultHolder = document.getElementById('result-holder');



// buttons
const triangle_calculate = document.getElementById('triangle-calculate');


// variables
let triangleArea = 0;

//reusable functions
function multiply(a, b) {
    return a * b;
}

// console log clicked button's inner html
function toMeter(e) {
    let value = parseFloat(e.parentNode.childNodes[3].childNodes[0].innerHTML);
    value = value / 10000;
    const area = e.parentNode.childNodes[3].childNodes[0];
    area.innerHTML = value;
}

// delete selected item
function deleteItem() {
    const li = document.querySelectorAll('li');
    li.forEach(item => {
        item.addEventListener('click', function () {
            item.remove();
        });
    });
}





function createLi(name, value) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="d-flex justify-content-between align-items-center py-2">
        <span>${name}</span>
        <span id="res"><span id="area">${value.toFixed(2)}</span>cm<sup>2</sup></span>
        <button onclick="toMeter(this)" class="btn btn-primary btn-sm">to m<sup>2</sup></button>
        <button class="btn btn-danger btn-sm" onclick="deleteItem()">x</button>
        </div>
    `;
    return li;
}



// random background color and set it to card on mouse over
// set the color opacity to 0.5
cards.forEach(card => {
    card.addEventListener('mouseover', function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = `#${randomColor}50`;
    });
});


// area of triangle
function triangle() {
    // validation
    if (triangle_b.value !== '' && triangle_h.value !== '' && triangle_b.value > 0 && triangle_h.value > 0) {
        const b = parseFloat(triangle_b.value);
        const h = parseFloat(triangle_h.value);
        triangleArea = multiply(b, h) / 2;
        // console.log(triangleArea);
        resultHolder.appendChild(createLi("Triangle", triangleArea));
    } else {
        alert('Please enter valid values');
    }
}


// area of rectangle
function rectangle() {
    // validation
    if (rectangle_w.value !== '' && rectangle_l.value !== '' && rectangle_w.value > 0 && rectangle_l.value > 0) {
        const w = parseFloat(rectangle_w.value);
        const l = parseFloat(rectangle_l.value);
        rectangleArea = multiply(w, l);
        // console.log(rectangleArea);
        resultHolder.appendChild(createLi("Rectangle", rectangleArea));
    } else {
        alert('Please enter valid values');
    }
}


// area of parallelogram
function parallelogram() {
    // validation
    if (para_b.value !== '' && para_h.value !== '' && para_b.value > 0 && para_h.value > 0) {
        const b = parseFloat(para_b.value);
        const h = parseFloat(para_h.value);
        paraArea = multiply(b, h);
        // console.log(paraArea);
        resultHolder.appendChild(createLi("Parallelogram", paraArea));
    } else {
        alert('Please enter valid values');
    }
}

// area of rhombus
function rhombus() {
    // validation
    if (rhombus_d1.value !== '' && rhombus_d2.value !== '' && rhombus_d1.value > 0 && rhombus_d2.value > 0) {
        const d1 = parseFloat(rhombus_d1.value);
        const d2 = parseFloat(rhombus_d2.value);
        rhombusArea = multiply(d1, d2) / 2;
        // console.log(rhombusArea);
        resultHolder.appendChild(createLi("Rhombus", rhombusArea));
    } else {
        alert('Please enter valid values');
    }
}

// area of pentagon
function pentagon() {
    // validation
    if (pentagon_p.value !== '' && pentagon_b.value !== '' && pentagon_p.value > 0 && pentagon_b.value > 0) {
        const p = parseFloat(pentagon_p.value);
        const b = parseFloat(pentagon_b.value);
        pentagonArea = multiply(p, b) / 2;
        // console.log(pentagonArea);
        resultHolder.appendChild(createLi("Pentagon", pentagonArea));
    } else {
        alert('Please enter valid values');
    }
}

// area of ellipse
function ellipse() {
    // validation
    if (ellipse_a.value !== '' && ellipse_b.value !== '' && ellipse_a.value > 0 && ellipse_b.value > 0) {
        const a = parseFloat(ellipse_a.value);
        const b = parseFloat(ellipse_b.value);
        const Pi = 3.14
        ellipseArea = multiply(a, b) * Pi;
        // console.log(ellipseArea);
        resultHolder.appendChild(createLi("Ellipse", ellipseArea));
    } else {
        alert('Please enter valid values');
    }
}