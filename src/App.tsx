import { MainPage } from '@pages'
import './App.css'
import { ApiProvider, QueryProvider } from '@providers'

function App() {
  return (
    <ApiProvider>
      <QueryProvider>
        <MainPage />
      </QueryProvider>
    </ApiProvider>
  )
}

export default App
