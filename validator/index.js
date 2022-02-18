function validateInsert(body) {
    const {name, age, playlist, grammy= false} = body;
    if(!name){
        return {
            valid: false,
            error: "Write a name",
        };
    }
    if(!age){
        return {
            valid: false,
            error: "Write how many years of experience has the artist",
        };
    }
    if(!playlist){
        return {
            valid: false,
            error: "Write how many years of experience has the artist",
        };
    }
    return {
        valid: true,
        error: undefined,
    }
}

module.exports = {
    validateInsert
};