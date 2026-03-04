function generateHashtag(str) {
    if(str.length === 0 || str.trim().length === 0) return false;

    let hashtag = str.split(" ").map((w) => {
        w = w.slice(0,1).toUpperCase() + w.slice(1);
        return w;
    }).join("")
    hashtag = "#" + hashtag;
    

    if(hashtag.length > 140) return false;
    return hashtag;
}

module.exports = generateHashtag;
