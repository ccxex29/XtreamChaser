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
		stats:{
			HP  : 95, 
			DEF : 32, 
			ATK : 30, 
			AGI : 25, 
		},
		story: "MWAHAHAHAHA! SO, WHICH ONE OF YOU WANTS TO DIE?" + 

		"A savage fighter who uses a kickboxing fighting style. He once belonged to an international police force, but Dr. Abel and Dr. Bosconovitch made him a replicant with a perpetual generator that keeps him alive."
	},
	{
		charName: "Claudio",
		stats:{
			HP  : 53,
			DEF : 22,
			ATK : 62,
			AGI : 70 
		},
		story: "HIS IS NO PLACE FOR AMATEURS.\n" + 

		"The Sirius Marksmen, a secret society of exorcists, has exerted a profound influence on  European history for hundreds of years. The most powerful exorcist of the current generation is Claudio, who was visiting the Mishima Zaibatsu as their groups join forces to subdue a certain evil."
		
	},
	{
		charName: "Devil Jin",
		stats:{
			HP  : 83,
			DEF : 66,
			ATK : 80,
			AGI : 15
		},
		story: "FEAR MY WRATH\n" + 

		"After he defeated Azazel, Jin Kazama was apprehended by UN troops. As his unconscious body was being transported by helicopter, he becamepossessed by his devil form, ripped free from his straitjacket, tore through the helicopter's fuselage with a powerful beam attack, and then escaped."
		
	},
	{
		charName:"Dragunov",
		stats:{
			HP  : 40,
			DEF : 75,
			ATK : 36,
			AGI : 88
		},
		story: "COME ON!\n" + 

		"Having fought masters of many different styles, Feng returned to his childhood training ground to continue his intense training regime.Then one day, an unexpected visitor appeared. When the man made it clear that his desire was to fight, Feng had no reason to refuse.He accepted his opponent's challenge in silence, and prepared to battle."
		
	},
	{
		charName: "Eddy",
		stats:{
			HP  : 44,
			DEF : 56,
			ATK : 21,
			AGI : 90
		},
		story: "DON'T THINK I'LL GO EASY ON YOU.\n" + 

		"Eddy Gordo went to G Corporation to exact revenge on Kazuya Mishima for murdering his father. After he'd  taken out a crowd of guards, a young girl in a strange  outfit stood before him, and struck a pose. \"You're not  getting past me, old man! Teehee!" 
		
		
	},
	{
		charName: "Feng",
		stats:{
			HP  : 90,
			DEF : 10,
			ATK : 80,
			AGI : 10
		},
		story: "COME ON!\n" + 

		"Having fought masters of many different styles, Feng returned to his childhood training ground to continue his intense training regime. Then one day, an unexpected visitor appeared. When the man made it clear that his desire was to fight, Feng had no reason to refuse. He accepted his opponent's challenge in silence, and prepared to battle."
		
	},
	{
		charName: "Gigas",
		stats:{
			HP  : 90,
			DEF : 80,
			ATK : 20,
			AGI : 20

		},
		story: "DATA DELETED\n" + 

		"One of G Corporation's weapons divisions entered their latest biological weapon, Gigas, into the King of Iron Fist Tournament for two reasons: first, to pit the strength of their next-gen humanoid weapon against a similar weapon of G Corp's; and second, to provoke Heihachi Mishima."
		
	},
	{
		charName: "Heihachi",
		stats:{
			HP  : 50,
			DEF : 50,
			ATK : 50,
			AGI : 50
		},
		story: "YOU FOOL! I AM INVINCIBLE!\n" + 

		"The original leader of the Mishima Zaibatsu, and the fighter known as the \"King of the Iron Fist.\" Heihachi continues to fight for control of the Mishima Zaibatsu against his son, Kazuya, and his grandson, Jin. After having recovered from the injuries he sustained in the suicide attack on him from the G Corporation's Jack units, Heihachi is back with an iron fist--and body to match."
		
	},
	{
		charName: "Hwoarang",
		stats:{
			HP  : 63,
			DEF : 48,
			ATK : 30,
			AGI : 70

		},
		story: "COME AT ME! I'LL TAKE YOU DOWN\n" + 

		"Hwoarang sees one man as his rival: Jin Kazama. Jin, CEO of the Mishima Zaibatsu, declared war against the world, and in the ensuing turmoil vanished suddenly, without a trace. Suspecting there is more to Jin's disappearance than meets the eye, Hwoarang vowed to track him down."
		
		
		
	},
	{
		charName: "Jack",
		stats:{
			HP  : 90,
			DEF : 60,
			ATK : 18,
			AGI : 13
		},
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
		story: "IT'S TIME FOR YOU TO MEET YOUR END!\n" + "Kazuya was raised as the heir to the Mishima Zaibatsu, but rebelled against his father Heihachi. After awakening the power of the devil within him, he's finally able to control it."
	},
	{
		charName: "Lars",
		stats:{
			HP  : 30,
			DEF : 90,
			ATK : 30,
			AGI : 20

		},
		story: "THINK YOU CAN STOP ME?\n" + "A former officer of the Mishima Zaibatsu's special military unit, the Tekken Force, Lars enacted a coup d'état and rebelled against his former employer. Lars continues to fight despite the loss of his fallen comrades, and his bloody rebellion is nowhere near finished."
	},
	{
		charName: "Miguel",
		stats:{
			HP  : 90,
			DEF : 20,
			ATK : 76,
			AGI : 12
		},
		story: "YOU LOOK LIKE YOU'RE READY TO LOSE.\n" + "After losing his sister in an airstrike ordered by the Mishima Zaibatsu under the direction of Jin Kazama, Miguel Caballero Rojo devoted his life to seeking revenge. However, when Jin suddenly vanishes without a trace, Miguel's life purpose disappears along with him."
	},
	{
		charName: "Paul",
		stats:{
			HP  : 72,
			DEF : 21,
			ATK : 44,
			AGI : 32
		},
		story: "I'LL SHOW YOU THE POWER OF THE STRONGEST IN THE UNIVERSE… BUT NOT FOR FREE!\n" + "When Paul Phoenix, the golden boy of the martial arts world, steps into the ring, the excitement in the crowd is palpable. But this time when his opponent's name rang over the arena's loudspeakers, he could only scratch his head in disbelief. It was Kuma... again!"
	},
	{
		charName: "Steve",
		stats:{
			HP  : 71,
			DEF : 22,
			ATK : 43,
			AGI : 63
		},
		story: "HEY YOU… YOU WANNA TRY ME?\n" +

		"Steve Fox has had plenty of run-ins with the Mishima Zaibatsu, but he never gave up his search for information about his past. Though his mother's identity remained a mystery, one name in particular began to crop up time and again: Nina Williams."
Name: "Steve",
thischar = undefined;
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