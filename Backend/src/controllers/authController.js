import User from '../models/user.models.js'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, password, fullName, gender, DOB, country } = req.body;


    if (await User.findOne({ username })) {  
      return res.status(400).json({ message: 'User already exists' });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = await User.create({
      username, 
      password: hashedPassword, 
      fullName, 
      gender, 
      DOB, 
      country
    });

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
