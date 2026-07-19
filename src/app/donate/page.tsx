"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(2500)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isRecurring, setIsRecurring] = useState(false)

  const presetAmounts = [1000, 2500, 5000, 10000]

  const handlePresetClick = (val: number) => {
    setAmount(val)
    setCustomAmount("")
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount(null)
  }

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    const finalAmount = amount || Number(customAmount)
    if (!finalAmount || finalAmount <= 0) return
    
    // In the future, this would integrate with Razorpay
    console.log("Initiating Razorpay for amount: ", finalAmount)
    alert(`Mock Payment Integration: Proceeding to Razorpay to pay ₹${finalAmount} as a ${isRecurring ? 'monthly' : 'one-time'} donation.`)
  }

  return (
    <div className="flex flex-col min-h-screen py-16 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Support Our Mission</h1>
              <p className="text-xl text-foreground/80 font-sans">
                Your generosity turns into scholarships, care packages, and hope for those who need it most.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
              <h3 className="font-serif text-2xl font-bold mb-4">Where your money goes</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">🎓</div>
                  <div>
                    <h4 className="font-bold">Education First</h4>
                    <p className="text-sm text-foreground/80">Covering school and college fees for students fighting critical illnesses.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">❤️</div>
                  <div>
                    <h4 className="font-bold">Dignity in Care</h4>
                    <p className="text-sm text-foreground/80">Providing necessary therapeutic aids and care packages for those with mental disabilities.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-2xl border text-sm text-muted-foreground">
              <strong>Note for Indian Donors:</strong> The Atharva Foundation is a registered charitable trust. Donations are eligible for tax exemption under section 80G of the Income Tax Act.
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
            <form onSubmit={handleDonate} className="space-y-8">
              
              {/* Type toggle */}
              <div className="flex p-1 bg-muted rounded-lg">
                <button
                  type="button"
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${!isRecurring ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => setIsRecurring(false)}
                >
                  Give Once
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${isRecurring ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => setIsRecurring(true)}
                >
                  Monthly
                </button>
              </div>

              {/* Amounts */}
              <div>
                <label className="text-sm font-medium block mb-3">Select Amount (INR)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetClick(preset)}
                      className={`py-3 rounded-xl border text-center font-medium transition-colors ${
                        amount === preset 
                          ? 'bg-primary border-primary text-primary-foreground' 
                          : 'bg-white border-border text-foreground hover:border-primary/50'
                      }`}
                    >
                      ₹{preset.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₹</span>
                  <Input 
                    type="number" 
                    placeholder="Custom Amount" 
                    className="pl-8 h-12 text-lg"
                    value={customAmount}
                    onChange={handleCustomChange}
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold border-b pb-2">Your Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium">First Name</label>
                    <Input required placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium">Last Name</label>
                    <Input required placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Email Address</label>
                  <Input required type="email" placeholder="Receipt will be sent here" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">PAN Number (For 80G Receipt)</label>
                  <Input placeholder="Optional, required for tax benefit" className="uppercase" />
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                Donate {amount || customAmount ? `₹${(amount || Number(customAmount)).toLocaleString()}` : ''}
              </Button>
              
              <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure payments processed via Razorpay. Supports UPI, Cards, and Net Banking.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
