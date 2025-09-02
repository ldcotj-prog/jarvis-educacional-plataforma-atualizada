import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Progress } from "@/components/ui/progress.jsx"
import { Calendar, Clock, FileText, Star } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"

function Dashboard() {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Fev', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Abr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Mai', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const performanceData = [
    { subject: 'Matemática', A: 85, fullMark: 100 },
    { subject: 'Química', A: 92, fullMark: 100 },
    { subject: 'Física', A: 78, fullMark: 100 },
    { subject: 'Biologia', A: 80, fullMark: 100 },
    { subject: 'Português', A: 88, fullMark: 100 },
  ];

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Visão Geral</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Próximos Vestibulares</CardTitle>
            <Calendar className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-500">nos próximos 30 dias</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cronograma</CardTitle>
            <Clock className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">75%</div>
            <p className="text-xs text-gray-500">concluído esta semana</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Simulados</CardTitle>
            <FileText className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <p className="text-xs text-gray-500">realizados este mês</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Desempenho</CardTitle>
            <Star className="h-5 w-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">82%</div>
            <p className="text-xs text-gray-500">média geral</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Evolução do Desempenho</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Desempenho por Disciplina</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius={90} width={730} height={250} data={performanceData}>
                <PolarGrid stroke="#e0e0e0" />
                <PolarAngleAxis dataKey="subject" stroke="#666" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#666" />
                <Radar name="Desempenho" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Próximas Datas Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-base text-gray-700">ENEM 2025 - 1ª Aplicação</span>
                <span className="text-base text-blue-600 font-medium">09/11/2025</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-base text-gray-700">FUVEST 2025 - 1ª Fase</span>
                <span className="text-base text-orange-600 font-medium">30/11/2025</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-base text-gray-700">UNICAMP 2025 - 1ª Fase</span>
                <span className="text-base text-green-600 font-medium">20/10/2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Progresso Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1 text-gray-700">
                  <span>Matemática</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="w-full h-2 bg-blue-200" indicatorClassName="bg-blue-600" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-gray-700">
                  <span>Química</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="w-full h-2 bg-green-200" indicatorClassName="bg-green-600" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-gray-700">
                  <span>Física</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="w-full h-2 bg-orange-200" indicatorClassName="bg-orange-600" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 text-gray-700">
                  <span>Português</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="w-full h-2 bg-purple-200" indicatorClassName="bg-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

