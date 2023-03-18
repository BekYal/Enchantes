IMPORT("EnchantsHelper");

var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 1)
	.setMask(Mask.armor).setFrequency(1);

var Fragility = CustomEnchant.newEnchant("Fragility", Translation.translate("Fragility"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 1)
	.setMask(Mask.tool).setFrequency(1);


Enchants.setCurse(Fragility.id);

Enchants.destroyBlock(Fragility.id, function(item, enchantLevel, coords, block, player){
	Chance.executeWithPercentChance(40, function(){
	Game.prevent();
	});
});
