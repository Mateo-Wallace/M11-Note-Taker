const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// // GET Route for retrieving all the tips
// tips.get('/', (req, res) => {
//   readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
// });

// // GET Route for a specific tip
// tips.get('/:tip_id', (req, res) => {
//   const tipId = req.params.tip_id;
//   readFromFile('./db/tips.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       const result = json.filter((tip) => tip.tip_id === tipId);
//       return result.length > 0
//         ? res.json(result)
//         : res.json('No tip with that ID');
//     });
// });

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
        title,
        text
      };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});

module.exports = notes;