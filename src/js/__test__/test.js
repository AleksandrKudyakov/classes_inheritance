import Character from '../Character';
import Magic from '../Magic';
import Swordsman from '../Swordsman';
import Archer from '../Archer';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Demon from '../Demon';

test('Верный ввод лучник', () => {
  const received = new Archer('Alex', 'Archer');
  const expected = {
    name: 'Alex',
    type: 'Archer',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод маг', () => {
  const received = new Magic('Alex', 'Magic');
  const expected = {
    name: 'Alex',
    type: 'Magic',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод пехота', () => {
  const received = new Swordsman('Alex', 'Swordsman');
  const expected = {
    name: 'Alex',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод нежить', () => {
  const received = new Undead('Alex', 'Undead');
  const expected = {
    name: 'Alex',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод зомби', () => {
  const received = new Zombie('Alex', 'Zombie');
  const expected = {
    name: 'Alex',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод демон', () => {
  const received = new Demon('Alex', 'Demon');
  const expected = {
    name: 'Alex',
    type: 'Demon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('R', 'Undead')).toThrow();
});

test('Не верный тип лучник', () => {
  expect(() => new Archer('Alex', 'Soldier')).toThrow();
});

test('Не верный тип маг', () => {
  expect(() => new Magic('Alex', 'Soldier')).toThrow();
});

test('Не верный тип пехота', () => {
  expect(() => new Swordsman('Alex', 'Soldier')).toThrow();
});

test('Не верный тип нежить', () => {
  expect(() => new Undead('Alex', 'Soldier')).toThrow();
});

test('Не верный тип зомби', () => {
  expect(() => new Zombie('Alex', 'Soldier')).toThrow();
});

test('Не верный тип демон', () => {
  expect(() => new Demon('Alex', 'Soldier')).toThrow();
});
