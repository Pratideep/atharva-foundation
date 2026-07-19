"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  Users,
  IndianRupee,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Search,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  HelpCircle,
  Settings,
  LogOut,
  Download,
  Plus,
  Award,
  Filter,
  TrendingUp
} from "lucide-react"

// Define TypeScript interfaces for our application data
interface Applicant {
  id: string
  name: string
  diagnosis: "Cancer" | "Sickle Cell" | "Other"
  program: string
  income: number
  date: string
  status: "Approved" | "Pending" | "In Review" | "Rejected"
  email: string
  phone: string
  guardian: string
  story: string
}

interface Toast {
  id: string
  message: string
  type: "success" | "warning" | "error" | "info"
}

// Initial Mock Data
const INITIAL_APPLICANTS: Applicant[] = [
  {
    id: "APP-001",
    name: "Rahul Sharma",
    diagnosis: "Cancer",
    program: "Higher Secondary (Class XI-XII)",
    income: 120000,
    date: "2026-07-10",
    status: "Pending",
    email: "rahul.sharma@gmail.com",
    phone: "+91 98765 43210",
    guardian: "Devendra Sharma",
    story: "Rahul was diagnosed with Lymphoma in early 2025. Despite undergoing chemotherapy, he maintained a 92% score in his Class X examinations. The scholarship will fund his school tuition and books."
  },
  {
    id: "APP-002",
    name: "Priya Patel",
    diagnosis: "Sickle Cell",
    program: "Undergraduate (B.Sc Computer Science)",
    income: 180000,
    date: "2026-07-12",
    status: "Approved",
    email: "priya.patel22@yahoo.com",
    phone: "+91 87654 32109",
    guardian: "Ramesh Patel",
    story: "Priya suffers from Sickle Cell Disease which requires periodic blood transfusions. She aspires to become a software engineer to develop accessible tech tools for patients."
  },
  {
    id: "APP-003",
    name: "Amit Verma",
    diagnosis: "Cancer",
    program: "Primary School (Class I-V)",
    income: 95000,
    date: "2026-07-14",
    status: "In Review",
    email: "amit.v@outlook.com",
    phone: "+91 76543 21098",
    guardian: "Savita Verma",
    story: "Amit is an active 8-year-old battling Leukemia. His father is a daily wage earner, and the family is under severe financial distress trying to balance hospital bills with basic schooling."
  },
  {
    id: "APP-004",
    name: "Sneha Reddy",
    diagnosis: "Sickle Cell",
    program: "Undergraduate (B.Tech ECE)",
    income: 210000,
    date: "2026-07-15",
    status: "Pending",
    email: "reddy.sneha@gmail.com",
    phone: "+91 95432 10987",
    guardian: "Koteshwara Reddy",
    story: "Sneha requires continuous medical management for sickle cell crises. She wants to complete her engineering degree to support her younger siblings."
  },
  {
    id: "APP-005",
    name: "Rohan Das",
    diagnosis: "Cancer",
    program: "Higher Secondary (Class XI-XII)",
    income: 140000,
    date: "2026-07-16",
    status: "Approved",
    email: "rohan.das@gmail.com",
    phone: "+91 94321 09876",
    guardian: "Madhav Das",
    story: "Rohan is recovering from bone cancer surgery. His dream is to pursue a career in commerce. The scholarship covers his online tuition packages and special walking support aids."
  },
  {
    id: "APP-006",
    name: "Anjali Gupta",
    diagnosis: "Sickle Cell",
    program: "Middle School (Class VI-VIII)",
    income: 85000,
    date: "2026-07-17",
    status: "Pending",
    email: "anjali.gupta@rediffmail.com",
    phone: "+91 93210 98765",
    guardian: "Sunil Gupta",
    story: "Anjali is a brilliant student who loves painting. Her sickle cell symptoms cause joint pains that force her to miss school, but she has high academic standing. Funds will buy schooling items."
  },
  {
    id: "APP-007",
    name: "Vikram Singh",
    diagnosis: "Other",
    program: "College (B.A. English)",
    income: 300000,
    date: "2026-07-18",
    status: "Rejected",
    email: "vikram.singh@gmail.com",
    phone: "+91 92109 87654",
    guardian: "Rajendra Singh",
    story: "Applied for general scholarship. Family income falls above the foundation's threshold for emergency medical-academic scholarships. Advised to re-apply under standard aid categories."
  },
  {
    id: "APP-008",
    name: "Kirti Sen",
    diagnosis: "Sickle Cell",
    program: "Undergraduate (B.A. Arts)",
    income: 110000,
    date: "2026-07-18",
    status: "Approved",
    email: "kirti.sen@gmail.com",
    phone: "+91 91098 76543",
    guardian: "Anoop Sen",
    story: "Kirti requires regular support due to sickle cell crises. She is an aspiring writer and poet, working hard to support her family through tutoring."
  },
  {
    id: "APP-009",
    name: "Sandeep Roy",
    diagnosis: "Cancer",
    program: "Primary School (Class I-V)",
    income: 70000,
    date: "2026-07-19",
    status: "Pending",
    email: "sandeep.roy@gmail.com",
    phone: "+91 90987 65432",
    guardian: "Gopal Roy",
    story: "Sandeep is 9 years old and undergoes pediatric cancer care. His family is from a rural district, traveling to Mumbai every month for treatment. The grant covers school transit and books."
  },
  {
    id: "APP-010",
    name: "Meera Nair",
    diagnosis: "Sickle Cell",
    program: "High School (Class IX-X)",
    income: 150000,
    date: "2026-07-19",
    status: "In Review",
    email: "meera.nair@outlook.com",
    phone: "+91 89876 54321",
    guardian: "Parvathi Nair",
    story: "Meera battles sickle cell anemia and requires hospitalization twice a year. Her school has offered attendance flexibility, and this grant supports her home-schooling textbooks and digital tablet."
  }
]

