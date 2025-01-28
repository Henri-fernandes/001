import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Database, 
  GitBranch, 
  LineChart, 
  Mail, 
  PieChart,
  Github,
  Linkedin,
  Phone,
  Brain,
  Code,
  Target,
  Briefcase,
  BarChart,
  Table,
  FileSpreadsheet,
  Cpu,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  Presentation,
  Sun,
  Moon,
  BookOpen,
  FolderKanban,
  Send,
  User
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-purple-600" />
        )}
      </button>

      {/* Fixed Navigation */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6">
          {[
            { id: 'competencias', icon: Brain, label: 'Competências' },
            { id: 'experiencia', icon: BookOpen, label: 'Experiência' },
            { id: 'projetos', icon: FolderKanban, label: 'Projetos' },
            { id: 'contato', icon: Send, label: 'Contato' }
          ].map(({ id, icon: Icon, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative flex items-center"
            >
              <span className="absolute right-full mr-4 text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {label}
              </span>
              <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-500 transition-all duration-300">
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-white">
              Henrico Fernandes
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-100">Analista de Dados/BI</p>
            <p className="max-w-2xl text-purple-100 text-lg">
              Transformando dados em insights estratégicos e decisões inteligentes
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-8">
                <User className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl font-bold dark:text-white">Sobre Mim</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Profissional com 5 anos de experiência em análise de dados e business intelligence, 
                especializado em transformar dados complexos em insights acionáveis. 
                Possuo forte background em estatística e programação, com histórico comprovado 
                de implementação de soluções que impactaram positivamente a tomada de decisão em empresas.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
                  <div className="text-gray-600 dark:text-gray-400">Dashboards Criados</div>
                </div>
              </div>
            </div>
            <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-xl border-4 border-purple-100 dark:border-purple-800">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competencias" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <Brain className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl font-bold dark:text-white">Competências</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hard Skills */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <Code className="w-5 h-5 text-purple-600" />
                Hard Skills
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <BarChart className="w-4 h-4 text-purple-600" />
                  Análise Estatística
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Table className="w-4 h-4 text-purple-600" />
                  SQL Avançado
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <FileSpreadsheet className="w-4 h-4 text-purple-600" />
                  ETL
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Cpu className="w-4 h-4 text-purple-600" />
                  Machine Learning
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                Soft Skills
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Users className="w-4 h-4 text-purple-600" />
                  Trabalho em Equipe
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                  Resolução de Problemas
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-purple-600" />
                  Gestão de Tempo
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Presentation className="w-4 h-4 text-purple-600" />
                  Comunicação
                </li>
              </ul>
            </div>

            {/* Ferramentas */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <Target className="w-5 h-5 text-purple-600" />
                Ferramentas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <Database className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <LineChart className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Power BI</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <GitBranch className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Git</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <Briefcase className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl font-bold dark:text-white">Experiência Profissional</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="border-l-4 border-purple-600 pl-6 ml-6">
                <div className="relative">
                  <div className="absolute -left-[34px] bg-purple-600 rounded-full w-4 h-4"></div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Analista de Dados Sênior</h3>
                  <p className="text-purple-600 mb-2">Empresa Tech | 2021 - Presente</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    • Liderou projetos de análise de dados que resultaram em 30% de aumento na eficiência operacional<br />
                    • Desenvolveu dashboards em Power BI para monitoramento em tempo real<br />
                    • Implementou modelos preditivos com 90% de precisão
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-purple-600 pl-6 ml-6">
                <div className="relative">
                  <div className="absolute -left-[34px] bg-purple-600 rounded-full w-4 h-4"></div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Analista de BI</h3>
                  <p className="text-purple-600 mb-2">Consultoria XYZ | 2019 - 2021</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    • Desenvolveu ETL pipelines para automatização de processos<br />
                    • Criou relatórios automatizados reduzindo 20h/semana de trabalho manual<br />
                    • Implementou análises de cohort para identificação de padrões de cliente
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-purple-600 pl-6 ml-6">
                <div className="relative">
                  <div className="absolute -left-[34px] bg-purple-600 rounded-full w-4 h-4"></div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Analista de Dados Jr.</h3>
                  <p className="text-purple-600 mb-2">Startup ABC | 2018 - 2019</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    • Realizou análises exploratórias de dados de vendas<br />
                    • Desenvolveu KPIs para acompanhamento de performance<br />
                    • Criou visualizações para apresentações executivas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <PieChart className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl font-bold dark:text-white">Projetos em Destaque</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Análise Preditiva de Vendas</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Desenvolvimento de modelo preditivo para forecast de vendas com precisão de 95%, 
                utilizando Python, scikit-learn e técnicas avançadas de séries temporais.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Pandas</span>
              </div>
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold inline-flex items-center">
                Ver projeto <span className="ml-2">→</span>
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Dashboard de Performance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Criação de dashboard interativo em Power BI para análise de KPIs em tempo real, 
                resultando em redução de 40% no tempo de tomada de decisão.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Power BI</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">DAX</span>
              </div>
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold inline-flex items-center">
                Ver projeto <span className="ml-2">→</span>
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Churn Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Análise de Churn</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Implementação de modelo de previsão de churn com acurácia de 85%, 
                permitindo ações preventivas e redução de 25% na taxa de cancelamento.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">R</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Estatística</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">Visualização</span>
              </div>
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold inline-flex items-center">
                Ver projeto <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <Mail className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl font-bold dark:text-white">Contato</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <a href="mailto:henrico@email.com" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                <Mail className="w-6 h-6" />
                henrico@email.com
              </a>
              <a href="https://wa.me/5511999999999" 
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="w-6 h-6" />
                +55 (11) 99999-9999
              </a>
              <div className="flex gap-6">
                <a href="https://github.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Henrico Fernandes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;