import { useState } from "react"
import { Button } from "@/components/ui/button.jsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Textarea } from "@/components/ui/textarea.jsx"
import { Stethoscope, Brain, CheckCircle } from "lucide-react"

function JarvisDoctor() {
  const [currentStep, setCurrentStep] = useState("inicio")
  const [respostas, setRespostas] = useState({})
  const [relatorio, setRelatorio] = useState(null)
  const [planoEstudo, setPlanoEstudo] = useState(null)

  const perguntas = [
    {
      id: "motivacao",
      titulo: "Motivação e Objetivos",
      pergunta: "Como você se sente em relação aos seus estudos atualmente?",
      opcoes: [
        { valor: "muito_motivado", texto: "Muito motivado e focado" },
        { valor: "motivado", texto: "Motivado, mas às vezes desanimado" },
        { valor: "neutro", texto: "Neutro, estudando por obrigação" },
        { valor: "desmotivado", texto: "Desmotivado e sem rumo" },
      ],
    },
    {
      id: "dificuldade_materias",
      titulo: "Dificuldade em Matérias",
      pergunta: "Quais matérias você considera mais desafiadoras? (Selecione todas que se aplicam)",
      opcoes: [
        { valor: "matematica", texto: "Matemática" },
        { valor: "fisica", texto: "Física" },
        { valor: "quimica", texto: "Química" },
        { valor: "portugues", texto: "Português" },
        { valor: "redacao", texto: "Redação" },
        { valor: "historia", texto: "História" },
        { valor: "geografia", texto: "Geografia" },
        { valor: "biologia", texto: "Biologia" },
      ],
      multiplaEscolha: true,
    },
    {
      id: "metodo_estudo",
      titulo: "Método de Estudo",
      pergunta: "Qual seu método de estudo preferido?",
      opcoes: [
        { valor: "leitura_resumo", texto: "Leitura e resumos" },
        { valor: "exercicios", texto: "Resolução de exercícios" },
        { valor: "video_aulas", texto: "Videoaulas" },
        { valor: "grupos_estudo", texto: "Estudo em grupo" },
        { valor: "aulas_particulares", texto: "Aulas particulares" },
      ],
    },
    {
      id: "rotina_estudo",
      titulo: "Rotina de Estudo",
      pergunta: "Quantas horas por dia você dedica aos estudos?",
      opcoes: [
        { valor: "menos_2h", texto: "Menos de 2 horas" },
        { valor: "2_4h", texto: "2 a 4 horas" },
        { valor: "4_6h", texto: "4 a 6 horas" },
        { valor: "mais_6h", texto: "Mais de 6 horas" },
      ],
    },
    {
      id: "saude_mental",
      titulo: "Saúde Mental e Bem-estar",
      pergunta: "Como você avalia seu nível de estresse e ansiedade em relação aos estudos?",
      opcoes: [
        { valor: "baixo", texto: "Baixo" },
        { valor: "moderado", texto: "Moderado" },
        { valor: "alto", texto: "Alto" },
        { valor: "muito_alto", texto: "Muito alto" },
      ],
    },
  ]

  const handleResposta = (perguntaId, resposta) => {
    setRespostas({ ...respostas, [perguntaId]: resposta })
    const proximaPerguntaIndex = perguntas.findIndex(p => p.id === perguntaId) + 1
    if (proximaPerguntaIndex < perguntas.length) {
      setCurrentStep(perguntas[proximaPerguntaIndex].id)
    } else {
      setCurrentStep("gerar_relatorio")
    }
  }

  const gerarRelatorio = () => {
    // Lógica para gerar o relatório com base nas respostas
    // Isso seria uma chamada à API em um cenário real
    const relatorioGerado = {
      pontos_fortes: ["Motivação para aprender", "Organização nos estudos"],
      pontos_fracos: ["Dificuldade em Física e Química", "Ansiedade em simulados"],
      recomendacoes: [
        "Focar em exercícios práticos para Física e Química.",
        "Buscar técnicas de relaxamento antes dos simulados.",
        "Revisar o cronograma de estudos para otimizar o tempo.",
      ],
      plano_estudo_sugestao: [
        "Semana 1: Revisão de Cinemática e Leis de Newton (Física)",
        "Semana 2: Estequiometria e Termoquímica (Química)",
        "Semana 3: Resolução intensiva de simulados antigos",
      ],
    }
    setRelatorio(relatorioGerado)
    setCurrentStep("relatorio_gerado")
  }

  const iniciarDiagnostico = () => {
    setCurrentStep(perguntas[0].id)
    setRespostas({})
    setRelatorio(null)
    setPlanoEstudo(null)
  }

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-inner">
      <div className="flex items-center gap-3 mb-6">
        <Stethoscope className="h-8 w-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jarvis Doctor</h1>
          <p className="text-gray-600">Seu diagnóstico educacional personalizado</p>
        </div>
      </div>

      {currentStep === "inicio" && (
        <Card className="bg-white rounded-xl shadow-md p-6 text-center">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800">Bem-vindo ao Jarvis Doctor!</CardTitle>
            <CardDescription className="text-gray-600">Descubra seus pontos fortes e fracos nos estudos.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={iniciarDiagnostico} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Iniciar Diagnóstico
            </Button>
          </CardContent>
        </Card>
      )}

      {currentStep !== "inicio" && currentStep !== "gerar_relatorio" && currentStep !== "relatorio_gerado" && (
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">{perguntas.find(p => p.id === currentStep)?.titulo}</CardTitle>
            <CardDescription className="text-gray-600">{perguntas.find(p => p.id === currentStep)?.pergunta}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {perguntas.find(p => p.id === currentStep)?.opcoes.map((opcao) => (
              <Button
                key={opcao.valor}
                variant={respostas[currentStep] === opcao.valor ? "default" : "outline"}
                onClick={() => handleResposta(currentStep, opcao.valor)}
                className="w-full justify-start text-left"
              >
                {opcao.texto}
              </Button>
            ))}
            {perguntas.find(p => p.id === currentStep)?.multiplaEscolha && (
              <Textarea placeholder="Outras dificuldades (opcional)" className="mt-4" />
            )}
          </CardContent>
        </Card>
      )}

      {currentStep === "gerar_relatorio" && (
        <Card className="bg-white rounded-xl shadow-md p-6 text-center">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800">Diagnóstico Concluído!</CardTitle>
            <CardDescription className="text-gray-600">Clique abaixo para gerar seu relatório personalizado.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={gerarRelatorio} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>
      )}

      {currentStep === "relatorio_gerado" && relatorio && (
        <Card className="bg-white rounded-xl shadow-md p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-800">Seu Relatório Jarvis Doctor</CardTitle>
            <CardDescription className="text-gray-600">Análise completa do seu perfil de estudos.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pontos Fortes <CheckCircle className="inline-block h-5 w-5 text-green-500" /></h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {relatorio.pontos_fortes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pontos Fracos <Brain className="inline-block h-5 w-5 text-red-500" /></h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {relatorio.pontos_fracos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recomendações Personalizadas</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {relatorio.recomendacoes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sugestão de Plano de Estudos</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {relatorio.plano_estudo_sugestao.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <Button onClick={iniciarDiagnostico} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Refazer Diagnóstico
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default JarvisDoctor

