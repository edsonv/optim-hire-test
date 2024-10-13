import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../containers/Layout';

import { Characters } from '../pages/Characters';
import { Locations } from '../pages/Locations';
import { Episodes } from '../pages/Episodes';
import { Details } from '../pages/Details';

import { Location } from '../components/Location';
import { Episode } from '../components/Episode';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<Characters />} />
          <Route path='/locations' element={<Locations />}>
            <Route path=':id' element={<Location />} />
          </Route>
          <Route path='/episodes' element={<Episodes />}>
            <Route path=':id' element={<Episode />} />
          </Route>
          <Route path='/character/:characterId' element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
