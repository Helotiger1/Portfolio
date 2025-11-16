import React from "react";

// ====================================================================
// 1. INTERFACES (TypeScript) - Sin cambios, solo para referencia
// ====================================================================

interface ProjectCardProps {
  title: string;
  description: string;
}

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

// ====================================================================
// 2. SUB-COMPONENTES CON ESTILOS AVANZADOS
// ====================================================================

/**
 * Componente reutilizable para mostrar un proyecto.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    // Diseño Neumorfismo Suave: Borde y sombras internas/externas que dan volumen
    <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-indigo-300/50 transform hover:-translate-y-2 cursor-pointer">
      <h3 className="text-xl font-extrabold text-gray-900 mb-3 border-l-4 border-indigo-500 pl-3">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

/**
 * Componente reutilizable para mostrar un elemento de formación académica.
 */
const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  period,
  description,
}) => {
  return (
    // Diseño con borde sutil para simular una línea de tiempo
    <div className="relative border-l-4 border-indigo-200 pl-8 mb-8">
      {/* Punto de línea de tiempo */}
      <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 top-0 border-4 border-gray-50 shadow-md"></div>

      <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{institution}</h3>
            <p className="text-lg text-indigo-700 font-medium">{degree}</p>
          </div>
          {/* Badge con borde y color vibrante */}
          <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 border border-indigo-300 whitespace-nowrap">
            {period}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// ====================================================================
// 3. COMPONENTE PRINCIPAL (Portfolio) con Estilos Lujosos
// ====================================================================

const Portfolio: React.FC = () => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = "flex";
    }
  };

  return (
    // Fondo de gradiente suave para un look más "vivo"
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 font-sans">
      {/* Header con Vidrio Esmerilado (Glassmorphism) */}
      <header className="py-12 shadow-2xl backdrop-blur-md bg-white/80 top-0 z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-black text-gray-900 mb-2 tracking-tighter">
            Anghelo Aguilera
          </h1>
          <p className="text-2xl text-indigo-700 font-extrabold uppercase tracking-widest">
            Desarrollador Full Stack
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Sección de perfil (About Me) */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Imagen de perfil */}
            <div className="w-full md:w-2/5 flex justify-center">
              {/* Sombra de anillo gruesa y vibrante */}
              <div className="w-80 h-80 bg-gray-100 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-indigo-400/50 transition-all duration-500 hover:ring-indigo-600">
                <img
                  src="/Anghelo.png"
                  alt="Anghelo Aguilera"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                {/* Fallback */}
                <div
                  className="w-full h-full flex items-center justify-center bg-indigo-100 hidden"
                  style={{ display: "none" }}
                >
                  <span className="text-indigo-600 font-semibold">
                    Foto aquí
                  </span>
                </div>
              </div>
            </div>

            {/* Información personal */}
            <div className="w-full md:w-3/5">
              <div className="bg-white rounded-3xl p-10 shadow-3xl border border-gray-200">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                  Sobre mí
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg border-l-4 border-indigo-200 pl-4 italic">
                  Soy un desarrollador apasionado por la tecnología y la
                  creación de soluciones innovadoras. Con experiencia en
                  desarrollo web full stack, me especializo en crear
                  aplicaciones con React, Django o Laravel. Siempre buscando
                  nuevos desafíos y oportunidades para crecer profesionalmente.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-4 border-t border-gray-100 flex items-center">
                  Contacto
                </h3>
                <div className="flex flex-wrap gap-4">
                  {/* Correo Electrónico */}
                  <a
                    href="mailto:angheloaguilera@gmail.com"
                    className="flex items-center text-gray-700 hover:text-white transition-all duration-300 bg-indigo-50 hover:bg-indigo-600 p-3 rounded-xl font-semibold shadow-md"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    angheloaguilera@gmail.com
                  </a>
                  {/* Teléfono */}
                  <a
                    href="https://wa.me/+584120948781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-white transition-all duration-300 bg-indigo-50 hover:bg-indigo-600 p-3 rounded-xl font-semibold shadow-md"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +58 412-0948781
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Educación */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 flex justify-center items-center">
              Formación Académica
            </h2>
            <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-inner">
            <EducationItem
              institution="U.E Colegio Juan Griego"
              degree="Bachiller"
              period="2011 - 2022"
              description="Bachiller en Ciencias de la República Bolivariana de Venezuela."
            />
            <EducationItem
              institution="Universidad de Oriente"
              degree="Licenciado en Informatica"
              period="2022 - Presente"
              description="Cursando la Licenciatura en Informática en la UDONE."
            />
          </div>
        </section>

        {/* Sección de proyectos */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 flex justify-center items-center">
              Mis Proyectos
            </h2>
            <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Sistema de envíos"
              description="Una plataforma de envíos completa con sistema de pagos y panel de administración en NextJS."
            />
            <ProjectCard
              title="TaskApp"
              description="Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, categorías y recordatorios con React y Laravel."
            />
            <ProjectCard
              title="Sistema de Inscripciones Ficticio"
              description="Aplicación de gestión de Inscripciones con PHP para simular procesos educativos."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16 shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 Anghelo Aguilera. Todos los derechos reservados.
          </p>
          <p className="text-indigo-400 mt-2 text-sm font-medium">
            Desarrollado con React, TypeScript y Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
