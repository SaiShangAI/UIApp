import logo from './RA.png';
import './App.css';
import fetchAPI from './APICall';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'


function Box() {
  return (
    <mesh><boxBufferGeometry attach='geometry'></boxBufferGeometry>
      <meshLambertMaterial attach='material' color='hotpink'>
      </meshLambertMaterial></mesh>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi！Welcome to RA world :)
        </p>
        <button onClick={() => { fetchAPI('CurrentHumidity') }}
        >
          Get VM temperature
        </button>
        <Canvas >
          <OrbitControls>
          </OrbitControls>
          <Stars></Stars>
          <ambientLight intensity={0.3}>
          </ambientLight>
          <Box></Box>
        </Canvas>
      </header>
    </div>
  );
}

export default App;
