
	var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
		.setMinMaxCost(1, 3, 1, 3)
		.setMinMaxLevel(1, 3)
		.setMask(Mask.tool)
		.setFrequency(2);
	Enchants.setMaxLevel(Blunt, 3);

	Enchants.setCurse(Blunt.id);
	Enchants.addBook(Blunt.id);

	Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player) {
		Chance.executeWithPercentChance(enchantLevel * 8, function() {
			Game.prevent();
		});
	});
