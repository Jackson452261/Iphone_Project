import { Html } from '@react-three/drei'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Html>
       <Spinner  variant="danger" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Html>
  )
}

export default Loader