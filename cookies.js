let cookies = require('cookies'),
    uuid = require('node-uuid');

module.exports = {
    set(req, res, next) {
        let cookie = cookies(req, res);
        let uid = cookie.get('uid');
        if (!uid) {
            let newUid = uuid.v4();
            req.uid = newUid;
            cookie.set('uid', newUid, {
                maxAge: 365 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
        } else {
            req.uid = uid;
        }
        console.log('SET ' + req.uid);
        next();
    },
    test(req, res, next) {
        let cookie = cookies(req, res);
        let uid = cookie.get('uid');
        if (!uid)
            console.log('TEST n/a');
        else {
            req.uid = uid;
            console.log('TEST ' + req.uid);
        }
        next();
    }
};