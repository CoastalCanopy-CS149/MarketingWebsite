import { useState } from "react"

const faqs = [
  {
    question: "What are mangroves and why are they important?",
    answer:
      "Mangroves are unique trees that grow in coastal saline or brackish water. They are crucial for protecting coastlines, providing habitats for diverse species, and sequestering large amounts of carbon.",
  },
  {
    question: "How can I contribute to mangrove conservation?",
    answer:
      "You can contribute by using our app to report on local mangrove conditions, participating in community planting events, and spreading awareness about the importance of mangroves.",
  },
  {
    question: "Is the MangroveGuard app free to use?",
    answer:
      "Yes, the MangroveGuard app is free to download and use. We believe in making conservation tools accessible to everyone.",
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
              {openIndex === index && <div className="p-4 bg-green-100 rounded-b-lg">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