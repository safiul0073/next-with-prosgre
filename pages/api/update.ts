import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
   
    console.log(req.body.user.id);

    try {
        const { id } = req.body.user;
        if (!id) {
            res.status(400).json({
                message: "id is required"
            });
            return;
        }
        const { user } = req.body;
        const deleteUser = await prisma.user.update({
            where: {id},
            data: {
                ...user
            }
        });

        if (!deleteUser) { return res.status(404).json({ message: "User not found" }); }

        res.status(200).json({
            message: "User deleted",
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}