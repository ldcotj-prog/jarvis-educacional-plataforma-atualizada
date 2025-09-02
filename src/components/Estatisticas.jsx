import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Progress } from "@/components/ui/progress.jsx"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from "recharts"
import { BarChart3, Clock, FileText, Star, TrendingUp } from "lucide-react"

function Estatisticas() {
  const progressoMensal = [
    { mes: 'Jan', matematica: 65, quimica: 70, fisica: 60, portugues: 75, historia: 68 },
    { mes: 'Fev', matematica: 70, quimica: 75, fisica: 65, portugues: 78, historia: 72 },
    { mes: 'Mar', matematica: 75, quimica: 80, fisica: 70, portugues: 80, historia: 75 },
    { mes: 'Abr', matematica: 78, quimica: 85, fisica: 75, portugues: 82, historia: 78 },
    { mes: 'Mai', matematica: 82, quimica: 88, fisica: 78, portugues: 85, historia: 80 },
    { mes: 'Jun', matematica: 85, quimica: 90, fisica: 82, portugues: 87, historia: 83 },
    { mes: 'Jul', matematica: 88, quimica: 92, fisica: 85, portugues: 89, historia: 85 },
    { mes: 'Ago', matematica: 90, quimica: 94, fisica: 88, portugues: 91, historia: 87 }
  ]

  const desempenhoSimulados = [
    { simulado: 'ENEM 1', nota: 750, data: '15/07' },
    { simulado: 'ENEM 2', nota: 780, data: '22/07' },
    { simulado: 'FUVEST 1', nota: 820, data: '29/07' },
    { simulado: 'ENEM 3', nota: 810, data: '05/08' },
    { simulado: 'UNICAMP 1', nota: 790, data: '12/08' },
    { simulado: 'ENEM 4', nota: 840, data: '19/08' }
  ]

  const tempoEstudo = [
    { dia: 'Seg', horas: 4.5 },
    { dia: 'Ter', horas: 3.8 },
    { dia: 'Qua', horas: 5.2 },
    { dia: 'Qui', horas: 4.1 },
    { dia: 'Sex', horas: 3.5 },
    { dia: 'Sáb', horas: 6.8 },
    { dia: 'Dom', horas: 5.5 }
  ]

  const distribuicaoMaterias = [
    { name: 'Matemática', value: 25, color: '#3B82F6' },
    { name: 'Química', value: 22, color: '#10B981' },
    { name: 'Física', value: 20, color: '#F59E0B' },
    { name: 'Português', value: 18, color: '#8B5CF6' },
    { name: 'História', value: 15, color: '#EF4444' }
  ]

  const radarData = [
    { subject: 'Matemática', A: 90, fullMark: 100 },
    { subject: 'Química', A: 94, fullMark: 100 },
    { subject: 'Física', A: 88, fullMark: 100 },
    { subject: 'Português', A: 91, fullMark: 100 },
    { subject: 'História', A: 87, fullMark: 100 },
    { subject: 'Geografia', A: 85, fullMark: 100 }
  ]

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="h-8 w-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Estatísticas de Progresso</h1>
          <p className="text-gray-600">Acompanhe seu desenvolvimento detalhado</p>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Progresso Geral</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">+5% desde o mês passado</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Simulados Realizados</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">6 este mês</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Horas de Estudo</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156h</div>
            <p className="text-xs text-muted-foreground">33h esta semana</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Melhor Nota</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">840</div>
            <p className="text-xs text-muted-foreground">ENEM Simulado</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progresso por Matéria */}
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Evolução por Matéria</CardTitle>
            <CardDescription className="text-gray-600">Progresso mensal em cada disciplina</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressoMensal}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="mes" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="matematica" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="quimica" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="fisica" stroke="#F59E0B" strokeWidth={2} />
                <Line type="monotone" dataKey="portugues" stroke="#8B5CF6" strokeWidth={2} />
                <Line type="monotone" dataKey="historia" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Desempenho em Simulados */}
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Desempenho em Simulados</CardTitle>
            <CardDescription className="text-gray-600">Evolução das notas ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={desempenhoSimulados}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="simulado" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Bar dataKey="nota" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tempo de Estudo Semanal */}
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Tempo de Estudo Semanal</CardTitle>
            <CardDescription className="text-gray-600">Horas dedicadas por dia da semana</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tempoEstudo}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="dia" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Bar dataKey="horas" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribuição de Matérias */}
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Distribuição de Tempo por Matéria</CardTitle>
            <CardDescription className="text-gray-600">Percentual de tempo dedicado a cada disciplina</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distribuicaoMaterias}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distribuicaoMaterias.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Radar Chart - Desempenho Geral */}
        <Card className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Radar de Competências</CardTitle>
            <CardDescription className="text-gray-600">Visão geral do seu desempenho em todas as áreas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e0e0e0" />
                <PolarAngleAxis dataKey="subject" stroke="#666" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#666" />
                <Radar name="Desempenho" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Estatisticas

