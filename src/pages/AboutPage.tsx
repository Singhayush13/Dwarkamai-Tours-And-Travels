import { ArrowUpRight, Compass, HeartHandshake, Map, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import bus2 from "../assets/bus2.jpg";
import { PageHeading, SectionHeading, ServiceCards } from "../components/Content";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";

export default function AboutPage() {
  usePageMeta("About Us", "Meet Dwarkamai Tours & Travels and learn about our approach to group, family and pilgrim journeys.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="A LITTLE ABOUT US" title={<>Travel is better<br />when it brings us <em>together.</em></>} description="Dwarkamai Tours & Travels takes enquiries for group bus and car journeys from Vasai and nearby areas, for pilgrimages, family occasions, company outings and more." />
        <div className="about-feature">
          <div className="about-photo"><img src={bus2} alt="Coach for group travel" fetchPriority="high" /></div>
          <div className="about-copy">
            <p className="eyebrow">OUR APPROACH</p>
            <h2>Good journeys start with listening.</h2>
            <p>Every group has its own plans, pace and reason for travelling. We make it easy to begin the conversation: share your route, dates and group size, then discuss the right coach and arrangements directly with us.</p>
            <p>We mainly serve Vasai, Nalasopara, Virar and Naigaon, with enquiries across Mumbai, Thane and destinations beyond. Our listed buses are 20, 32 and 44 seaters, non-AC; contact us to discuss vehicle suitability and other options.</p>
            <Link className="text-link" to="/booking">Tell us about your trip <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </div>
      <section className="section-block about-direction-section">
        <div className="section-shell">
          <SectionHeading eyebrow="OUR PURPOSE & PROMISE" title="Travel plans start with a conversation" description="We focus on the things we can confirm: clear trip details, direct communication and a suitable vehicle discussion." />
          <div className="about-direction-grid">
            <article><span>01 / OUR MISSION</span><h2>Make group travel easier to plan.</h2><p>Help every customer explain their journey, understand the available vehicle options and connect with the business to discuss the next steps.</p></article>
            <article><span>02 / OUR VISION</span><h2>Be a dependable local travel partner.</h2><p>Build trust through thoughtful communication for trips beginning in Vasai, Nalasopara, Virar, Naigaon, Mumbai and Thane.</p></article>
            <article><span>03 / OUR COMMITMENT</span><h2>Keep the details honest.</h2><p>We don’t promise a booking, price or vehicle availability through the website. Those details are confirmed directly for each enquiry.</p></article>
          </div>
        </div>
      </section>
      <section className="section-block section-soft">
        <div className="section-shell">
          <SectionHeading eyebrow="WHAT MATTERS TO US" title="A thoughtful way to travel" description="A few simple principles guide the way we help you plan." />
          <div className="values-grid">
            <article><span><UsersRound /></span><h3>Travel together</h3><p>Group travel is at the heart of what we do, from family plans to organised outings.</p></article>
            <article><span><Compass /></span><h3>Your route, your plans</h3><p>Start with your own pickup, destination and timing. Discuss the details directly with us.</p></article>
            <article><span><HeartHandshake /></span><h3>Clear conversations</h3><p>Enquiries are just that: availability and pricing are confirmed directly, not assumed online.</p></article>
            <article><span><Map /></span><h3>Made for the occasion</h3><p>Share whether you’re planning a pilgrimage, family function or group outing.</p></article>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="section-shell">
          <SectionHeading eyebrow="HOW WE CAN HELP" title="Journeys for all kinds of groups" />
          <ServiceCards services={services} />
        </div>
      </section>
      <section className="simple-cta">
        <div><p className="eyebrow">READY TO GET STARTED?</p><h2>Let’s plan your next journey.</h2></div>
        <Link className="button button-dark" to="/booking">Plan your trip <ArrowUpRight size={17} /></Link>
      </section>
    </div>
  );
}
