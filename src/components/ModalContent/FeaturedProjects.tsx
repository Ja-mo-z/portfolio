export default function FeaturedProjects() {
  const projects = [
    {
      title: "Fibarcode Product Video",
      type: "Branded / Motion Design",
      description:
        "Fibarcode is a startup founded by Brian Iezzi that’s trying to make labels and textiles more sustainable using photonic fibers as permanent barcodes. During this project, I looked at a lot of Apple and Google commercials, and had to deal with my computer buffering and wheezing as it tried to keep up with the motion graphics. Brian gave me a lot of creative freedom – which I’m super grateful for – and I built everything from scratch using Illustrator, After Effects, and Premiere Pro. Explore the Design Planet to see more of my work with Fibarcode!",
      role: "Designer / Motion Graphics",
      embedUrl: "https://www.youtube.com/embed/Cbr8IiMHhyE",
    },

    {
      title: "STAMPS",
      type: "Short documentary",
      description:
        "A short documentary profiling an STAMPS student’s creative process at the University of Michigan. I filmed and edited the piece with the goal of capturing not just the final work, but the thinking, resourcefulness, and personality behind it. The project grew out of genuine curiosity and collaboration, and I focused on observational storytelling, pacing, and visual intimacy to do justice to the artist’s process.",
      role: "Filmmaker (shooting + editing)",
      embedUrl: "https://www.youtube.com/embed/F8RrV07Aj9c?si=EIBuKB7CxR9C39wG",
    },
    {
      title: "Saved",
      type: "Narrative short film",
      description:
        "A narrative short directed by Tianyi Zhai. I served as Director of Photography, overseeing camera operation and visual composition. This was my first time operating a DJI drone on set, which pushed me to quickly learn new equipment and problem-solve under pressure. The experience deepened my understanding of visual storytelling and on-set collaboration.",
      role: "Director of Photography",
      embedUrl: "https://videopress.com/embed/qqwW4dOr",
    },
    {
      title: "Just Keep Swimming",
      type: "Animation",
      description:
        "A girl goes for a seemingly ordinary swim but is pulled down by unseen forces. This animation explores the overwhelming, addictive feeling of hopelessness—the girl gets in the pool and follows the jellyfish deeper despite knowing she shouldn’t. The jellyfish symbolizes a dangerous comfort, luring her (and others) into the darkness.",
      role: "Animator",
      embedUrl: "https://www.youtube.com/embed/mxWIG3HSp0Q",
    },
    {
      title: "WOLV-TV Spotlight: Soda Kazuhiro",
      type: "Interview / documentary",
      description:
        "An interview episode for WOLV-TV featuring Peabody Award–winning documentary filmmaker Soda Kazuhiro. I worked as a camera operator and editor, helping shape a clear, respectful conversation around Soda’s observational filmmaking philosophy. The project strengthened my interest in documentary work and my appreciation for thoughtful, well-paced interviews.",
      role: "Camera operator, editor",
      embedUrl: "https://www.youtube.com/embed/ch3ip54nSbw",
    },
    {
      title: "Detroit 48-Hour Film Festival — The Shortcut",
      type: "Narrative short film (competition)",
      description:
        "Created as part of the Detroit 48-Hour Film Festival, where teams write, shoot, and edit a short film in just two days. I worked as a production assistant, supporting the crew across setup, scheduling, and general on-set needs. The experience was a fast-paced introduction to real production constraints, teamwork, and adaptability under tight deadlines.",

      role: "Production assistant",
      embedUrl: "https://www.youtube.com/embed/FSs-OHM0Qlo",
    },
    {
      title: "Introducing CLAWS",
      type: "Branded / informational video",
      description:
        "An introduction video for CLAWS, an interdisciplinary student team building augmented reality interfaces for astronauts. I handled pre-production planning, filming coordination, and editing under a tight turnaround tied to a NASA SUITS submission deadline. The project required balancing many voices while maintaining clarity and cohesion in the final piece.",
      role: "Video producer, editor",
      embedUrl: "https://www.youtube.com/embed/WzRxykvbU1w",
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {projects.map((p, i) => (
        <div key={i} className="border-b border-white/20 pb-4">
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <p className="italic text-sm">{p.type}</p>
          <p className="mt-1 text-sm">{p.description}</p>
          <p className="mt-1 font-bold text-sm">{p.role}</p>

          {/* Embed video if embedUrl exists */}
          {p.embedUrl && (
            <div className="mt-2 aspect-video">
              <iframe
                className="w-full h-full"
                src={p.embedUrl}
                title={p.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
