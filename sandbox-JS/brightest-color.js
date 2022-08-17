// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)

// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// For example,

// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"

// If there are multiple brightest colors, return the first one:

// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"

// Note that both input and output should use upper case for characters A, B, C, D, E, F.

// MY SOLUTION
// hex value of color means #RRGGBB 
// str.localeCompare(str2)
// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.

var arr = ["#001000","#000000"];

function brightest(arr){
    var val_arr = [];

    for (let i = 0; i < arr.length; i++) {
        let color = arr[i];
        var r = color.slice(1, 3);
        var g = color.slice(3, 5);
        var b = color.slice(5,);
        var v = r;
        if (v.localeCompare(g) < 0) {
            v = g;
        }
        if (v.localeCompare(b) < 0) {
            v = b;
        }
        val_arr.push({color, v});
    }
    var bright = val_arr[0].v;
    var num = 0;
    for (let i = 1; i < val_arr.length; i++) {
        let color = val_arr[i];
        if (bright.localeCompare(color.v) < 0) {
            console.log('here');
            bright = color.v;
            num = i;
        }
    }
    return val_arr[num].color;
}


console.log(brightest(arr));
