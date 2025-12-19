import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="p-4 border-b">
                <h1 className="text-xl font-bold">My Template</h1>
            </header>

            {/* Main */}
            <main className="flex-1 p-4">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="p-4 border-t text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MyTemplate
            </footer>
        </div>
    );
}
