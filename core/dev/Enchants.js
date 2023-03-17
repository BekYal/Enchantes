IMPORT("EnchantsHelper");
var Chance = {
executeWithChance: function(chance, code) {
  if (Math.random() < chance) {
    code();
  }
},
 executeWithPercentChance: function(percent, code) {
  if (Math.random() < percent / 100) {
    code();
  }
}

};

var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 1)
	.setMask(MASK.ARMOR).setFrequency(1);

Enchants.onNaked(UnionToWater.id, function(item, enchantLevel, player) {
	
	
	
	Entity.addEffect(player, 1, 1, 30, false, false);
	Entity.addEffect(player, 3, 1, 30, false, false);
	Entity.addEffect(player, 5, 1, 30, false, false);
})