const FILTERS = ["anothersite", "intext", "allinurl", "filterlol", "inuRl", "news"];

const isValid = query => {
    return query.match(/\w+(?=:)/g).every(filter => FILTERS.includes(filter))
}

let invalidQueries = [
    "anothersite:kitten-home.com intext:kitten",
    "allinurl:69 filterlol:rofl",
    "inuRl:bad_kittens",
    "news:codernews.org"
  ]
 console.log( isValid("inuRl:bad_kittens"))

 console.log("inuRl:bad_kittens".match(/\w+(?=:)/g))

 // ?=n
 // Matches any string that is followed by a specific string n

//  \w   matches any word character (equivalent to [a-zA-Z0-9_])
// +     matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)