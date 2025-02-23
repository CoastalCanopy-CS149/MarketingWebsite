import { useState } from "react"

const faqs = [
  {
    question: "🌿What is a mangrove?",
    answer:
      "A mangrove is a type of coastal tree or shrub that grows in salty or brackish water along shorelines, estuaries, and tidal areas in tropical and subtropical regions. Mangroves have special adaptations like aerial roots (prop roots or pneumatophores) that help them survive in waterlogged and oxygen-poor soil.",
  },
  {
    question: "🌍Why are mangroves important?",
    answer: [
      "Coastal Protection     - They act as natural barriers against storms, tsunamis, and erosion.",
      "Biodiversity Hotspots  - Provide shelter and breeding grounds for fish and other wildlife.",
      "Carbon Storage         - Store large amounts of carbon, helping to combat climate change.",
      "Livelihood Support     - Local communities depend on them for fishing, and ecotourism.",
    ],
  },
  {
    question: "🌱What are the different types of mangroves?",
    answer:
      "Some common mangrove species include red mangrove (Rhizophora), black mangrove (Avicennia), white mangrove (Laguncularia), and buttonwood mangrove (Conocarpus)",
  },
  {
    question: "⚠️Why are the threats to mangroves?",
    answer: [
      "Coastal development",
      "Pollution",
      "Climate change",
      "Overharvesting and unsustainable practices", 
      "Invasive species",
    ],
  },
  {
    question: "💚How does Coastal Canopy support mangrove conservation?",
    answer: 
      "Coastal Canopy supports mangrove conservation by leveraging technology and community engagement. Through GIS-based mapping, users can monitor mangrove coverage, while community reporting allows people to flag threats like deforestation and pollution. Our gamification system encourages participation with rewards, and we provide educational resources to raise awareness. Additionally, we collaborate with environmental organizations and local communities to drive sustainable conservation efforts.",
    
  },
    {
      question: "💸Is the coastalcanopy.org.lk website free to use?",
      answer:"Yes, the coastalcanopy.org.lk website is free to use for individuals who wish to participate in mangrove mapping, reporting, and education.",
    
  },
  {
    question: "🤝 How can organizations partners with Coastal Canopy?",
    answer:"Organizations can partner with Coastal Canopy by contacting us directly through our website or email.",
  
},
{
  question: "💖Can I donate to support the project?",
  answer: "Yes, you can donate to Coastal Canopy to support our mission of protecting mangrove ecosystems. Donations help fund conservation projects, technological advancements, and community outreach initiatives.",

},
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-green-100 rounded-b-lg">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc list-inside">
                      {faq.answer.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
