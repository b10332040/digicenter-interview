import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChartsPage, StreetViewPage } from '/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='charts' element={<ChartsPage />}/>
        <Route path='street-view' element={<StreetViewPage />}/>
        <Route path='*' element={<ChartsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
