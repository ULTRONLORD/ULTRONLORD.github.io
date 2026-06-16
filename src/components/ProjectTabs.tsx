import { useState } from 'react';
import { projects, type Cat } from '../data/projects';

const icons: Record<Cat, JSX.Element> = {
  net: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 14v-3h10v3M12 11V8" />
      <circle cx="12" cy="6" r="2" /><path d="M7 17h.01M11 17h.01" />
    </svg>
  ),
  sec: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" /><path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
    </svg>
  ),
  soon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="12" cy="12" r="8" /><path d="M12 8v4l2.5 2" />
    </svg>
  ),
};

const tabList: { k: 'net' | 'sec' | 'code'; label: string }[] = [
  { k: 'net', label: 'networking' },
  { k: 'sec', label: 'security' },
  { k: 'code', label: 'code' },
];

export default function ProjectTabs() {
  const [tab, setTab] = useState<'net' | 'sec' | 'code'>('net');
  return (
    <div>
      <div className="tabs">
        {tabList.map((t) => (
          <button
            key={t.k}
            className={'tab' + (tab === t.k ? ' active' : '')}
            onClick={() => setTab(t.k)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid">
        {projects[tab].map((p, i) => {
          const inner = (
            <>
              <div className="thumb">{icons[p.k]}</div>
              <h3>{p.n}</h3>
              <p>{p.s}</p>
              <div className="meta">
                <span>{p.t}</span>
                <span>{p.u ? 'view ↗' : 'soon'}</span>
              </div>
            </>
          );
          const cls = 'card' + (p.k === 'soon' ? ' soon' : '');
          return p.u ? (
            <a className={cls} key={i} href={p.u} target="_blank" rel="noopener">{inner}</a>
          ) : (
            <div className={cls} key={i}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
