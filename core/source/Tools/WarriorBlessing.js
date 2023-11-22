
Enchants.addBook(WarriorBlessing.id);
Enchants.hurt(WarriorBlessing.id, function (item, enchantLevel, attacker, victim, damageValue, damageType) {
  Chance.executeWithPercentChance(10 * enchantLevel, function () {
    Entity.addEffect(attacker, 5, 1, 100, false, false);
  })
});