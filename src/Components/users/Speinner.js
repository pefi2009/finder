import Spinner from 'react-bootstrap/Spinner';

function Speinner() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Speinner;