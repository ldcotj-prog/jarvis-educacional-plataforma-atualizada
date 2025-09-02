import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Badge } from "@/components/ui/badge.jsx"
import { Button } from "@/components/ui/button.jsx"
import { useState } from "react"

function Simulados() {
  const simulados = [
    { id: 1, nome: 'Simulado ENEM 2024', data: '2024-10-20', pontuacao: 720, status: 'Concluído' },
    { id: 2, nome: 'Simulado FUVEST 2025 - 1ª Fase', data: '2025-01-10', pontuacao: null, status: 'Pendente' },
    { id: 3, nome: 'Simulado UNICAMP 2025 - 1ª Fase', data: '2025-02-15', pontuacao: null, status: 'Pendente' },
    { id: 4, nome: 'Simulado de Matemática - Geometria', data: '2024-09-05', pontuacao: 85, status: 'Concluído' },
  ]

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Meus Simulados</h2>
      
      <Card className="bg-white rounded-xl shadow-md p-6">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gray-800">Lista de Simulados</CardTitle>
          <CardDescription className="text-gray-600">Acompanhe seus simulados e resultados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {simulados.map((simulado) => (
              <div key={simulado.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex-1 space-y-1">
                  <p className="font-medium text-gray-800">{simulado.nome}</p>
                  <p className="text-sm text-gray-500">Data: {new Date(simulado.data).toLocaleDateString("pt-BR")}</p>
                </div>
                <div className="flex items-center space-x-4">
                  {simulado.pontuacao && (
                    <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Pontuação: {simulado.pontuacao}
                    </Badge>
                  )}
                  <Badge className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    simulado.status === 'Concluído' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {simulado.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    {simulado.status === 'Concluído' ? 'Ver Resultado' : 'Iniciar Simulado'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Simulados

