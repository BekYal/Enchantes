IMPORT('EnchantsHelper');

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

var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
  .setMinMaxCost(1, 3, 1, 3)
  .setMinMaxLevel(1, 3)
  .setMask(Mask.tool)
  .setFrequency(2);

var HealthRepair = CustomEnchant.newEnchant("HealthRepair", Translation.translate("HealthRepair"))
  .setMinMaxCost(1, 3, 1, 3)
  .setMinMaxLevel(1, 2)
  .setMask(Mask.all)
  .setFrequency(4);

var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(5, 10, 5, 10)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.armor)
	.setFrequency(3);

  Enchants.setMaxLevel(Blunt, 3);
  Enchants.setCurse(Blunt.id);
  Enchants.addBook(Stunning.id);
  Enchants.addBook(Blunt.id);
  Enchants.addBook(HealthRepair.id);
  Enchants.addBook(UnionToWater.id);