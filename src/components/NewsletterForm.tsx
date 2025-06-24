import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBeehiivSubscription } from "@/hooks/useBeehiivSubscription";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const { subscribe, isSubmitting, isSuccess, error, reset } = useBeehiivSubscription();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        
        await subscribe(email);
        if (isSuccess) {
            setEmail("");
        }
    };

    const handleTryAgain = () => {
        reset();
    };

    return (
        <div className="rounded-lg border bg-card p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Subscribe to the Newsletter</h3>
            <p className="mt-2 text-muted-foreground">
                Get the latest content directly to your inbox. No spam, ever.
            </p>

            {isSuccess ? (
                <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Thank you for subscribing! Check your email to confirm your subscription.
                    </p>
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleTryAgain}
                        className="mt-2 text-green-700 hover:text-green-800 dark:text-green-300"
                    >
                        Subscribe another email
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div className="space-y-2">
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
                    {error && (
                        <div className="rounded-md bg-red-50 p-3 dark:bg-red-900/20">
                            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                        </div>
                    )}
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting || !email.trim()}
                    >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                </form>
            )}
        </div>
    );
}
