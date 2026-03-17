import { DotPattern } from "@/components/ui/dot-pattern";

function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <DotPattern />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default ResumeLayout;
