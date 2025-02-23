const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Marine Biologist",
      image: "/placeholder.svg",
      description: "Expert in mangrove ecosystems with over 15 years of research experience.",
    },
    {
      name: "John Doe",
      role: "Conservation Technologist",
      image: "/placeholder.svg",
      description: "Develops innovative tech solutions for environmental monitoring and conservation.",
    },
    {
      name: "Maria Garcia",
      role: "Community Outreach Coordinator",
      image: "/placeholder.svg",
      description: "Bridges the gap between scientific research and local communities.",
    },
    {
      name: "Alex Chen",
      role: "Data Scientist",
      image: "/placeholder.svg",
      description: "Analyzes complex environmental data to inform conservation strategies.",
    },
  ]
  
  function TeamSection() {
    return (
      <section id="team" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-green-600 text-center mb-4">{member.role}</p>
                <p className="text-center text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default TeamSection
  
  