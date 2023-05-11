const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var spotLight0 = new THREE.SpotLight(0xFFFFFF);  //Creacion de el foco de luz 
spotLight0.position.set(2, 7, 7);  //Posicion del foco de luz

scene.add(spotLight0);  //Añadir el foco de luz a la escena
// Luz creada a partir de las indicaciones en "https://programmerclick.com/article/81771039238/"

const size=100;
const divisions=100;
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

camera.position.z = 2;  //Ajuste de la posicion de la cámara
camera.position.x = 2;
camera.position.y = 2;
            
var controls = new THREE.OrbitControls(camera, renderer.domElement);



const vertices = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indices = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

mat=[]
color=[{color:0x00FF00},{color:0xff00ff}]; //Arreglo que contiene los colores
for(i=0;i<3;i++){
    mat.push(new THREE.MeshPhongMaterial(color[i]));  //Arreglo que contiene los materiales de los objetos
}

var poliedro = new THREE.PolyhedronGeometry(vertices,indices,1,1)

obj=new THREE.Mesh(poliedro,mat[0])
obj2=new THREE.Line(poliedro,mat[1])
scene.add(obj);
scene.add(obj2);

spotLight0.lookAt(obj);  //Punto hacia donde apunta el foco de luz

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );  //Renderizar la escena
};

animate();
