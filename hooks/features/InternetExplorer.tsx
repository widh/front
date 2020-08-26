import { Feature } from '.';

declare global { interface Window { isIE: boolean; } }

const checkMetric: Feature = {
  name: 'Intenet Explorer Check',
  checker: () => ({
    pass: !window.isIE,
    fn: checkMetric,
    importance: 2000,
    infoEn: 'Internet Explorer is an old browser, does not support modern web technologies. This page will not be rendered as intended or workproperly.',
    infoKo: 'Internet Explorer는 현대 웹 기술을 지원하지 않는 낡은 브라우저입니다. 이 페이지는 Internet Explorer에서 온전하게 보이거나 작동하지않습니다.',
    linkEn: 'https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732',
    linkKo: 'http://newslabit.hankyung.com/article/201902192484G',
  }),
};

export default checkMetric;
