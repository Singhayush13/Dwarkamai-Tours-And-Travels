import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFoundPage() {
  const location = useLocation();
  usePageMeta("Page Not Found", "This page could not be found. Return to Dwarkamai Tours & Travels to plan your journey.");
  return (
    <div className="not-found">
      <p className="eyebrow">404 · WRONG TURN?</p>
      <h1>This page isn’t<br />on our <em>route.</em></h1>
      <p>We couldn’t find <code>{location.pathname}</code>. Let’s get you back to a familiar place.</p>
      <Link className="button button-dark" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
