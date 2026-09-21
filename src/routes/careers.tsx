import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/careers")({
  component: CareersRedirect,
});

function CareersRedirect() {
  useEffect(() => {
    window.location.replace("/#careers");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Redirecting to Careers...
        </p>
      </div>
    </div>
  );
}
