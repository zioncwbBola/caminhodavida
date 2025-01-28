import { ReactNode } from 'react';
import SidebarCms from '@/components/cms/Sidebar';
import NavbarCms from '@/components/cms/Navbar';

const CmsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarCms />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavbarCms />

        {/* Main Content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default CmsLayout;
