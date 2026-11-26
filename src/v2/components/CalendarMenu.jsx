import React, { useEffect, useRef, useState } from 'react';
import { ICS_URL, googleCalendarUrl } from '../lib/calendar';
import { CalendarIcon } from './Icons';

// one button, two choices: the .ics file (Apple, Outlook and most others) or Google Calendar
const CalendarMenu = ({ className = 'btn btn-red', label = 'Add to calendar', up = false, right = false }) => {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={`pop ${up ? 'pop--up' : ''} ${right ? 'pop--right' : ''}`} ref={wrap}>
      <button
        ref={button}
        type="button"
        className={className}
        aria-expanded={open}
        aria-controls="calendar-choices"
        onClick={() => setOpen((o) => !o)}
      >
        <CalendarIcon />
        {label}
      </button>
      {open && (
      <div className="pop__panel" id="calendar-choices">
        <a className="pop__item" href={ICS_URL} onClick={() => setOpen(false)}>
          <CalendarIcon />
          Apple, Outlook or other
        </a>
        <a
          className="pop__item"
          href={googleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <CalendarIcon />
          Google Calendar
        </a>
      </div>
      )}
    </div>
  );
};

export default CalendarMenu;
