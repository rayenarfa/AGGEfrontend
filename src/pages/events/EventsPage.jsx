import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionPage from '../../components/ui/SectionPage';
import EventCard from '../../components/ui/EventCard';
import { CardSkeleton } from '../../components/ui/Loader';
import { getEvents } from '../../services/events';
import { pageContent } from '../../data/mockContent';
import { eventsSubNav } from '../../data/navigation';

export default function EventsPage() {
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getEvents({ upcoming: true });
        setEventsList(data.events);
      } catch (err) {
        setError('Failed to load upcoming events.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <SectionPage
      content={pageContent.events}
      subNav={eventsSubNav}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Events' }]}
    >
      {loading ? (
        <CardSkeleton count={2} />
      ) : error ? (
        <div className="rounded-lg border border-red-500/20 bg-red-950/20 p-4 text-sm text-red-400">
          {error}
        </div>
      ) : eventsList.length === 0 ? (
        <div className="rounded-xl border border-sandstone/30 bg-white p-8 text-center text-text-muted text-sm shadow-sm">
          No upcoming events at this time. Check back later!
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {eventsList.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
      <p className="mt-6 text-sm text-text-muted">
        <Link to="/events/environmental-policy" className="text-copper hover:underline font-semibold">
          Event environmental policy
        </Link>
      </p>
    </SectionPage>
  );
}
