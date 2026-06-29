
import { TooltipProvider } from './components/ui/tooltip'
import { AppRouter } from './routes'

function App() {
  return <TooltipProvider delayDuration={100}>
    <AppRouter />
  </TooltipProvider>
}

export default App
