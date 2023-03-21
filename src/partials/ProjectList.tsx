import { ColorTags, Section, Tags } from 'astro-boilerplate-components';

import { GradientText } from '@/components/GradientText';
import { Project } from '@/components/Project';

const ProjectList = () => (
  <Section
    title={
      <>
        In Progress <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Galah Shawl"
        description="Knitting a shawl."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Knitting</Tags>
            <Tags color={ColorTags.LIME}>Beginner</Tags>
            <Tags color={ColorTags.SKY}>In progress</Tags>
          </>
        }
      />
      <Project
        name="Watercolor Lessons"
        description="Working my way through Let's Make Art watercolor lessons."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Painting</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
