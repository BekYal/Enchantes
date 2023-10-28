
var Stunning = CustomEnchant.newEnchant("Stunning", Translation.translate("Stunning"))
	.setMinMaxCost(5, 10, 5, 10/*15, 30, 16, 30*/)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(4);
	
	Enchants.addBook(Stunning.id);
	
	Enchants.hurt(Stunning.id, function(item, enchantLevel, attacker, victim, damageValue, damageType) {
		Chance.executeWithPercentChance(enchantLevel * 10, function() {
				Entity.addEffect(victim, 2, 30, 60, false, false);
				Entity.addEffect(victim, 18, 30, 60, false, false);
			});
	});
