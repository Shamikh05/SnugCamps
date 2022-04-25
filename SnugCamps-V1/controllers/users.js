const User = require('../models/user');


// SignUp Form

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}


// SignUp

module.exports.register = async(req, res, next) => {

    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {

            if (err)
                return next(err);

            req.flash('success', 'Welcome to SnugCamps!');
            res.redirect('/campgrounds');

        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }

}



// Login Form

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}



// Login

module.exports.login = (req, res) => {

    req.flash('success', 'Welcome back !!');

    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;

    res.redirect(redirectUrl);
}



// Logout

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', "GoodBye, Please do visit again !!");
    res.redirect('/campgrounds');
}