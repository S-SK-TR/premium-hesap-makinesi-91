import { NavLink, Outlet } from 'react-router-dom'
import { HelpCircle, History, HelpCircle, BarChart2, Settings, Bell } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/calculator', icon: HelpCircle, label: 'Hesap Makinesi' },
  { to: '/history', icon: History, label: 'Geçmiş' },
  { to: '/converter', icon: HelpCircle, label: 'Dönüştürücü' },
  { to: '/chart', icon: BarChart2, label: 'Grafik' }
]

// PREMIUM UI: Glassmorphism arka plan ve blur efekt
const GlassBackground = () => (
  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
)

// PREMIUM UI: Premium navigasyon çubuğu bileşeni
function PremiumNavbar() {
  return (
    <nav className="flex h-16 items-center justify-between px-4 md:px-6">
      <h1 className="font-display text-xl font-semibold text-[var(--text-primary)]">Premium Hesap Makinesi</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
          <Settings size={20} />
        </button>
      </div>
    </nav>
  )
}

// PREMIUM UI: Premium sidebar bileşeni
function PremiumSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 border-r border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl shrink-0">
      <div className="h-16 flex items-center px-5 border-b border-[var(--border)]">
        <span className="font-display font-bold text-lg tracking-tight">PHM</span>
      </div>
      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-blue-500/10 text-blue-500 shadow-[0_0_0_1px_theme(colors.blue.500/20)]"
                : "text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            )}
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-[var(--border)]">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
          <img src="/avatar.png" className="w-8 h-8 rounded-full object-cover" alt="avatar" />
          <div className="flex-1 text-left">
            <p className="text-xs font-semibold">Kullanıcı</p>
            <p className="text-xs text-[var(--text-muted)]">kullanici@hesapmakinesi.com</p>
          </div>
          <Settings size={14} className="text-[var(--text-muted)]" />
        </button>
      </div>
    </aside>
  )
}

// PREMIUM UI: Premium mobil alt navigasyon bileşeni
function PremiumMobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--bg-surface)]/90 backdrop-blur-xl border-t border-[var(--border)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-16">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) => cn(
              "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
              isActive ? "text-blue-500" : "text-[var(--text-muted)]"
            )}
          >
            <Icon size={22} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export function AppShell() {
  return (
    <div className="flex h-dvh bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      <GlassBackground />
      <PremiumSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <PremiumNavbar />
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
      <PremiumMobileNav />
    </div>
  )
}