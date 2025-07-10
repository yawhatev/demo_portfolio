import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">John Doe</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm John Doe
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                I'm a passionate full stack developer with over 3 years of experience building web applications. I love
                turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or enjoying a good cup of coffee while reading about the latest in web development.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">E-commerce Platform</CardTitle>
                <CardDescription className="mb-4">
                  A full-featured e-commerce platform built with Next.js, Stripe, and PostgreSQL.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Stripe
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://example.com" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Task Management App</CardTitle>
                <CardDescription className="mb-4">
                  A collaborative task management application with real-time updates and team features.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Socket.io
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://example.com" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Weather Dashboard"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Weather Dashboard</CardTitle>
                <CardDescription className="mb-4">
                  A beautiful weather dashboard with forecasts, maps, and location-based features.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Vue.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    API Integration
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Charts.js
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://example.com" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            I'm always interested in hearing about new opportunities and interesting projects. Let's connect and see how
            we can work together!
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="mailto:john.doe@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
