import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Scholarships | Atharva Foundation",
  description: "Scholarship program details for students with sickle cell disease or cancer.",
}

export default function ScholarshipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary/5 py-16 md:py-24 border-b border-primary/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Scholarship Program</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed">
            Supporting the educational journey of young fighters.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-stone prose-lg max-w-none">
          <h2 className="font-serif text-3xl font-bold text-foreground">Overview</h2>
          <p>
            When a child is diagnosed with a severe illness like cancer or sickle cell disease, the medical costs can quickly overwhelm a family. Too often, education becomes a secondary priority due to financial strain. The Atharva Foundation Scholarship Program is designed to ensure that these bright minds can continue to learn, grow, and pursue their dreams without the added worry of educational expenses.
          </p>

          <h3 className="font-serif text-2xl font-bold text-foreground mt-10">Eligibility Criteria</h3>
          <ul>
            <li>Diagnosed with Sickle Cell Disease or any form of Pediatric Cancer.</li>
            <li>Currently enrolled in a recognized educational institution (School, College, or Vocational Training).</li>
            <li>Demonstrated financial need (income certificate required).</li>
            <li>A strong desire to continue education despite health challenges.</li>
          </ul>

          <h3 className="font-serif text-2xl font-bold text-foreground mt-10">What the Scholarship Covers</h3>
          <p>Depending on the specific needs of the student, the scholarship may cover:</p>
          <ul>
            <li>Annual tuition fees directly paid to the institution.</li>
            <li>Cost of textbooks and essential educational supplies.</li>
            <li>Access to digital learning devices (laptops/tablets) if required for remote learning during extended hospital stays.</li>
          </ul>

          <h3 className="font-serif text-2xl font-bold text-foreground mt-10">Application Process</h3>
          <ol>
            <li><strong>Submit Application:</strong> Fill out the online application form with the student's details.</li>
            <li><strong>Documentation:</strong> Upload required medical certificates, previous mark sheets, and income proof.</li>
            <li><strong>Review:</strong> Our committee reviews all applications within 4-6 weeks.</li>
            <li><strong>Interview:</strong> A brief conversation (virtual or in-person) with the family to understand their specific needs.</li>
            <li><strong>Disbursement:</strong> Approved funds are sent directly to the educational institution or vendor.</li>
          </ol>

          <div className="mt-12 p-8 bg-muted/50 rounded-2xl border text-center">
            <h4 className="font-serif text-xl font-bold mb-4">Ready to Apply?</h4>
            <p className="mb-6">The application window is currently open. Click below to start the application process.</p>
            <Button size="lg" asChild>
              <Link href="/apply">Apply for Scholarship</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
