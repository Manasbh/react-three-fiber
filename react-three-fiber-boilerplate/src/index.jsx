import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Box } from './Box'
import './styles.css'



function App(){
  return(
  <Canvas camera={{ position: [0, 0, 2] }}>
    <Box />
  </Canvas>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)