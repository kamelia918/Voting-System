const express=require("express");

const router=express.Router();

const {getCandidates,getCandidate,CreateCandidate,UpdateCandidate,DelCandidate,VoteForCandidate}=require("../controllers/candidateController");


router.route('/').get(getCandidates).post(CreateCandidate);

router.route('/:id').get(getCandidate).put(UpdateCandidate).delete(DelCandidate);

router.route('/vote/:id').get(VoteForCandidate)


module.exports=router;