if (__config__.getBool("Enchants.Blunt"))
{
	var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
		.setMinMaxCost(1, 3, 1, 3)
		.setMinMaxLevel(1, 3)
		.setMask(Mask.tool)
		.setFrequency(2);


	Enchants.setCurse(Blunt.id);
	Enchants.addBook(Blunt.id);

	Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player) {
		switch (enchantLevel) {

			case 1:
				Chance.executeWithPercentChance(10, function() {
					Game.prevent();
				});
				break;
			case 2:
				Chance.executeWithPercentChance(30, function() {
					Game.prevent();
				});
				break;
			case 3:
				Chance.executeWithPercentChance(50, function() {
					Game.prevent();
				});
				break;
		}
	});
}