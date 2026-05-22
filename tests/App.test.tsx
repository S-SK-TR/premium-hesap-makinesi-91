import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '@/App'

// PREMIUM UI: App bileşeni için kapsamlı testler
describe('App Component', () => {
  it('renders the AppShell component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Premium Hesap Makinesi')).toBeInTheDocument()
  })

  it('navigates to /calculator by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Hesap Makinesi')).toBeInTheDocument()
  })

  it('renders all route components', () => {
    render(
      <MemoryRouter initialEntries={['/history']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('İşlem Geçmişi')).toBeInTheDocument()

    render(
      <MemoryRouter initialEntries={['/converter']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Birim Dönüştürücü')).toBeInTheDocument()

    render(
      <MemoryRouter initialEntries={['/chart']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Grafik Çizim')).toBeInTheDocument()
  })

  it('redirects unknown routes to /calculator', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText('Hesap Makinesi')).toBeInTheDocument()
  })
})