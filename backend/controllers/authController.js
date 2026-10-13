import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Admin Login Controller
 * Authenticates admin via email & bcrypt-hashed password
 */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.'
      });
    }

    const envAdminEmail = process.env.ADMIN_EMAIL || 'admin@ethixweb.com';
    let envPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    // If only a plain ADMIN_PASSWORD was passed in .env (or default), hash it with bcrypt
    if (!envPasswordHash) {
      const fallbackPlain = process.env.ADMIN_PASSWORD || 'Admin@Ethix2026';
      envPasswordHash = await bcrypt.hash(fallbackPlain, 10);
    }

    // Verify email (case-insensitive)
    if (email.trim().toLowerCase() !== envAdminEmail.trim().toLowerCase()) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    // Securely compare password hash using bcrypt
    const isMatch = await bcrypt.compare(password, envPasswordHash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    // Generate JWT token
    const secret = process.env.JWT_SECRET || 'ethixweb_default_secure_secret_key_2026';
    const token = jwt.sign(
      { email: envAdminEmail, role: 'admin' },
      secret,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      success: true,
      message: 'Admin authentication successful.',
      token,
      admin: {
        email: envAdminEmail,
        role: 'admin'
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Authentication failed due to an unexpected error.'
    });
  }
};

/**
 * Verify current Admin Token controller
 */
export const verifyAdminSession = async (req, res) => {
  return res.status(200).json({
    success: true,
    admin: req.admin
  });
};
