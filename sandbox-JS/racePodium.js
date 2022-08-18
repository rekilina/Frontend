// The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

// Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

// The organizers want a podium that satisfies:

//     The first place platform has the minimum height posible
//     The second place platform has the closest height to first place
//     All platforms have heights greater than zero.

// With n = 100000: expected [ 49999, 50000, 1 ] to deeply equal [ 33334, 33335, 33331 ]
// With n = 36582: expected [ 18290, 18291, 1 ] to deeply equal [ 12194, 12195, 12193 ]

function racePodium(blocks) {
    var second, first, third;
    var k = Math.floor(blocks / 3);
    var r = blocks % 3;
    if (blocks > 9) {
        if (r > 0) {
            second = k + 2;
            third = k + 1;
            first = k - 3 + r;
        } else {
            second = k + 1;
            third = k;
            first = k - 1;
        }        
    } else {
        if (r===0) {
            second = k + 1;
            third = k;
            first = k - 1 + r;
        } else if (r === 1) {
            second = k + 2;
            third = k;
            first = k - 2 + r;
        }
        else if (r === 2) {
            second = k + 2;
            third = k + 1;
            first = k - 3 + r;
        }
    }
    return [third, second, first];
}
  
console.log(racePodium(10));
