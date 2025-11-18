/**
 * Job Seeking Banner Component
 * Prominent, dismissible banner displaying job seeking status
 */

import { useState, useEffect } from "react";
import { X, Briefcase, MapPin, Clock, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function JobSeekingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Check if banner was previously dismissed (stored in localStorage)
  useEffect(() => {
    const dismissed = localStorage.getItem("jobBannerDismissed");
    const dismissedDate = dismissed ? new Date(dismissed) : null;
    const now = new Date();

    // Show banner again after 7 days
    if (dismissedDate) {
      const daysSinceDismissed = Math.floor(
        (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysSinceDismissed < 7) {
        setIsVisible(false);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("jobBannerDismissed", new Date().toISOString());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Alert className="relative border-primary/50 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 h-6 w-6"
        onClick={handleDismiss}
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </Button>

      <AlertDescription>
        <div className="pr-8">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-3 md:hidden">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>Actively Seeking Full-Stack Developer Positions</span>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Available Immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">✅ EU Citizen</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Button asChild size="sm" className="w-full">
                <a
                  href="/Yoseph_Berhane_CV_SV.pdf"
                  download
                  className="flex items-center justify-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  CV 🇸🇪 (Svenska)
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary" className="w-full">
                <a
                  href="/Yoseph_Berhane_CV_EN.pdf"
                  download
                  className="flex items-center justify-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  CV 🇬🇧 (English)
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="/contact" className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:justify-between">
            <div className="flex items-center gap-6 flex-1">
              <div className="flex items-center gap-2 text-base font-semibold">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Actively Seeking Full-Stack Developer Positions</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Remote Worldwide</span>
                </div>
                {/* <span>•</span> */}
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Available Immediately</span>
                </div>
                {/* <span>•</span> */}
                <span className="font-medium">✅ EU Citizen</span>
                {/* <span>•</span> */}
                <span>Open to Remote</span>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-6">
              <Button asChild size="sm">
                <a
                  href="/Yoseph_Berhane_CV_SV.pdf"
                  download
                  className="flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  CV 🇸🇪
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <a
                  href="/Yoseph_Berhane_CV_EN.pdf"
                  download
                  className="flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  CV 🇬🇧
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="/contact" className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
}

// Compact version for use in other sections
export function JobSeekingBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </span>
      <span className="text-sm font-medium">Available for Hire</span>
    </div>
  );
}
