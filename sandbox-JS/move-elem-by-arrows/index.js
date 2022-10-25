let square = document.querySelector('.square');
square.tabIndex = 0;
square.onclick = function() {
    this.style.left = this.getBoundingClientRect().left + 'px';
    this.style.top = this.getBoundingClientRect().top + 'px';
    this.style.position = 'fixed';
}
square.onkeydown = function(e) {
    let left, top;
    console.log(`code: ${e.code}, left: ${left}, top: ${top}`);
    switch(e.key) {
        case 'ArrowLeft':
             left = parseInt(this.style.left) - this.offsetWidth + 'px';
             if (parseInt(left) < 0) left = 0;
             this.style.left = left;
            return false;
        case 'ArrowRight':
            left = parseInt(this.style.left) + this.offsetWidth + 'px';
            this.style.left = left;
            return false;
        case 'ArrowUp':
            top = parseInt(this.style.top) - this.offsetHeight + 'px';
            if (parseInt(top) < 0) top = 0;
            this.style.top = top;
            return false;
        case 'ArrowDown':
            top = parseInt(this.style.top) + this.offsetHeight+ 'px';
            this.style.top = top;
            return false;
    }
}