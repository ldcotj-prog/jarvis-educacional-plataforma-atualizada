import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"

function Agenda() {
  const eventos = [
    { id: 1, titulo: 'ENEM 2025 - 1ª Aplicação', data: '2025-11-09', tipo: 'vestibular' },
    { id: 2, titulo: 'FUVEST 2025 - 1ª Fase', data: '2025-11-30', tipo: 'vestibular' },
    { id: 3, titulo: 'UNICAMP 2025 - 1ª Fase', data: '2025-10-20', tipo: 'vestibular' },
    { id: 4, titulo: 'UNESP 2025 - 1ª Fase', data: '2025-11-15', tipo: 'vestibular' },
    { id: 5, titulo: 'Simulado de Química', data: '2025-09-10', tipo: 'simulado' },
    { id: 6, titulo: 'Revisão de Matemática', data: '2025-09-12', tipo: 'estudo' },
  ]

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Agenda de Estudos e Eventos</h2>
      
      <Card className="bg-white rounded-xl shadow-md p-6">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gray-800">Próximos Eventos</CardTitle>
          <CardDescription className="text-gray-600">Datas importantes e compromissos de estudo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {eventos.map((evento) => (
              <div key={evento.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    evento.tipo === 'vestibular' ? 'bg-blue-500' :
                    evento.tipo === 'prazo' ? 'bg-orange-500' :
                    evento.tipo === 'simulado' ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-800">{evento.titulo}</p>
                    <p className="text-sm text-gray-500">{new Date(evento.data).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                  Detalhes
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Agenda

