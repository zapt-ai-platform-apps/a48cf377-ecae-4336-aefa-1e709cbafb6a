import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48"
                alt="Charity Governance Self-Assessment Prototype"
                className="h-8 w-8 mr-2"
              />
              <h1 className="text-xl font-bold text-gray-900">Charity Governance Self-Assessment Prototype</h1>
            </div>
            <div>
              <a
                href="https://www.zapt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Made on ZAPT
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Charity Governance Self-Assessment Prototype © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}