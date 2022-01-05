const express = require('express')
const router = express.Router()
const adminAuth = require('../middleware/adminAuth')
const siswaAuth = require('../middleware/siswaAuth')
const verifikasi = require('../middleware/verifikasi')
const adminValidation = require('../validator/admin_auth/auth.validation')
const siswaValidation = require('../validator/siswa_auth/auth.validation')

// Router Autentikasi Admin
router.post('/admin/login', adminValidation.login, adminAuth.login)
router.post('/admin/registrasi', adminValidation.register, adminAuth.register)

// router untuk tes verfikasi token
router.get('/inventori', verifikasi.verifikasiAdmin(), adminAuth.inventori)

// Router Autentikasi Siswa
router.post('/siswa/login', siswaValidation.login, siswaAuth.login)

module.exports = router