var lastElem = undefined;
var lastCharName = undefined;

const characterDetails = [
	{
		charName: "Bob",
		stats: {
			HP: 90,
			DEF: 30,
			ATK: 50,
			AGI: 20,
		},
		charLine: "SPEED AND WEIGHT!",
		story: "Once a fighter who had won the hearts of fans with his excellent sensibility and handsome good looks, he decided to transform himself completely by gaining weight."
	},
	{
		charName: "Bryan",
		stats:{
			HP  : 95, 
			DEF : 32, 
			ATK : 30, 
			AGI : 25, 
		},
		charLine: "MWAHAHAHAHA! SO, WHICH ONE OF YOU WANTS TO DIE?",
		story: "A savage fighter who uses a kickboxing fighting style. He once belonged to an international police force, but Dr. Abel and Dr. Bosconovitch made him a replicant with a perpetual generator that keeps him alive."
	},
	{
		charName: "Claudio",
		stats:{
			HP  : 53,
			DEF : 22,
			ATK : 62,
			AGI : 70 
		},
		charLine: "THIS IS NO PLACE FOR AMATEURS.",
		story: "The Sirius Marksmen, a secret society of exorcists, has exerted a profound influence on  European history for hundreds of years. The most powerful exorcist of the current generation is Claudio, who was visiting the Mishima Zaibatsu as their groups join forces to subdue a certain evil."
		
	},
	{
		charName: "Devil Jin",
		stats:{
			HP  : 83,
			DEF : 66,
			ATK : 80,
			AGI : 15
		},
		charLine: "FEAR MY WRATH",
		story: "After he defeated Azazel, Jin Kazama was apprehended by UN troops. As his unconscious body was being transported by helicopter, he becamepossessed by his devil form, ripped free from his straitjacket, tore through the helicopter's fuselage with a powerful beam attack, and then escaped."
	},
	{
		charName:"Dragunov",
		stats:{
			HP  : 40,
			DEF : 75,
			ATK : 36,
			AGI : 88
		},
		charLine: "YOU'RE GONNA DIE!",
		story: "Tournament on army orders. At the designated arena of his first match, a woman appeared before him. There was something strangely familiar about her... It didn't take Dragunov long to figure out who she was, and he wasted no time in readying himself for combat."
	},
	{
		charName: "Eddy",
		stats:{
			HP  : 44,
			DEF : 56,
			ATK : 21,
			AGI : 90
		},
		charLine: "DON'T THINK I'LL GO EASY ON YOU" ,
		story: "Eddy Gordo went to G Corporation to exact revenge on Kazuya Mishima for murdering his father. After he'd taken out a crowd of guards, a young girl in a strange outfit stood before him, and struck a pose. \"You're not getting past me, old man! Teehee!\"" 
	},
	{
		charName: "Feng",
		stats:{
			HP  : 90,
			DEF : 10,
			ATK : 80,
			AGI : 10
		},
		charLine: "COME ON!" ,
		story: "Having fought masters of many different styles, Feng returned to his childhood training ground to continue his intense training regime. Then one day, an unexpected visitor appeared. When the man made it clear that his desire was to fight, Feng had no reason to refuse. He accepted his opponent's challenge in silence, and prepared to battle."
		
	},
	{
		charName: "Gigas",
		stats:{
			HP  : 90,
			DEF : 80,
			ATK : 20,
			AGI : 20

		},
		charLine: "DATA DELETED" ,
		story: "One of G Corporation's weapons divisions entered their latest biological weapon, Gigas, into the King of Iron Fist Tournament for two reasons: first, to pit the strength of their next-gen humanoid weapon against a similar weapon of G Corp's; and second, to provoke Heihachi Mishima."
		
	},
	{
		charName: "Heihachi",
		stats:{
			HP  : 50,
			DEF : 50,
			ATK : 50,
			AGI : 50
		},
		charLine: "YOU FOOL! I AM INVINCIBLE!" ,
		story: "The original leader of the Mishima Zaibatsu, and the fighter known as the \"King of the Iron Fist.\" Heihachi continues to fight for control of the Mishima Zaibatsu against his son, Kazuya, and his grandson, Jin. After having recovered from the injuries he sustained in the suicide attack on him from the G Corporation's Jack units, Heihachi is back with an iron fist--and body to match."
		
	},
	{
		charName: "Hwoarang",
		stats:{
			HP  : 63,
			DEF : 48,
			ATK : 30,
			AGI : 70

		},
		charLine: "COME AT ME! I'LL TAKE YOU DOWN" ,
		story: "Hwoarang sees one man as his rival: Jin Kazama. Jin, CEO of the Mishima Zaibatsu, declared war against the world, and in the ensuing turmoil vanished suddenly, without a trace. Suspecting there is more to Jin's disappearance than meets the eye, Hwoarang vowed to track him down."
	},
	{
		charName: "Jack",
		stats:{
			HP  : 90,
			DEF : 60,
			ATK : 18,
			AGI : 13
		},
		charLine: "I'M GOING TO SHUT YOU DOWN",
		story: "It was no secret that G Corporation was locked in a power struggle with the Mishima Zaibatsu. However, within G Corp itself, another battle was raging: the battle to create the ultimate next-gen humanoid weapon."
	},
	{
		charName: "Kazuya",
		stats:{
			HP  : 82,
			DEF : 20,
			ATK : 53,
			AGI : 21
		},
		charLine: "IT'S TIME FOR YOU TO MEET YOUR END!",
		story: "Kazuya was raised as the heir to the Mishima Zaibatsu, but rebelled against his father Heihachi. After awakening the power of the devil within him, he's finally able to control it."
	},
	{
		charName: "Lars",
		stats:{
			HP  : 30,
			DEF : 90,
			ATK : 30,
			AGI : 20

		},
		charLine: "THINK YOU CAN STOP ME?",
		story: "A former officer of the Mishima Zaibatsu's special military unit, the Tekken Force, Lars enacted a coup d'état and rebelled against his former employer. Lars continues to fight despite the loss of his fallen comrades, and his bloody rebellion is nowhere near finished."
	},
	{
		charName: "Miguel",
		stats:{
			HP  : 90,
			DEF : 20,
			ATK : 76,
			AGI : 12
		},
		charLine: "YOU LOOK LIKE YOU'RE READY TO LOSE.",
		story: "After losing his sister in an airstrike ordered by the Mishima Zaibatsu under the direction of Jin Kazama, Miguel Caballero Rojo devoted his life to seeking revenge. However, when Jin suddenly vanishes without a trace, Miguel's life purpose disappears along with him."
	},
	{
		charName: "Paul",
		stats:{
			HP  : 72,
			DEF : 21,
			ATK : 44,
			AGI : 32
		},
		charLine: "I'LL SHOW YOU THE POWER OF THE STRONGEST IN THE UNIVERSE… BUT NOT FOR FREE!", 
		story: "When Paul Phoenix, the golden boy of the martial arts world, steps into the ring, the excitement in the crowd is palpable. But this time when his opponent's name rang over the arena's loudspeakers, he could only scratch his head in disbelief. It was Kuma... again!"
	},
	{
		charName: "Steve",
		stats:{
			HP  : 71,
			DEF : 22,
			ATK : 43,
			AGI : 63
		},
		charLine: "HEY YOU… YOU WANNA TRY ME?",
		story: "Steve Fox has had plenty of run-ins with the Mishima Zaibatsu, but he never gave up his search for information about his past. Though his mother's identity remained a mystery, one name in particular began to crop up time and again: Nina Williams."
	}
];


