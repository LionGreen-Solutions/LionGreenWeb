
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample FAQ data
const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    questions: [
      {
        id: "what-is-solar",
        question: "What is solar energy?",
        answer: "Solar energy is radiant light and heat from the Sun that is harnessed using technologies such as solar panels. It is a renewable energy source that can be used for electricity generation, water heating, and more."
      },
      {
        id: "why-solar",
        question: "Why should I switch to solar energy?",
        answer: "Switching to solar energy offers multiple benefits: it reduces electricity bills, provides energy independence, reduces carbon footprint, requires minimal maintenance, and increases property value."
      },
      {
        id: "cost-savings",
        question: "How much money can I save with solar energy?",
        answer: "Savings depend on your energy consumption, local electricity rates, and the size of your solar system. Most homeowners save between 40-70% on their electricity bills, with potential for complete elimination of electric bills in some cases."
      }
    ]
  },
  {
    id: "products",
    name: "Products & Services",
    questions: [
      {
        id: "product-warranty",
        question: "What warranty do your products have?",
        answer: "All Lion Green Solutions products come with a standard 24-month warranty against manufacturing defects. Solar panels typically have a 25-year performance warranty, while inverters and batteries have warranties ranging from 5-10 years."
      },
      {
        id: "product-quality",
        question: "How do you ensure product quality?",
        answer: "We partner with leading global manufacturers and conduct rigorous quality control checks. All our products meet international standards and certifications, and undergo performance testing before installation."
      },
      {
        id: "installation-time",
        question: "How long does installation take?",
        answer: "Installation time varies based on system size and complexity. Residential installations typically take 1-3 days, while commercial projects may take 1-2 weeks. We provide a specific timeline during the consultation phase."
      }
    ]
  },
  {
    id: "technical",
    name: "Technical Questions",
    questions: [
      {
        id: "power-outage",
        question: "Will my solar system work during power outages?",
        answer: "Grid-tied systems without batteries will shut down during power outages for safety reasons. Systems with battery backup will continue providing power to essential loads during outages."
      },
      {
        id: "maintenance",
        question: "How much maintenance do solar systems require?",
        answer: "Solar systems require minimal maintenance. We recommend annual inspections and occasional cleaning to ensure optimal performance. Our maintenance packages provide comprehensive care for your system."
      },
      {
        id: "monitoring",
        question: "How can I monitor my system's performance?",
        answer: "Our solar systems come with monitoring solutions that allow you to track energy production, consumption, and savings through a web portal or mobile app in real-time."
      }
    ]
  },
  {
    id: "mobility",
    name: "Electric Mobility",
    questions: [
      {
        id: "ev-range",
        question: "What is the range of your electric bikes?",
        answer: "Our electric bikes have ranges varying from 40-80 kilometers on a single charge, depending on the model. Factors affecting range include rider weight, terrain, and speed."
      },
      {
        id: "charging-time",
        question: "How long does it take to charge the electric vehicles?",
        answer: "Charging times vary by model. Typically, our electric bikes require 4-6 hours for a full charge from a standard outlet. Fast charging options can reduce this to 2-3 hours."
      },
      {
        id: "battery-life",
        question: "How long do the batteries last?",
        answer: "Our mobility product batteries are designed to maintain at least 80% of their original capacity after 500-800 full charge cycles, which translates to approximately 3-5 years of regular use."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Filter questions based on search term and active category
  const filteredFAQs = faqCategories.flatMap(category => 
    category.questions.filter(q => 
      (activeCategory === "all" || category.id === activeCategory) &&
      (q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
       q.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    ).map(q => ({...q, categoryId: category.id, categoryName: category.name}))
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 bg-noise">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-display">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Find answers to common questions about our solar energy products, electric mobility solutions, and services. If you can't find what you're looking for, please contact our support team.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-lg mb-8">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
            />
          </div>
          
          {/* Category Navigation */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card/60 text-muted-foreground hover:bg-card"
              }`}
            >
              All
            </button>
            {faqCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card/60 text-muted-foreground hover:bg-card"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl">
            {filteredFAQs.length > 0 ? (
              <>
                {/* When filtering by search, show category headers */}
                {searchTerm && activeCategory === "all" && (
                  <>
                    {Array.from(new Set(filteredFAQs.map(q => q.categoryId))).map(catId => (
                      <div key={catId} className="mb-6">
                        <h2 className="text-xl font-semibold text-primary mb-3">
                          {filteredFAQs.find(q => q.categoryId === catId)?.categoryName}
                        </h2>
                        <Accordion type="single" collapsible className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/30">
                          {filteredFAQs
                            .filter(q => q.categoryId === catId)
                            .map(q => (
                              <AccordionItem key={q.id} value={q.id}>
                                <AccordionTrigger className="px-4 hover:no-underline hover:bg-background/30 text-foreground">
                                  {q.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                                  {q.answer}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                        </Accordion>
                      </div>
                    ))}
                  </>
                )}
                
                {/* Regular category display */}
                {(!searchTerm || activeCategory !== "all") && (
                  <Accordion type="single" collapsible className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/30">
                    {filteredFAQs.map(q => (
                      <AccordionItem key={q.id} value={q.id}>
                        <AccordionTrigger className="px-4 hover:no-underline hover:bg-background/30 text-foreground">
                          {q.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-muted-foreground">
                          {q.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </>
            ) : (
              <div className="text-center py-8 bg-card/60 backdrop-blur-sm rounded-lg border border-border/30">
                <p className="text-muted-foreground">No questions found matching your search.</p>
              </div>
            )}
          </div>
          
          {/* Contact Section */}
          <div className="mt-12 p-8 bg-card/60 backdrop-blur-sm rounded-lg border border-border/30 max-w-4xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you couldn't find the answer to your question, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block text-center"
              >
                Contact Support
              </a>
              <a 
                href="tel:+251913829749" 
                className="px-6 py-3 bg-secondary/60 text-foreground rounded-md hover:bg-secondary/80 inline-block text-center"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
