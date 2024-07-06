const express=require("express");

const router=express.Router();

const {getCandidates,getCandidate,CreateCandidate,UpdateCandidate,DelCandidate}=require("../controllers/candidateController");


router.route('/').get(getCandidates).post(CreateCandidate);

router.route('/:id').get(getCandidate).put(UpdateCandidate).delete(DelCandidate);


module.exports=router;