import { MainProvider } from '@/shared/providers/main.provider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <MainProvider>
      <div className="min-h-screen flex flex-col">
        <Outlet />
      </div>
    </MainProvider>
  );
}

export default App;
