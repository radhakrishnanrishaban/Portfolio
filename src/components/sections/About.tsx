export default function About() {
  return (
    <div id="about" className="flex flex-col">
      <h2 className="text-2xl font-mono mb-8">ABOUT</h2>
      <div className="prose prose-gray max-w-none">
        <p className="mb-6">
          Hi there, I'm Rishaban. I am a neuroscientist and data scientist
          passionate about unraveling the mysteries of the brain.
        </p>
        <p className="mb-6">
          As a researcher, I'm fascinated by how neural circuits shape behavior
          and cognition. My work combines neuroimaging, electrophysiology, and
          advanced computational methods to understand brain dynamics. I
          specialize in developing machine learning algorithms and analytical
          pipelines to decode neural signals and patterns. Using Python and R, I
          build tools that help bridge the gap between complex neurological data
          and meaningful insights. I'm particularly excited about the
          intersection of neuroscience and artificial intelligence, where
          biological insights can inform better AI systems.
        </p>
        <p className="mb-6">
          When I'm not in the lab, you'll find me at the piano composing music,
          exploring nature through my camera lens, or attempting to master new
          juggling patterns. I believe some of the best ideas come from engaging
          conversations, so I'm always eager to discuss topics ranging from
          consciousness to computation over a cup of coffee.
        </p>
      </div>
    </div>
  );
}
