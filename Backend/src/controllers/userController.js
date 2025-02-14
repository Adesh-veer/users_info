import User from '../models/user.models.js';

export const searchUser = async (req, res) => { 
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ message: "Query parameter is required" });
        }

        const user = await User.findOne({ 
            $or: [{ username: query }]
        }).select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (error) {
        console.error("🔥 Error searching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
