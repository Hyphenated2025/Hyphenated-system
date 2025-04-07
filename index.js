
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const selectors = [
  {
    name: "DJ ZEN's Picks",
    tracks: [
      {
        title: "Deep Pulse",
        link: "https://soundcloud.com/djzen/deep-pulse",
        comment: "A late-night minimal roller, perfect for dark rooms."
      },
      {
        title: "Ambient Drift",
        link: "https://soundcloud.com/djzen/ambient-drift",
        comment: "A meditative ambient journey."
      }
    ]
  },
  {
    name: "Hyphenated Monthly Picks",
    tracks: [
      {
        title: "Sakura - Floating",
        link: "https://bandcamp.com/track/sakura-floating",
        comment: "Dreamy textures from Tokyo's underground."
      },
      {
        title: "Queer Night Vibes - Live Set",
        link: "https://youtube.com/watch?v=example1",
        comment: "Recorded at our last LGBTQ+ club night in Okayama."
      }
    ]
  },
  {
    name: "By Genre: Experimental Techno",
    tracks: [
      {
        title: "DJ MOMO - Industrial Moonlight",
        link: "https://soundcloud.com/djmomo/industrial-moonlight",
        comment: "Harsh, metallic, hypnotic."
      },
      {
        title: "Hyphenated Mix Series 001",
        link: "https://soundcloud.com/hyphenated/mix-series-001",
        comment: "A mix that pushes boundaries."
      }
    ]
  }
];

export default function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hyphenated - Curated Sounds & Culture</h1>
      <p className="mb-6 text-lg">
        Hyphenated is a cultural collective bridging club music, queer expression, and community-based art.
        Explore curated tracklists, mixes, and DJ recommendations below.
      </p>

      {selectors.map((selector, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{selector.name}</h2>
          <div className="grid gap-4">
            {selector.tracks.map((track, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-medium mb-1">{track.title}</h3>
                  <p className="text-sm mb-2 text-gray-600">{track.comment}</p>
                  <Link href={track.link} target="_blank">
                    <Button>Listen</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
