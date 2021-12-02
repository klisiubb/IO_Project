module.exports = {
    ensureAuthenticated : function(req,res,next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg' , 'Zaloguj się, by wyświetlić tą zawartość!');
        res.redirect('/users/login');
    }
}