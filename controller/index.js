const records = require('../records');
const validator = require('../validator/index');

const getRecords = (req, res) => {
    //EXAMPLE: https://stackabuse.com/?page=2&limit=3
    // page is a query param so if you do req.query.page you should see a 2 as a value
    const {grammy, playlist} = req.query;
    let filtered = records;
    if(grammy){
        const value = grammy === 'true' ? true : false;
        filtered = records.filter((item) => item.grammy === value);
    }
    if(playlist){
        // TODO: FILTER ALL ARTIST WHO HAS MORE THAN 1,2,3 ITEMS AT HIS PLAYLIST
    }
    res.send({
        ok: true,
        data: filtered,
        code:200
    });
}

const insertRecord = (req, res) => {
    const { body } = req;
    const {valid, error} = validator.validateInsert(body);
    const code = valid ? 200 : 400;
    if(valid){
        records.push(body);
        res.status(code).send({
            ok:true,
            data:records,
            code:code
        });
    } else {
        res.status(code).send({
            ok:false,
            data:error,
            code:code
        });
    }
}

const deleteRecord = (req, res) => {
    // TODO: Insert the logic to delete specific record
    // TODO: Investigate how to delete item of array using helpers functions as push, pop, etc... should be some function to delete
}



module.exports = {
    getRecords,
    insertRecord,
    deleteRecord,
}