
import { TooltipProvider } from './components/ui/tooltip'
import { AppRouter } from './routes'
import { ThemeProvider } from './components/providers'

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={100}>
        <AppRouter />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
