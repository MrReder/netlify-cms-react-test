import './App.css';
import { Route } from 'react-router';
import { PageHeader } from './components/page-header';
import { Navigation } from './components/navigation';
import { Main } from './pages/main';
import { Posts } from './pages/posts';
import { Gallery } from './pages/gallery';
import Contacts from './pages/contacts';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="header-class">
        <PageHeader />
        <Navigation />
      </header>
      <main className="main-content">
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/posts'>
          <Posts />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
      </main>
    </div>
  );
}

export default App;
