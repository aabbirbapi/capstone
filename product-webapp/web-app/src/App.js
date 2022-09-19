/* import React from 'react'

 import AppRoutes from './routes/AppRoutes'

 const App = () => {
  return (
    <AppRoutes/>
  )
}

export default App
*/

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import {routes} from './routes'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div >
       <div >
        <BrowserRouter>
          <Routes>
              {routes.map((route , id) =>{
                    return <Route
                    key={id}
                    path={route.path}
                    name={route.name}
                    element={<route.component />}
                />
              })}
          </Routes>
        </BrowserRouter>
    </div>
    </div>
  );
}
export default App;
