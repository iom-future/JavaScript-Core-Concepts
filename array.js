let favSinger = ["alec benjamin", "dusin onyinka", "NF"]
let songs = ["take the hit","oh Lord","water fountain", "Finger of God"]
console.log(favSinger);
//ARRAY METHOD
favSinger.push("prinx");
console.log(`after applying the push method "${favSinger}"`);
favSinger.pop();
console.log(`after applying the pop method "${favSinger}"`);
favSinger.shift()
console.log(`after applying the shift method "${favSinger}"`);
favSinger.unshift("Vault boy");
console.log(`after applying the unshift method "${favSinger}"`);

let musiciansAndSongs = favSinger.concat(songs);
console.log(musiciansAndSongs);

console.log(favSinger.includes("Alec Warren"));
console.log(favSinger.join("-"));

