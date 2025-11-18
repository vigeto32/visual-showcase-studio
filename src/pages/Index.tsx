import { Book, Calendar, GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

const Index = () => {
  const topics = [
    "Enterprise Architecture Frameworks",
    "System Integration Patterns",
    "API Design and Management",
    "Microservices Architecture",
    "Cloud Integration Services",
    "Data Integration Strategies",
    "Security Architecture",
    "DevOps and CI/CD",
  ];

  const schedule = [
    { week: "Week 1-2", topic: "Introduction to System Integration & Architecture" },
    { week: "Week 3-4", topic: "Enterprise Architecture Frameworks (TOGAF, Zachman)" },
    { week: "Week 5-6", topic: "Integration Patterns and Best Practices" },
    { week: "Week 7-8", topic: "Microservices and API Design" },
    { week: "Week 9-10", topic: "Cloud Architecture and Services" },
    { week: "Week 11-12", topic: "Security and Governance" },
    { week: "Week 13-14", topic: "Case Studies and Implementation" },
    { week: "Week 15-16", topic: "Project Presentations and Review" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <img 
              src={logo} 
              alt="Institute Logo" 
              className="w-48 h-48 object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"
            />
            <div className="space-y-4 animate-in slide-in-from-bottom duration-700 delay-150">
              <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                SY 2025-2026 • 2nd Semester
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                ITPC9
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                System Integration & Architecture
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Master the art of designing, implementing, and managing enterprise-level system architectures and integration solutions.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <GraduationCap className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Course Level</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced undergraduate level focusing on enterprise systems</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">16 weeks of intensive learning and practical projects</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Book className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Learning Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Hybrid approach with lectures, labs, and real-world projects</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Team-based projects and peer learning activities</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Topics */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage of modern system integration and architecture concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <Card 
              key={index} 
              className="border-l-4 border-l-primary hover:shadow-md transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-medium">{topic}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning path throughout the semester
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2">
          <CardContent className="p-0">
            <div className="divide-y">
              {schedule.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 hover:bg-secondary/50 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <Badge variant="outline" className="w-fit text-sm font-semibold">
                    {item.week}
                  </Badge>
                  <p className="text-foreground font-medium flex-1">{item.topic}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Learning Outcomes */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Learning Outcomes</CardTitle>
              <CardDescription className="text-base">
                By the end of this course, students will be able to:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Design and implement enterprise-level system architectures",
                  "Apply integration patterns and best practices in real-world scenarios",
                  "Evaluate and select appropriate architectural frameworks for projects",
                  "Develop microservices-based solutions with proper API design",
                  "Implement cloud-native architectures and integration services",
                  "Apply security principles and governance in system design",
                  "Lead technical architecture discussions and decision-making",
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            © 2025-2026 • System Integration & Architecture • ITPC9
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
