var body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    w = document.querySelector('#w'),
    // Displayed RGB values
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    w_out = document.querySelector('#w_out'),
    // Display background color name
    color = document.querySelector('#color');

function setWhiteMax(){
  var input_r = document.getElementById("r"),
      input_g = document.getElementById("g"),
      input_b = document.getElementById("b"), 
      input_w = document.getElementById("w"),
      r_max = 255 - Math.max(parseInt(w.value, 10));
      g_max = 255 - Math.max(parseInt(w.value, 10));
      b_max = 255 - Math.max(parseInt(w.value, 10));     
      w_max = 255 - Math.max(parseInt(r.value, 10), parseInt(g.value, 10), parseInt(b.value, 10));
  input_r.setAttribute("max", r_max);
  input_g.setAttribute("max", g_max);
  input_b.setAttribute("max", b_max);
  input_w.setAttribute("max", w_max);
}

function setColor(){
  var r_dec = parseInt(r.value, 10) + parseInt(w.value, 10),
      r_hex = r_dec.toString(16),
      g_dec = parseInt(g.value, 10) + parseInt(w.value, 10),
      g_hex = g_dec.toString(16),
      b_dec = parseInt(b.value, 10) + parseInt(w.value, 10),
      b_hex = b_dec.toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.backgroundColor = hex; 
  color.value = ntc.name(hex);
  localStorage.color = color.value;
  localStorage.r_dec = r_dec;
  localStorage.g_dec = g_dec;
  localStorage.b_dec = b_dec;
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

if (typeof localStorage.r_outta == 'undefined') {
  localStorage.r_outta = 0
}
if (typeof localStorage.g_outta == 'undefined') {
  localStorage.g_outta = 0
}
if (typeof localStorage.b_outta == 'undefined') {
  localStorage.b_outta = 0
}

if (typeof localStorage.w_outta == 'undefined') {
  localStorage.w_outta = 0
}

r.addEventListener('change', function() {
  setColor();
  r_out.value, localStorage.r_outta = r.value;
  window.location.href ="?red=" + localStorage.r_dec + "?green=" + localStorage.g_dec + "?blue=" + localStorage.b_dec;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value, localStorage.g_outta = g.value;
  window.location.href ="?red=" + localStorage.r_dec + "?green=" + localStorage.g_dec + "?blue=" + localStorage.b_dec;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value, localStorage.b_outta = b.value;
  window.location.href ="?red=" + localStorage.r_dec + "?green=" + localStorage.g_dec + "?blue=" + localStorage.b_dec;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);

w.addEventListener('change', function() {
  setColor();
  w_out.value, localStorage.w_outta = w.value;
  window.location.href ="?red=" + localStorage.r_dec + "?green=" + localStorage.g_dec + "?blue=" + localStorage.b_dec;
}, false);

w.addEventListener('input', function() {
  setColor();
  w_out.value = w.value;
}, false);

document.getElementById('r').value = localStorage.r_outta;
document.getElementById('r_out').innerHTML = localStorage.r_outta;
document.getElementById('g').value = localStorage.g_outta;
document.getElementById('g_out').innerHTML = localStorage.g_outta;
document.getElementById('b').value = localStorage.b_outta;
document.getElementById('b_out').innerHTML = localStorage.b_outta;
document.getElementById('w').value = localStorage.w_outta;
document.getElementById('w_out').innerHTML = localStorage.w_outta;
document.getElementById('color').innerHTML = localStorage.color;
setWhiteMax();
setColor();