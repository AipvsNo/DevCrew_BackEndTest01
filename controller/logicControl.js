
const doTheMath = (req, res, next) => {
    result = 0;
    if(!req?.body){
        res.status(422).json({"error": "Unsupported Data Format"});
    }
    else{
        const {a,b} = req.body;
        if (!isNaN(a)&&!isNaN(b)){
            result = a * b;
            res.status(200).json({result});
            next();
        } 
        else {
            res.status(422).json({"error": "Unsupported Data Format"});
        }
    }
};

module.exports = {doTheMath};
