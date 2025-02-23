import { MapPin, Users, LineChart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Community Reporting",
    description: "Empower local communities to protect mangroves by reporting illegal activities, deforestation, and environmental threats. Our platform ensures anonymous reporting and direct alerts to authorities for quick action.",
  },
  {
    icon: MapPin,
    title: "Mangrove Mapping",
    description: "Explore real-time interactive maps of mangrove forests, powered by satellite imagery. Track mangrove coverage, identify high-risk areas, and contribute to conservation efforts with accurate geographical insights.",
  },
  {
    icon: LineChart,
    title: "Mangrove Monitoring",
    description: "Stay updated on mangrove health with AI-driven monitoring. Our system analyzes historical data to predict risks, detect potential threats, and provide timely alerts, helping to prevent deforestation and ensure long-term sustainability.",
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

