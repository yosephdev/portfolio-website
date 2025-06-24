import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBeehiivSubscription } from "@/hooks/useBeehiivSubscription";

interface NewsletterSubscribeProps {
  compact?: boolean;
  className?: string;
}

export function NewsletterSubscribe({ compact = false, className = "" }: NewsletterSubscribeProps) {
  const [email, setEmail] = useState("");
  const { subscribe, isSubmitting, isSuccess, error, reset } = useBeehiivSubscription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    await subscribe(email);
    if (isSuccess) {
      setEmail("");
    }
  };

  if (isSuccess) {
    return (
      <div className={`rounded-md bg-green-50 p-3 dark:bg-green-900/20 ${className}`}>
        <p className="text-sm font-medium text-green-800 dark:text-green-200">
          Thanks! Check your email to confirm.
        </p>
        {!compact && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={reset}
            className="mt-1 text-green-700 hover:text-green-800 dark:text-green-300 p-0 h-auto"
          >
            Subscribe another email
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={compact ? "flex gap-2" : "space-y-4"}>
        <div className={compact ? "flex-1" : ""}>
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="focus-ring"
          />
        </div>
        <Button 
          type="submit" 
          className={compact ? "shrink-0" : "w-full"}
          disabled={isSubmitting || !email.trim()}
          size={compact ? "sm" : "default"}
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </form>
      {error && (
        <p className={`text-red-500 ${compact ? "text-xs mt-1" : "text-sm mt-2"}`}>
          {error}
        </p>
      )}
    </div>
  );
}