import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Verification } from "@/data/archive";

export interface Track {
  id: string;
  title: string;
  meta: string;
  image: string;
  seconds: number;
  contributor: string;
}

interface Contribution {
  id: string;
  title: string;
  language: string;
  region: string;
  category: string;
  status: string;
}

interface StoreValue {
  track: Track | null;
  playing: boolean;
  position: number;
  speed: number;
  volume: number;
  play: (t: Track) => void;
  toggle: () => void;
  seek: (s: number) => void;
  setSpeed: (s: number) => void;
  setVolume: (v: number) => void;
  saved: string[];
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;
  played: string[];
  verification: Record<string, Verification>;
  setVerification: (id: string, v: Verification) => void;
  contributions: Contribution[];
  addContribution: (c: Contribution) => void;
  followedRegions: string[];
  toggleRegion: (id: string) => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function LokvaaniProvider({ children }: { children: ReactNode }) {
  const [track, setTrack] = useState<Track | null>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(0.8);
  const [saved, setSaved] = useState<string[]>([]);
  const [played, setPlayed] = useState<string[]>([]);
  const [verification, setVerificationState] = useState<Record<string, Verification>>({});
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [followedRegions, setFollowedRegions] = useState<string[]>(["rajasthan", "punjab"]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (playing && track) {
      timer.current = setInterval(() => {
        setPosition((p) => {
          const next = p + 0.25 * speed;
          if (next >= track.seconds) {
            setPlaying(false);
            return track.seconds;
          }
          return next;
        });
      }, 250);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, track, speed]);

  const play = useCallback(
    (t: Track) => {
      setTrack((cur) => {
        if (cur?.id === t.id) return cur;
        setPosition(0);
        return t;
      });
      setPlaying((p) => (track?.id === t.id ? !p : true));
      setPlayed((list) => [t.id, ...list.filter((i) => i !== t.id)].slice(0, 12));
    },
    [track],
  );

  const value = useMemo<StoreValue>(
    () => ({
      track,
      playing,
      position,
      speed,
      volume,
      play,
      toggle: () => setPlaying((p) => !p),
      seek: (s: number) => setPosition(s),
      setSpeed,
      setVolume,
      saved,
      toggleSave: (id: string) =>
        setSaved((list) => (list.includes(id) ? list.filter((i) => i !== id) : [id, ...list])),
      isSaved: (id: string) => saved.includes(id),
      played,
      verification,
      setVerification: (id, v) => setVerificationState((m) => ({ ...m, [id]: v })),
      contributions,
      addContribution: (c) => setContributions((list) => [c, ...list]),
      followedRegions,
      toggleRegion: (id) =>
        setFollowedRegions((list) =>
          list.includes(id) ? list.filter((i) => i !== id) : [id, ...list],
        ),
    }),
    [track, playing, position, speed, volume, play, saved, played, verification, contributions, followedRegions],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useLokvaani() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useLokvaani must be used inside LokvaaniProvider");
  return ctx;
}

export function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}
