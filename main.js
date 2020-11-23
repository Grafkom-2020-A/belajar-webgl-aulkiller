function main() {
  var canvas = document.getElementById("myCanvas");
  
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  var asrat = canvas.height/canvas.width;
  var gl = canvas.getContext("webgl");

  var vertices = [
    -0.5*asrat, 0.5, 1.0, 0.0, 0.0,      // Titik A 
    -0.5*asrat, -0.5, 1.0, 0.0, 0.0,     // Titik B
    0.5*asrat, -0.5, 1.0, 0.0, 0.0,      // Titik C
    0.5*asrat, -0.5, 0.0, 0.0, 1.0,      // Titik C
    0.5*asrat, 0.5, 0.0, 0.0, 1.0,       // Titik D
    -0.5*asrat, 0.5, 0.0, 0.0, 1.0       // Titik A 
  ];

  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  var vertexShaderCode = document.getElementById("vertexShaderCode").text;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderCode);
  gl.compileShader(vertexShader);

  var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;

  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderCode);
  gl.compileShader(fragmentShader);

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColor = gl.getAttribLocation(shaderProgram, "a_Color");
  gl.vertexAttribPointer(
    aPosition, 
    2, 
    gl.FLOAT, 
    false, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    0);
  gl.vertexAttribPointer(
    aColor, 
    3, 
    gl.FLOAT, 
    false, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aPosition);
  gl.enableVertexAttribArray(aColor);

  // gl.viewport(100, 0, canvas.height, canvas.height);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  var count = 6;  // Jumlah verteks yang akan digambar

  var model = glMatrix.mat4.create();
  var view = glMatrix.mat4.create();
  glMatrix.mat4.lookAt(view,
    [0.0, 0.0, 2.0], // di mana posisi kamera (posisi)
    [0.0, 0.0, -2.0], // ke mana kamera menghadap (vektor)
    [0.0, 1.0, 0.0] // ke mana arah atas kamera (vektor)
    );
  var projection = glMatrix.mat4.create();
  glMatrix.mat4.perspective(projection, 
    glMatrix.glMatrix.toRadian(90), // fov dalam radian
    1.0,  // rasio aspek
    0.5,  // near
    10.0  // far
    );
  var uModel = gl.getUniformLocation(shaderProgram, 'model');
  var uView = gl.getUniformLocation(shaderProgram, 'view');
  var uProjection = gl.getUniformLocation(shaderProgram, 'projection');

  var dz = 0.0;

  function render() {
    dz += 0.001;
    // Tambah translasi ke matriks model
    model = glMatrix.mat4.create();
    glMatrix.mat4.translate(model, model, [0.0, 0.0, dz]);
    gl.uniformMatrix4fv(uModel, false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, projection);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(primitive, offset, count);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

