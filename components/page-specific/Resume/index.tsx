import React from 'react';
import { useI18n } from 'hooks/i18n';
import CarouselGallery from 'interactable/CarouselGallery';
import BasicSection from './BasicSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import ResearchSection from './ResearchSection';
import SkillSection from './SkillSection';

import $ from './style.scss';
import dict from './i18n.d.yml';

interface Props {
  className?: string;
};

const Resume: React.FC<Props> = (props: Props) => {
  const { className } = props;
  const { t } = useI18n(dict);

  const albumList = [];

  const articleClass = [$.resumeContainer];
  if (className) articleClass.push(className);

  return (
    <article className={articleClass.join(' ')}>
      <section className={$.gallerySection}>
        <CarouselGallery imgList={albumList} />
      </section>
      <BasicSection className={$.basicSection} />
      <EducationSection className={$.educationSection} />
      <SkillSection className={$.skillSection} />
      <ProjectSection className={$.projectSection} />
      <ResearchSection className={$.researchSection} />
      <ExperienceSection className={$.experienceSection} />
      <section className={$.timestampSection}>
        <h3>{t('출력 시각')}</h3>
        <div className={$.renderTimeContainer}>
          {t('본 문서의 출력 시각은 [[]] 입니다.', [(new Date()).toLocaleString()])}
        </div>
      </section>
    </article>
  );
};

Resume.defaultProps = {
  className: null,
};

export default Resume;
