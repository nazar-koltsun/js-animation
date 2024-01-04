const whiteThemeBtn = document.querySelector('.white-theme');
const darkThemeBtn = document.querySelector('.dark-theme');

const svgEl = document.querySelector('.svg');
const svgElPath = svgEl.querySelector('path');

const sunPath =
  'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';
const mounthPath =
  'M14 27.5C14 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14 12.3122 14 27.5Z';

const changeTheme = (color, iconPath) => {
  const timelineOptions = {
    easing: 'easeOutExpo',
    duration: 750,
  };

  const iconTimeline = anime.timeline(timelineOptions);
  const backgroundTimeline = anime.timeline(timelineOptions);

  iconTimeline.add({
    targets: svgElPath,
    d: iconPath,
  });

  backgroundTimeline.add({
    targets: document.body,
    background: color,
  });
};

darkThemeBtn.addEventListener(
  'click',
  changeTheme.bind(null, '#000', mounthPath)
);
whiteThemeBtn.addEventListener(
  'click',
  changeTheme.bind(null, '#fff', sunPath)
);
