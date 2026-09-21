import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactRedirect,
});

function ContactRedirect() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Redirecting to Contact...
        </p>
      </div>
    </div>
  );
}
