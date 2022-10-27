
function $$(selector, where = document) {
    return where.getElementById(selector);
}
function getColor (color) {
    let red, green, blue;
    red = parseInt(color.slice(1,3), 16);
    green = parseInt(color.slice(3,5), 16);
    blue = parseInt(color.slice(5,7), 16);
    return {r: red, g: green, b: blue};
}
function generateCss() {
    let thumb_width, thumb_height, height_width, thumb_background_color, thumb_border_width, thumb_border_style, thumb_border_color, thumb_border_radius, thumb_box_shadow_offsetX, 
    thumb_box_shadow_offsetY, thumb_box_shadow_blur, thumb_box_shadow_spread, thumb_box_shadow_color, thumb_box_shadow_opacity;

    thumb_width = $$("thumb-width");
    thumb_height = $$("thumb-height");
    let thumb_height_value;
    height_width = $$("height-width");
    if(height_width.checked) {
        thumb_height_value = thumb_width.value;
    } else {
        thumb_height_value = thumb_height.value;
    }
    thumb_border_width = $$("thumb-border-width");
    thumb_border_style = $$("thumb-border-style");
    thumb_border_color = $$("thumb-border-color");
    thumb_border_radius = $$("thumb-border-radius");
    thumb_box_shadow_offsetX = $$("thumb-box-shadow-offsetX");
    thumb_box_shadow_offsetY = $$("thumb-box-shadow-offsetY");
    thumb_box_shadow_blur = $$("thumb-box-shadow-blur");
    thumb_box_shadow_spread = $$("thumb-box-shadow-spread");
    thumb_box_shadow_color = $$("thumb-box-shadow-color");
    thumb_background_color = $$("thumb-background-color");
    thumb_box_shadow_opacity = $$("thumb-box-shadow-opacity");

    
    let  track_height, track_background_color, track_border_width, track_border_style, track_border_color, track_border_radius, track_box_shadow_offsetX, 
    track_box_shadow_offsetY, track_box_shadow_blur, track_box_shadow_spread, track_box_shadow_color, track_box_shadow_opacity;

    track_height = $$("track-height");
    track_border_width = $$("track-border-width");
    track_border_style = $$("track-border-style");
    track_border_color = $$("track-border-color");
    track_border_radius = $$("track-border-radius");
    track_box_shadow_offsetX = $$("track-box-shadow-offsetX");
    track_box_shadow_offsetY = $$("track-box-shadow-offsetY");
    track_box_shadow_blur = $$("track-box-shadow-blur");
    track_box_shadow_spread = $$("track-box-shadow-spread");
    track_box_shadow_color = $$("track-box-shadow-color");
    track_background_color = $$("track-background-color");
    track_box_shadow_opacity = $$("track-box-shadow-opacity");
    
   
   
    let textarea = document.getElementById('cssCode');
     let cssContent = `input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: ${thumb_border_width.value}px ${thumb_border_style.options[thumb_border_style.selectedIndex].value} ${thumb_border_color.value}; 
    height: ${thumb_height_value}px;
    width: ${thumb_width.value}px;
    border-radius: ${thumb_border_radius.value}px;
    background: ${thumb_background_color.value};
    cursor: pointer;
    margin-top: -14px; 
    box-shadow: ${thumb_box_shadow_offsetX.value}px ${thumb_box_shadow_offsetY.value}px ${thumb_box_shadow_blur.value}px ${thumb_box_shadow_spread.value}px rgba(${getColor(thumb_box_shadow_color.value).r}, ${getColor(thumb_box_shadow_color.value).g}, ${getColor(thumb_box_shadow_color.value).b}, ${thumb_box_shadow_opacity.value});
    }
input[type="range"]::-moz-range-thumb {
    box-shadow: ${thumb_box_shadow_offsetX.value}px ${thumb_box_shadow_offsetY.value}px ${thumb_box_shadow_blur.value}px ${thumb_box_shadow_spread.value}px rgba(${getColor(thumb_box_shadow_color.value).r}, ${getColor(thumb_box_shadow_color.value).g}, ${getColor(thumb_box_shadow_color.value).b}, ${thumb_box_shadow_opacity.value});
    border: ${thumb_border_width.value}px ${thumb_border_style.options[thumb_border_style.selectedIndex].value} ${thumb_border_color.value}; 
    height: ${thumb_height_value}px;
    width: ${thumb_width.value}px;
    border-radius: ${thumb_border_radius.value}px;
    background: ${thumb_background_color.value};
    cursor: pointer;
}
input[type="range"]::-ms-thumb {
    box-shadow: ${thumb_box_shadow_offsetX.value}px ${thumb_box_shadow_offsetY.value}px ${thumb_box_shadow_blur.value}px ${thumb_box_shadow_spread.value}px rgba(${getColor(thumb_box_shadow_color.value).r}, ${getColor(thumb_box_shadow_color.value).g}, ${getColor(thumb_box_shadow_color.value).b}, ${thumb_box_shadow_opacity.value});
    border: ${thumb_border_width.value}px ${thumb_border_style.options[thumb_border_style.selectedIndex].value} ${thumb_border_color.value}; 
    height: ${thumb_height_value}px;
    width: ${thumb_width.value}px;
    border-radius: ${thumb_border_radius.value}px;
    background: ${thumb_background_color.value};
    cursor: pointer;
}
input[type=range]::-webkit-slider-runnable-track {
    height: ${track_height.value}px;
    cursor: pointer;
    box-shadow: ${track_box_shadow_offsetX.value}px ${track_box_shadow_offsetY.value}px ${track_box_shadow_blur.value}px ${track_box_shadow_spread.value}px rgba(${getColor(track_box_shadow_color.value).r}, ${getColor(track_box_shadow_color.value).g}, ${getColor(track_box_shadow_color.value).b}, ${track_box_shadow_opacity.value});
    background: ${track_background_color.value};
    border-radius: ${track_border_radius.value}px;
    border: ${track_border_width.value}px ${track_border_style.options[track_border_style.selectedIndex].value} ${track_border_color.value};
}
input[type=range]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
}
input[type=range]::-moz-range-track {
    height: ${track_height.value}px;
    cursor: pointer;
    box-shadow: ${track_box_shadow_offsetX.value}px ${track_box_shadow_offsetY.value}px ${track_box_shadow_blur.value}px ${track_box_shadow_spread.value}px rgba(${getColor(track_box_shadow_color.value).r}, ${getColor(track_box_shadow_color.value).g}, ${getColor(track_box_shadow_color.value).b}, ${track_box_shadow_opacity.value});
    background: ${track_background_color.value};
    border-radius: ${track_border_radius.value}px;
    border: ${track_border_width.value}px ${track_border_style.options[track_border_style.selectedIndex].value} ${track_border_color.value};
}
input[type=range]::-ms-track {
    height: ${track_height.value}px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
}
input[type=range]::-ms-fill-lower {
    background: ${track_background_color.value};
    border: ${track_border_width.value}px ${track_border_style.options[track_border_style.selectedIndex].value} ${track_border_color.value};
    border-radius: ${2*track_border_radius.value}px;
    box-shadow: ${track_box_shadow_offsetX.value}px ${track_box_shadow_offsetY.value}px ${track_box_shadow_blur.value}px ${track_box_shadow_spread.value}px rgba(${getColor(track_box_shadow_color.value).r}, ${getColor(track_box_shadow_color.value).g}, ${getColor(track_box_shadow_color.value).b}, ${track_box_shadow_opacity.value});
  }
  input[type=range]:focus::-ms-fill-lower {
    background: ${track_background_color.value};
  }
  input[type=range]::-ms-fill-upper {
    background: ${track_background_color.value};
    border: ${track_border_width.value}px ${track_border_style.options[track_border_style.selectedIndex].value} ${track_border_color.value};
    border-radius: ${2*track_border_radius.value}px;
    box-shadow: ${track_box_shadow_offsetX.value}px ${track_box_shadow_offsetY.value}px ${track_box_shadow_blur.value}px ${track_box_shadow_spread.value}px rgba(${getColor(track_box_shadow_color.value).r}, ${getColor(track_box_shadow_color.value).g}, ${getColor(track_box_shadow_color.value).b}, ${track_box_shadow_opacity.value});
  }
  input[type=range]:focus::-ms-fill-upper {
    background: ${track_background_color.value};
  }
`
    
    textarea.value = cssContent;

    let result = $$('result');
    result.style.setProperty( '--thumb-border-width', `${thumb_border_width.value}px`);
    result.style.setProperty( '--thumb-border-style', `${thumb_border_style.options[thumb_border_style.selectedIndex].value}`);
    result.style.setProperty( '--thumb-border-color', `${thumb_border_color.value}`);
    result.style.setProperty( '--thumb-height', `${thumb_height_value}px`);
    result.style.setProperty( '--thumb-width', `${thumb_width.value}px`);
    result.style.setProperty( '--thumb-border-radius', `${thumb_border_radius.value}px`);
    result.style.setProperty( '--thumb-background-color', `${thumb_background_color.value}`);
    result.style.setProperty( '--thumb-box-shadow-offsetX', `${thumb_box_shadow_offsetX.value}px`);
    result.style.setProperty( '--thumb-box-shadow-offsetY', `${thumb_box_shadow_offsetY.value}px`);
    result.style.setProperty( '--thumb-box-shadow-blur', `${thumb_box_shadow_blur.value}px`);
    result.style.setProperty( '--thumb-box-shadow-spread', `${thumb_box_shadow_spread.value}px`);
    result.style.setProperty( '--thumb-box-shadow-color', `rgba(${getColor(thumb_box_shadow_color.value).r}, ${getColor(thumb_box_shadow_color.value).g}, ${getColor(thumb_box_shadow_color.value).b}, ${thumb_box_shadow_opacity.value})`);

    result.style.setProperty( '--track-border-width', `${track_border_width.value}px`);
    result.style.setProperty( '--track-border-style', `${track_border_style.options[track_border_style.selectedIndex].value}`);
    result.style.setProperty( '--track-border-color', `${track_border_color.value}`);
    result.style.setProperty( '--track-height', `${track_height.value}px`);
    result.style.setProperty( '--track-border-radius', `${track_border_radius.value}px`);
    result.style.setProperty( '--track-background-color', `${track_background_color.value}`);
    result.style.setProperty( '--track-box-shadow-offsetX', `${track_box_shadow_offsetX.value}px`);
    result.style.setProperty( '--track-box-shadow-offsetY', `${track_box_shadow_offsetY.value}px`);
    result.style.setProperty( '--track-box-shadow-blur', `${track_box_shadow_blur.value}px`);
    result.style.setProperty( '--track-box-shadow-spread', `${track_box_shadow_spread.value}px`);
    result.style.setProperty( '--track-box-shadow-color', `rgba(${getColor(track_box_shadow_color.value).r}, ${getColor(track_box_shadow_color.value).g}, ${getColor(track_box_shadow_color.value).b}, ${track_box_shadow_opacity.value})`);

      
}
document.querySelector('select').addEventListener('input', generateCss);

for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss);
}

generateCss();