"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setIsSubmitting(true)
      // Mocking submission since Supabase is to be set up later
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
      }, 1500)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-[60vh] items-center justify-center p-4">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>
        <p className="text-foreground/80 max-w-md text-center mb-8">
          Thank you for applying. We have received your application and our team will review it shortly. We will contact you at the provided email address.
        </p>
        <Button onClick={() => window.location.href = "/"}>Return to Home</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen py-16 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Scholarship Application</h1>
          <p className="text-foreground/80">Please fill out the form below to apply for educational assistance.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 -translate-y-1/2"></div>
            <div className={`absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 transition-all duration-300`} style={{ width: `${(step - 1) * 50}%` }}></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors
                  ${step >= num ? 'bg-primary border-primary text-primary-foreground' : 'bg-white border-muted-foreground text-muted-foreground'}`}
              >
                {num}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-lg font-bold border-b pb-2 mb-4">Step 1: Personal Details</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Student's Full Name</label>
                  <Input required placeholder="Enter student name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Parent/Guardian Name</label>
                  <Input required placeholder="Enter parent or guardian name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input required type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input required type="tel" placeholder="+91" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-lg font-bold border-b pb-2 mb-4">Step 2: Medical & Academic Info</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Diagnosis</label>
                  <select className="flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required>
                    <option value="">Select diagnosis...</option>
                    <option value="cancer">Pediatric Cancer</option>
                    <option value="sickle-cell">Sickle Cell Disease</option>
                    <option value="other">Other (Please specify in notes)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Upload Medical Certificate</label>
                  <Input type="file" accept=".pdf,.jpg,.jpeg,.png" className="pt-1.5" />
                  <p className="text-xs text-muted-foreground mt-1">Your medical information is kept strictly confidential.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Grade / Educational Level</label>
                  <Input required placeholder="e.g. 8th Grade, High School, College 1st Year" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-lg font-bold border-b pb-2 mb-4">Step 3: Financial Details</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Annual Family Income (₹)</label>
                  <Input required type="number" placeholder="Enter approximate annual income" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Upload Income Proof</label>
                  <Input type="file" accept=".pdf,.jpg,.jpeg,.png" className="pt-1.5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Any additional notes?</label>
                  <textarea 
                    className="flex min-h-[100px] w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    placeholder="Briefly explain your current situation..."
                  />
                </div>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, I declare that all information provided is true to the best of my knowledge. I understand that the Atharva Foundation relies on this information to allocate funds appropriately.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6 border-t">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(step - 1)}
                disabled={step === 1 || isSubmitting}
              >
                Back
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : step === 3 ? 'Submit Application' : 'Next Step'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
