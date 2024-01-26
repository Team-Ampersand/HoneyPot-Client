import GlobalStyles from './public/Globalstyle';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Onbording from './components/Onbording'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Onbording/>
    </div>
  );
}

export default App;
