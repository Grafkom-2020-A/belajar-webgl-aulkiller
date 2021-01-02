function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var vertices = [];
  var vertices2 = [];

  var refine2= 0.5;

  var cubePointsFull = [
    //Depan A
    //Segitiga Luar 
    [0.0,  0.0-refine2,  0.15],   // A, 0
    [0.27, 1.11-refine2,  0.15],   // B, 1
    [0.55, 1.11-refine2,  0.15],   // C, 2
    [0.83, 0.0-refine2,  0.15],   // D, 3
    [0.62, 0.0-refine2,  0.15],   // E, 4
    [0.56, 0.28-refine2,  0.15],   // F, 5
    [0.27, 0.28-refine2,  0.15],   // G, 6
    [0.20, 0-refine2,  0.15],   // H, 7
    //Segitiga dalam
    [0.31, 0.46-refine2,  0.15],   // I, 8
    [0.35, 0.63-refine2,  0.15],   // J, 9
    [0.41, 0.97-refine2,  0.15],   // K, 10
    [0.52, 0.46-refine2,  0.15],   // L, 11
    //Belakang A
    //Segitiga Luar 
    [0.0,  0.0-refine2,  -0.15],   // A, 12
    [0.27, 1.11-refine2,  -0.15],   // B, 13
    [0.55, 1.11-refine2,  -0.15],   // C, 14
    [0.83, 0.0-refine2,  -0.15],   // D, 15
    [0.62, 0.0-refine2,  -0.15],   // E, 16
    [0.56, 0.28-refine2,  -0.15],   // F, 17
    [0.27, 0.28-refine2,  -0.15],   // G, 18
    [0.20, 0-refine2,  -0.15],   // H, 19
    //Segitiga dalam
    [0.31, 0.46-refine2,  -0.15],   // I, 20
    [0.35, 0.63-refine2,  -0.15],   // J, 21
    [0.41, 0.97-refine2,  -0.15],   // K, 22
    [0.52, 0.46-refine2,  -0.15],   // L, 23
  ];

  var cubePointsDepan = [
    //Depan A
    //Segitiga Luar 
    [0.0,  0.0-refine2,  0.15],   // A, 0
    [0.27, 1.11-refine2,  0.15],   // B, 1
    [0.55, 1.11-refine2,  0.15],   // C, 2
    [0.83, 0.0-refine2,  0.15],   // D, 3
    [0.62, 0.0-refine2,  0.15],   // E, 4
    [0.56, 0.28-refine2,  0.15],   // F, 5
    [0.27, 0.28-refine2,  0.15],   // G, 6
    [0.20, 0-refine2,  0.15],   // H, 7
    //Segitiga dalam
    [0.31, 0.46-refine2,  0.15],   // I, 8
    [0.35, 0.63-refine2,  0.15],   // J, 9
    [0.41, 0.97-refine2,  0.15],   // K, 10
    [0.52, 0.46-refine2,  0.15],   // L, 11
  ];

  var cubePointsDepan2 = [
    //Depan A
    //Segitiga Luar 
    [0.0-1,  0.0-refine2,  0.15],   // A, 0
    [0.27-1, 1.11-refine2,  0.15],   // B, 1
    [0.55-1, 1.11-refine2,  0.15],   // C, 2
    [0.83-1, 0.0-refine2,  0.15],   // D, 3
    [0.62-1, 0.0-refine2,  0.15],   // E, 4
    [0.56-1, 0.28-refine2,  0.15],   // F, 5
    [0.27-1, 0.28-refine2,  0.15],   // G, 6
    [0.20-1, 0-refine2,  0.15],   // H, 7
    //Segitiga dalam
    [0.31-1, 0.46-refine2,  0.15],   // I, 8
    [0.35-1, 0.63-refine2,  0.15],   // J, 9
    [0.41-1, 0.97-refine2,  0.15],   // K, 10
    [0.52-1, 0.46-refine2,  0.15],   // L, 11
  ];

  var cubePointsBlkg = [
    //Belakang A
    //Segitiga Luar 
    [0.0,  0.0-refine2,  -0.15],   // A, 0
    [0.27, 1.11-refine2,  -0.15],   // B, 1
    [0.55, 1.11-refine2,  -0.15],   // C, 2
    [0.83, 0.0-refine2,  -0.15],   // D, 3
    [0.62, 0.0-refine2,  -0.15],   // E, 4
    [0.56, 0.28-refine2,  -0.15],   // F, 5
    [0.27, 0.28-refine2,  -0.15],   // G, 6
    [0.20, 0-refine2,  -0.15],   // H, 7
    //Segitiga dalam
    [0.31, 0.46-refine2,  -0.15],   // I, 8
    [0.35, 0.63-refine2,  -0.15],   // J, 9
    [0.41, 0.97-refine2,  -0.15],   // K, 10
    [0.52, 0.46-refine2,  -0.15],   // L, 11
  ];

  var cubePointsBlkg2 = [
    //Belakang A
    //Segitiga Luar 
    [0.0-1,  0.0-refine2,  -0.15],   // A, 0
    [0.27-1, 1.11-refine2,  -0.15],   // B, 1
    [0.55-1, 1.11-refine2,  -0.15],   // C, 2
    [0.83-1, 0.0-refine2,  -0.15],   // D, 3
    [0.62-1, 0.0-refine2,  -0.15],   // E, 4
    [0.56-1, 0.28-refine2,  -0.15],   // F, 5
    [0.27-1, 0.28-refine2,  -0.15],   // G, 6
    [0.20-1, 0-refine2,  -0.15],   // H, 7
    //Segitiga dalam
    [0.31-1, 0.46-refine2,  -0.15],   // I, 8
    [0.35-1, 0.63-refine2,  -0.15],   // J, 9
    [0.41-1, 0.97-refine2,  -0.15],   // K, 10
    [0.52-1, 0.46-refine2,  -0.15],   // L, 11
  ];

  var cubePointsKanan = [
    //Depan A
    //Segitiga Luar 
    [0.0,  0.0-refine2,  0.15],   // A, 0
    [0.27, 1.11-refine2,  0.15],   // B, 1
    [0.55, 1.11-refine2,  0.15],   // C, 2
    [0.83, 0.0-refine2,  0.15],   // D, 3
    [0.62, 0.0-refine2,  0.15],   // E, 4
    [0.56, 0.28-refine2,  0.15],   // F, 5
    [0.27, 0.28-refine2,  0.15],   // G, 6
    [0.20, 0-refine2,  0.15],   // H, 7
    //Segitiga dalam
    [0.31, 0.46-refine2,  0.15],   // I, 8
    [0.35, 0.63-refine2,  0.15],   // J, 9
    [0.41, 0.97-refine2,  0.15],   // K, 10
    [0.52, 0.46-refine2,  0.15],   // L, 11
    //Belakang A
    //Segitiga Luar 
    [0.0,  0.0-refine2,  -0.15],   // A, 12
    [0.27, 1.11-refine2,  -0.15],   // B, 13
    [0.55, 1.11-refine2,  -0.15],   // C, 14
    [0.83, 0.0-refine2,  -0.15],   // D, 15
    [0.62, 0.0-refine2,  -0.15],   // E, 16
    [0.56, 0.28-refine2,  -0.15],   // F, 17
    [0.27, 0.28-refine2,  -0.15],   // G, 18
    [0.20, 0-refine2,  -0.15],   // H, 19
    [0.31, 0.46-refine2,  -0.15],   // I, 20
  ];

  var cubePointsKanan2 = [
    //Depan A
    //Segitiga Luar 
    [0.0-1,  0.0-refine2,  0.15],   // A, 0
    [0.27-1, 1.11-refine2,  0.15],   // B, 1
    [0.55-1, 1.11-refine2,  0.15],   // C, 2
    [0.83-1, 0.0-refine2,  0.15],   // D, 3
    [0.62-1, 0.0-refine2,  0.15],   // E, 4
    [0.56-1, 0.28-refine2,  0.15],   // F, 5
    [0.27-1, 0.28-refine2,  0.15],   // G, 6
    [0.20-1, 0-refine2,  0.15],   // H, 7
    //Segitiga dalam
    [0.31-1, 0.46-refine2,  0.15],   // I, 8
    [0.35-1, 0.63-refine2,  0.15],   // J, 9
    [0.41-1, 0.97-refine2,  0.15],   // K, 10
    [0.52-1, 0.46-refine2,  0.15],   // L, 11
    //Belakang A
    //Segitiga Luar 
    [0.0-1,  0.0-refine2,  -0.15],   // A, 12
    [0.27-1, 1.11-refine2,  -0.15],   // B, 13
    [0.55-1, 1.11-refine2,  -0.15],   // C, 14
    [0.83-1, 0.0-refine2,  -0.15],   // D, 15
    [0.62-1, 0.0-refine2,  -0.15],   // E, 16
    [0.56-1, 0.28-refine2,  -0.15],   // F, 17
    [0.27-1, 0.28-refine2,  -0.15],   // G, 18
    [0.20-1, 0-refine2,  -0.15],   // H, 19
  ];

  var cubePoints2 = [
    //Depan A
    //Segitiga dalam
    [0.31, 0.46-refine2,  0.15],   // I, 0
    [0.41, 0.97-refine2,  0.15],   // K, 1
    [0.52, 0.46-refine2,  0.15],   // L, 2
    //Segitiga dalam
    [0.31, 0.46-refine2,  -0.15],   // I, 3
    [0.41, 0.97-refine2,  -0.15],   // K, 4
    [0.52, 0.46-refine2,  -0.15],   // L, 5
  ];

  var cubePoints22 = [
    //Depan A
    //Segitiga dalam
    [0.31-1, 0.46-refine2,  0.15],   // I, 0
    [0.41-1, 0.97-refine2,  0.15],   // K, 1
    [0.52-1, 0.46-refine2,  0.15],   // L, 2
    //Segitiga dalam
    [0.31-1, 0.46-refine2,  -0.15],   // I, 3
    [0.41-1, 0.97-refine2,  -0.15],   // K, 4
    [0.52-1, 0.46-refine2,  -0.15],   // L, 5
  ];
  

  var cubeColors = [
    // [],   
    // [1.0, 0.0, 0.0],    // merah
    // [
    //   0.0, 1.0, 0.0
    // ],    // hijau
    // [0.0, 0.0, 1.0],    // biru
    // [1.0, 1.0, 1.0],    // putih
    // [1.0, 0.5, 0.0],    // oranye
    // [1.0, 1.0, 0.0],    // kuning
    // []     

    // [0.0, 0.6, 1.0],    // merah
    // [0.0, 0.6, 1.0],    // merah
    // [
    //   0.0, 1.0, 0.7
    // ],    // hijau
    // [0.0, 0.6, 1.0],    // biru
    // [0.0, 0.6, 1.0],    // putih
    // [0.0, 0.6, 1.0],    // oranye
    // [1.0, 0.6, 1.0],    // kuning
    // [0.0, 0.6, 1.0]     // merah

    [],    // biru 
    [0.0, 0.6, 1.0],    // biru //A kaki kiri tampak kiri + Segitiga dalam tampak kiri
    [0.0, 0.6, 1.0],    // biru //Palkon+Atasnya Prisma
    [0.0, 0.6, 1.0],    // biru //A kaki kanan tampak kanan + Segitiga dalam tampak kiri
    
    [0.0, 0.0, 1.0],    // biru //A kaki kanan depan+blkg
    [0.0, 0.6, 1.0],    // biru //A kaki kanan tampak kiri
    [0.0, 0.6, 1.0],    // biru // Jembatan depan belakang
    [],    // biru 

    
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
    // [(Math.random() + 0.5), (Math.random() + 0.5), (Math.random() + 0.5)],    // random
  ];

  var cubeNormals = [
    [],
    [0.0, 0.0, 1.0],    // depan
    [1.0, 0.0, 0.0],    // kanan
    [0.0, 1.0, 0.0],    // atas
    [-1.0, 0.0, 0.0],    // kiri
    [0.0, 0.0, -1.0],    // belakang
    [0.0, -1.0, 0.0],    // bawah
    []
  ];

  function quad(a, b, c, d, verticesArr, PointArr, NormalArr)
  {
    var indices = [a, b, c, c, d, a];
    for (var i = 0; i < indices.length; i++)
    {
      var point =  PointArr[indices[i]];
      for (var j = 0; j < point.length; j++) verticesArr.push(point[j]);
      var color = cubeColors[a];
      for (var j = 0; j < color.length; j++) verticesArr.push(color[j]);
      var normal = NormalArr[a];
      for (var j = 0; j < normal.length; j++) verticesArr.push(normal[j]);
    }
  }

  function quad2(a, b, c, d, verticesArr, PointArr, NormalArr)
  {
    var indices = [a, b, c, c, d, a];
    for (var i = 0; i < indices.length; i++)
    {
      for (var j = 0; j < 3; j++) verticesArr.push(PointArr[indices[i]][j]);
      for (var j = 0; j < 3; j++) verticesArr.push(cubeColors[a][j]);
      for (var j = 0; j < 3; j++) verticesArr.push(NormalArr[a][j]);
    }
  }

  //bangun1

  //0, 7, 10, 1
  //4, 3, 2, 10
  
  quad(1, 0, 7, 10, vertices, cubePointsDepan, cubeNormals); // depan
  quad(1, 10, 2, 10, vertices, cubePointsDepan, cubeNormals); // depan
  quad(3, 2, 10, 4, vertices, cubePointsDepan, cubeNormals); // depan
  quad(6, 5, 11, 8, vertices, cubePointsDepan, cubeNormals); // depan

  quad(3, 15, 14, 2, vertices, cubePointsKanan, cubeNormals); // kanan
  quad(6, 7, 19, 18, vertices, cubePointsKanan, cubeNormals); // kanan
  //segitigadalam
  quad(3, 4 ,1 ,0, vertices, cubePoints2, cubeNormals); // kanan
  
  quad(2, 14, 13, 1, vertices, cubePointsKanan, cubeNormals); // atas
  //segitigadalam
  quad(2, 5, 3, 0, vertices, cubePoints2, cubeNormals); // atas

  quad(1, 13, 12, 0, vertices, cubePointsKanan, cubeNormals); // kiri
  quad(5 ,17 ,16 ,4, vertices, cubePointsKanan, cubeNormals); // kiri
  //segitigadalam
  quad(1, 4, 5, 2, vertices, cubePoints2, cubeNormals); // kiri

  quad(1, 0, 7, 10, vertices, cubePointsBlkg, cubeNormals); // Blkg
  quad(1, 10, 2, 10, vertices, cubePointsBlkg, cubeNormals); // Blkg
  quad(3, 2, 10, 4, vertices, cubePointsBlkg, cubeNormals); // Blkg
  quad(6, 5, 11, 8, vertices, cubePointsBlkg, cubeNormals); // Blkg

  quad(0,7,12,19, vertices, cubePointsKanan, cubeNormals); // bawah
  quad(6, 5, 17, 18, vertices, cubePointsKanan, cubeNormals); // bawah
  quad(4, 3, 15, 16, vertices, cubePointsKanan, cubeNormals); // bawah




  // vertices.push(
  //   [0.0,  0.0-refine2,  0.15, 0.0, 0.6, 1.0,0.0, -1.0, 0.0] //0
  //   );
  //   vertices.push(
  //     [0.20,  0.0-refine2,  0.15, 0.0, 0.6, 1.0,0.0, -1.0, 0.0] //7
  //     );
  //     vertices.push(
  //       [0.20,  0.0-refine2,  -0.15, 0.0, 0.6, 1.0,0.0, -1.0, 0.0] //19
  //       );
  //       vertices.push(
  //         [0.20,  0.0-refine2,  -0.15, 0.0, 0.6, 1.0,0.0, -1.0, 0.0] //19
  //         );  
  //         vertices.push(
  //           [0.0,  0.0-refine2,  -0.15, 0.0, 0.6, 1.0,0.0, -1.0, 0.0] //12
  //           );
  //           vertices.push(
  //             [0.0,  0.0-refine2,  0.15, 0.0, 0.6, 1.0,0.0, -1.0, 0.0] //0
  //             );      

  //bangun2

  quad2(0, 7, 10, 1, vertices, cubePointsDepan2, cubeNormals); // depan
  quad2(2, 10, 1, 10, vertices, cubePointsDepan2, cubeNormals); // depan
  quad2(4, 3, 2, 10, vertices, cubePointsDepan2, cubeNormals); // depan
  quad2(6, 5, 11, 8, vertices, cubePointsDepan2, cubeNormals); // depan

  quad2(3, 15, 14, 2, vertices, cubePointsKanan2, cubeNormals); // kanan
  quad2(7 ,19 ,18 ,6, vertices, cubePointsKanan2, cubeNormals); // kanan
  
  quad2(2, 14, 13, 1, vertices, cubePointsKanan2, cubeNormals); // atas

  quad2(1, 13, 12, 0, vertices, cubePointsKanan2, cubeNormals); // kiri
  quad2(5 ,17 ,16 ,4, vertices, cubePointsKanan2, cubeNormals); // kiri

  quad2(0, 7, 19, 12, vertices, cubePointsKanan2, cubeNormals); // bawah
  quad2(5, 17, 18, 6, vertices, cubePointsKanan2, cubeNormals); // bawah
  quad2(4, 3, 15, 16, vertices, cubePointsKanan2, cubeNormals); // bawah

  quad2(0, 7, 10, 1, vertices, cubePointsBlkg2, cubeNormals); // Blkg
  quad2(2, 10, 1, 10, vertices, cubePointsBlkg2, cubeNormals); // Blkg
  quad2(4, 3, 2, 10, vertices, cubePointsBlkg2, cubeNormals); // Blkg
  quad2(6, 5, 11, 8, vertices, cubePointsBlkg2, cubeNormals); // Blkg

  //segitigadalam
  quad2(3, 4 ,1 ,0, vertices, cubePoints22, cubeNormals); // kanan
  quad2(2, 5, 3, 0, vertices, cubePoints22, cubeNormals); // atas
  quad2(1, 4, 5, 2, vertices, cubePoints22, cubeNormals); // kiri

  // quad(1, 2, 3, 0); // Kubus depan
  // quad(2, 6, 7, 3); // Kubus kanan
  // quad(3, 7, 4, 0); // Kubus atas
  // quad(4, 5, 1, 0); // Kubus kiri
  // quad(5, 4, 7, 6); // Kubus belakang
  // quad(6, 2, 1, 5); // Kubus bawah

  console.log(vertices);

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
  var aNormal = gl.getAttribLocation(shaderProgram, "a_Normal");
  gl.vertexAttribPointer(
    aPosition, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    0);
  gl.vertexAttribPointer(
    aColor, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    3 * Float32Array.BYTES_PER_ELEMENT);
  gl.vertexAttribPointer(
    aNormal, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    6 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aPosition);
  gl.enableVertexAttribArray(aColor);
  gl.enableVertexAttribArray(aNormal);

  if(canvas.width>canvas.height){
    gl.viewport(200/(canvas.height/canvas.width), 0, canvas.height, canvas.height);
  }
  else{
    gl.viewport(20+(canvas.height/canvas.width), 0, canvas.width, canvas.width);
  }
  
  // gl.viewport(1*(canvas.height/canvas.width), 0, canvas.height, canvas.height);
  // gl.viewport(100*(canvas.width/canvas.height), 0, canvas.height, canvas.height);

  gl.enable(gl.DEPTH_TEST);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  var count = 400;  // Jumlah verteks yang akan digambar

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
  var uModel = gl.getUniformLocation(shaderProgram, 'u_Model');
  var uView = gl.getUniformLocation(shaderProgram, 'u_View');
  var uProjection = gl.getUniformLocation(shaderProgram, 'u_Projection');

  var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
  gl.uniform3fv(uAmbientColor, [0.2, 0.2, 0.2]);
  var uDiffuseColor = gl.getUniformLocation(shaderProgram, 'u_DiffuseColor');
  gl.uniform3fv(uDiffuseColor, [1.0, 1.0, 1.0]);
  var uDiffusePosition = gl.getUniformLocation(shaderProgram, 'u_DiffusePosition');
  gl.uniform3fv(uDiffusePosition, [1.0, 2.0, 1.0]);
  var uNormal = gl.getUniformLocation(shaderProgram, 'u_Normal');

  var linearspeed = 0.05;
  function onKeyDown(event) {
    console.log(event.keyCode);
    if (event.keyCode == 65) {
      glMatrix.mat4.translate(model, model, [-linearspeed, 0.0, 0.0]);
    } // A = 65
    else if (event.keyCode == 68) {
      glMatrix.mat4.translate(model, model, [linearspeed, 0.0, 0.0]);
    } // D = 68
    if (event.keyCode == 87) {
      glMatrix.mat4.translate(model, model, [0.0, linearspeed, 0.0]);
    } // W = 87
    if (event.keyCode == 83) {
      glMatrix.mat4.translate(model, model, [0.0, -linearspeed, 0.0]);
    } // S = 83
  }

  document.addEventListener('keydown', onKeyDown);

  function render() {
    var theta = glMatrix.glMatrix.toRadian(1); // 1 derajat
    glMatrix.mat4.rotate(model, model, theta, [1.0, 0.0, 0.0]);
    gl.uniformMatrix4fv(uModel, false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, projection);
    var normal = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normal, model);
    gl.uniformMatrix3fv(uNormal, false, normal);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(primitive, offset, count);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
