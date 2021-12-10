

import './App.css';
import Main from './componentes/Main.js'

function App() {
  
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;


/*
const [nodeC, setNodeC ] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:1880/ui#!/0?socketid=Fu5tGxZXXFkZGnrvAAAB')
      .then(response => response.text())
      .then((result)=>{
        setNodeC(result)
        },
        (error) => {
          setNodeC('error');
        }
      );
  })

  <div dangerouslySetInnerHTML={{ __html: nodeC}}></div>
*/