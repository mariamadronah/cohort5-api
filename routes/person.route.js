const router = require ('express').routter()
const infocontroller= require('../controllers/person.contoller')

router.get('/',(req,res)=>{
    let data = infocontroller()
    res.json(date )
})
module.exports = router;