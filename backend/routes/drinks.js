const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON
const drinksFilePath = path.join(__dirname, '../data/drinks.json');

// Função para ler os dados do arquivo JSON
const readDrinksData = () => {
  const data = fs.readFileSync(drinksFilePath);
  return JSON.parse(data);
};

// Rota para obter todos os drinks
router.get('/', (req, res) => {
  const drinks = readDrinksData();
  res.json(drinks);
});

// Rota para obter um drink por ID
router.get('/:id', (req, res) => {
  const drinks = readDrinksData();
  const drink = drinks.find(d => d.id === parseInt(req.params.id));
  if (drink) {
    res.json(drink);
  } else {
    res.status(404).send('Drink não encontrado');
  }
});

// Rota para adicionar um novo drink
router.post('/', (req, res) => {
  const drinks = readDrinksData();
  const newDrink = {
    id: drinks.length + 1,
    name: req.body.name,
    ingredients: req.body.ingredients
  };
  drinks.push(newDrink);
  fs.writeFileSync(drinksFilePath, JSON.stringify(drinks, null, 2));
  res.status(201).json(newDrink);
});

// Rota para atualizar um drink existente
router.put('/:id', (req, res) => {
  const drinks = readDrinksData();
  const drinkIndex = drinks.findIndex(d => d.id === parseInt(req.params.id));
  if (drinkIndex !== -1) {
    drinks[drinkIndex] = {
      id: drinks[drinkIndex].id,
      name: req.body.name || drinks[drinkIndex].name,
      ingredients: req.body.ingredients || drinks[drinkIndex].ingredients
    };
    fs.writeFileSync(drinksFilePath, JSON.stringify(drinks, null, 2));
    res.json(drinks[drinkIndex]);
  } else {
    res.status(404).send('Drink não encontrado');
  }
});

// Rota para deletar um drink
router.delete('/:id', (req, res) => {
  const drinks = readDrinksData();
  const drinkIndex = drinks.findIndex(d => d.id === parseInt(req.params.id));
  if (drinkIndex !== -1) {
    drinks.splice(drinkIndex, 1);
    fs.writeFileSync(drinksFilePath, JSON.stringify(drinks, null, 2));
    res.status(204).send();
  } else {
    res.status(404).send('Drink não encontrado');
  }
});

module.exports = router;