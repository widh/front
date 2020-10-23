import { Feature } from '.';

const checkMetric: Feature = {
  name: 'Failure',
  checker: () => ({
    pass: false,
    fn: checkMetric,
    importance: 1,
    infoEn: 'For now, browser feature checker is forced to print failure message for development purpose.',
    infoKo: '현재 브라우저 기능 확인기가 개발 목적으로 무조건 오류 메시지를 출력하도록 설정되어 있습니다.',
    linkEn: 'https://www.wldh.org/example-en',
    linkKo: 'https://www.wldh.org/example-ko',
  }),
};

export default checkMetric;
