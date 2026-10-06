import Hero from '@/components/vincent/Hero';
import CompanyIndex from '@/components/vincent/CompanyIndex';
import ParallelTracks from '@/components/vincent/ParallelTracks';
import SystemsBuilt from '@/components/vincent/SystemsBuilt';
import Credentials from '@/components/vincent/Credentials';
import Closing from '@/components/vincent/Closing';

export default function Vincent() {
  return (
    <div className="bg-[#F2EFE9] text-[#1a1a1a] min-h-screen antialiased">
      <Hero />
      <CompanyIndex />
      <ParallelTracks />
      <SystemsBuilt />
      <Credentials />
      <Closing />
    </div>
  );
}