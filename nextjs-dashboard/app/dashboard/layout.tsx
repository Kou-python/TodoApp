import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-co; flex h-screen md:flex-row md:overflow-hidden">
      <div className="md:w-64 w-full flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
