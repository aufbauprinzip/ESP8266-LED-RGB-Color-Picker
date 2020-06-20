var body = document.body, 
    // Saving current values from the range slider
    r = document.getElementById('r'),
    g = document.getElementById('g'),
    b = document.getElementById('b'),
    h = document.getElementById('h'),
    // Saving current values from the numerical output
    r_out = document.getElementById('r_out'),
    g_out = document.getElementById('g_out'),
    b_out = document.getElementById('b_out'),
    h_out = document.getElementById('h_out'),
    // Save current color name
    color = document.getElementById('color');


/* This function sets the range slider for the Red, Green, Blue & Hue dynamically */   
function setWhiteMax(){
  var input_r = document.getElementById("r"),
      input_g = document.getElementById("g"),
      input_b = document.getElementById("b"), 
      input_h = document.getElementById("h"),
      r_max = 255 - parseInt(h.value, 10);
      g_max = 255 - parseInt(h.value, 10);
      b_max = 255 - parseInt(h.value, 10);     
      h_max = 255 - Math.max(parseInt(r.value, 10), parseInt(g.value, 10), parseInt(b.value, 10));
  input_r.setAttribute("max", r_max);
  input_g.setAttribute("max", g_max);
  input_b.setAttribute("max", b_max);
  input_h.setAttribute("max", h_max);
}

/* This function composes the Hex color number and sets the background */
function setColor(){
  var r_dec = parseInt(r.value, 10) + parseInt(h.value, 10),
      r_hex = r_dec.toString(16),
      g_dec = parseInt(g.value, 10) + parseInt(h.value, 10),
      g_hex = g_dec.toString(16),
      b_dec = parseInt(b.value, 10) + parseInt(h.value, 10),
      b_hex = b_dec.toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.backgroundColor = hex; 
  color.value = ntc.name(hex);
  localStorage.color = color.value;
  localStorage.r_dec = r_dec;
  localStorage.g_dec = g_dec;
  localStorage.b_dec = b_dec;
}

/* Function to add leading zeros to hex number, if necessary */
function pad(n){
  return (n.length<2) ? "0"+n : n;
}

/* Sets of if statements to set the color outputs to zero, if undefined */
if (typeof localStorage.r_local == 'undefined') {
  localStorage.r_local = 0
}
if (typeof localStorage.g_local == 'undefined') {
  localStorage.g_local = 0
}
if (typeof localStorage.b_local == 'undefined') {
  localStorage.b_local = 0
}
if (typeof localStorage.h_local == 'undefined') {
  localStorage.h_local = 0
}

/* Series of eventlistener, that will  change the color and update the URL when the sliders are being used*/
r.addEventListener('change', function() {
  setColor();
  r_out.value, localStorage.r_local = r.value;
  window.location.href ="?red=" + localStorage.r_dec + "&green=" + localStorage.g_dec + "&blue=" + localStorage.b_dec;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value, localStorage.g_local = g.value;
  window.location.href ="?red=" + localStorage.r_dec + "&green=" + localStorage.g_dec + "&blue=" + localStorage.b_dec;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value, localStorage.b_local = b.value;
  window.location.href ="?red=" + localStorage.r_dec + "&green=" + localStorage.g_dec + "&blue=" + localStorage.b_dec;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);

h.addEventListener('change', function() {
  setColor();
  h_out.value, localStorage.h_local = h.value;
  window.location.href ="?red=" + localStorage.r_dec + "&green=" + localStorage.g_dec + "&blue=" + localStorage.b_dec;
}, false);

h.addEventListener('input', function() {
  setColor();
  h_out.value = h.value;
}, false);

/* Updating of HTML elements (rangeslider, numeric output and color name) */
document.getElementById('r').value = localStorage.r_local;
document.getElementById('r_out').innerHTML = localStorage.r_local;
document.getElementById('g').value = localStorage.g_local;
document.getElementById('g_out').innerHTML = localStorage.g_local;
document.getElementById('b').value = localStorage.b_local;
document.getElementById('b_out').innerHTML = localStorage.b_local;
document.getElementById('h').value = localStorage.h_local;
document.getElementById('h_out').innerHTML = localStorage.h_local;
document.getElementById('color').innerHTML = localStorage.color;
setWhiteMax();
setColor();