// Mock donation trends
const DONATION_DATA = [
  { month: "Jan", amount: 4.2, goals: 3.5 },
  { month: "Feb", amount: 5.8, goals: 4.0 },
  { month: "Mar", amount: 6.1, goals: 4.5 },
  { month: "Apr", amount: 7.4, goals: 5.0 },
  { month: "May", amount: 8.9, goals: 5.5 },
  { month: "Jun", amount: 11.2, goals: 6.0 }
]

// Mock programs comparison
const PROGRAM_COMP = [
  { category: "Primary", applied: 24, approved: 18 },
  { category: "Middle", applied: 38, approved: 30 },
  { category: "High School", applied: 45, approved: 32 },
  { category: "Undergrad", applied: 62, approved: 45 }
]

export default function Dashboard() {
  // Page states
  const [activeTab, setActiveTab] = useState<"overview" | "applications" | "donations" | "settings">("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  // Data states
  const [applicants, setApplicants] = useState<Applicant[]>(INITIAL_APPLICANTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState(1)
  
  // Interactive modal states
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null)
  
  // Custom toast notifications list
  const [toasts, setToasts] = useState<Toast[]>([])
  
  // Chart interaction states
  const [hoveredLinePoint, setHoveredLinePoint] = useState<number | null>(null)
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null)

  // Items per page
  const itemsPerPage = 5

  // Notification helper
  const addToast = (message: string, type: Toast["type"] = "success") => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }

  // Filter applicants
  const filteredApplicants = useMemo(() => {
    return applicants.filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.program.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesStatus = statusFilter === "All" || app.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
  }, [applicants, searchQuery, statusFilter])

  // Paginated data
  const paginatedApplicants = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredApplicants.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredApplicants, currentPage])

  // Total pages
  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage)

  // Status updates
  const handleUpdateStatus = (id: string, newStatus: Applicant["status"]) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    )
    
    // Update selected applicant view if open
    if (selectedApplicant && selectedApplicant.id === id) {
      setSelectedApplicant((prev) => prev ? { ...prev, status: newStatus } : null)
    }

    // Determine type and add toast
    const typeMap: Record<Applicant["status"], Toast["type"]> = {
      Approved: "success",
      Pending: "info",
      "In Review": "warning",
      Rejected: "error"
    }
    
    addToast(
      `Application ${id} (${applicants.find(a => a.id === id)?.name}) updated to ${newStatus}`,
      typeMap[newStatus]
    )
  }

  // Total metrics calculations
  const metrics = useMemo(() => {
    const totalRaised = 1250000 // Mock value (INR)
    const pendingCount = applicants.filter((a) => a.status === "Pending").length
    const approvedCount = applicants.filter((a) => a.status === "Approved").length
    const totalStudents = applicants.length

    return {
      totalRaised,
      pendingCount,
      approvedCount,
      totalStudents
    }
  }, [applicants])

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-text-primary antialiased">
      
      {/* Toast Notifications Panel */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 w-full max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
              className={`p-4 rounded-xl border shadow-sm flex items-start justify-between gap-3 bg-white
                ${toast.type === "success" && "border-success/30 bg-success/5 text-success"}
                ${toast.type === "warning" && "border-warning/30 bg-warning/5 text-warning"}
                ${toast.type === "error" && "border-error/30 bg-error/5 text-error"}
                ${toast.type === "info" && "border-primary/30 bg-primary/5 text-primary"}
              `}
            >
              <div className="flex gap-2">
                {toast.type === "success" && <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                {toast.type === "error" && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                {toast.type === "warning" && <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                {toast.type === "info" && <FileText className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                <p className="text-sm font-medium leading-normal text-slate-800">{toast.message}</p>
              </div>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Top Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-border flex h-16 items-center px-4 justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-all focus:outline-none lg:hidden"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-serif font-bold text-lg">A</span>
            <span className="font-serif text-lg font-bold tracking-tight text-primary hidden sm:inline-block">
              Atharva <span className="font-sans font-normal text-text-primary/80">Foundation</span>
            </span>
          </Link>
        </div>

        {/* Global Admin search & tools */}
        <div className="flex items-center gap-4">
          <div className="relative max-w-xs hidden md:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search administration..."
              className="pl-9 pr-4 py-2 h-9 w-64 rounded-full border border-border bg-slate-50 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            />
          </div>

          <div className="relative">
            <button className="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 rounded-full transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
            </button>
          </div>

          <div className="flex items-center gap-2 border-l pl-4 border-border">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              AD
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-semibold text-text-primary leading-none">Admin Director</p>
              <p className="text-[10px] text-text-secondary mt-0.5">Scholarships Team</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex flex-1 relative">
        
        {/* Responsive Left Sidebar */}
        <aside
          className={`fixed inset-y-16 left-0 z-30 w-64 bg-white border-r border-border transform transition-transform duration-300 lg:sticky lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full justify-between p-4">
            <div className="space-y-6">
              <div>
                <p className="px-3 text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Management</p>
                <nav className="space-y-1">
                  {[
                    { id: "overview", label: "Overview", icon: LayoutDashboard },
                    { id: "applications", label: "Applications", icon: FileText, badge: applicants.filter(a => a.status === "Pending").length },
                    { id: "donations", label: "Donations Portal", icon: IndianRupee },
                    { id: "settings", label: "Portal Settings", icon: Settings }
                  ].map((tab) => {
                    const Icon = tab.icon
                    const isSelected = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id as any)
                          // Close sidebar on mobile
                          if (window.innerWidth < 1024) {
                            setSidebarOpen(false)
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group text-left cursor-pointer
                          ${isSelected 
                            ? "bg-secondary-bg text-primary font-semibold" 
                            : "text-text-secondary hover:bg-slate-50 hover:text-text-primary"}`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isSelected ? "text-primary" : "text-slate-400 group-hover:text-text-primary"}`} />
                          <span>{tab.label}</span>
                        </div>
                        {tab.badge !== undefined && tab.badge > 0 && (
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full 
                            ${isSelected ? "bg-primary text-white" : "bg-red-50 text-red-600 border border-red-100"}`}>
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </nav>
              </div>

              <div>
                <p className="px-3 text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Resources</p>
                <nav className="space-y-1">
                  <a href="/programs" className="flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-slate-50 rounded-xl transition-all">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span>Programs Info</span>
                  </a>
                  <a href="/story" className="flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-slate-50 rounded-xl transition-all">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>Atharva's Legacy</span>
                  </a>
                  <button onClick={() => addToast("Documentation link is active", "info")} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-slate-50 rounded-xl text-left transition-all cursor-pointer">
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    <span>Help Center</span>
                  </button>
                </nav>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-2">
              <div className="bg-slate-50 rounded-xl p-3 text-center border border-border/60">
                <p className="text-[11px] font-bold text-text-primary">Stripe & Supabase Sync</p>
                <div className="flex items-center justify-center gap-1.5 mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                  <span className="text-[10px] text-text-secondary font-medium">Gateway Active</span>
                </div>
              </div>
              <button 
                onClick={() => addToast("Logged out successfully from session", "info")}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-error hover:bg-red-50 rounded-xl transition-all font-medium cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-error" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Sidebar Overlay on mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-slate-900/10 backdrop-blur-xs lg:hidden"
          ></div>
        )}

        {/* Content Panel */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full space-y-8">
          
          {/* Header Title with quick actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-text-primary">
                {activeTab === "overview" && "Dashboard Overview"}
                {activeTab === "applications" && "Scholarship Applications"}
                {activeTab === "donations" && "Donation Analytics"}
                {activeTab === "settings" && "Portal Settings"}
              </h1>
              <p className="text-sm text-text-secondary mt-1 font-sans">
                {activeTab === "overview" && "Overview of scholarship distributions, donations flow, and pending applications."}
                {activeTab === "applications" && "Review, analyze, and approve pending scholarship requests for sick and mentally disabled students."}
                {activeTab === "donations" && "Track incoming donor transactions, Stripe events, and budget thresholds."}
                {activeTab === "settings" && "Manage administrative profiles, notification setups, and API key details."}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  addToast("Exporting data report in CSV format...", "info")
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-white text-text-secondary text-sm font-semibold rounded-xl hover:text-text-primary hover:bg-slate-50 transition-all duration-200 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" /> Export Report
              </button>
              <button 
                onClick={() => {
                  addToast("Redirecting to registration portal...", "info")
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add Application
              </button>
            </div>
          </div>

          {/* ACTIVE TAB: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              
              {/* KPIs Widgets Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Total Raised",
                    value: `₹${(metrics.totalRaised / 100000).toFixed(1)} Lakhs`,
                    change: "+18.4% this quarter",
                    changeType: "up",
                    icon: IndianRupee,
                    color: "text-primary bg-primary/5"
                  },
                  {
                    title: "Pending Applications",
                    value: metrics.pendingCount,
                    change: `${metrics.pendingCount} require action`,
                    changeType: "neutral",
                    icon: Clock,
                    color: "text-warning bg-warning/5"
                  },
                  {
                    title: "Scholarships Awarded",
                    value: "54 Students",
                    change: "+12 students new this year",
                    changeType: "up",
                    icon: Award,
                    color: "text-success bg-success/5"
                  },
                  {
                    title: "Active Sponsors",
                    value: "142 Donors",
                    change: "+6 joined this week",
                    changeType: "up",
                    icon: Users,
                    color: "text-indigo-600 bg-indigo-50"
                  }
                ].map((kpi, idx) => {
                  const Icon = kpi.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="bg-white p-6 rounded-2xl border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-text-secondary tracking-wider uppercase">{kpi.title}</span>
                        <div className={`p-2.5 rounded-xl ${kpi.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-3xl font-bold tracking-tight text-text-primary">{kpi.value}</span>
                        <div className="flex items-center gap-1 mt-1 text-xs">
                          {kpi.changeType === "up" && <TrendingUp className="w-3.5 h-3.5 text-success" />}
                          <span className={kpi.changeType === "up" ? "text-success font-semibold" : "text-text-secondary"}>
                            {kpi.change}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Chart Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Donation Trends SVG Chart */}
                <div className="bg-white p-6 rounded-2xl border border-border shadow-xs">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-text-primary">Donation Receipts Trend</h3>
                      <p className="text-xs text-text-secondary mt-0.5">Monthly donation volumes in Lakhs (₹) for Jan-Jun</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                        <span>Actual Donations</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <span className="w-3 h-1.5 bg-slate-300 rounded-full"></span>
                        <span>Budget Goals</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsive SVG Container */}
                  <div className="relative h-64 w-full select-none">
                    <svg viewBox="0 0 500 240" className="w-full h-full">
                      {/* Grid Lines */}
                      {[0, 60, 120, 180].map((y, i) => (
                        <line
                          key={i}
                          x1="40"
                          y1={y + 20}
                          x2="480"
                          y2={y + 20}
                          stroke="#F1F5F9"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                      ))}
                      
                      {/* X and Y Axis Text Labels */}
                      {[
                        { val: "12L", y: 20 },
                        { val: "8L", y: 80 },
                        { val: "4L", y: 140 },
                        { val: "0L", y: 200 }
                      ].map((label, idx) => (
                        <text key={idx} x="10" y={label.y + 5} className="text-[10px] fill-slate-400 font-medium font-sans">
                          {label.val}
                        </text>
                      ))}

                      {/* X Axis Months */}
                      {DONATION_DATA.map((item, idx) => {
                        const x = 50 + idx * 80
                        return (
                          <text key={idx} x={x} y="225" textAnchor="middle" className="text-[10px] fill-slate-400 font-semibold font-sans">
                            {item.month}
                          </text>
                        )
                      })}

                      {/* Goal Trend Path (Subtle dotted line) */}
                      <path
                        d={DONATION_DATA.map((item, idx) => {
                          const x = 50 + idx * 80
                          // Map goal values (3.5 to 6.0) to Y space (200 down to 20)
                          const y = 200 - (item.goals / 12) * 180
                          return `${idx === 0 ? "M" : "L"} ${x} ${y}`
                        }).join(" ")}
                        fill="none"
                        stroke="#CBD5E1"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      {/* Actual Donations Smooth Curved Path */}
                      <path
                        d={`
                          M 50 ${200 - (DONATION_DATA[0].amount / 12) * 180}
                          C 90 ${200 - (DONATION_DATA[0].amount / 12) * 180}, 110 ${200 - (DONATION_DATA[1].amount / 12) * 180}, 130 ${200 - (DONATION_DATA[1].amount / 12) * 180}
                          C 170 ${200 - (DONATION_DATA[1].amount / 12) * 180}, 190 ${200 - (DONATION_DATA[2].amount / 12) * 180}, 210 ${200 - (DONATION_DATA[2].amount / 12) * 180}
                          C 250 ${200 - (DONATION_DATA[2].amount / 12) * 180}, 270 ${200 - (DONATION_DATA[3].amount / 12) * 180}, 290 ${200 - (DONATION_DATA[3].amount / 12) * 180}
                          C 330 ${200 - (DONATION_DATA[3].amount / 12) * 180}, 350 ${200 - (DONATION_DATA[4].amount / 12) * 180}, 370 ${200 - (DONATION_DATA[4].amount / 12) * 180}
                          C 410 ${200 - (DONATION_DATA[4].amount / 12) * 180}, 430 ${200 - (DONATION_DATA[5].amount / 12) * 180}, 450 ${200 - (DONATION_DATA[5].amount / 12) * 180}
                        `}
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Interactive Hover Hotspots & Circles */}
                      {DONATION_DATA.map((item, idx) => {
                        const x = 50 + idx * 80
                        const y = 200 - (item.amount / 12) * 180
                        const isHovered = hoveredLinePoint === idx

                        return (
                          <g key={idx}>
                            <circle
                              cx={x}
                              cy={y}
                              r={isHovered ? 7 : 5}
                              fill={isHovered ? "#2563EB" : "#FFFFFF"}
                              stroke="#2563EB"
                              strokeWidth="3"
                              className="transition-all duration-150 cursor-pointer"
                              onMouseEnter={() => setHoveredLinePoint(idx)}
                              onMouseLeave={() => setHoveredLinePoint(null)}
                            />
                            {/* Hover hotspot helper */}
                            <circle
                              cx={x}
                              cy={y}
                              r="15"
                              fill="transparent"
                              className="cursor-pointer"
                              onMouseEnter={() => setHoveredLinePoint(idx)}
                              onMouseLeave={() => setHoveredLinePoint(null)}
                            />
                          </g>
                        )
                      })}
                    </svg>

                    {/* Chart Tooltip */}
                    {hoveredLinePoint !== null && (
                      <div
                        className="absolute p-2.5 bg-slate-900 text-white rounded-lg text-[11px] font-semibold leading-tight shadow-md border border-slate-700 animate-in fade-in zoom-in-95 pointer-events-none"
                        style={{
                          left: `${hoveredLinePoint * 16.5 + 8}%`,
                          top: `${200 - (DONATION_DATA[hoveredLinePoint].amount / 12) * 200 - 30}px`,
                          transform: "translateX(-50%)"
                        }}
                      >
                        <p className="font-bold">{DONATION_DATA[hoveredLinePoint].month}</p>
                        <p className="text-sky-300 font-sans mt-0.5">₹{DONATION_DATA[hoveredLinePoint].amount}L Raised</p>
                        <p className="text-slate-400 text-[9px] mt-0.5">Goal: ₹{DONATION_DATA[hoveredLinePoint].goals}L</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Programs Comparison SVG Bar Chart */}
                <div className="bg-white p-6 rounded-2xl border border-border shadow-xs">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-text-primary">Program Support Breakdown</h3>
                      <p className="text-xs text-text-secondary mt-0.5">Comparison of students applied vs. scholarships approved</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-secondary rounded-full"></span>
                        <span>Applied</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                        <span>Approved</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Bar Chart Container */}
                  <div className="relative h-64 w-full select-none">
                    <svg viewBox="0 0 500 240" className="w-full h-full">
                      {/* Grid Lines */}
                      {[0, 60, 120, 180].map((y, i) => (
                        <line
                          key={i}
                          x1="40"
                          y1={y + 20}
                          x2="480"
                          y2={y + 20}
                          stroke="#F1F5F9"
                          strokeWidth="1.5"
                        />
                      ))}

                      {/* X Axis Categories */}
                      {PROGRAM_COMP.map((item, idx) => {
                        const x = 60 + idx * 110
                        return (
                          <text key={idx} x={x + 40} y="225" textAnchor="middle" className="text-[10px] fill-slate-400 font-semibold font-sans">
                            {item.category}
                          </text>
                        )
                      })}

                      {/* Y Axis Labels */}
                      {[
                        { val: "80", y: 20 },
                        { val: "40", y: 110 },
                        { val: "0", y: 200 }
                      ].map((label, idx) => (
                        <text key={idx} x="15" y={label.y + 5} className="text-[10px] fill-slate-400 font-medium font-sans">
                          {label.val}
                        </text>
                      ))}

                      {/* Bars */}
                      {PROGRAM_COMP.map((item, idx) => {
                        const xBase = 60 + idx * 110
                        // Map 0-80 to Y space (200 down to 20)
                        const appliedHeight = (item.applied / 80) * 180
                        const approvedHeight = (item.approved / 80) * 180
                        
                        const yApplied = 200 - appliedHeight
                        const yApproved = 200 - approvedHeight

                        const isHovered = hoveredBarIndex === idx

                        return (
                          <g key={idx}>
                            {/* Applied Bar (Secondary Navy) */}
                            <rect
                              x={xBase + 12}
                              y={yApplied}
                              width="24"
                              height={appliedHeight}
                              rx="4"
                              fill="#1E3A8A"
                              opacity={isHovered ? 0.95 : 0.8}
                              className="transition-all duration-200 cursor-pointer"
                              onMouseEnter={() => setHoveredBarIndex(idx)}
                              onMouseLeave={() => setHoveredBarIndex(null)}
                            />

                            {/* Approved Bar (Primary Cobalt Blue) */}
                            <rect
                              x={xBase + 42}
                              y={yApproved}
                              width="24"
                              height={approvedHeight}
                              rx="4"
                              fill="#2563EB"
                              opacity={isHovered ? 1 : 0.85}
                              className="transition-all duration-200 cursor-pointer"
                              onMouseEnter={() => setHoveredBarIndex(idx)}
                              onMouseLeave={() => setHoveredBarIndex(null)}
                            />
                          </g>
                        )
                      })}
                    </svg>

                    {/* Bar Chart Tooltip */}
                    {hoveredBarIndex !== null && (
                      <div
                        className="absolute p-2.5 bg-slate-900 text-white rounded-lg text-[11px] font-semibold leading-tight shadow-md border border-slate-700 animate-in fade-in zoom-in-95 pointer-events-none"
                        style={{
                          left: `${hoveredBarIndex * 22 + 20}%`,
                          top: `20px`
                        }}
                      >
                        <p className="font-bold text-slate-200">{PROGRAM_COMP[hoveredBarIndex].category}</p>
                        <p className="text-slate-300 font-sans mt-0.5">Applied: <span className="text-white font-bold">{PROGRAM_COMP[hoveredBarIndex].applied}</span></p>
                        <p className="text-sky-300 font-sans mt-0.5">Approved: <span className="text-white font-bold">{PROGRAM_COMP[hoveredBarIndex].approved}</span></p>
                        <p className="text-emerald-400 text-[10px] mt-0.5 font-bold">
                          Rate: {Math.round((PROGRAM_COMP[hoveredBarIndex].approved / PROGRAM_COMP[hoveredBarIndex].applied) * 100)}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Progress & Fundraising Goals Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Interactive Progress Bar Card */}
                <div className="bg-white p-6 rounded-2xl border border-border shadow-xs lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg text-text-primary">2026 Memorial Scholarship Goal</h3>
                      <span className="px-2.5 py-1 text-xs font-bold bg-primary/10 text-primary rounded-full">₹15 Lakhs Target</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                      Our target is to disburse ₹15,00000 in school and college aids during this academic cycle. Track our funding status updated instantly through bank credits and online Stripe transfers.
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold font-sans">
                        <span className="text-slate-500">Goal Progress</span>
                        <span className="text-primary font-bold">83.3% Complete</span>
                      </div>
                      {/* Premium Progress Bar */}
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-sky-500 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: "83.3%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mt-6 text-center">
                    <div>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Disbursed</p>
                      <p className="text-xl font-extrabold text-text-primary mt-1">₹8.4 Lakhs</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">In Pipeline</p>
                      <p className="text-xl font-extrabold text-primary mt-1">₹4.1 Lakhs</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Remaining</p>
                      <p className="text-xl font-extrabold text-text-secondary mt-1">₹2.5 Lakhs</p>
                    </div>
                  </div>
                </div>

                {/* Empty State / Status Widget Demo */}
                <div className="bg-white p-6 rounded-2xl border border-border shadow-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-text-primary">System Notifications</h3>
                    
                    <div className="space-y-3">
                      {[
                        { msg: "Supabase connection active", status: "success" },
                        { msg: "Stripe payout scheduled for Mon", status: "info" },
                        { msg: "2 applications pending manual audits", status: "warning" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 text-xs font-semibold text-text-primary">
                          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0
                            ${item.status === "success" && "bg-success"}
                            ${item.status === "info" && "bg-primary"}
                            ${item.status === "warning" && "bg-warning"}`}
                          ></span>
                          <span className="truncate">{item.msg}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs font-bold font-sans">
                    <span className="text-text-secondary">All systems operational</span>
                    <button 
                      onClick={() => addToast("Checking system updates...", "info")} 
                      className="text-primary hover:underline cursor-pointer"
                    >
                      Run Health Check
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ACTIVE TAB: APPLICATIONS */}
          {(activeTab === "applications" || activeTab === "overview") && (
            <div className="space-y-6">
              
              {/* Applications section wrapper */}
              <div className="bg-white border border-border rounded-2xl shadow-xs overflow-hidden">
                <div className="p-6 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
                  <div>
                    <h3 className="font-bold text-lg text-text-primary">Scholarship Requests Register</h3>
                    <p className="text-xs text-text-secondary mt-0.5 font-sans">Filter, review, and change application statuses below.</p>
                  </div>

                  {/* Interactive Filters */}
                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    {/* Live Search bar */}
                    <div className="relative flex-1 md:flex-initial">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search applicants..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          setCurrentPage(1) // Reset to page 1 on search
                        }}
                        className="pl-9 pr-4 py-2 h-9 rounded-xl border border-border bg-white text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all w-full md:w-56"
                      />
                    </div>

                    {/* Status Dropdown Filter */}
                    <div className="relative">
                      <div className="flex items-center gap-2 px-3 py-2 h-9 border border-border bg-white text-xs font-semibold rounded-xl text-text-secondary hover:text-text-primary transition-all cursor-pointer">
                        <Filter className="w-3.5 h-3.5" />
                        <span>Filter: {statusFilter}</span>
                        <select
                          value={statusFilter}
                          onChange={(e) => {
                            setStatusFilter(e.target.value)
                            setCurrentPage(1) // Reset to page 1 on filter
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        >
                          <option value="All">All Statuses</option>
                          <option value="Pending">Pending</option>
                          <option value="In Review">In Review</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-slate-50 text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                        <th className="py-4 px-6">ID</th>
                        <th className="py-4 px-6">Student Name</th>
                        <th className="py-4 px-6">Diagnosis</th>
                        <th className="py-4 px-6">Applied Program</th>
                        <th className="py-4 px-6">Annual Income</th>
                        <th className="py-4 px-6">Date Submitted</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm font-sans">
                      {paginatedApplicants.length > 0 ? (
                        paginatedApplicants.map((app) => (
                          <motion.tr
                            key={app.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="hover:bg-slate-50/50 transition-colors text-slate-700"
                          >
                            <td className="py-4 px-6 font-semibold text-xs text-text-secondary font-mono">{app.id}</td>
                            <td className="py-4 px-6 font-bold text-text-primary">{app.name}</td>
                            <td className="py-4 px-6">
                              <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md
                                ${app.diagnosis === "Cancer" ? "bg-red-50 text-red-600 border border-red-100" : ""}
                                ${app.diagnosis === "Sickle Cell" ? "bg-blue-50 text-blue-600 border border-blue-100" : ""}
                                ${app.diagnosis === "Other" ? "bg-slate-100 text-slate-700" : ""}
                              `}>
                                {app.diagnosis}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-text-secondary text-xs truncate max-w-[160px]">{app.program}</td>
                            <td className="py-4 px-6 font-mono font-medium text-slate-800">₹{app.income.toLocaleString()}</td>
                            <td className="py-4 px-6 text-text-secondary text-xs">{app.date}</td>
                            <td className="py-4 px-6">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border
                                ${app.status === "Approved" ? "bg-success/5 border-success/20 text-success" : ""}
                                ${app.status === "Pending" ? "bg-amber-50 border-warning/20 text-warning" : ""}
                                ${app.status === "In Review" ? "bg-blue-50 border-primary/20 text-primary" : ""}
                                ${app.status === "Rejected" ? "bg-red-50 border-error/20 text-error" : ""}
                              `}>
                                <span className={`w-1.5 h-1.5 rounded-full
                                  ${app.status === "Approved" ? "bg-success" : ""}
                                  ${app.status === "Pending" ? "bg-warning" : ""}
                                  ${app.status === "In Review" ? "bg-primary" : ""}
                                  ${app.status === "Rejected" ? "bg-error" : ""}
                                `}></span>
                                {app.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button
                                onClick={() => setSelectedApplicant(app)}
                                className="text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors cursor-pointer"
                              >
                                View Details
                              </button>
                            </td>
                          </motion.tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={8} className="py-12 px-6 text-center text-text-secondary">
                            <div className="flex flex-col items-center justify-center gap-2">
                              <FileText className="w-10 h-10 text-slate-300" />
                              <p className="font-semibold text-sm">No applications found</p>
                              <p className="text-xs">Try adjusting your search criteria or filters.</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Section */}
                {totalPages > 1 && (
                  <div className="p-4 border-t border-border flex items-center justify-between bg-slate-50/50 font-sans">
                    <p className="text-xs text-text-secondary font-semibold">
                      Showing <span className="text-text-primary font-bold">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                      <span className="text-text-primary font-bold">
                        {Math.min(currentPage * itemsPerPage, filteredApplicants.length)}
                      </span>{" "}
                      of <span className="text-text-primary font-bold">{filteredApplicants.length}</span> results
                    </p>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setCurrentPage((c) => Math.max(c - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-1.5 border border-border bg-white rounded-lg text-slate-500 hover:text-text-primary disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-500 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1
                        const isCurrent = currentPage === pageNum
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer
                              ${isCurrent
                                ? "bg-primary border-primary text-white"
                                : "border-border bg-white text-text-secondary hover:text-text-primary hover:bg-slate-50"
                              }`}
                          >
                            {pageNum}
                          </button>
                        )
                      })}

                      <button
                        onClick={() => setCurrentPage((c) => Math.min(c + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-1.5 border border-border bg-white rounded-lg text-slate-500 hover:text-text-primary disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-500 transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ACTIVE TAB: DONATIONS */}
          {activeTab === "donations" && (
            <div className="space-y-6 font-sans">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-xs text-center space-y-4">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto">
                  <IndianRupee className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-text-primary">Stripe Payments Gateways</h3>
                <p className="text-text-secondary max-w-lg mx-auto text-sm leading-relaxed">
                  Track online donation links, monthly subscription pools, and complete financial audits synced with Stripe API hooks and ledger databases.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => addToast("Stripe integration setup is pending Supabase backend routing", "warning")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    Configure Stripe Webhooks
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVE TAB: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 font-sans">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-xs space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-text-primary">Portal Preferences</h3>
                  <p className="text-xs text-text-secondary mt-0.5">Manage administrative configurations for the dashboard panel.</p>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Default Distribution Threshold (₹)</label>
                      <input 
                        type="number" 
                        defaultValue={50000} 
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Notifications Recipient</label>
                      <input 
                        type="email" 
                        defaultValue="scholarships@atharvafoundation.org" 
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button 
                      onClick={() => addToast("Dashboard portal settings updated successfully", "success")}
                      className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      Save Configuration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Interactive Modal Dialog: Details View */}
      <AnimatePresence>
        {selectedApplicant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApplicant(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            ></motion.div>

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl border border-border shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest font-mono">{selectedApplicant.id}</span>
                    <h2 className="font-serif text-2xl font-bold text-text-primary mt-1">{selectedApplicant.name}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedApplicant(null)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 font-sans">
                  {/* Bio details grid */}
                  <div className="grid grid-cols-2 gap-6 text-xs border-b border-border pb-6 text-slate-700">
                    <div>
                      <p className="font-bold text-text-secondary uppercase tracking-wider mb-1.5">Diagnosis Category</p>
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-lg
                        ${selectedApplicant.diagnosis === "Cancer" ? "bg-red-50 text-red-600 border border-red-100" : ""}
                        ${selectedApplicant.diagnosis === "Sickle Cell" ? "bg-blue-50 text-blue-600 border border-blue-100" : ""}
                        ${selectedApplicant.diagnosis === "Other" ? "bg-slate-100 text-slate-700" : ""}
                      `}>
                        {selectedApplicant.diagnosis}
                      </span>
                    </div>

                    <div>
                      <p className="font-bold text-text-secondary uppercase tracking-wider mb-1">Parent / Guardian</p>
                      <p className="text-sm font-semibold text-text-primary">{selectedApplicant.guardian}</p>
                    </div>

                    <div>
                      <p className="font-bold text-text-secondary uppercase tracking-wider mb-1">Applied Program</p>
                      <p className="text-sm font-semibold text-text-primary">{selectedApplicant.program}</p>
                    </div>

                    <div>
                      <p className="font-bold text-text-secondary uppercase tracking-wider mb-1">Annual Family Income</p>
                      <p className="text-sm font-bold text-slate-800 font-mono">₹{selectedApplicant.income.toLocaleString()}</p>
                    </div>

                    <div>
                      <p className="font-bold text-text-secondary uppercase tracking-wider mb-1">Contact Email</p>
                      <a href={`mailto:${selectedApplicant.email}`} className="text-sm font-semibold text-primary hover:underline">{selectedApplicant.email}</a>
                    </div>

                    <div>
                      <p className="font-bold text-text-secondary uppercase tracking-wider mb-1">Phone Number</p>
                      <p className="text-sm font-semibold text-text-primary">{selectedApplicant.phone}</p>
                    </div>
                  </div>

                  {/* Applicant Personal Story Section */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider">Patient Academic Narrative</h4>
                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 font-medium">
                      {selectedApplicant.story}
                    </p>
                  </div>

                  {/* Document uploads checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider">Submitted Attachments</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-white hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 font-semibold truncate">
                          <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="truncate">Medical_Certificate.pdf</span>
                        </div>
                        <span className="text-[10px] bg-success/15 text-success font-bold px-2 py-0.5 rounded-md font-sans">VERIFIED</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-white hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 font-semibold truncate">
                          <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="truncate">Income_Proof_ITR.pdf</span>
                        </div>
                        <span className="text-[10px] bg-success/15 text-success font-bold px-2 py-0.5 rounded-md font-sans">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-text-secondary font-semibold">Current Status:</span>
                  <span className={`px-2 py-0.5 font-bold rounded-full border
                    ${selectedApplicant.status === "Approved" ? "bg-success/5 border-success/20 text-success" : ""}
                    ${selectedApplicant.status === "Pending" ? "bg-amber-50 border-warning/20 text-warning" : ""}
                    ${selectedApplicant.status === "In Review" ? "bg-blue-50 border-primary/20 text-primary" : ""}
                    ${selectedApplicant.status === "Rejected" ? "bg-red-50 border-error/20 text-error" : ""}
                  `}>
                    {selectedApplicant.status}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  {selectedApplicant.status !== "Rejected" && (
                    <button
                      onClick={() => handleUpdateStatus(selectedApplicant.id, "Rejected")}
                      className="flex-1 sm:flex-none px-4 py-2 border border-error bg-white hover:bg-error/5 text-error text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      Reject Application
                    </button>
                  )}
                  {selectedApplicant.status !== "Approved" && (
                    <button
                      onClick={() => handleUpdateStatus(selectedApplicant.id, "Approved")}
                      className="flex-1 sm:flex-none px-5 py-2.5 bg-primary text-white hover:bg-primary-hover text-xs font-bold rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
                    >
                      Approve & Disburse
                    </button>
                  )}
                  {selectedApplicant.status === "Approved" && (
                    <button
                      onClick={() => setSelectedApplicant(null)}
                      className="flex-1 sm:flex-none px-5 py-2.5 border border-border hover:bg-slate-50 text-text-secondary text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer"
                    >
                      Close Window
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
