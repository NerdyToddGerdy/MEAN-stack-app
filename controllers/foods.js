const express = require('express');
const router = express.Router();
const Foods = require('../models/foods.js')


////////////////////////////////////////////////
//                 CREATE                     //
////////////////////////////////////////////////
router.post('/', (req, res)=>{
  Foods.create(req.body, (err, createdFood)=> {
    res.json(createdFood);
  })
})

////////////////////////////////////////////////
//                 READ                       //
////////////////////////////////////////////////
router.get('/', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  Foods.find({}, (err, foundFoods)=>{
    res.json(foundFoods);
  });
});

router.get('/:id', (req, res)=>{
  Foods.findById(req.params.id, (err, viewFood)=>{
    res.json(viewFood);
  })
})
////////////////////////////////////////////////
//                 UPDATE                     //
////////////////////////////////////////////////

router.put('/:id', (req,res)=>{
  console.log(req.params.id);
  Foods.findByIdAndUpdate(req.params.id, req.body, (err, updatedFood)=>{
    res.json(updatedFood);
  });
});

////////////////////////////////////////////////
//                 DELETE                     //
////////////////////////////////////////////////

router.delete('/:id', (req,res)=>{
  Foods.findByIdAndRemove(req.params.id, (err, deletedFood)=>{
    res.json(deletedFood);
  });
});


module.exports = router;
