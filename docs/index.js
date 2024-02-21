const basicInfo = require('./basicInfo');
const servers = require('./servers');
const crypto = require('./crypto');



module.exports = {
    ...basicInfo,
    ...servers,
    paths:{
    ...crypto.paths
    }
};