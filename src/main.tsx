import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import './styles/global.css';
import Card from './components/Card/Card';

export function App() {
  return (
    <main>
      <Card />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
