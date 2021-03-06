import Button from './modules/components/Button';
import GlobalStyle from './modules/components/GlobalStyles';

function App() {
  const testFunc = () => {
    console.log('running...');
  };

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <Button onclick={testFunc} />
      </header>
    </div>
  );
}

export default App;
