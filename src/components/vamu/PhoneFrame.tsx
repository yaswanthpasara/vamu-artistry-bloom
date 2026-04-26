import { ReactNode } from "react";

/**
 * PhoneFrame — wraps app content in a realistic mobile phone shell on
 * larger screens. On true mobile devices, it expands to fill the viewport.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:py-10">
      {/* Outer device — only shows borders on >= sm */}
      <div
        className="
          relative w-full sm:w-[400px] sm:h-[860px]
          min-h-screen sm:min-h-0
          bg-background overflow-hidden
          sm:rounded-[3rem] sm:shadow-phone
          sm:border-[10px] sm:border-[oklch(0.22_0.02_35)]
        "
      >
        {/* Notch (only visible on sm+) */}
        <div className="hidden sm:flex absolute top-0 left-1/2 -translate-x-1/2 z-50 h-7 w-36 bg-[oklch(0.18_0.02_35)] rounded-b-3xl items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.4_0.04_35)]" />
          <span className="h-2 w-2 rounded-full bg-[oklch(0.3_0.03_35)]" />
        </div>

        {/* Scrollable inner content */}
        <div className="h-full w-full overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
