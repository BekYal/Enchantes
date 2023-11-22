var WarriorBlessing = CustomEnchant
  .newEnchant("WarriorBlessing", Translation.translate("Warrior's Blessing"))
  .setMinMaxCost(10, 20, 10, 20)
  .setMinMaxLevel(1, 3)
  .setMask(Mask.weapons)
  .setFrequency(3);
  
var Stunning = CustomEnchant.newEnchant("Stunning", Translation.translate("Stunning"))
	.setMinMaxCost(5, 10, 5, 10/*15, 30, 16, 30*/)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(4);
Enchants.addBook(Stunning.id);

var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
  .setMinMaxCost(1, 3, 1, 3)
  .setMinMaxLevel(1, 3)
  .setMask(Mask.tool)
  .setFrequency(2);
Enchants.setMaxLevel(Blunt, 3);
Enchants.setCurse(Blunt.id);
Enchants.addBook(Blunt.id);

var healthRepair = CustomEnchant.newEnchant("healthRepair", Translation.translate("healthRepair"))
  .setMinMaxCost(1, 3, 1, 3)
  .setMinMaxLevel(1, 2)
  .setMask(Mask.tool)
  .setFrequency(4);
Enchants.addBook(healthRepair.id);

var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(5, 10, 5, 10)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.armor)
	.setFrequency(3);
Enchants.addBook(UnionToWater.id);
