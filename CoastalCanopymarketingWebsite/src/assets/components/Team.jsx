const teamMembers = [
    {
        name: "Dilki Wathsala",
        role: "Leader/Back-end Developer",
        image: "/Images/Wathsala.jpg",
        description: "Expert in mangrove ecosystems with over 15 years of research experience.",
    },
    {
        name: "Dinaya Guruge",
        role: "ML Engineer",
        image: "/Images/Dinaya.jpg",
        description: "Develops innovative tech solutions for environmental monitoring and conservation.",
    },
    {
        name: "Lawanya Malawige",
        role: "Back-end Developer",
        image: "/Images/Lawanya.jpg",
        description: "Bridges the gap between scientific research and local communities.",
    },
    {
        name: "Malsha Gamage",
        role: "Back-end Developer",
        image: "/Images/Malsha.jpg",
        description: "Analyzes complex environmental data to inform conservation strategies.",
    },
    {
        name: "Devin Nanayakkara",
        role: "Front-end Developer",
        image: "/Images/Devin.jpg",
        description: "Analyzes complex environmental data to inform conservation strategies.",
    },
  ]
  
  function TeamSection() {
    return (
      <section id="team" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
  
  