import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { BookOpen, ArrowLeft, User, Mail, Lock, Phone, Calendar, School, Target, Brain } from 'lucide-react';
import { apiRequest } from '../config.js';

function RegisterPage({ onBackToLogin, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    full_name: '',
    phone: '',
    birth_date: '',
    school: '',
    grade: '',
    target_universities: [],
    target_courses: [],
    study_goals: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError('');
  };

  const handleArrayInputChange = (field, value) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: array
    }));
  };

  const validateStep1 = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.full_name) {
      setError('Todos os campos obrigatórios devem ser preenchidos');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }
    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiRequest('/users/register', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (response.success) {
        onRegisterSuccess(response.data);
      } else {
        setError(response.message || 'Erro ao cadastrar usuário');
      }
    } catch (error) {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Informações Básicas</h3>
        <p className="text-sm text-gray-600">Passo 1 de 2</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="full_name">Nome Completo *</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="full_name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.full_name}
            onChange={(e) => handleInputChange('full_name', e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Nome de Usuário *</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="username"
            type="text"
            placeholder="Escolha um nome de usuário"
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Digite a senha novamente"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Perfil Educacional</h3>
        <p className="text-sm text-gray-600">Passo 2 de 2 (Opcional)</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="birth_date">Data de Nascimento</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="birth_date"
            type="date"
            value={formData.birth_date}
            onChange={(e) => handleInputChange('birth_date', e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="school">Escola/Cursinho</Label>
        <div className="relative">
          <School className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="school"
            type="text"
            placeholder="Nome da sua escola ou cursinho"
            value={formData.school}
            onChange={(e) => handleInputChange('school', e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="grade">Série/Ano</Label>
        <Select onValueChange={(value) => handleInputChange('grade', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione sua série/ano" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1º Ano">1º Ano do Ensino Médio</SelectItem>
            <SelectItem value="2º Ano">2º Ano do Ensino Médio</SelectItem>
            <SelectItem value="3º Ano">3º Ano do Ensino Médio</SelectItem>
            <SelectItem value="Cursinho">Cursinho Pré-Vestibular</SelectItem>
            <SelectItem value="Graduação">Graduação</SelectItem>
            <SelectItem value="Outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="target_universities">Universidades de Interesse</Label>
        <div className="relative">
          <Target className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="target_universities"
            type="text"
            placeholder="USP, UNICAMP, UNESP (separadas por vírgula)"
            value={formData.target_universities.join(', ')} // Adicionado value para controlar o input
            onChange={(e) => handleArrayInputChange("target_universities", e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="target_courses">Cursos de Interesse</Label>
        <div className="relative">
          <Brain className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="target_courses"
            type="text"
            placeholder="Medicina, Engenharia, Direito (separados por vírgula)"
            onChange={(e) => handleArrayInputChange('target_courses', e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="study_goals">Objetivos de Estudo</Label>
        <Textarea
          id="study_goals"
          placeholder="Descreva seus objetivos e metas de estudo..."
          value={formData.study_goals}
          onChange={(e) => handleInputChange('study_goals', e.target.value)}
          rows={3}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Criar Conta</CardTitle>
          <CardDescription>Junte-se à plataforma Jarvis Educacional</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 ? renderStep1() : renderStep2()}

            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              {currentStep === 1 ? (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onBackToLogin}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="flex-1"
                  >
                    Próximo
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Anterior
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1"
                  >
                    {loading ? 'Cadastrando...' : 'Criar Conta'}
                  </Button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;

