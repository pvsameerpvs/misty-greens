import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center gap-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">The page you are looking for doesn’t exist.</p>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
