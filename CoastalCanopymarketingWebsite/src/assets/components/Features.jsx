import { MapPin, Users, LineChart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Community Reporting",
    description: "Empower local communities to report on mangrove health and threats in real-time.",
  },
  {
    icon: MapPin,
    title: "Mangrove Mapping",
    description: "Utilize satellite imagery and user data to create accurate, up-to-date mangrove forest maps.",
  },
  {
    icon: LineChart,
    title: "Mangrove Monitoring",
    description: "Track long-term changes in mangrove ecosystems to inform conservation efforts.",
  },
]

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

