const typeList = [
  'Archer',
  'Swordsman',
  'Magic',
  'Demon',
  'Undead',
  'Zombie',
];
export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Допускаются только имена длиной от 2 символов и не более 10');
    } else {
      this.name = name;
    }
    if (!typeList.includes(type)) {
      throw new Error('Ошибка: тип персонажа не соответствует заданному');
    } else {
      this.type = type;
    }
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = level;
  }
}
