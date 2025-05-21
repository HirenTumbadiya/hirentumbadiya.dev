import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="text-xl font-bold">
              Dev<span className="text-primary">Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">
              Building exceptional web experiences with the MERN stack.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:john@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">© {currentYear} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
