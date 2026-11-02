import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';

export default function GalleryPage() {
  useSeo({
    title: 'Gallery',
    description: `Photos of recent ${config.industry.toLowerCase()} work by ${config.name} in ${config.serviceArea}.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Project gallery"
        text="Real jobs, finished properly. Filter by category and tap a photo to see it full size."
      />
      <section className="section" aria-label="Photo gallery">
        <div className="container">
          <Gallery filterable />
        </div>
      </section>
      <CTASection />
    </>
  );
}
