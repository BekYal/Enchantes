
var WarriorBlessing = CustomEnchant.newEnchant("WarriorBlessing",
	Translation.translate("Warrior's Blessing"))
	.setMinMaxCost(10, 20, 10, 20)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(3);
Enchants.addBook(WarriorBlessing.id);

Enchants.hurt(WarriorBlessing.id, function (item, enchantLevel, attacker, victim, damageValue, damageType) {
	switch (enchantLevel) {
		case 1:
			Chance.executeWithPercentChance(10, function () {
				Entity.addEffect(attacker, 5, 1, 100, false, false);
			});
			break;
		case 2:
			Chance.executeWithPercentChance(15, function () {
				Entity.addEffect(attacker, 5, 2, 100, false, false);
			});
			break;
		case 3:
			Chance.executeWithPercentChance(30, function () {
				Entity.addEffect(attacker, 5, 3, 100, false, false);
			});
			break;
	}
});


