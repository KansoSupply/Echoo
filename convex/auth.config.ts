if (!process.env.CLERK_ISSUE_URL) {
  throw new Error("CLERK ISSUE URL is not set in environment variables");
}

const authConfig = {
  providers: [
    {
      domain: process.env.CLERK_ISSUE_URL,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
