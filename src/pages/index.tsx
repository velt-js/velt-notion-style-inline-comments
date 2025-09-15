import { VeltProvider } from "@veltdev/react";
import Dashboard from "./Dashboard";
import VeltCollaboration from "./velt/VeltCollaboration";

export default function Home() {
  return (
    <VeltProvider apiKey='oGbYp7xKvkPGcawWbGKJ'>
      <div className="flex flex-col h-screen bg-white">
        <Dashboard />
        <VeltCollaboration />
      </div>
    </VeltProvider>
  );
}
