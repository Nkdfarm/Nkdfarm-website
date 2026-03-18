import Header from "@/components/Header";

const FarmBox = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">FarmBox</h1>
        <p className="text-lg text-muted-foreground">Coming soon.</p>
      </main>
    </div>
  );
};

export default FarmBox;