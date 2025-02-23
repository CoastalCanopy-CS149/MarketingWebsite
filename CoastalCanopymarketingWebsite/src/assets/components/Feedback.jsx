import { useState } from "react"

function FeedbackSection() {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle feedback submission
    console.log("Feedback submitted:", feedback)
    setFeedback("")
  }

  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Share Your Feedback</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8">
            Your feedback helps us improve MangroveGuard and better serve our mangrove ecosystems. Let us know your
            thoughts, suggestions, or experiences.
          </p>
          <form onSubmit={handleSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback"
              rows={6}
              className="w-full p-2 mb-4 text-black rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection

