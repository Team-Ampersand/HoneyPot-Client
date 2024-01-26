import GlobalStyles from './public/Globalstyle';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Signin/>
    </div>
  );
}

export default App;
