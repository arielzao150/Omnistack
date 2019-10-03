const user = require('../models/User');

// index, show, store, update, destroy

module.exports = {
    // Cadastra um usuário
    async store(req, res) {
        const { email } = req.body;
        
        let user = await User.findOne({email});
        
        if(!user) {
            const user = await User.create({email});
        }
        
        return res.json(user);
    }
};