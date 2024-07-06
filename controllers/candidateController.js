const asyncHandler=require("express-async-handler");
const Candidate=require("../models/candidateModel");

//@desc get all candidates
//@route Get/api/candidate 
//@access public

const getCandidates=asyncHandler(async(req,res)=>{
    const candidates=await Candidate.find();
    res.status(200).json(candidates);
});

// const getCandidates=async(req,res)=>{
//     const candidates=await Candidate.find();
//     res.status(200).json(candidates);
// };

//@desc get a candidate
//@route Get/api/candidate/:id 
//@access public

const getCandidate=asyncHandler(async(req,res)=>{
    const candidate=await Candidate.findById(req.params.id);
    if(!candidate){
        res.status(404);
        throw new Error("CANDIDATE NOT FOUND");
    }
    res.status(200).json(candidate);
});


//@desc create a new candidate
//@route POST/api/candidate/
//@access public

const CreateCandidate=asyncHandler(async(req,res)=>{
    console.log("the request body is :",req.body);
    const{name,age,VotingPoint,CurrentPosition,Goals}=req.body;
    if(!name || !age || VotingPoint==undefined || !CurrentPosition || !Goals){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const candidate=await Candidate.create({
        name,
        age,
        VotingPoint,
        CurrentPosition,
        Goals
    });
    res.status(201).json(candidate);
});


//@desc update a candidate
//@route Put/api/candidate/:id 
//@access public

const UpdateCandidate=asyncHandler(async(req,res)=>{
    const candidate=await Candidate.findById(req.params.id);
    if(!candidate){
        res.status(404);
        throw new Error("CANDIDATE NOT FOUND");
    }
    const updatedCandidate=await Candidate.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedCandidate);
});

//@desc delete a candidate
//@route DELETE/api/candidate/:id 
//@access public

const DelCandidate=asyncHandler(async(req,res)=>{
    const candidate=await Candidate.findById(req.params.id);
    if(!candidate){
        res.status(404);
        throw new Error("CANDIDATE NOT FOUND");
    }
    console.log(candidate);
    await candidate.deleteOne({ id : req.params.id});

    res.status(200).json(candidate);
});


module.exports={getCandidates,getCandidate,CreateCandidate,UpdateCandidate,DelCandidate};