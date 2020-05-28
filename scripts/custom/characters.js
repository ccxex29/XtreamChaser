var lastElem = undefined;

const characterDetails = [
	{
		charName: "Bob",
		stats: {
			hp: 90,
			def: 30,
			atk: 50,
			agi: 20,
		},
		story: "Once a fighter who had won the hearts of fans with his excellent sensibility and handsome good looks, he decided to transform himself completely by gaining weight."
	},
	{
		charName: "Bryan",
	},
	{
		charName: "Claudio",
	},
	{
		charName: "Devil Jin",
	},
	{
		charName:"Dragunov",
	},
	{
		charName: "Eddy",
	},
	{
		charName: "Feng",
	},
	{
		charName: "Gigas",
	},
	{
		charName: "Heihachi",
	},
	{
		charName: "Hwoarang",
	},
	{
		charName: "Jack",
	},
	{
		charName: "Kazuya",
	},
	{
		charName: "Lars",
	},
	{
		charName: "Miguel",
	},
	{
		charName: "Paul",
	},
	{
		charName: "Steve",
	}
];


function selectCharacter(i){
	$(lastElem).removeClass('selchar-img-selected');
	if (!$(i).hasClass('selchar-img-selected')){
		$(i).addClass('selchar-img-selected');
		lastElem = i;
		var thischar = undefined;
		for (char of characterNames){
			if (i.hasClass('selchar-' + char.toLowerCase())) 
				thischar = char;
		}

	}
}

const defaultCharSel = () => {
	const defaultChar = document.getElementsByClassName('selchar-bob');
	$(defaultChar).addClass('selchar-img-selected');
	lastElem = defaultChar;
}

$(document).ready(() => defaultCharSel());