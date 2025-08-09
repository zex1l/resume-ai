import { useEffect } from 'react';

export const useFixedPosition = (fixed: boolean) => {
  useEffect(() => {
    fixed ? bodyFixPosition() : bodyUnfixPosition();
    return () => bodyUnfixPosition();
  }, [fixed]);
};

const bodyFixPosition = () => {
  requestAnimationFrame(function () {
    if (!document.body.hasAttribute('data-body-scroll-fix')) {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      document.body.setAttribute(
        'data-body-scroll-fix',
        String(scrollPosition)
      );
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + scrollPosition + 'px';
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.documentElement.style.scrollBehavior = 'auto';
    }
  });
};
export const bodyUnfixPosition = () => {
  if (document.body.hasAttribute('data-body-scroll-fix')) {
    const scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');

    document.body.style.overflowY = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    window.scroll(0, scrollPosition ? +scrollPosition : 0);
    document.documentElement.style.scrollBehavior = '';
  }
};

export default useFixedPosition;
