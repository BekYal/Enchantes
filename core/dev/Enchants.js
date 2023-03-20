IMPORT("EnchantsHelper");

var Stunning = CustomEnchant.newEnchant("Stunning", Translation.translate("Stunning"))
	.setMinMaxCost(5, 10, 5, 10)
	.setMinMaxLevel(1, 5)
	.setMask(Mask.weapons)
	.setFrequency(1);
	
var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 1)
	.setMask(Mask.armor)
	.setFrequency(1);

var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.tool)
	.setFrequency(1);

Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player){
	switch (enchantLevel) {
		case 1:
			Chance.executeWithPercentChance(10, function(){
				Game.prevent();
			});
			break;
		case 2:
			Chance.executeWithPercentChance(30, function(){
				Game.prevent();
			});
			break;
		case 3:
			Chance.executeWithPercentChance(50, function(){
				Game.prevent();
			});
			break;
	}
});

/*
Enchants.inInv(Blunt.id, function(item, enchantLevel, player){
	switch (enchantLevel) {
		case 1:
			Game.message("1 level");
			break;
		case 2:
			Game.message("2 level");
			break;
	}
});
/*

Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player){
	Chance.executeWithPercentChance(50, function(){
	Game.prevent();
	});
});

Enchants.setCurse(Blunt.id);*/

