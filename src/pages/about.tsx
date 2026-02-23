function AboutPage() {
    return (
      <section className="w-full max-w-3xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-medium text-foreground">
            About Policy Search
          </h1>
  
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            University of Guyana
          </p>
  
          <p className="text-muted-foreground leading-relaxed">
            Policy Search is a public facing interface that helps students, staff, and visitors
            find official University of Guyana policy documents quickly. Instead of navigating
            a technical repository experience, users can search in plain language, scan results,
            and open the document they need with fewer steps.
          </p>
        </header>
  
        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">What it does</h2>
          <p className="text-muted-foreground leading-relaxed">
            The goal is simple: make policy information easy to discover and easy to use.
            The platform focuses on clarity and speed so non technical users can search, filter,
            and browse without needing to understand how repositories are structured behind the
            scenes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            On the backend, the system connects to a DSpace 9 repository and relies on Solr powered
            discovery. The main search endpoint used by the application is{" "}
            <span className="text-foreground">/discover/search/objects</span>, which supports
            query based search with pagination, sorting, and filters.
          </p>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">How search works</h2>
          <p className="text-muted-foreground leading-relaxed">
            The search experience is designed as a layered flow. When a user starts typing, the
            app can request a small set of results to show quick suggestions. When the user submits
            the search, the app loads a full result list with pagination and sorting so users can
            explore more broadly.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common API options include{" "}
            <span className="text-foreground">query</span>,{" "}
            <span className="text-foreground">size</span>,{" "}
            <span className="text-foreground">page</span>,{" "}
            <span className="text-foreground">sort</span>,{" "}
            <span className="text-foreground">scope</span>, and{" "}
            <span className="text-foreground">filter</span>. These allow both simple searches
            and more targeted discovery when users need specific document types or categories.
          </p>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">Platform</h2>
          <p className="text-muted-foreground leading-relaxed">
            The current environment is hosted at{" "}
            <span className="text-foreground">dspace.nickelcy.com</span> and exposes API services
            under <span className="text-foreground">/server/api</span>. This approach supports
            public access to approved content while still allowing institutional control over
            private or restricted records.
          </p>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">Roadmap</h2>
          <p className="text-muted-foreground leading-relaxed">
            Planned improvements include containerized deployment workflows, cleaner separation
            between frontend and backend delivery, and stronger scalability to support higher
            traffic and larger collections over time.
          </p>
        </section>
  
        <footer className="pt-6 border-t border-border space-y-2">
          <h2 className="text-xl font-medium text-foreground">Developer</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am <span className="text-foreground font-medium">Nickelcy Francois</span>, a developer
            intern building this project as part of a real world effort to make policy information
            easier to find, understand, and use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Portfolio{" "}
            <a
              href="https://nickelcy.com"
              target="_blank"
              rel="noreferrer"
              className="text-purple-800 underline underline-offset-4 hover:text-primary"
            >
              nickelcy.com
            </a>
          </p>
        </footer>
      </section>
    )
  }
  
  export default AboutPage