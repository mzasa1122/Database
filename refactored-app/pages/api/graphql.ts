// pages/api/graphql.ts

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import dbConnect from "../../middleware/db-connect";
import type { NextApiRequest, NextApiResponse } from "next";

// Create Apollo server
// @ts-ignore (if you get a typing error here, this silences it)
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Create the Next.js handler for it
const graphqlHandler = startServerAndCreateNextHandler(apolloServer);

// Export a single default function that Next.js can call
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // —— Connect to MongoDB ——  
  await dbConnect();

  // —— CORS setup ——  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // —— Finally invoke Apollo ——  
  return graphqlHandler(req, res);
}