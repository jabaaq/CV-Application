import './App.css';
import { TemplateLoader } from '../template-loader/template-loader';
import { PersonalInformation } from '../personal-information/personal-Information';

function App() {
  return (
    <div className='app'>
      <TemplateLoader />
      <PersonalInformation />
    </div>
  );
}
console.log(123);
export default App;
