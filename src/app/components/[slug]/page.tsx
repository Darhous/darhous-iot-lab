export default function ComponentsPage({ params }: { params: { slug: string } }) {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto">
      <h1 className="font-headline-xl text-primary mb-6">Components {params.slug}</h1>
      <p className="font-body-lg text-on-surface-variant">
        This is the Components page. Content is under construction but fully functional.
      </p>
      <div className="mt-8 glass-panel p-8 rounded-xl">
        <p>Interactive components go here.</p>
      </div>
    </div>
  );
}