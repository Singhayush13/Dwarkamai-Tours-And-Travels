import { GalleryGrid, PageHeading } from "../components/Content";
import { usePageMeta } from "../hooks/usePageMeta";

export default function GalleryPage() {
  usePageMeta("Gallery", "Browse photos of Dwarkamai Tours & Travels coaches and fleet.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="A FEW MOMENTS ON THE ROAD" title={<>Made of journeys<br />and <em>memories.</em></>} description="A look at coach and fleet photos from Dwarkamai Tours & Travels. Select a photo to view it larger." />
        <GalleryGrid />
      </div>
    </div>
  );
}
