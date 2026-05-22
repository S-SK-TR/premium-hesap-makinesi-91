import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'

// PREMIUM UI: AppShell bileşeni için kapsamlı testler
describe('AppShell Component', () => {
  it('renders the premium sidebar on desktop', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    )
    expect(screen.getByText('PHM')).toBeInTheDocument()
    expect(screen.getByText('Hesap Makinesi')).toBeInTheDocument()
    expect(screen.getByText('Geçmiş')).toBeInTheDocument()
  })

  it('renders the premium navbar', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    )
    expect(screen.getByText('Premium Hesap Makinesi')).toBeInTheDocument()
  })

  it('renders the premium mobile navigation on mobile', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    )
    expect(screen.getByText('Hesap Makinesi')).toBeInTheDocument()
    expect(screen.getByText('Geçmiş')).toBeInTheDocument()
  })

  it('navigates between routes', () => {
    render(
      <MemoryRouter initialEntries={['/calculator']}>
        <AppShell />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('Geçmiş'))
    expect(screen.getByText('İşlem Geçmişi')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Dönüştürücü'))
    expect(screen.getByText('Birim Dönüştürücü')).toBeInTheDocument()
  })

  it('applies active styles to the current route', () => {
    render(
      <MemoryRouter initialEntries={['/calculator']}>
        <AppShell />
      </MemoryRouter>
    )
    const activeLink = screen.getByText('Hesap Makinesi').closest('a')
    expect(activeLink).toHaveClass('bg-blue-500/10')
  })
})