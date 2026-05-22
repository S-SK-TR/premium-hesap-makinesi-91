import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

// PREMIUM UI: Button bileşeni için kapsamlı testler
describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click Me</Button>)
    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-blue-600')
    expect(button).toHaveClass('h-10')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-800')

    rerender(<Button variant="destructive">Destructive</Button>)
    expect(screen.getByText('Destructive')).toHaveClass('bg-red-600')

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByText('Ghost')).toHaveClass('hover:bg-gray-800/50')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByText('Small')).toHaveClass('h-8')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByText('Large')).toHaveClass('h-12')
  })

  it('renders with icon', () => {
    render(<Button icon={<Plus />}>With Icon</Button>)
    expect(screen.getByText('With Icon')).toBeInTheDocument()
    expect(screen.getByTestId('lucide-plus')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(<Button isLoading>Loading</Button>)
    expect(screen.queryByText('Loading')).not.toBeVisible()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByText('Disabled')).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })
})