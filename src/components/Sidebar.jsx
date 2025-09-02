import { Home, Calendar, Search, Clock, FileText, BarChart3, Stethoscope, Mic } from "lucide-react"

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'vestibulares', label: 'Vestibulares', icon: Search },
    { id: 'cronograma', label: 'Cronograma', icon: Clock },
    { id: 'simulados', label: 'Simulados', icon: FileText },
    { id: 'estatisticas', label: 'Estatísticas', icon: BarChart3 },
    { id: 'jarvis-doctor', label: 'Jarvis Doctor', icon: Stethoscope },
    { id: 'jarvis', label: 'Jarvis Voice', icon: Mic },
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-900 min-h-screen border-r border-blue-700 shadow-xl">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors duration-200 ease-in-out ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-md' // Active state
                      : 'text-blue-200 hover:bg-blue-700 hover:text-white' // Inactive state
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

