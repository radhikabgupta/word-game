var exports = module.exports = {};
var wordBank = [
	"ant","baboon","badger","bat","bear","bison","boar","camel","cat","cattle","cobra","coyote","crab","crane","crow","deer","dog","donkey",
	"eagle","eel","eland","elk","emu","falcon","ferret","finch","fish","fly","fox","frog","gerbil","gnat","gnu","goat","goose","gull","hawk","hornet",
	"horse","hyena","jackal","jaguar","koala","lemur","lion","llama","mink","mole","monkey","moose","mouse","mule","newt","kapi","oryx","otter","owl",
	"ox","oyster","parrot","pig","pigeon","quail","rabbit","ram","raven","salmon","seal","shark","sheep","shrew","shrimp","skunk","snail","snake","spider",
	"squid","stork","swan","tapir","tiger","toad","trout","turkey","turtle","viper","walrus","wasp","weasel","whale","wolf","wombat","worm","yak","zebra"
];

module.exports.getRandomWord = function () {
	var index = parseInt(Math.random() * (wordBank.length));
	return wordBank[index];
}