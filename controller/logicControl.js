
const doTheMath = (req, res, next) => {
    result = 0;
    if(!req?.body){
        res.status(422).json({"error": "Unsupported Data Format"});
    }
    else{
        const {a,b} = req.body;
        if (a !== undefined && b !== undefined && !isNaN(a) && !isNaN(b)) {
            result = parseFloat(a) * parseFloat(b);
            res.json({result});
            next();
        } 
        else {
            res.status(422).json({"error": "Unsupported Data Format"});
        }
    }
};

module.exports = {doTheMath};
