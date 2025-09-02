import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx"

function Cronograma() {
  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Cronograma de Estudos</h2>
      
      <Card className="bg-white rounded-xl shadow-md p-6">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gray-800">Cronograma Semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia) => (
              <div key={dia} className="font-medium text-sm text-gray-600 p-2">
                {dia}
              </div>
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="border rounded p-2 min-h-[100px] text-xs">
                <div className="space-y-1">
                  {i === 1 && <div className="bg-blue-100 text-blue-800 p-1 rounded">Matemática</div>}
                  {i === 2 && <div className="bg-green-100 text-green-800 p-1 rounded">Química</div>}
                  {i === 3 && <div className="bg-orange-100 text-orange-800 p-1 rounded">Física</div>}
                  {i === 4 && <div className="bg-purple-100 text-purple-800 p-1 rounded">Português</div>}
                  {i === 5 && <div className="bg-red-100 text-red-800 p-1 rounded">História</div>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cronograma

