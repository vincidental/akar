import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/vtheodore7/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=275f00';

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}