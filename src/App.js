import CustomForm from './modules/components/Form';
import Button from './modules/components/Button';
import GlobalStyle from './modules/components/GlobalStyles'

function App() {

  const testFunc = () => {
    console.log('running...')
  }

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {/* <Button onclick={testFunc} /> */}
        <CustomForm />
      </header>
    </div>
  );
}

export default App;
