import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    try {
        const { id } = req.body;
        if (!id) {
            res.status(400).json({
                message: "id is required"
            });
            return;
        }

        const deleteUser = await prisma.user.delete({
            where: {id}
        });

        if (!deleteUser) { return res.status(404).json({ message: "User not found" }); }

        res.status(200).json({
            message: "User deleted",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}