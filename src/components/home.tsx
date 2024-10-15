import React from 'react';
import Navbar from '../components/navbar.tsx';
import heroBg from '../img/testimg.jpeg';
import bg from '../img/Programmeringssprog.jpg';
import bg2 from '../img/github.png';
import bg3 from '../img/linkedin.png';
import bg4 from '../img/phone.png';
import bg5 from '../img/post.png';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div id="/">
      <header className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </header>

      <div
        className="relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          minHeight: '730px',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            {t('welcome')}
          </h1>
        </div>
      </div>

      <div>
        <main className="container mx-auto py-8">
          <section id="about" className="text-center py-24">
            <h1 className="text-5xl font-semibold mb-2">
              {t('portfolioTitle')}
            </h1>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-5">
            {/* Web Design Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Web Design" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">
                {t('webDesign')}
              </h2>
              <p className="text-gray-700 text-center">
                {t('webDesignDescription')}
              </p>
            </div>

            {/* Development Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <img src="https://img.icons8.com/bubbles/100/000000/code.png" alt="Development" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">
                {t('development')}
              </h2>
              <p className="text-gray-700 text-center">
                {t('developmentDescription')}
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Projects Section */}
      <div>
        <main className="relative py-14 mt-32 flex justify-center items-center mb-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg})`,
              height: '730px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          ></div>

          <div className="absolute inset-0 bg-black opacity-50" style={{ height: '730px' }}></div>

          <section id="projects" className="z-10 py-20 -mt-14">
            <h1 className="text-5xl font-semibold text-white text-center mb-10">
              {t('projects')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 p-5">
              <div className="bg-white p-4 rounded-lg w-[400px] md:w-[700px] h-auto md:h-[330px] overflow-hidden">
                <div className="flex justify-center mb-4">
                  <a href="https://github.com/Almin5000?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-center relative group">
                      <img
                        src={bg2}
                        alt="Projects"
                        className="h-100 w-50 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>
                </div>

                <h5 className="text-sm font-bold text-center">
                  <a href="https://github.com/Almin5000?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {t('githubProjects')}
                  </a>
                </h5>
                <p className="text-gray-700 text-center mt-8">
                  {t('githubDescriptionMain')}
                      <p className="text-sm text-gray-500 mt-8">
                    {t('githubDescriptionDetail')}
                  </p>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Contact Section */}
      <div>
        <main className="flex justify-center items-center py-14 mt-20">
          <section id="contact" className="flex flex-col items-center">
            <h1 className="text-5xl font-semibold mb-5">{t('contact')}</h1>
            <div className="bg-white shadow-lg mt-7 rounded-lg w-[400px] md:w-[700px] h-auto flex justify-center items-center p-5">
              <div className="text-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <a href="https://www.linkedin.com/in/almin-gudzevic-a0740b236/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                    <img src={bg3} alt="LinkedIn" className="h-20 w-20 mb-2" />
                  </a>
                  <a href="https://www.linkedin.com/in/almin-gudzevic-a0740b236/" target="_blank" rel="noopener noreferrer">
                    <h5 className="text-center">LinkedIn</h5>
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <img src={bg4} alt="Telefon" className="h-20 w-20 mb-2" />
                  <h5 className="text-center">12 34 56 78 </h5>
                </div>

                <div className="flex flex-col items-center">
                  <a href="mailto:Almi0098@edu.sde.dk" className="transition-transform duration-300 hover:scale-110">
                    <img src={bg5} alt="Mail" className="h-20 w-20 mb-2" />
                  </a>
                  <a href="mailto:Almi0098@edu.sde.dk">
                    <h5 className="text-center">Mail@gmail.com</h5>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
