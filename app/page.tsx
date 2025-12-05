"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  TrendingUp,
  Zap,
  BarChart3,
  Code,
  Brain,
  Database,
  ArrowRight,
  Menu,
  X,
  Star,
  CheckCircle2,
  Lightbulb,
  Target,
  Award,
  Users,
  MessageSquare,
  Briefcase,
  Mail,
  Phone,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Soluções", id: "solucoes", icon: Lightbulb },
    { name: "Projetos", id: "projetos", icon: Briefcase },
    { name: "Quem Somos", id: "quem-somos", icon: Users },
    { name: "Depoimentos", id: "depoimentos", icon: MessageSquare },
    { name: "Contato", id: "contato", icon: Target },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl shadow-blue-500/10"
          : "bg-white/50 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Sparkles className="text-blue-600 w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            TechLab Brasil
          </span>
        </div>

        <div className="hidden md:flex gap-10">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-110 relative group"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-3 w-full text-left px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                animationDelay: `${(i * 0.1) % 8}s`,
                animationDuration: `${20 + (i % 10)}s`,
              }}
            >
              <div
                className="w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-sm"
                style={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              />
            </div>
          ))}

          {[...Array(20)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl animate-pulse-slow opacity-20"
              style={{
                width: 200 + i * 20,
                height: 200 + i * 20,
                left: `${(i * 19) % 100}%`,
                top: `${(i * 23) % 100}%`,
                background:
                  i % 2 === 0
                    ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
                animationDelay: `${(i * 0.25) % 5}s`,
                animationDuration: `${10 + (i % 6)}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 z-10 text-center pt-20">
        <div
          className="transform transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px) translateY(${scrollY * -0.3}px)`,
          }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-semibold mb-8 shadow-lg shadow-blue-500/30 animate-bounce-slow">
            <Zap className="w-5 h-5" />
            <span>Inovação que Transforma</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient leading-tight">
            Impulsione seu Negócio com Tecnologia
          </h1>

          <p className="text-xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Desenvolvemos soluções digitais que aumentam sua produtividade,
            reduzem custos e fazem seu negócio crescer de forma sustentável
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-lg font-bold text-white hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex items-center gap-3"
            >
              Quero Crescer Agora
              <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-12 py-6 bg-white border-2 border-blue-600 rounded-2xl text-lg font-bold text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-500"
            >
              Ver Projetos de Sucesso
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(100px, -100px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float-slow {
          animation: float-slow linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow ease-in-out 2s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: "Painéis de Controle Inteligentes",
      desc: "Visualize o desempenho do seu negócio em tempo real e tome decisões mais rápidas e precisas",
      benefits: [
        "Decisões baseadas em dados reais",
        "Economia de tempo na análise",
        "Identificação de oportunidades",
      ],
    },
    {
      icon: Code,
      title: "Sites e Sistemas Personalizados",
      desc: "Conquiste mais clientes com presença digital profissional que funciona 24/7",
      benefits: [
        "Mais visibilidade online",
        "Atendimento automatizado",
        "Aumento nas vendas",
      ],
    },
    {
      icon: Brain,
      title: "Inteligência Artificial Aplicada",
      desc: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa",
      benefits: [
        "Redução de custos operacionais",
        "Menos erros humanos",
        "Maior produtividade",
      ],
    },
    {
      icon: Database,
      title: "Gestão e Análise de Informações",
      desc: "Organize seus dados de forma inteligente e descubra insights valiosos para crescer",
      benefits: [
        "Informações sempre acessíveis",
        "Relatórios automáticos",
        "Previsões de tendências",
      ],
    },
  ];

  return (
    <section
      id="solucoes"
      className="py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden"
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-slow"
              style={{
                left: `${(i * 11) % 100}%`,
                top: `${(i * 13) % 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: "20s",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-semibold mb-6">
            <Lightbulb className="w-5 h-5" />
            <span>Nossas Soluções</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Tecnologia que Faz Sentido para o seu Negócio
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Soluções práticas que resolvem problemas reais e trazem resultados
            mensuráveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-3xl bg-white border-2 border-blue-100 hover:border-blue-400 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                transform: `translateY(${
                  Math.sin((scrollY + i * 100) * 0.005) * 10
                }px)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg shadow-blue-500/30">
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <div className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      icon: "🎓",
      title: "AETA - Associação dos Estudantes",
      company: "Tarumã, São Paulo",
      challenge: "Gestão de associados e serviços de transporte escolar",
      solution:
        "Plataforma digital completa para gerenciar cadastros, pagamentos e comunicação com mais de 500 estudantes",
      result:
        "Redução de 80% no tempo administrativo e melhoria na experiência dos associados",
      link: "aeta.com.br",
    },
    {
      icon: "♻️",
      title: "Automação Fiscal",
      company: "Associação de Catadores - MG",
      challenge:
        "Processar centenas de notas fiscais manualmente causava erros e atrasos",
      solution:
        "Sistema inteligente que extrai e organiza automaticamente dados das notas fiscais em planilhas",
      result:
        "Economia de 15 horas semanais e eliminação de erros no processo contábil",
      link: null,
    },
  ];

  return (
    <section
      id="projetos"
      className="py-32 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 relative overflow-hidden"
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float-slow opacity-50"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                animationDelay: `${(i * 0.2) % 10}s`,
                animationDuration: `${30 + (i % 10)}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold mb-6">
            <Award className="w-5 h-5" />
            <span>Cases de Sucesso</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Resultados que Comprovam Nossa Expertise
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
            Projetos reais que transformaram a gestão de organizações
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:bg-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 inline-block">
                  {project.icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-blue-100 mb-6 font-medium">
                  {project.company}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold mb-2">
                      <Target className="w-5 h-5" />
                      Desafio
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold mb-2">
                      <Zap className="w-5 h-5" />
                      Nossa Solução
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold mb-2">
                      <TrendingUp className="w-5 h-5" />
                      Resultado
                    </div>
                    <p className="text-green-300 font-bold leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors duration-300"
                  >
                    Visitar site
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const team = [
    {
      name: "Gabriel Gonçalves",
      role: "Co-fundador & Desenvolvedor Full Stack",
      description:
        "Especialista em soluções web e automações inteligentes, focado em otimização de processos, inteligência artificial e tratamento de dados para impulsionar negócios.",
      photo: "https://github.com/GabrielG71.png",
      linkedin: "https://www.linkedin.com/in/gabriel-goncalves71/",
      github: "https://github.com/GabrielG71",
    },
    {
      name: "Daniel Zanchetta",
      role: "Co-fundador & Desenvolvedor Full Stack",
      description:
        "Especialista em desenvolvimento web e soluções escaláveis, com foco em criar experiências digitais que transformam negócios.",
      photo: "https://github.com/DanZx819.png",
      linkedin:
        "https://www.linkedin.com/in/daniel-de-oliveira-zanchetta-512a3b311/",
      github: "https://github.com/DanZx819",
    },
  ];

  return (
    <section
      id="quem-somos"
      className="py-32 bg-white relative overflow-hidden"
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse-slow"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 19) % 100}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-semibold mb-6">
            <Users className="w-5 h-5" />
            <span>Nossa Equipe</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Quem Somos
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Especialistas dedicados a transformar seu negócio através da
            tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 hover:border-blue-400 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />

              <div className="relative text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-500">
                  {member.name}
                </h3>

                <p className="text-blue-600 font-semibold mb-6 text-lg">
                  {member.role}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {member.description}
                </p>

                <div className="flex justify-center gap-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-900 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-800/50"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      text: "A transformação digital que a TechLab trouxe para nossa empresa foi impressionante. Conseguimos reduzir custos e aumentar nossa eficiência operacional drasticamente.",
      author: "Otávio Varoto",
      role: "Presidente da AETA",
      rating: 5,
    },
    {
      text: "Profissionais extremamente competentes e dedicados. A solução desenvolvida superou todas as nossas expectativas e trouxe um retorno sobre investimento muito acima do previsto.",
      author: "Alex Marino Gonçalves",
      role: "CEO da Automação Fiscal",
      rating: 5,
    },
    {
      text: "O dashboard personalizado nos deu uma visão clara do negócio que nunca tivemos antes. Agora tomamos decisões muito mais rápidas e assertivas.",
      author: "Juliana Santos",
      role: "Gerente Comercial",
      rating: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-32 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse-slow"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-semibold mb-6">
            <Star className="w-5 h-5 fill-blue-600" />
            <span>Depoimentos</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Empresas que Confiaram na Gente
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Veja o que nossos clientes falam sobre a parceria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white border-2 border-blue-100 hover:border-blue-400 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-blue-600 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  return (
    <>
      <section
        id="contato"
        className="py-32 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float-slow opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 15 + 15}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold mb-8 animate-bounce-slow">
            <Sparkles className="w-5 h-5" />
            <span>Vamos Conversar?</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Transforme sua Empresa Hoje
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
            Solicite um diagnóstico gratuito e descubra como podemos impulsionar
            seus resultados
          </p>

          <button
            onClick={handleContactClick}
            className="group px-14 py-7 bg-white text-blue-600 rounded-2xl text-xl font-bold hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-white/50 flex items-center gap-4 mx-auto"
          >
            <span>Quero um Orçamento Gratuito</span>
            <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300 w-6 h-6" />
          </button>

          {showContact && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div
                className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 shadow-2xl max-w-md w-full text-white relative 
                            animate-[fadeIn_0.3s_ease-in-out,slideUp_0.4s_ease]"
              >
                {/* Botão de fechar */}
                <button
                  onClick={() => setShowContact(false)}
                  className="absolute top-4 right-4 text-white hover:text-red-300 transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-7 h-7" />
                  Fale Conosco
                </h3>

                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <a
                    href="mailto:techlabbrasil@gmail.com"
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all p-4 rounded-2xl shadow-lg"
                  >
                    <Mail className="w-7 h-7" />
                    <span className="text-lg">techlabbrasil@gmail.com</span>
                  </a>

                  {/* Telefone */}
                  <a
                    href="https://wa.me/5518998005937"
                    target="_blank"
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all p-4 rounded-2xl shadow-lg"
                  >
                    <Phone className="w-7 h-7" />
                    <span className="text-lg">+55 (18) 99800-5937</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Diagnóstico Gratuito</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t-2 border-blue-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-blue-600 w-10 h-10" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                TechLab Brasil
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Transformando negócios através da tecnologia
            </p>
            <div className="flex justify-center gap-8 mb-8 text-gray-600 flex-wrap">
              <span>Soluções Digitais</span>
              <span className="hidden md:inline">•</span>
              <span>Inteligência Artificial</span>
              <span className="hidden md:inline">•</span>
              <span>Análise de Dados</span>
            </div>
            <p className="text-gray-500">
              © 2025 TechLab Brasil - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default function TechLabLanding() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
