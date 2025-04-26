import { AppHeader } from "@/components/layout/header";
// Removed Sidebar imports
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Changed layout structure */}
      <AppHeader />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <DashboardContent />
      </main>
      {/* Removed Sidebar and SidebarInset */}
    </div>
  );
}
