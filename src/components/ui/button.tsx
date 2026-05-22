import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      whileFocus={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      disabled={disabled || isLoading}
      className={cn(
        'relative flex items-center justify-center gap-2 rounded-xl font-medium transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20': variant === 'primary',
          'bg-gray-800 hover:bg-gray-700 text-white': variant === 'secondary',
          'bg-red-600 hover:bg-red-500 text-white': variant === 'destructive',
          'hover:bg-gray-800/50 text-gray-300': variant === 'ghost',
          'h-8 px-3 text-xs': size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-12 px-6 text-base': size === 'lg',
          'focus-visible:ring-blue-500': variant === 'primary',
          'focus-visible:ring-gray-500': variant === 'secondary',
          'focus-visible:ring-red-500': variant === 'destructive',
          'focus-visible:ring-gray-500': variant === 'ghost'
        },
        className
      )}
      {...props}
    >
      {isLoading && (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="absolute"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </motion.span>
      )}
      {icon && !isLoading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children && (
        <span className={cn('transition-opacity', { 'opacity-0': isLoading })}>{children}</span>
      )}
    </motion.button>
  )
}