var gabe = videojs('refresh');

$('.email').click(function(e){
    e.preventDefault();
    document.location.href = $(this).attr('href');
    setTimeout(
        function(){
            // video.js handle (insert whatever call you want to play the video)
            gabe.play();
        },
        2000
    );
});

gabe.controls = function(bool){
  if (bool !== undefined) {
    bool = !!bool; // force boolean
    // Don't trigger a change event unless it actually changed
    if (this.controls_ !== bool) {
      this.controls_ = bool;
      if (bool) {
        this.removeClass('vjs-controls-disabled');
        this.addClass('vjs-controls-enabled');
        this.trigger('controlsenabled');
      } else {
        this.removeClass('vjs-controls-enabled');
        this.addClass('vjs-controls-disabled');
        this.trigger('controlsdisabled');
      }
    }
    return this;
  }
  return this.controls_;
};