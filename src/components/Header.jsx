import { Button } from "@/components/ui/button.jsx"
import { BookOpen } from "lucide-react"

function Header({ user, onLogout }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="text-xl font-bold text-white">Jarvis Educacional</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-blue-100">Olá, {user.name}!</span>
            <Button variant="ghost" size="sm" onClick={onLogout} className="text-white hover:bg-blue-700 hover:text-white">
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

