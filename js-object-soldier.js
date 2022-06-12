const soldier = {
  nameSoldier: "Adam",
  health: 3,
  weapon: {
    nameweapon: "AK-47",
    cartridges: 3,
  },
  supplies: 3,

  fire: function () {
    if (this.weapon.cartridges === 0) {
      return "обойма пуста.Перезарядитесь";
    }
    this.weapon.cartridges--;
    return "бах-бах";
  },
  recharge: function () {
    if (this.supplies === 0) {
      return "не осталось припасов";
    }
    this.weapon.cartridges = 30;
    this.supplies--;
    return "перезарядка";
  },
  hurt: function () {
    if (this.health === 0) {
      return "ты проиграл";
    }
    return this.health--;
  },
};
