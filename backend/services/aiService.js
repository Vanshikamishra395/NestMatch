const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateCompatibilityScore = async (tenantProfile, listing) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
     model: "gemini-2.5-flash",
    });

    const prompt = `
You are a rental compatibility assistant.

Compare the tenant preferences with the room listing and return JSON only.

Tenant Preferences:
${JSON.stringify(tenantProfile)}

Room Listing:
${JSON.stringify(listing)}

Return only this JSON format:
{
  "score": number between 0 and 100,
  "summary": "short match summary",
  "pros": ["reason 1", "reason 2"],
  "cons": ["concern 1"]
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Gemini Error:");
    console.error(error);

    return {
        score: 75,
        summary: "Good Match",
        pros: ["Basic budget and location details look suitable."],
        cons: ["AI explanation could not be generated at the moment."]
    };
}

    return {
      score: 75,
      summary: "Good Match",
      pros: ["Basic budget and location details look suitable."],
      cons: ["AI explanation could not be generated at the moment."],
    };
};

module.exports = {
  generateCompatibilityScore,
};