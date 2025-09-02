import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Calendar, BookOpen, Clock, FileText, Mic, User, Home, Search, Filter, Star, BarChart3, Stethoscope, TrendingUp, Target, Brain, CheckCircle, Settings, Lightbulb, Trophy, Menu, X } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts'
import RegisterPage from './components/RegisterPage.jsx'
import { apiRequest } from './config.js'
import './App.css'

// Componente de Login
function LoginPage({ onLogin, onShowRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validação básica
    if (!email || !password) {
      setError('Por favor, preencha email e senha')
      setLoading(false)
      return
    }

    // Sistema de autenticação local (sem dependência de API externa)
    const validUsers = [
      { email: 'admin@jarvis.com', password: 'admin123', role: 'admin' },
      { email: 'professor@jarvis.com', password: 'prof123', role: 'professor' },
      { email: 'aluno@jarvis.com', password: 'aluno123', role: 'student' }
    ]

    const user = validUsers.find(u => u.email === email && u.password === password)
    
    if (user) {
      setTimeout(() => {
        onLogin({
          id: Date.now(),
          email: user.email,
          full_name: user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1),
          username: user.email.split('@')[0],
          role: user.role
        })
        setLoading(false)
      }, 1500) // Simula tempo de autenticação real
    } else {
      setError('Email ou senha incorretos')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-md mx-2 sm:mx-0">
        <CardHeader className="text-center px-4 sm:px-6">
          <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Jarvis Educacional</CardTitle>
          <CardDescription className="text-sm sm:text-base">Sua plataforma de estudos inteligente</CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 sm:h-11 text-sm sm:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-10 sm:h-11 text-sm sm:text-base"
              />
            </div>
            
            {error && (
              <div className="p-2 sm:p-3 text-xs sm:text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 h-10 sm:h-11 text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
            
            <div className="text-center">
              <Button
                type="button"
                variant="link"
                onClick={onShowRegister}
                className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm p-0"
              >
                Não tem conta? Cadastre-se aqui
              </Button>
            </div>

            {/* Credenciais de Acesso - Mobile Optimized */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Credenciais de Acesso:</h4>
              <div className="space-y-1 sm:space-y-2 text-xs text-gray-600">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">Administrador:</span>
                  <span className="text-xs break-all">admin@jarvis.com / admin123</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">Professor:</span>
                  <span className="text-xs break-all">professor@jarvis.com / prof123</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">Aluno:</span>
                  <span className="text-xs break-all">aluno@jarvis.com / aluno123</span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente de Header com botão mobile
function Header({ user, onLogout, onToggleMobileMenu }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            {/* Botão Menu Mobile */}
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 mr-2"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
              <BookOpen className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </div>
            <h1 className="text-sm sm:text-xl font-bold text-gray-900 truncate">Jarvis Educacional</h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm text-gray-700 hidden sm:block">Olá, {user.full_name || user.username}!</span>
            <span className="text-xs text-gray-700 sm:hidden">Olá!</span>
            <Button variant="outline" size="sm" onClick={onLogout} className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

// Componente de Sidebar Responsiva
function Sidebar({ activeTab, setActiveTab, isMobile, isOpen, onClose }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'vestibulares', label: 'Vestibulares', icon: Search },
    { id: 'cronograma', label: 'Cronograma', icon: Clock },
    { id: 'simulados', label: 'Simulados', icon: FileText },
    { id: 'estatisticas', label: 'Estatísticas', icon: BarChart3 },
    { id: 'jarvis-doctor', label: 'Jarvis Doctor', icon: Stethoscope },
    { id: 'jarvis', label: 'Jarvis Voice', icon: Mic },
    { id: 'admin', label: 'Administração', icon: Settings },
  ]

  const handleItemClick = (itemId) => {
    setActiveTab(itemId)
    if (isMobile && onClose) {
      onClose()
    }
  }

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
        
        {/* Mobile Sidebar */}
        <aside className={`fixed left-0 top-0 h-full w-64 bg-gray-50 border-r z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center px-3 py-3 text-left rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
      </>
    )
  }

  // Desktop Sidebar
  return (
    <aside className="hidden lg:block w-64 bg-gray-50 min-h-screen border-r">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
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

// Navegação Mobile Bottom (alternativa)
function MobileBottomNav({ activeTab, setActiveTab }) {
  const mainItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'simulados', label: 'Simulados', icon: FileText },
    { id: 'jarvis-doctor', label: 'Jarvis', icon: Stethoscope },
    { id: 'estatisticas', label: 'Stats', icon: BarChart3 },
    { id: 'admin', label: 'Admin', icon: Settings },
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 z-30">
      <div className="flex justify-around">
        {mainItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

// Componente Dashboard com responsividade melhorada
function Dashboard() {
  const [mensagemDiaria, setMensagemDiaria] = useState('')
  const [metaDiaria, setMetaDiaria] = useState(null)

  useEffect(() => {
    const mensagens = [
      "Hoje é um ótimo dia para aprender algo novo! 📚",
      "Mantenha o foco nos seus objetivos! 🎯",
      "Cada questão resolvida te aproxima da aprovação! ✨",
      "Persistência é a chave do sucesso! 💪",
      "Você está no caminho certo! Continue assim! 🚀"
    ]
    
    const metas = [
      { texto: "Resolver 20 questões de Matemática", progresso: 65 },
      { texto: "Estudar 2 horas de Português", progresso: 40 },
      { texto: "Fazer 1 simulado completo", progresso: 0 },
      { texto: "Revisar Química Orgânica", progresso: 80 }
    ]
    
    setMensagemDiaria(mensagens[Math.floor(Math.random() * mensagens.length)])
    setMetaDiaria(metas[Math.floor(Math.random() * metas.length)])
  }, [])

  const estatisticas = [
    { titulo: "Simulados Realizados", valor: "12", icone: FileText, cor: "text-blue-600" },
    { titulo: "Horas Estudadas", valor: "48h", icone: Clock, cor: "text-green-600" },
    { titulo: "Questões Resolvidas", valor: "324", icone: Target, cor: "text-purple-600" },
    { titulo: "Média Geral", valor: "8.2", icone: TrendingUp, cor: "text-orange-600" }
  ]

  const proximosEventos = [
    { nome: "ENEM 2025 - Provas", data: "2025-11-09", dias: 71 },
    { nome: "FUVEST 2026 - 1ª Fase", data: "2025-11-23", dias: 85 },
    { nome: "UNICAMP 2026 - 1ª Fase", data: "2025-10-19", dias: 50 },
    { nome: "UNESP 2026 - 1ª Fase", data: "2025-11-15", dias: 77 }
  ]

  const dadosDesempenho = [
    { materia: 'Matemática', nota: 8.5 },
    { materia: 'Português', nota: 7.8 },
    { materia: 'Física', nota: 8.2 },
    { materia: 'Química', nota: 7.5 },
    { materia: 'Biologia', nota: 8.8 },
    { materia: 'História', nota: 7.2 },
    { materia: 'Geografia', nota: 8.0 }
  ]

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 pb-20 lg:pb-6">
      {/* Mensagem de Boas-vindas */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 sm:p-6 text-white">
        <h2 className="text-lg sm:text-2xl font-bold mb-2">Bem-vindo de volta!</h2>
        <p className="text-sm sm:text-base opacity-90">{mensagemDiaria}</p>
      </div>

      {/* Estatísticas Principais */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {estatisticas.map((stat, index) => {
          const Icon = stat.icone
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-3 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.cor}`} />
                  <div>
                    <p className="text-lg sm:text-2xl font-bold">{stat.valor}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{stat.titulo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Meta Diária */}
      {metaDiaria && (
        <Card>
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-base sm:text-lg">Meta de Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base">{metaDiaria.texto}</span>
                <span className="text-xs sm:text-sm text-gray-500">{metaDiaria.progresso}%</span>
              </div>
              <Progress value={metaDiaria.progresso} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Layout Responsivo para Gráficos e Eventos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Gráfico de Desempenho */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Desempenho por Matéria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosDesempenho}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="materia" 
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="nota" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Próximos Eventos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Próximos Vestibulares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {proximosEventos.slice(0, 4).map((evento, index) => (
                <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm sm:text-base font-medium">{evento.nome}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{evento.data}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {evento.dias} dias
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Componente principal App
function App() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showRegister, setShowRegister] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    setShowRegister(false)
  }

  const handleLogout = () => {
    setUser(null)
    setActiveTab('dashboard')
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  if (showRegister) {
    return <RegisterPage onBack={() => setShowRegister(false)} />
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} onShowRegister={() => setShowRegister(true)} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={user} 
        onLogout={handleLogout} 
        onToggleMobileMenu={toggleMobileMenu}
      />
      
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isMobile={isMobile}
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
        
        <main className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard />}
            {/* Outros componentes aqui... */}
          </div>
        </main>
      </div>

      {/* Navegação Mobile Bottom (opcional) */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App