const selectCharacter = (i) => {
	if (!$(i).hasClass('selchar-img-selected')){
		$(i).addClass('selchar-img-selected'); // Add selected state to the new char
		$(lastElem).removeClass('selchar-img-selected'); // Remove selected state of last char
		document.getElementById(lastCharName.replace(/\s+/g, '')  + '-FB').style.display = 'none'; // Remove FB image of lastchar
		var thischar = i.textContent.replace(/[\t\n]+/g, ''); // Get char name
		lastElem = i; // lastElem to this char now
		lastCharName = thischar; // lastName also to this char now
		const targetNewCharName = thischar.replace(/\s+/g, '') + '-FB';
		var charIndex = -1;
		for (i of characterDetails){
		    if (i.charName === thischar)
		        charIndex = characterDetails.indexOf(i);
		}
		document.getElementById('char-stat-hp').innerHTML = characterDetails[charIndex].stats.HP + '/100';
		document.getElementById('char-stat-def').innerHTML = characterDetails[charIndex].stats.DEF + '/100';
		document.getElementById('char-stat-atk').innerHTML = characterDetails[charIndex].stats.ATK + '/100';
		document.getElementById('char-stat-agi').innerHTML = characterDetails[charIndex].stats.AGI + '/100';
		document.getElementsByClassName('character-line')[0].innerHTML = characterDetails[charIndex].charLine;
		document.getElementsByClassName('character-story')[0].innerHTML = characterDetails[charIndex].story;
		document.getElementById(targetNewCharName).style.display = 'inline';
	}
};

const defaultCharSel = () => {
	const defaultChar = document.getElementsByClassName('selchar-bob');
	$(defaultChar).addClass('selchar-img-selected');
	lastElem = defaultChar;
	lastCharName = 'Bob';
	document.getElementById('char-stat-hp').innerHTML = characterDetails[0].stats.HP + '/100';
	document.getElementById('char-stat-def').innerHTML = characterDetails[0].stats.DEF + '/100';
	document.getElementById('char-stat-atk').innerHTML = characterDetails[0].stats.ATK + '/100';
	document.getElementById('char-stat-agi').innerHTML = characterDetails[0].stats.AGI + '/100';
	document.getElementsByClassName('character-line')[0].innerHTML = characterDetails[0].charLine;
	document.getElementsByClassName('character-story')[0].innerHTML = characterDetails[0].story;
	document.getElementById('Bob-FB').style.display = 'inline';
};

$(document).ready(() => defaultCharSel());