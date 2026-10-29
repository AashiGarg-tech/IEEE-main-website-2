import ScrollFloat from './ScrollFloat'

const stats = [
  { value: '200', suffix: '+', label: 'ACTIVE MEMBERS' },
  { value: '20', suffix: '+', label: 'YEARS OF EXCELLENCE' },
  { value: '05', suffix: '', label: 'STUDENT CHAPTERS' },
]

const aimCards = [
  {
    number: '01',
    heading: 'Who Are We?',
    description:
      'We are IEEE IGDTUW, the dynamic student branch of IEEE at Indira Gandhi Delhi Technical University for Women. As part of IEEE’s global mission, we’re dedicated to advancing technology for humanity under the prestigious Region 10 of the Delhi Section.',
  },
  {
    number: '02',
    heading: 'What Drives Us?',
    description:
      'At IEEE WIE IGDTUW, we empower young women to take the lead in technology. Our mission is to inspire the next generation to embrace technical roles with confidence and to leave a lasting, positive impact on society.',
  },
  {
    number: '03',
    heading: 'Why We Do It?',
    description:
      'We are driven by a commitment to push the boundaries of technology. By hosting engaging workshops, events, and hands-on activities, we ensure that our members stay ahead in the ever-evolving tech landscape, fostering innovation and learning.',
  },
  {
    number: '04',
    heading: 'Our Journey',
    description:
      'Since our inception as IEEE IGIT on 6th February 2004, we’ve grown from just 33 members to a thriving community of over 200 active changemakers. Our journey is a testament to the power of knowledge and collaboration.',
  },
]

const journeyPoints = [
  {
    step: '01',
    title: 'Inauguration & Inception',
    text: 'IEEE IGDTUW began its inspiring journey as IEEE IGIT, inaugurated on February 6, 2004, with just 33 members.',
  },
  {
    step: '02',
    title: 'Thriving Community',
    text: 'Now, the student branch has grown to over 200 active members, offering a vibrant community for aspiring women engineers.',
  },
  {
    step: '03',
    title: 'Platforms & Conferences',
    text: 'IEEE IGDTUW provides a wide range of platforms that allow students to host and participate in technical and non-technical events, as well as national and international conferences.',
  },
  {
    step: '04',
    title: 'Mission & Year-Round Impact',
    text: 'Our mission is to instill technical expertise, leadership, and confidence in students through a variety of year-round events such as IEEE Week, IEEE Day Celebrations, and Student Interest Groups (SIGs).',
  },
]

function AwardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-highlight"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function HeartHandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-highlight"
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg text-fg"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Top divider & label */}
        <div className="flex items-center justify-between border-b border-border/30 pb-9">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary">
            01
          </span>

          <span className="text-[10px] font-semibold tracking-[0.2em] text-fg-muted sm:text-xs">
            ABOUT · AIM & MISSION
          </span>
        </div>

        {/* Main headline and intro */}
        <div className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-12 lg:gap-10">

          {/* Left: Heading */}
          <div className="lg:col-span-8">
            <ScrollFloat
              effect="float"
              splitBy="chars"
              direction="up"
              order="start"
              fromColor="currentColor"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              distance={120}
              stretch={2.3}
              smoothing={0}
              textClassName="technology-heading-text"
            >
              Technology is better together.
            </ScrollFloat>
          </div>

          {/* Right: Description & Meet the Community */}
          <div className="flex flex-col justify-between lg:col-span-4 lg:pt-4">
            <p className="max-w-lg text-base leading-8 text-fg-muted sm:text-lg sm:leading-[2.2rem]">
              IEEE IGDTUW is where ambitious women engineers find their people,
              their practice, and their permission to take up space.
            </p>

            <div className="pt-6">
              <a
                href="#team"
                className="group inline-flex items-center gap-5 border-b border-border/60 pb-3 text-sm font-medium tracking-wide transition hover:border-secondary hover:text-heading"
              >
                MEET THE COMMUNITY
                <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Central Aim Statement */}
        <div className="mt-14 sm:mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-surface/60 p-8 sm:p-12 lg:p-14 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <p className="text-xs font-bold tracking-[0.22em] text-secondary">
                OUR AIM
              </p>
            </div>

            <blockquote className="mt-6 max-w-5xl text-2xl font-bold leading-snug tracking-tight text-heading sm:text-3xl lg:text-4xl">
              &ldquo;We aim to foster innovation and technical excellence among young engineers, promoting socially responsible advancements that contribute to a globally competitive India.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Four Aim & Mission Cards */}
        <div className="mt-14 sm:mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
                CORE PILLARS
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                Aim & Mission
              </h3>
            </div>
            <span className="hidden text-xs font-medium tracking-wider text-fg-muted sm:block">
              04 PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aimCards.map((card) => (
              <div
                key={card.number}
                className="card flex h-full flex-col justify-between p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between pb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-secondary">
                      {card.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-secondary/40" />
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-heading">
                    {card.heading}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-fg-muted">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey & Milestones */}
        <div className="mt-20 sm:mt-28">
          <div className="border-t border-border/30 pt-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
                  OUR JOURNEY
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl">
                  Two Decades of Making.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-fg-muted">
                  From a small passionate group to one of Region 10&apos;s most active student branches, our story is driven by community, continuous learning, and collaborative leadership.
                </p>

                {/* Statistics */}
                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/30 pt-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-4xl font-medium tracking-tight text-heading sm:text-5xl">
                        {stat.value}
                        {stat.suffix && (
                          <span className="text-highlight">{stat.suffix}</span>
                        )}
                      </p>
                      <p className="mt-2 text-[11px] font-semibold tracking-wider text-fg-muted uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Four Journey points in clean readable cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
                {journeyPoints.map((point) => (
                  <div
                    key={point.step}
                    className="card flex flex-col justify-between p-6 sm:p-7"
                  >
                    <div>
                      <span className="text-xs font-bold tracking-[0.18em] text-secondary">
                        {point.step}
                      </span>
                      <h4 className="mt-3 text-lg font-bold tracking-tight text-heading">
                        {point.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-fg-muted">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* IEEE WIE IGDTUW Distinct Subsection */}
        <div className="mt-20 sm:mt-28">
          <div className="relative overflow-hidden rounded-3xl border border-secondary/40 bg-surface/40 p-8 sm:p-12 lg:p-16 shadow-xl backdrop-blur-sm">
            {/* Ambient decorative glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: 'var(--highlight)' }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: WIE identity & Core mission */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-heading">
                  <span>IEEE WIE IGDTUW</span>
                  <span className="text-highlight">·</span>
                  <span>AFFINITY GROUP</span>
                </div>

                <h3 className="mt-5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                  Empowering Women in Engineering
                </h3>

                <p className="mt-6 text-base leading-8 text-fg-muted sm:text-lg">
                  At IEEE WIE IGDTUW, we aim to inspire young girls to pursue technical roles and become confident leaders.
                </p>

                <p className="mt-4 text-base leading-8 text-fg-muted sm:text-lg">
                  Throughout the year, we work tirelessly through various initiatives to achieve this goal, empowering the next generation of women engineers.
                </p>
              </div>

              {/* Right Column: Darrel Chong Award & Sparsh Outreach Program */}
              <div className="flex flex-col gap-6 lg:col-span-6">
                {/* Award Spotlight */}
                <div className="card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/10">
                      <AwardIcon />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider text-highlight uppercase">
                        Prestigious Recognition
                      </span>
                      <h4 className="mt-1 text-lg font-bold text-heading">
                        Darrel Chong Award (Gold, 2016–17)
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-fg-muted">
                        A proud recipient of the prestigious Darrel Chong Award (Gold, 2016–17), IEEE WIE IGDTUW is recognized for its &apos;Sparsh Outreach Program&apos;.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sparsh Outreach Program at Kilkari Orphanage */}
                <div className="card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/10">
                      <HeartHandIcon />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider text-highlight uppercase">
                        Sparsh Outreach Program
                      </span>
                      <h4 className="mt-1 text-lg font-bold text-heading">
                        Mentoring at Kilkari Orphanage
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-fg-muted">
                        Through Sparsh, volunteers regularly visit the Kilkari orphanage to mentor and inspire the girls, sharing experiences that go beyond academics.
                      </p>
                      <p className="mt-3 text-sm leading-6 text-fg-muted">
                        These meaningful connections help build growth, confidence, and inspiration on both sides, and we are committed to continuing such impactful efforts in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
