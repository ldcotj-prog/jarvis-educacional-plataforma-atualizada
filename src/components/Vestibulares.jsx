import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Input } from "@/components/ui/input.jsx"
import { Label } from "@/components/ui/label.jsx"
import { Button } from "@/components/ui/button.jsx"
import { Search, Filter } from "lucide-react"

function Vestibulares() {
  const vestibulares = [
    { id: 1, nome: 'ENEM 2025', data: '09/11/2025', status: 'Inscrições Abertas', local: 'Nacional' },
    { id: 2, nome: 'FUVEST 2025', data: '30/11/2025', status: 'Inscrições Abertas', local: 'São Paulo, SP' },
    { id: 3, nome: 'UNICAMP 2025', data: '20/10/2025', status: 'Inscrições Abertas', local: 'Campinas, SP' },
    { id: 4, nome: 'UNESP 2025', data: '15/11/2025', status: 'Inscrições Abertas', local: 'São Paulo, SP' },
    { id: 5, nome: 'UERJ 2025', data: '01/12/2025', status: 'Inscrições Abertas', local: 'Rio de Janeiro, RJ' },
    { id: 6, nome: 'UFMG 2025', data: '10/11/2025', status: 'Inscrições Abertas', local: 'Belo Horizonte, MG' },
    { id: 7, nome: 'UFRGS 2025', data: '25/11/2025', status: 'Inscrições Abertas', local: 'Porto Alegre, RS' },
    { id: 8, nome: 'UFPR 2025', data: '05/12/2025', status: 'Inscrições Abertas', local: 'Curitiba, PR' },
    { id: 9, nome: 'ITA 2025', data: '15/10/2025', status: 'Inscrições Abertas', local: 'São José dos Campos, SP' },
    { id: 10, nome: 'IME 2025', data: '20/10/2025', status: 'Inscrições Abertas', local: 'Rio de Janeiro, RJ' },
  ]

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Calendário de Vestibulares</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filtros */}
        <Card className="bg-white rounded-xl shadow-md p-6 lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">Filtrar Vestibulares</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="search" className="text-gray-700">Pesquisar</Label>
              <Input id="search" type="text" placeholder="Nome do vestibular" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="location" className="text-gray-700">Localização</Label>
              <Input id="location" type="text" placeholder="Cidade, Estado" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="status" className="text-gray-700">Status</Label>
              <select id="status" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option value="">Todos</option>
                <option value="Inscrições Abertas">Inscrições Abertas</option>
                <option value="Inscrições Fechadas">Inscrições Fechadas</option>
                <option value="Provas Agendadas">Provas Agendadas</option>
              </select>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Filter className="w-4 h-4 mr-2" /> Aplicar Filtros
            </Button>
          </CardContent>
        </Card>

        {/* Lista de Vestibulares */}
        <div className="lg:col-span-3 space-y-6">
          {vestibulares.map((vestibular) => (
            <Card key={vestibular.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition-shadow duration-200">
              <div className="space-y-2 mb-4 md:mb-0">
                <CardTitle className="text-xl font-bold text-gray-900">{vestibular.nome}</CardTitle>
                <CardDescription className="text-gray-600">Data: {vestibular.data} | Local: {vestibular.local}</CardDescription>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  vestibular.status === 'Inscrições Abertas' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {vestibular.status}
                </span>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Ver Detalhes</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Inscrever-se</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vestibulares

