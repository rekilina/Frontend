let tooltipElem;
document.onmouseover = function(e) {
    let target = e.target;
    let tooltipHTML = target.dataset.tooltip;
    console.log(tooltipHTML);
    if(!tooltipHTML) return;
    tooltipElem = document.createElement('div');
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipHTML;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let coord_left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth);
    if(coord_left < 0) {
        left = 5;
    }
    tooltipElem.style.left = left + 'px';

    let coord_top = coords.top - target.offsetHeight - 5;
    if(top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }
    tooltipElem.style.top = top + 'px';
}
document.onmouseout = function(e) {
    if(tooltipElem) {
        tooltipElem.remove();
        tooltipElem= null;
    }
}