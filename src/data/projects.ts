// Edit this file to add, remove, or update projects.
// Each project lives under "net" (networking), "sec" (security), or "code".
// Fields:  k = category icon, n = name, s = summary, t = tag/lang, u = link (optional)
export type Cat = 'net' | 'sec' | 'code' | 'soon';
export interface Project { k: Cat; n: string; s: string; t: string; u?: string; }

export const projects: Record<'net' | 'sec' | 'code', Project[]> = {
 net: [
  { k: 'net', n: 'GCX CCNA Enterprise Project', s: 'Multi-site Cisco network with VLANs, OSPF, Frame Relay, NAT, and ACL-based security. Built brick by brick in Packet Tracer.', t: 'Packet Tracer', u: 'https://github.com/ULTRONLORD/GCX-CCNA-SELF-GUIDED-PROJECT' },
  { k: 'net', n: 'Subnet Calculator', s: 'Interactive Python tool that detects IP class, calculates subnet details, and exports reports. Built for real homelab work.', t: 'Python', u: 'https://github.com/ULTRONLORD/Subnet-Calculator' },
  { k: 'net', n: 'VoIP Implementation', s: 'Cisco Packet Tracer project with VLANs, DHCP, and telephony service. Full topology and working IP phone extensions.', t: 'Cisco IOS', u: 'https://github.com/ULTRONLORD/VoIp' },
],

  sec: [
    { k: 'sec',  n: 'ZIP bruteforcer', s: 'Python tool that brute-forces a password-locked ZIP archive.',  t: 'Python', u: 'https://github.com/ULTRONLORD/Bruteforce1' },
    { k: 'sec',  n: 'Email filter',    s: 'Cleans and validates messy email lists — handy for OSINT prep.', t: 'Python', u: 'https://github.com/ULTRONLORD/Email-Filter' },
    { k: 'soon', n: 'CTF write-up',    s: 'A short capture-the-flag walkthrough is on the way.',            t: 'soon' },
  ],
  code: [
    { k: 'code', n: 'Grade calculator',   s: 'A CGPA and GPA calculator built in C++.',                t: 'C++',    u: 'https://github.com/ULTRONLORD/Grade-calc' },
    { k: 'code', n: 'Compound interest',  s: 'Calculates interest over a given period of time.',        t: 'C#',     u: 'https://github.com/ULTRONLORD/comopundinterest' },
    { k: 'code', n: 'File transfer',      s: 'A Python utility for moving files across a connection.',   t: 'Python', u: 'https://github.com/ULTRONLORD/filetransfer' },
    { k: 'code', n: 'Web calculator',     s: 'A clean calculator built with HTML and JavaScript.',       t: 'HTML',   u: 'https://github.com/ULTRONLORD/calculator' },
  ],
};
