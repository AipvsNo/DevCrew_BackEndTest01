const checkHeader = async(req, res, next) => {
    const authheaders = req.header("Authorization").replace("Bearer ","");
    if ( authheaders === 'DEVCREW-BACKEND-TEST') {
        next();
    } else {
    res.status(401).json({"error":"Unauthorized"});
    }
};
module.exports = {checkHeader};
