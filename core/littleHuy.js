/*
BUILD INFO:
  dir: core/dev
  target: core/littleHuy.js
  files: 2
*/



// file: Header/Values.js

const WEAPON = 16 | 32 | 512 | 16383;
const TOOLS = 16 | 512 | 64 | 256 | 1024 | 128 | 2048;
const ARMORS = 1 | 8 | 4 | 2;
const FOOT = 4 | 2;
const ARM_SLOTS = 3 | 2 | 1 | 0;

const Values = {
    NotEntBite: 95 | 61 | 80 | 90 | 98 | 100 | 79 | 82 | 71 | 87 | 69 | 68 | 66 | 70 | 85 | 72 | 77 | 96 | 64 | 88 | 93 | 101 | 84 | 67 | 83 | 76 | 94 | 81 | 86 | 73 | 97 | 105,
    weapon: 16 | 32 | 512,
    foot: 4 | 2 | 16383,
    tools: 16 | 512 | 64 | 256 | 1024 | 128 | 2048 | 16383,
    armors: 1 | 8 | 4 | 2,
    arm_slots: 0 | 1 | 2 | 3
};




// file: Enchantes.js

var LiveSteal = CustomEnchant.newEnchant("LiveSteal", "Вор жизни")
     .setFrequency(4)
     .setMask(WEAPON)
     .setMinMaxCost(16, 16, 30, 30)
     .setMinMaxLevel(1, 5);

var moreXP = CustomEnchant.newEnchant("moreXP", "больше опыта")
     .setFrequency(5)
     .setMask(TOOLS)
     .setMinMaxCost(16, 16, 30, 30)
     .setMinMaxLevel(1, 3);

Callback.addCallback('ExpAddFunction', function (exp, player) {
	let item = Entity.getCarriedItem(player);
	let huy = new PlayerActor(player);
	if (item.extra.getEnchantLevel(moreXP.id) == 1) {
		let huuuy = exp / 4;
		huy.addExperience(exp + huuuy);
	}
	if (item.extra.getEnchantLevel(moreXP.id) == 2) {
		let huuuy = exp / 3;
		huy.addExperience(exp + huuuy);
	}
	if (item.extra.getEnchantLevel(moreXP.id) == 1) {
		let huuuy = exp / 2;
		huy.addExperience(exp + huuuy);
	}
})





Callback.addCallback("EntityHurt",
	function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
		var item = Entity.getCarriedItem(attacker);
		if(damageType == 2){
		if (item.extra.getEnchantLevel(LiveSteal.id) == 1)
			Entity.healEntity(attacker, damageValue / 4.5);

		if (item.extra.getEnchantLevel(LiveSteal.id) == 2)
			Entity.healEntity(attacker, damageValue / 4);

		if (item.extra.getEnchantLevel(LiveSteal.id) == 3)
			Entity.healEntity(attacker, damageValue / 3);

		if (item.extra.getEnchantLevel(LiveSteal.id) == 4)
			Entity.healEntity(attacker, damageValue / 2);

		if (item.extra.getEnchantLevel(LiveSteal.id) == 5)
			Entity.healEntity(attacker, damageValue - 4);
			}
		}
	);
var LiveSteal = CustomEnchant.newEnchant("LiveSteal", "Вор жизни")
     .setFrequency(4)
     .setMask(WEAPON)
     .setMinMaxCost(16, 16, 30, 30)
     .setMinMaxLevel(1, 5);
 
 let Enchantes = {}
 Enchantes.functionsHurt = function(id, funcs){
Callback.addCallback("EntityHurt",
	function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
		var item = Entity.getCarriedItem(attacker);
		if(damageType == 2){
		if (item.extra.getEnchantLevel(id) == 1){
	funcs.level1(attacker, victim, damageValue, damageType, someBool1, someBool2)
		}
		if (item.extra.getEnchantLevel(LiveSteal.id) == 2){
	funcs.level2(attacker, victim, damageValue, damageType, someBool1, someBool2)
		}
	if (item.extra.getEnchantLevel(LiveSteal.id) == 3){
	funcs.level3(attacker, victim, damageValue, damageType, someBool1, someBool2);
		}
		if (item.extra.getEnchantLevel(LiveSteal.id) == 4){
	funcs.level4(attacker, victim, damageValue, damageType, someBool1, someBool2);
		}
		if (item.extra.getEnchantLevel(LiveSteal.id) == 5){
	funcs.level5(attacker, victim, damageValue, damageType, someBool1, someBool2);
		}
			}
		}
	);

 }

/*
var DullBlade CustomEnchant.newEnchant("DullBlade", "Тупое лезвие")
     .setFrequency(2)
     .setMask(WEAPON)
     .setMinMaxCost(10, 10, 20, 20)
     .setMinMaxLevel(1, 5);
     */




