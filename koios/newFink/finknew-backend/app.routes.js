const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/profil/' });
const auth = require('./middleware/fink');
const user = require('./controllers/Fink/user.controller');
const image = require('./controllers/Fink/image.controller');
const category = require('./controllers/Fink/category.controller');
const subCategory = require('./controllers/Fink/subCategory.controller');
const city = require('./controllers/Fink/city.controller');
const compagny = require('./controllers/Fink/company.controller');
const communication = require('./controllers/Fink/communication.controller');
const history = require('./controllers/Fink/history.controller');

module.exports = () => {
  router.get('/health-check', (req, res) => res.send('OK'));

  // User
  router.post('/user/register', user.register);
  router.post('/user/validate', user.validate);
  router.post('/user/login', user.login);
  router.post('/user/forget-password', user.forget);
  router.post('/user/change-password', user.changePassword);
  router.get('/user/getUser', auth, user.getUser);
  router.post('/user/check-password', auth, user.checkPassword);
  router.post('/user/edit-email', auth, user.editEmail);
  router.post('/user/edit-password', auth, user.editPassword);
  router.post('/user/edit-informations', auth, user.informationsEdit);
  router.post('/user/send-verif-email', auth, user.sendVerifEmail);
  router.post('/user/update-image-profile', auth, upload.single('profil'), image.updateImage);
  router.post('/user/update-info', auth, user.updateInfo);

  // Category
  router.get('/category/get-all', category.getAll);
  router.post('/category/add', category.add);

  // SubCategory
  router.get('/sub-category/get-all', subCategory.getAll);
  router.post('/sub-category/get-one', subCategory.getOne);
  // router.post('/category/add', category.add);

  // City
  router.get('/city/get-all', city.getAll);
  router.post('/city/add', city.add);

  // Company
  router.post('/company/add', auth, compagny.add);
  router.post('/company/get', compagny.get);
  router.post('/company/search', compagny.search);
  // router.get('/company/get-all', compagny.getAll);

  // Communication
  router.post('/communication/favoris', auth, communication.favorites);
  router.post('/communication/add-message', auth, communication.sendMessage);
  router.post('/communication/add-comment', auth, communication.createComment);
  router.post('/communication/get-comment', communication.getComment);

  // History
  router.post('/history/save', auth, history.save);
  router.get('/history/get-history-user', auth, history.getHistoryByUser);

  return router;
};
