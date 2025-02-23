const teamMembers = [
    {
        name: "Dilki Wathsala",
        role: "Leader/Back-end Developer",
        image: "/Images/Wathsala.jpg",
        description: "A visionary leader driving the development of CoastalCanopy.lk,ensuring seamless collaboration and impactful outcomes.",
    },
    {
        name: "Dinaya Guruge",
        role: "ML Engineer",
        image: "/Images/Dinaya.jpg",
        description: " A forward-thinking team member with expertise in project management and system integration.",
    },
    {
        name: "Lawanya Malawige",
        role: "Front-end Developer",
        image: "/Images/Lawanya.jpg",
        description: " A motivated team member with a passion for community engagement and environmental conservation.",
    },
    {
        name: "Malsha Gamage",
        role: "Back-end Developer",
        image: "/Images/Malsha.jpg",
        description: " A dedicated and passionate computer science student with a focus on software development and sustainable technologies.",
    },
    {
        name: "Devin Nanayakkara",
        role: "Front-end Developer",
        image: "/Images/Devin.jpg",
        description: " An aspiring computer science enthusiast with a keen interest in environmental sustainability.",
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
  
  