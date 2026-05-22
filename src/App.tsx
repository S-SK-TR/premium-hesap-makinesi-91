import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppShell } from './components/layout/AppShell'

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<Navigate to="/calculator" replace />} />
            <Route path="calculator" element={<div>Hesap Makinesi</div>} />
            <Route path="history" element={<div>İşlem Geçmişi</div>} />
            <Route path="converter" element={<div>Birim Dönüştürücü</div>} />
            <Route path="chart" element={<div>Grafik Çizim</div>} />
            <Route path="*" element={<Navigate to="/calculator" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App