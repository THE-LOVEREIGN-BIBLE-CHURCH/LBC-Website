"use client"

import { useState } from "react"
import { Search, MapPin, ChevronLeft, ChevronRight, Info, Clock, User, MapPinned } from "lucide-react"
const CEElderEssienNana = "/assets/img/church_leaders/CEELderEssienNana.jpg"
const CEElderProsperAsamoah = "/assets/img/church_leaders/CEELderProsperAsamoah.jpg"
const CEFredAgyemang = "/assets/img/church_leaders/CEFredAgyemang.jpg"
const CEPeterHaginWealth = "/assets/img/church_leaders/CEPeterHagin-Wealth.jpg"
const ChiefElderCharlesFiadjoe = "/assets/img/church_leaders/ChiefElderCharlesFiadjoe.jpg"
const FrankTettehJunior = "/assets/img/church_leaders/FrankTettehJunior.jpg"
const PastorAbrahamTetteh = "/assets/img/church_leaders/PastorAbrahamTetteh.jpg"
const PastorCharles = "/assets/img/church_leaders/PastorCharles.jpg"
const PastorEmmanuelFiifiRobert = "/assets/img/church_leaders/PastorEmmanuelFiifiRobert.jpg"
const PastorEmmanuelYartey = "/assets/img/church_leaders/PastorEmmanuelYartey.jpg"
const PastorMichaelOduro = "/assets/img/church_leaders/PastorMichaelOduro.jpg"
const PastorBenjaminQuayson = "/assets/img/church_leaders/pastorBenjaminQuayson.jpg"
const PastorMosesFrimpong = "/assets/img/church_leaders/PastorMosesFrimpong.jpg"
const PastorVitalis = "/assets/img/church_leaders/PastorVitalis.jpg"
const CEHerbertTogbey = "/assets/img/church_leaders/CEHerbertTogbey.jpg"
const ShepherdKingsleyTetteh = "/assets/img/church_leaders/PastorKingsleyTetteh.jpg"
const CETerrickNaador = "/assets/img/church_leaders/CETerrick.jpg"
const noPicture = "/assets/img/church_leaders/noPic.png"

