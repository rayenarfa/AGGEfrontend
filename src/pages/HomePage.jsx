import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/ui/EventCard';
import NewsCard from '../components/ui/NewsCard';
import { featuredEvents, newsArticles } from '../data/mockContent';

export default function HomePage() {
  // Interactive States
  const [selectedProject, setSelectedProject] = useState('india');
  const [activePlan, setActivePlan] = useState('individual');
  const [galleryFilter, setGalleryFilter] = useState('all');

  // Contact form simulation
  const [contactSuccess, setContactSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    setFormData({ firstname: '', lastname: '', email: '', message: '' });
    setTimeout(() => {
      setContactSuccess(false);
    }, 6000);
  };

  // Scroll reveal simulation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger initial reveal
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = {
    india: {
      region: 'South Asia',
      title: 'Groundwater & Hydrogeological Survey',
      description: 'Electric resistivity surveys and borewell planning across multiple states, supporting domestic and industrial water resource management.',
      tags: ['Hydrogeology', 'Field Survey']
    },
    europe: {
      region: 'Europe',
      title: 'Research Collaboration Programme',
      description: 'Joint seminars and technical exchange with European geoscience institutions on environmental geology and sustainable mining.',
      tags: ['Research', 'Partnership']
    },
    'middle-east': {
      region: 'Middle East',
      title: 'Geotechnical Site Assessment',
      description: 'Infrastructure and foundation studies for commercial developments, including subsurface investigation and structural geology reporting.',
      tags: ['Geotechnical', 'Consultancy']
    },
    australia: {
      region: 'Oceania',
      title: 'Mineral Exploration Support',
      description: 'Geological mapping and resource estimation assistance for exploration companies using GIS and remote sensing integration.',
      tags: ['Mining', 'GIS']
    },
    'south-america': {
      region: 'South America',
      title: 'Environmental Compliance Study',
      description: 'Environmental impact assessments and pollution control documentation for industrial and mining sector clients.',
      tags: ['Environmental', 'Compliance']
    },
    'north-atlantic': {
      region: 'North Atlantic',
      title: 'Offshore Geophysical Training',
      description: 'Capacity-building workshops on marine geophysical methods, data acquisition, and interpretation for early-career professionals.',
      tags: ['Geophysics', 'Training']
    }
  };

  const galleryItems = [
    { src: 'https://agge.in/uploads/gallery/dc5cfee5669c333871a09160ccba64e6.jpg', cat: 'events', alt: 'Workshop' },
    { src: 'https://agge.in/uploads/gallery/909ad396e2548b24ad2c6f8d986443b6.jpg', cat: 'portfolio', alt: 'Field work' },
    { src: 'https://agge.in/uploads/gallery/b3468a3fd7b432df5580dad72a8d60e5.jpg', cat: 'events', alt: 'Conference' },
    { src: 'https://agge.in/uploads/gallery/243034204b3ecf15225933f95e9862a7.jpg', cat: 'events', alt: 'Conference session' },
    { src: 'https://agge.in/uploads/gallery/cf9124c7b04d7c24c375b2b196c1002a.jpg', cat: 'events', alt: 'Technical session' },
    { src: 'https://agge.in/uploads/gallery/c270a72f2acd4631c8e1f26ae19841fe.png', cat: 'events', alt: 'Seminar' }
  ];

  const filteredGallery = galleryFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.cat === galleryFilter);

  return (
    <div className="font-sans">
      {/* 1. Earth Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy-light text-white pt-24 pb-16">
        <div className="contour-bg opacity-20" />
        <div className="absolute inset-0 bg-radial-gradient(circle at 75% 50%, rgba(122,155,118,0.12), transparent)" />

        <div className="mx-auto w-full max-w-6xl px-6 relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 reveal">
            <p className="text-xs uppercase font-bold tracking-widest text-sage-light">Exploring Earth Systems Worldwide</p>
            <h1 className="text-4xl md:text-5xl font-display font-light leading-tight">
              Advancing <em className="text-sand not-italic font-semibold">Geoscience</em> &amp; Geo Engineering
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-sand-light/85 max-w-lg">
              Bridging academic research and field applications through training, consultancy, and a global network of earth science professionals.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/membership/join"
                className="rounded-full bg-gradient-to-r from-copper to-copper-light px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:scale-105 shadow-lg shadow-copper/25"
              >
                Join the Association
              </Link>
              <a
                href="#map"
                className="rounded-full border border-white/45 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Explore Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center relative reveal">
            <div className="hero-globe-wrap">
              <div className="hero-globe">
                <div className="globe-glow"></div>
                <div className="globe-orbit"></div>
                <div className="globe-sphere">
                  <div className="globe-texture"></div>
                  <div className="globe-atmosphere"></div>
                </div>
                <a
                  href="https://earth.google.com/web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="satellite-badge"
                >
                  <i className="fas fa-satellite animate-pulse"></i> Live Earth View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 2. Stats Section */}
      <section className="relative py-14 bg-navy text-white overflow-hidden">
        <div className="contour-bg opacity-10" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1 reveal">
              <div className="text-sage text-2xl mb-1"><i className="fas fa-globe-americas" /></div>
              <p className="text-3xl font-display text-sand font-bold">24</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Countries</p>
            </div>
            <div className="space-y-1 reveal reveal-delay-1">
              <div className="text-sage text-2xl mb-1"><i className="fas fa-users" /></div>
              <p className="text-3xl font-display text-sand font-bold">1,850+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Members</p>
            </div>
            <div className="space-y-1 reveal reveal-delay-2">
              <div className="text-sage text-2xl mb-1"><i className="fas fa-file-lines" /></div>
              <p className="text-3xl font-display text-sand font-bold">320</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Publications</p>
            </div>
            <div className="space-y-1 reveal reveal-delay-3">
              <div className="text-sage text-2xl mb-1"><i className="fas fa-calendar-days" /></div>
              <p className="text-3xl font-display text-sand font-bold">48</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Conferences</p>
            </div>
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 3. Why Geoscience Matters */}
      <section className="py-16 bg-cream text-navy" id="why-geoscience">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Foundation</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Understanding Earth. Engineering the Future.</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              Geosciences help us understand the planet's resources, natural processes, and environmental challenges. Through geology, geophysics, hydrogeology, and geo-engineering, professionals develop solutions for sustainable infrastructure, resource management, and environmental protection.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Earth Exploration', items: ['Geological mapping', 'Mineral resources', "Earth's structure studies"], icon: 'fa-globe' },
              { title: 'Water Resources', items: ['Groundwater exploration', 'Hydrogeological studies', 'Sustainable water management'], icon: 'fa-droplet' },
              { title: 'Safe Infrastructure', items: ['Soil investigation', 'Foundation studies', 'Geotechnical engineering'], icon: 'fa-building' },
              { title: 'Environmental Protection', items: ['Climate studies', 'Pollution assessment', 'Sustainable development'], icon: 'fa-leaf' }
            ].map((domain, index) => (
              <article key={domain.title} className={`bg-white border border-sandstone/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-copper/40 reveal reveal-delay-${index}`}>
                <div className="text-sage text-2xl mb-4"><i className={`fas ${domain.icon}`} /></div>
                <h3 className="text-md font-display font-semibold text-navy mb-3">{domain.title}</h3>
                <ul className="space-y-2 text-xs text-text-muted list-none">
                  {domain.items.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="text-copper mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 4. Interactive Projects Map Section */}
      <section className="py-16 bg-cream text-navy" id="map">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Global Reach</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Projects Across the World</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              Select a marker to explore active geoscience and geo-engineering projects led by AGGE members and partners.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 relative bg-gradient-to-b from-navy-light to-navy-mid p-4 rounded-2xl shadow-lg border border-navy overflow-hidden reveal">
              <div className="contour-bg opacity-15" />

              <div className="relative z-10 w-full aspect-[2/1] bg-[linear-gradient(rgba(12,26,43,0.35),rgba(12,26,43,0.35)),url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-center bg-contain bg-no-repeat rounded-lg">

                {/* Custom Map Grids overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(163,191,159,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(163,191,159,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />

                {/* Map Markers */}
                <button
                  onClick={() => setSelectedProject('india')}
                  className="map-marker"
                  style={{ left: '72%', top: '48%' }}
                  aria-label="India Project"
                />
                <button
                  onClick={() => setSelectedProject('europe')}
                  className="map-marker"
                  style={{ left: '55%', top: '38%' }}
                  aria-label="Europe Project"
                />
                <button
                  onClick={() => setSelectedProject('middle-east')}
                  className="map-marker"
                  style={{ left: '62%', top: '42%' }}
                  aria-label="Middle East Project"
                />
                <button
                  onClick={() => setSelectedProject('australia')}
                  className="map-marker"
                  style={{ left: '85%', top: '68%' }}
                  aria-label="Australia Project"
                />
                <button
                  onClick={() => setSelectedProject('south-america')}
                  className="map-marker"
                  style={{ left: '28%', top: '55%' }}
                  aria-label="South America Project"
                />
                <button
                  onClick={() => setSelectedProject('north-atlantic')}
                  className="map-marker"
                  style={{ left: '48%', top: '32%' }}
                  aria-label="North Atlantic Project"
                />
              </div>
            </div>

            {/* Map sidebar details card */}
            <aside className="bg-white border border-sandstone/30 rounded-2xl p-6 shadow-md shadow-navy/5 flex flex-col justify-center min-h-[260px] reveal reveal-delay-1">
              {selectedProject && projects[selectedProject] ? (
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-copper">
                    {projects[selectedProject].region}
                  </span>
                  <h3 className="text-lg font-display text-navy font-semibold leading-snug">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                  <div className="flex gap-2 pt-2">
                    {projects[selectedProject].tags.map(tag => (
                      <span key={tag} className="rounded-full bg-sand-light px-2.5 py-0.5 text-[9px] font-bold text-navy">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-2 text-text-muted">
                  <i className="fas fa-map-location-dot text-2xl text-sage/60" />
                  <p className="text-xs">Click a project marker on the map to view details</p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 5. Disciplines / Areas of Expertise */}
      <section className="py-16 bg-cream text-navy" id="expertise">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Disciplines</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Our Areas of Expertise</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              AGGE brings together specialists across the core disciplines that define modern geoscience and geo-engineering practice.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Geology', desc: "Study of Earth's materials, history, and geological processes.", icon: 'fa-gem' },
              { title: 'Geophysics', desc: "Using physical methods to investigate Earth's underground structures.", icon: 'fa-wave-square' },
              { title: 'Hydrogeology', desc: 'Understanding groundwater systems and water resources.', icon: 'fa-water' },
              { title: 'Geo-engineering', desc: 'Applying geological knowledge to construction and infrastructure.', icon: 'fa-hard-hat' },
              { title: 'Environmental Geoscience', desc: 'Protecting ecosystems through scientific assessment.', icon: 'fa-seedling' },
              { title: 'Mining & Mineral Exploration', desc: 'Responsible identification and management of resources.', icon: 'fa-mountain' }
            ].map((exp, index) => (
              <article key={exp.title} className="bg-white border border-sandstone/25 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-copper/40 reveal">
                <div className="text-sage text-2xl mb-3"><i className={`fas ${exp.icon}`} /></div>
                <h3 className="text-md font-display font-semibold text-navy mb-2">{exp.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{exp.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 6. Latest News */}
      <section className="py-16 bg-cream text-navy" id="news">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-4 reveal">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Updates</p>
              <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Latest News</h2>
            </div>
            <Link to="/news" className="text-xs font-bold uppercase tracking-wider text-copper hover:text-copper-light transition-colors">
              News Archive &raquo;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {newsArticles.slice(0, 3).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 7. What We Offer (Pillars) */}
      <section className="py-16 bg-cream text-navy" id="offer">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Community</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">What We Have to Offer</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              Resources, connections, and professional services to help geoscientists and engineers grow throughout their careers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Students', desc: 'Training programmes, internships, field experience, and mentoring for the next generation of earth science professionals.', link: '/students', icon: 'fa-graduation-cap' },
              { title: 'Learning Geoscience', desc: 'Workshops and expert-led sessions bridging academic knowledge with real-world field applications.', link: '/education', icon: 'fa-book-open' },
              { title: 'Communities', desc: 'A professional network for knowledge exchange, research collaboration, and mutual support.', link: '/communities', icon: 'fa-users' }
            ].map((pillar, index) => (
              <article key={pillar.title} className="bg-white border border-sandstone/25 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-copper/40 flex flex-col justify-between reveal">
                <div>
                  <div className="text-sage text-2xl mb-4"><i className={`fas ${pillar.icon}`} /></div>
                  <h3 className="text-md font-display font-semibold text-navy mb-2">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-text-muted">{pillar.desc}</p>
                </div>
                <Link to={pillar.link} className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-copper hover:text-copper-light transition-colors">
                  Explore More &raquo;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 8. About Section */}
      <section className="py-16 bg-cream text-navy" id="about">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-2xl border border-sandstone/30 overflow-hidden shadow-lg reveal">
            <img
              src="https://agge.in/assets/images/resources/about-two-img-2.png"
              alt="Geoscience field survey"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-5 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Our Mission</p>
            <h2 className="text-3xl font-display text-navy leading-tight">About AGGE</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              The Association of Geosciences and Geo Engineering (AGGE) is committed to the advancement, integration, and practical application of geosciences and geo-engineering disciplines.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              We serve geologists, geophysicists, geotechnical engineers, hydrologists, environmental scientists, mining professionals, researchers, and industry experts worldwide.
            </p>
            <ul className="space-y-2.5 text-xs text-text-muted font-semibold pl-1">
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-sage/10 text-sage flex items-center justify-center"><i className="fas fa-check" /></span>
                <span>Direct support from AGGE administrators</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-sage/10 text-sage flex items-center justify-center"><i className="fas fa-check" /></span>
                <span>Access to national and international events</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-sage/10 text-sage flex items-center justify-center"><i className="fas fa-check" /></span>
                <span>Professional certification and member recognition</span>
              </li>
            </ul>
            <Link to="/about" className="mt-4 rounded-full bg-sage px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-sage-light inline-block">
              Read More About Us
            </Link>
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 9. Professional Services */}
      <section className="py-16 bg-cream text-navy" id="services">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Expertise</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Professional Services</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              Consultancy and field services delivered by qualified geoscience and geo-engineering professionals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Borewell & Open Well Survey', desc: 'Groundwater survey services for domestic and commercial properties including electric resistivity and drilling advice.', img: 'https://agge.in/uploads/service_images/11da143694a173a0daa3e1b44e9e1cdd.jpg' },
              { title: 'Technical Site Visit', desc: 'On-site assessment from qualified multidisciplinary experts with geological mapping and structural reporting.', img: 'https://agge.in/uploads/service_images/c77a52548a25486381ab0edae4c58881.jpg' },
              { title: 'Environmental Compliance', desc: 'Pollution control board approvals, consent to establish (CTE), and consent to operate regulatory documentation filing.', img: 'https://agge.in/uploads/service_images/fffaa426c46d67e8567d719c7b60503e.jpg' },
              { title: 'Mining & Geology Consultancy', desc: 'Mineral resource estimation, registered geological mapping, and exploration target evaluations.', img: 'https://agge.in/uploads/service_images/32806949d6171330ede7b987e14707d3.jpg' },
              { title: 'Training Programmes', desc: 'Professional development classes bridging geoscience academic frameworks with physical field practices.', img: 'https://agge.in/uploads/service_images/2cac2f4004b92c3d9c692f7c9cca4420.jpg' },
              { title: 'Geological Mapping & Surveying', desc: 'Detailed surface mapping integrations using GIS coordinates, high precision GPS data, and satellite indicators.', img: 'https://agge.in/uploads/service_images/2408765862a28bf4a24abbea5fca6813.jpg' }
            ].map((srv, index) => (
              <article key={srv.title} className="bg-white border border-sandstone/25 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-copper/40 reveal">
                <div className="h-44 w-full bg-navy-mid">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-md font-display font-semibold text-navy leading-snug">{srv.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{srv.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 10. Technology / Tools */}
      <section className="py-16 bg-cream text-navy" id="technology">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Modern Tools</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Technology Driving Earth Science</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              Today's geoscientists rely on advanced technologies to observe, analyse, and interpret the Earth with unprecedented precision.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Remote Sensing', desc: 'Satellite imagery for Earth observation and large-scale geological analysis.', icon: 'fa-satellite' },
              { title: 'GIS Mapping', desc: 'Digital analysis and visualisation of geological and spatial information.', icon: 'fa-map-location-dot' },
              { title: 'Geophysical Surveys', desc: 'Investigating underground structures through seismic, electrical, and GPR methods.', icon: 'fa-bolt' },
              { title: 'Machine Learning', desc: 'Processing geological data and building predictive models for field applications.', icon: 'fa-robot' }
            ].map((tech, index) => (
              <article key={tech.title} className="bg-white border border-sandstone/25 p-5 rounded-xl shadow-sm text-center reveal">
                <div className="text-sage text-2xl mb-3"><i className={`fas ${tech.icon}`} /></div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">{tech.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{tech.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Research & Innovation */}
      <section className="relative py-16 bg-navy text-white overflow-hidden" id="research">
        <div className="contour-bg opacity-15" />
        <div className="mx-auto max-w-6xl px-6 relative z-10 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-sand">Discovery</p>
            <h2 className="text-3xl font-display text-white mt-1 leading-tight">Advancing Research Through Collaboration</h2>
            <p className="text-xs md:text-sm leading-relaxed text-sand-light/80">
              AGGE supports scientific inquiry that connects field investigations with academic excellence and real-world impact.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-sand-light/90 font-medium">
              <li className="flex items-center gap-2.5">
                <i className="fas fa-microscope text-sage" /> Geological research programmes
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-compass text-sage" /> Field investigations and surveys
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-chart-line text-sage" /> Data analysis and GIS technology
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-university text-sage" /> Academic partnerships
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-user-graduate text-sage" /> Student research opportunities
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-navy-light shadow-2xl reveal reveal-delay-1">
            <img
              src="https://agge.in/uploads/gallery/dc5cfee5669c333871a09160ccba64e6.jpg"
              alt="Geoscience research"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 12. Featured Events Section */}
      <section className="py-16 bg-cream text-navy" id="events">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-4 reveal">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Calendar</p>
              <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Upcoming Events</h2>
            </div>
            <Link to="/events" className="text-xs font-bold uppercase tracking-wider text-copper hover:text-copper-light transition-colors">
              Full Calendar &raquo;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. Subscription Pricing Plans & Tab Selector */}
      <section className="py-16 bg-cream text-navy" id="pricing">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Plans</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Subscription Plans</h2>
          </div>

          {/* Pricing Tabs */}
          <div className="flex justify-center gap-1 border border-sandstone/20 bg-white p-1 rounded-full max-w-sm mx-auto mb-10 reveal">
            {[
              { id: 'individual', label: 'Individual' },
              { id: 'corporate', label: 'Corporate' },
              { id: 'student', label: 'Student' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActivePlan(tab.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer border-none ${activePlan === tab.id
                    ? 'bg-copper text-white shadow-sm'
                    : 'text-text-muted hover:text-navy hover:bg-sand-light/50'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pricing Panel Content */}
          <div className="max-w-xl mx-auto reveal">
            {activePlan === 'individual' && (
              <div className="bg-white border border-sandstone/30 rounded-2xl shadow-xl overflow-hidden text-center p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-copper to-copper-light" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Individual Tier</p>
                <div className="text-3xl font-display text-navy font-bold mt-2">€120.00 <span className="text-xs text-text-muted">/ year</span></div>
                <p className="text-xs text-text-muted mt-1">Standard plan for geoscience &amp; engineering professionals</p>
                <ul className="my-6 space-y-3 text-xs text-text-muted max-w-xs mx-auto list-none pl-0">
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Official website listing</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Membership certificate and ID</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Access to journals and event discounts</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Project collaboration opportunities</li>
                </ul>
                <Link to="/membership/join" className="w-full block rounded-full bg-gradient-to-r from-copper to-copper-light py-2 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition shadow shadow-copper/25">
                  Select Plan
                </Link>
              </div>
            )}
            {activePlan === 'corporate' && (
              <div className="bg-white border border-sandstone/30 rounded-2xl shadow-xl overflow-hidden text-center p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-copper to-copper-light" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Corporate Tier</p>
                <div className="text-3xl font-display text-navy font-bold mt-2">€500.00 <span className="text-xs text-text-muted">/ year</span></div>
                <p className="text-xs text-text-muted mt-1">Plan for corporate teams, agencies, and academic departments</p>
                <ul className="my-6 space-y-3 text-xs text-text-muted max-w-xs mx-auto list-none pl-0">
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Custom registration quotas</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Company membership certificate</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Platform listing and visibility</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Priority event access</li>
                </ul>
                <Link to="/membership/join" className="w-full block rounded-full bg-gradient-to-r from-copper to-copper-light py-2 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition shadow shadow-copper/25">
                  Select Plan
                </Link>
              </div>
            )}
            {activePlan === 'student' && (
              <div className="bg-white border border-sandstone/30 rounded-2xl shadow-xl overflow-hidden text-center p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-copper to-copper-light" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Student Tier</p>
                <div className="text-3xl font-display text-navy font-bold mt-2">€30.00 <span className="text-xs text-text-muted">/ year</span></div>
                <p className="text-xs text-text-muted mt-1">Discounted plan for students and young researchers</p>
                <ul className="my-6 space-y-3 text-xs text-text-muted max-w-xs mx-auto list-none pl-0">
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Event and training discounts</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Membership certificate and ID</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Career mentoring support</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check text-sage" /> Volunteer programme eligibility</li>
                </ul>
                <Link to="/membership/join" className="w-full block rounded-full bg-gradient-to-r from-copper to-copper-light py-2 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition shadow shadow-copper/25">
                  Select Plan
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 14. Contact Form / Portal */}
      <section className="py-16 bg-cream text-navy" id="portal">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-5 reveal">
              <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Member Portal</p>
              <h2 className="text-3xl font-display text-navy leading-tight">Login &amp; Connect</h2>
              <p className="text-sm leading-relaxed text-text-muted">
                Sign in to the AGGE community or send us a message. Fill in your details and our team will get back to you shortly.
              </p>
              <ul className="space-y-2.5 text-xs text-text-muted font-medium list-none pl-0">
                <li className="flex items-center gap-2"><i className="fas fa-globe text-sage text-base" /> Access member resources worldwide</li>
                <li className="flex items-center gap-2"><i className="fas fa-calendar-check text-sage text-base" /> Register for events and training</li>
                <li className="flex items-center gap-2"><i className="fas fa-envelope-open-text text-sage text-base" /> Direct communication with AGGE administrators</li>
              </ul>
            </div>

            <div className="bg-white border border-sandstone/30 p-6 rounded-2xl shadow-xl reveal reveal-delay-1">
              {contactSuccess ? (
                <div className="text-center py-10 space-y-3 animate-fadeIn">
                  <i className="fas fa-check-circle text-4xl text-sage" />
                  <h3 className="text-lg font-display text-navy font-bold">Message Received</h3>
                  <p className="text-xs text-text-muted">Thank you! Your message has been sent successfully. Our support team will get in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid gap-4 grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="firstname" className="text-[10px] uppercase font-bold tracking-widest text-text-muted">First Name</label>
                      <input
                        id="firstname"
                        type="text"
                        required
                        value={formData.firstname}
                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                        placeholder="Your first name"
                        className="w-full rounded-lg border border-sandstone/35 bg-cream/30 px-3.5 py-2 text-xs text-navy focus:border-copper focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="lastname" className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Last Name</label>
                      <input
                        id="lastname"
                        type="text"
                        required
                        value={formData.lastname}
                        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                        placeholder="Your last name"
                        className="w-full rounded-lg border border-sandstone/35 bg-cream/30 px-3.5 py-2 text-xs text-navy focus:border-copper focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-sandstone/35 bg-cream/30 px-3.5 py-2 text-xs text-navy focus:border-copper focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your inquiry, membership interest..."
                      className="w-full rounded-lg border border-sandstone/35 bg-cream/30 px-3.5 py-2 text-xs text-navy focus:border-copper focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-copper to-copper-light py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-[1.02] transition shadow border-none cursor-pointer"
                  >
                    <i className="fas fa-paper-plane mr-1.5" /> Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 15. Executive Committee Section */}
      <section className="py-16 bg-cream text-navy" id="team">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Leadership</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Executive Committee</h2>
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              Experts driving knowledge into real-world impact across geoscience and geo-engineering.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Test1 ', role: 'President', desc: 'Geophysicist with 15 years of field experience in seismic and GPR surveys.', initials: 'JR', bg: '#152a42', fg: '#d9cbb0' },
              { name: 'Test2', role: 'Vice President', desc: 'Professional member with expertise in mining and geology.', initials: 'MK', bg: '#b87333', fg: '#f7f3ec' },
              { name: 'Test3', role: 'Secretary', desc: 'Academic geologist with over 10 years of teaching experience.', initials: 'AA', bg: '#7a9b76', fg: '#ede4d3' },
              { name: 'Test4', role: 'Treasurer', desc: 'Geoscience professional with expertise in hydrogeology.', initials: 'KA', bg: '#c4a57b', fg: '#0c1a2b' }
            ].map((leader, index) => (
              <article key={leader.name} className="bg-white border border-sandstone/25 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-copper/40 text-center reveal">
                <div className="h-56 w-full overflow-hidden flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    <rect width="100%" height="100%" fill={leader.bg} />
                    <circle cx="100" cy="80" r="32" fill={leader.fg} opacity="0.85" />
                    <path d="M92 105h16v20H92z" fill={leader.fg} opacity="0.85" />
                    <path d="M55 160c0-30 20-45 45-45s45 15 45 45v30H55v-30z" fill={leader.fg} opacity="0.85" />
                    <text x="100" y="200" fontFamily="'DM Serif Display', Georgia, serif" fontSize="22" fill={leader.fg} textAnchor="middle" fontWeight="bold" letterSpacing="1">{leader.initials}</text>
                  </svg>
                </div>
                <div className="p-5 space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-copper">{leader.role}</p>
                  <h3 className="text-md font-display font-semibold text-navy">{leader.name}</h3>
                  <p className="text-[11px] text-text-muted leading-relaxed mt-2">{leader.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider reverse" />

      {/* 16. Event Gallery with interactive filters */}
      <section className="py-16 bg-cream text-navy" id="gallery">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Gallery</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Event Gallery</h2>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-2 mb-10 reveal">
            {[
              { filter: 'all', label: 'All' },
              { filter: 'events', label: 'Events' },
              { filter: 'portfolio', label: 'Portfolio' }
            ].map(btn => (
              <button
                key={btn.filter}
                onClick={() => setGalleryFilter(btn.filter)}
                className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider transition border-none cursor-pointer ${galleryFilter === btn.filter
                    ? 'bg-copper text-white shadow-sm'
                    : 'bg-white text-text-muted hover:text-navy border border-sandstone/30'
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {filteredGallery.map((item, index) => (
              <div key={index} className="h-64 rounded-xl overflow-hidden border border-sandstone/20 shadow shadow-navy/5 bg-navy-mid relative group animate-fadeIn">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-sand border border-sand/40 px-3 py-1 rounded">
                    {item.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="strata-divider" />

      {/* 17. Partners & Collaborations */}
      <section className="py-14 bg-cream text-navy" id="partners">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <p className="text-[10px] uppercase tracking-widest font-bold text-copper">Network</p>
            <h2 className="text-3xl font-display text-navy mt-1 leading-tight">Partners &amp; Collaborations</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Academic Institutions', desc: 'Universities and colleges advancing earth science education and research.', icon: 'fa-university' },
              { title: 'Research Centers', desc: 'Laboratories and institutes driving innovation in geoscience disciplines.', icon: 'fa-flask-vial' },
              { title: 'Engineering Companies', desc: 'Firms applying geo-engineering expertise to infrastructure and development.', icon: 'fa-helmet-safety' },
              { title: 'Environmental Groups', desc: 'Groups dedicated to environmental protection and sustainable resource use.', icon: 'fa-tree' }
            ].map((partner, index) => (
              <article key={partner.title} className="bg-white border border-sandstone/25 p-5 rounded-xl shadow-sm text-center reveal">
                <div className="text-sage text-2xl mb-3"><i className={`fas ${partner.icon}`} /></div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">{partner.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{partner.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
