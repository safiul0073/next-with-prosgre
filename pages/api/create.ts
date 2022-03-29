// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
    res.status(405).end();
    return;
  }

  try {
    const {user} = await req.body;

    const saveUser = await prisma.user.create({data: {...user} });
    res.status(200).json(saveUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
    
}
