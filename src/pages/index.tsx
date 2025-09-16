import { VeltProvider } from "@veltdev/react";
import Dashboard from "./Dashboard";
import VeltCollaboration from "./velt/VeltCollaboration";
import {HeroUIProvider} from "@heroui/system";

export default function Home() {
  return (
    <VeltProvider apiKey='oGbYp7xKvkPGcawWbGKJ'>
      <HeroUIProvider>
        <div className="flex flex-col h-screen bg-white">
          <Dashboard />
          <VeltCollaboration />
        </div>
      </HeroUIProvider>
    </VeltProvider>
  );
}
