export default function(mouseEnterEvent) {
    const gif = this.$refs.gif;
    const content = this.$refs.content;
    let opacity = 0;

    gif.style.opacity = opacity;
    gif.style.visibility = 'visible';

    content.style.opacity = opacity;
    content.style.visibility = 'visible';

    const opacityInterval = setInterval(() => {
      if (opacity == 1) {
        clearInterval(opacityInterval);
      }
      else{
        opacity += 0.25;

        gif.style.opacity = opacity
        content.style.opacity = opacity
      }
    }, 1000 / 24)
};
