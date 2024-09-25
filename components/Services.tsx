export default function Services() {
    const services = [
      { title: 'Web Design', description: 'Create beautiful and responsive websites' },
      { title: 'Digital Marketing', description: 'Boost your online presence and reach' },
      { title: 'App Development', description: 'Build powerful mobile applications' },
    ];
  
    return (
      <div id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }