/**
 * About Page
 * Comprehensive About Me page with skills, GitHub stats, and testimonials
 */

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { AboutMe } from '@/components/AboutMe';
import { TechnicalSkills, SkillsOverview } from '@/components/TechnicalSkills';
import { GitHubStats } from '@/components/GitHubStats';
import { Testimonials } from '@/components/Testimonials';
import { JobSeekingBadge } from '@/components/JobSeekingBanner';
import { Separator } from '@/components/ui/separator';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="About Me - Yoseph Berhane | Full Stack Developer"
        description="Learn more about Yoseph Berhane, a Full Stack Developer with 5 years of experience specializing in React, TypeScript, and modern web technologies. Currently seeking opportunities in Berlin, Germany."
        keywords={[
          'About',
          'Full Stack Developer',
          'React Developer',
          'TypeScript',
          'Berlin',
          'Germany',
          'Web Developer',
          'Software Engineer',
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl">
              <div className="mb-6">
                <JobSeekingBadge />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer passionate about building modern web applications and
                currently seeking opportunities in Berlin, Germany.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg">
                  <a href="/Yoseph_Berhane_CV_DE.pdf" download className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    CV 🇩🇪
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="/Yoseph_Berhane_CV_EN.pdf" download className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    CV 🇬🇧
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20">
          <div className="container">
            <AboutMe />
          </div>
        </section>

        <Separator />

        {/* Skills Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills across frontend, backend,
                databases, and development tools.
              </p>
            </div>
            <SkillsOverview />
          </div>
        </section>

        {/* Detailed Skills */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Skills Breakdown</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed proficiency levels across different technology categories
              </p>
            </div>
            <TechnicalSkills />
          </div>
        </section>

        <Separator />

        {/* GitHub Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My open-source contributions and development activity on GitHub
              </p>
            </div>
            <GitHubStats />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What clients and colleagues say about working with me
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        <Separator />

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently seeking full-stack developer positions in Berlin, Germany.
              Available for immediate start with no visa requirements (EU Citizen).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
