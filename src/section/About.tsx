import Container from "../components/Container";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-32 border-t border-neutral-900 flex items-center"
    >
      <Container>
        <div className="max-w-3xl surface surface-glow p-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            I am a passionate web developer who loves building fast, scalable,
            and user-friendly applications. I focus on clean code, performance,
            and good user experience.
          </p>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            My main stack is React, TypeScript, Node.js, and modern web
            technologies. I enjoy learning new tools and improving my
            architecture skills.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
