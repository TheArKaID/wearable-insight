import { AppHeader } from "@/components/layout/header";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200"> {/* Use DaisyUI background color */}
      <AppHeader />
      {/* Use standard main tag with DaisyUI padding */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <DashboardContent />
      </main>
    </div>
  );
}
