import { Section } from 'astro-boilerplate-components';

import { GradientText } from '@/components/GradientText';
import { HeroAvatar } from '@/components/HeroAvatar';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, welcome to the Unreachable Castle. I'm{' '}
          <GradientText>Dean</GradientText> aka{' '}
          <GradientText>Derpwolf. </GradientText>👋
        </>
      }
      description={
        <>
          I'm not an artist. At least not if skill makes you an artist. But if
          an artist is a person who makes art then there is hope for me yet.
        </>
      }
      avatar={
        <img
          className="h-80 min-w-fit"
          src="/assets/images/DeanYellow.PNG"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
