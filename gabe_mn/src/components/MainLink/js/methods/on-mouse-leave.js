export default function(mouseLeaveEvent) {
    const gif = this.$refs.gif;
    const content = this.$refs.content;
    let opacity = parseFloat(gif.style.opacity);

    gif.style.opacity = opacity;
    content.style.opacity = opacity;

    const opacityInterval = setInterval(() => {
      if (opacity == 0) {
        gif.style.visibility = 'hidden';
        content.style.visibility = 'hidden';
        clearInterval(opacityInterval);
      }
      else{
        opacity -= 0.25;

        gif.style.opacity = opacity
        content.style.opacity = opacity
      }
    }, 1000 / 24);
};