const branchesData = [
    {
        id: 1,
        name: "Ho Church",
        pastor: {
            name: "Pastor Emmanuel Fiifi Robertson",
            photo: PastorEmmanuelFiifiRobert,
        },
        location: "123 Main Street, City Center",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 2,
        name: "Abeka Church",
        pastor: {
            name: "Pastor Emmanuel Yartey",
            photo: PastorEmmanuelYartey,
        },
        location: "Abeka Free Pipe Junction",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 3,
        name: "Sowutuom Church",
        pastor: {
            name: "Pastor Moses Frimpong",
            photo: PastorMosesFrimpong,
        },
        location: "456 East Avenue, Eastside District",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 4,
        name: "Accra Church",
        pastor: {
            name: "Pastor Michael Oduro",
            photo: PastorMichaelOduro,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 5,
        name: "Koforidua Church",
        pastor: {
            name: "Pastor Charles Fiadjoe",
            photo: ChiefElderCharlesFiadjoe,
        },
        location: "Koforidua Technical University, Getfund Hall",
        services: {
            tuesday: { time: "6:00 PM - 8:00 PM" },
            friday: null,
            sunday: {
                morning: { time: "2:00 PM - 4:30 PM" },
                afternoon: null,
                evening: null,
            },
        },
    },
    {
        id: 6,
        name: "Pantang Church",
        pastor: {
            name: "Pastor Prosper Asamoah",
            photo: CEElderProsperAsamoah,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 7,
        name: "Tantra Church",
        pastor: {
            name: "Pastor Herbert Togbe",
            photo: CEHerbertTogbey,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 8,
        name: "Bole Church",
        pastor: {
            name: "Pastor Michael Agbadji",
            photo: noPicture,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 9,
        name: "East Legon Church",
        pastor: {
            name: "Pastor Terrick Naador",
            photo: CETerrickNaador,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 10,
        name: "Kumasi Church",
        pastor: {
            name: "Pastor Abraham Tetteh",
            photo: PastorAbrahamTetteh,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 11,
        name: "Cape Coast Church",
        pastor: {
            name: "Pastor Essien Nana",
            photo: CEElderEssienNana,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 12,
        name: "Winneba Church",
        pastor: {
            name: "Pastor Vitalis Kanyei",
            photo: PastorVitalis,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 13,
        name: "UPSA Church",
        pastor: {
            name: "Pastor Peter Hagin-Wealth",
            photo: CEPeterHaginWealth,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 14,
        name: "North Legon Church",
        pastor: {
            name: "Pastor Frederick Agyemang",
            photo: CEFredAgyemang,
        },
        location: "Unique Citizens University College",
        services: {
            tuesday: { time: "6:30 PM - 8:30 PM" },
            friday: { time: "6:30 PM - 8:30 PM" },
            sunday: {
                morning: { time: "9:00 AM - 12:00 PM" },
                afternoon: null,
                evening: null,
            },
        },
    },
    {
        id: 15,
        name: "Korle-Bu Church",
        pastor: {
            name: "Pastor Charles ",
            photo: PastorCharles,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 16,
        name: "Tema Church",
        pastor: {
            name: "Pastor Benjamin Quayson",
            photo: PastorBenjaminQuayson,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 17,
        name: "Abelenkpe Church",
        pastor: {
            name: "Pastor Kingsley Tetteh",
            photo: ShepherdKingsleyTetteh,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
    {
        id: 18,
        name: "Sunyani Church",
        pastor: {
            name: "Pastor Frank Tetteh",
            photo: FrankTettehJunior,
        },
        location: "789 West Boulevard, Westside Area",
        services: {
            tuesday: { time: "6:00 PM - 8:30 PM" },
            friday: { time: "6:00 PM - 8:30 PM" },
            sunday: {
                morning: { time: "8:00 AM - 10:30 AM" },
                afternoon: { time: "10:40 PM - 12:30 PM" },
                evening: { time: "6:00 PM - 8:30 PM" },
            },
        },
    },
]

export default function BranchesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [serviceFilter, setServiceFilter] = useState("all")
    const [activeBranch, setActiveBranch] = useState(branchesData[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    const filteredBranches = branchesData.filter((branch) => {
        // Search filter
        const matchesSearch =
            branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            branch.pastor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            branch.location.toLowerCase().includes(searchQuery.toLowerCase())

        // Service filter
        if (serviceFilter === "all") return matchesSearch
        if (serviceFilter === "tuesday") return matchesSearch && branch.services.tuesday
        if (serviceFilter === "friday") return matchesSearch && branch.services.friday
        if (serviceFilter === "sunday") {
            return (
                matchesSearch &&
                (branch.services.sunday.morning || branch.services.sunday.afternoon || branch.services.sunday.evening)
            )
        }

        return matchesSearch
    })

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3 >= filteredBranches.length ? 0 : prevIndex + 3))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? Math.max(0, filteredBranches.length - 3) : prevIndex - 3))
    }

    // Get the current visible branches
    const visibleBranches = filteredBranches.slice(currentIndex, currentIndex + 3)

    return (
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] min-h-screen flex flex-col items-center justify-center px-3 md:px-6 py-16 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-amber-500/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/placeholder.svg?height=10&width=10')] bg-repeat opacity-5"></div>
            </div>

            {/* Title Section */}
            <div className="w-full max-w-6xl text-center md:text-left mb-8">
                <div className="flex items-center justify-center md:justify-start mb-3">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-3"></div>
                    <span className="text-amber-400 uppercase tracking-wider text-xs font-medium">Find Your Community</span>
                </div>

                <h1 className="text-white text-xl sm:text-2xl md:text-3xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
                    Our Branch Churches
                </h1>

                <p className="text-amber-100/70 mt-4 max-w-xl mx-auto md:mx-0 text-sm">
                    Find a branch near you and join us for worship. Our branches are located throughout the city to serve you
                    better.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="w-full max-w-6xl mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search by branch name, pastor, or location..."
                            className="w-full px-10 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Custom Tabs */}
                    <div className="w-full md:w-auto">
                        <div className="flex rounded-md overflow-hidden border border-white/10 shadow-sm backdrop-blur-sm">
                            <button
                                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                                    serviceFilter === "all"
                                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
                                        : "bg-white/5 text-gray-200 hover:bg-white/10"
                                }`}
                                onClick={() => setServiceFilter("all")}
                            >
                                All
                            </button>
                            <button
                                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                                    serviceFilter === "tuesday"
                                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
                                        : "bg-white/5 text-gray-200 hover:bg-white/10"
                                }`}
                                onClick={() => setServiceFilter("tuesday")}
                            >
                                Tuesday
                            </button>
                            <button
                                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                                    serviceFilter === "friday"
                                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
                                        : "bg-white/5 text-gray-200 hover:bg-white/10"
                                }`}
                                onClick={() => setServiceFilter("friday")}
                            >
                                Friday
                            </button>
                            <button
                                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                                    serviceFilter === "sunday"
                                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
                                        : "bg-white/5 text-gray-200 hover:bg-white/10"
                                }`}
                                onClick={() => setServiceFilter("sunday")}
                            >
                                Sunday
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branch Cards Carousel */}
            <div className="w-full max-w-6xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-lg font-medium">Branch Locations</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full shadow-md hover:bg-white/20 transition border border-white/20"
                            aria-label="Previous branches"
                        >
                            <ChevronLeft className="text-white text-xs" size={16} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full shadow-md hover:bg-white/20 transition border border-white/20"
                            aria-label="Next branches"
                        >
                            <ChevronRight className="text-white text-xs" size={16} />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(0)` }}>
                        {visibleBranches.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                {visibleBranches.map((branch) => (
                                    <div
                                        key={branch.id}
                                        className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-white/10 group hover:border-amber-500/30 ${
                                            activeBranch?.id === branch.id ? "ring-1 ring-amber-400 ring-offset-2 ring-offset-[#121212]" : ""
                                        }`}
                                        onClick={() => setActiveBranch(branch)}
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 z-10 group-hover:opacity-80 transition-opacity duration-300"></div>

                                            {/* Increased image height */}
                                            <div className="h-60 bg-[#19222d] flex items-center justify-center">
                                                <img
                                                    src={branch.pastor.photo || "/placeholder.svg"}
                                                    alt={branch.pastor.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <button className="absolute top-3 right-3 z-20 w-6 h-6 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40">
                                                <Info size={12} className="text-white" />
                                            </button>

                                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                                                <h3 className="text-white text-lg font-bold">{branch.name}</h3>
                                                <p className="text-amber-200/80 text-xs mt-0.5">{branch.pastor.name}</p>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                                <p className="text-gray-300 text-sm">{branch.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 w-full">
                                <p className="text-amber-400">No branches found matching your search criteria.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Pagination indicators */}
                {filteredBranches.length > 3 && (
                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({ length: Math.ceil(filteredBranches.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * 3)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    Math.floor(currentIndex / 3) === index ? "bg-amber-500" : "bg-white/30"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Branch Details Section with Icons */}
            {activeBranch && (
                <div className="w-full max-w-6xl mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-white mb-3">{activeBranch.name}</h2>
                            <p className="text-amber-100/70 text-sm mb-4">
                                Led by {activeBranch.pastor.name}, our {activeBranch.name} is dedicated to serving the community with
                                love and compassion.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <MapPinned className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-amber-400 text-xs font-medium mb-1">Location</h4>
                                        <p className="text-white text-sm">{activeBranch.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <User className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-amber-400 text-xs font-medium mb-1">Pastor</h4>
                                        <p className="text-white text-sm">{activeBranch.pastor.name}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-start gap-3 mb-2">
                                    <Clock className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                    <h4 className="text-amber-400 text-sm font-medium">Service Schedule</h4>
                                </div>

                                <div className="space-y-2 pl-8">
                                    {activeBranch.services.tuesday ? (
                                        <div className="flex items-center">
                                            <span className="w-1 h-1 bg-amber-400 rounded-full mr-1.5"></span>
                                            <p className="text-white text-sm">
                                                <span className="font-medium">Tuesday:</span> {activeBranch.services.tuesday.time}
                                            </p>
                                        </div>
                                    ) : null}

                                    {activeBranch.services.friday ? (
                                        <div className="flex items-center">
                                            <span className="w-1 h-1 bg-amber-400 rounded-full mr-1.5"></span>
                                            <p className="text-white text-sm">
                                                <span className="font-medium">Friday:</span> {activeBranch.services.friday.time}
                                            </p>
                                        </div>
                                    ) : null}

                                    {activeBranch.services.sunday.morning && (
                                        <div className="flex items-center">
                                            <span className="w-1 h-1 bg-amber-400 rounded-full mr-1.5"></span>
                                            <p className="text-white text-sm">
                                                <span className="font-medium">Sunday Morning:</span> {activeBranch.services.sunday.morning.time}
                                            </p>
                                        </div>
                                    )}

                                    {activeBranch.services.sunday.afternoon && (
                                        <div className="flex items-center">
                                            <span className="w-1 h-1 bg-amber-400 rounded-full mr-1.5"></span>
                                            <p className="text-white text-sm">
                                                <span className="font-medium">Sunday Afternoon:</span>{" "}
                                                {activeBranch.services.sunday.afternoon.time}
                                            </p>
                                        </div>
                                    )}

                                    {activeBranch.services.sunday.evening && (
                                        <div className="flex items-center">
                                            <span className="w-1 h-1 bg-amber-400 rounded-full mr-1.5"></span>
                                            <p className="text-white text-sm">
                                                <span className="font-medium">Sunday Evening:</span> {activeBranch.services.sunday.evening.time}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white text-xs rounded-full transition-colors">
                                    <span>Get Directions</span>
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full transition-colors border border-white/20">
                                    <span>Contact Branch</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="relative max-w-[250px]">
                                <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-lg blur-lg opacity-70"></div>
                                <img
                                    src={activeBranch.pastor.photo || "/placeholder.svg"}
                                    alt={activeBranch.pastor.name}
                                    className="relative z-10 rounded-lg shadow-xl max-h-[300px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
