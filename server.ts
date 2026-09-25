import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// AI Tattoo Stencil & Concept Visualizer API
app.post('/api/tattoo-generator', async (req, res) => {
  try {
    const { conceptPrompt, style, placement, size } = req.body;

    if (!conceptPrompt || typeof conceptPrompt !== 'string') {
      return res.status(400).json({ error: 'Concept prompt is required.' });
    }

    const systemInstruction = `You are a master tattoo artist at "Tattoo Memory Indore" (5.0 stars studio in Indore, MP). 
    Generate a detailed custom tattoo concept design, placement suggestions, symbolism, and execution details based on the user's idea.
    Provide a professional breakdown in JSON format.`;

    const userPrompt = `Concept Idea: ${conceptPrompt}
    Preferred Style: ${style || 'Fine Line & Blackwork'}
    Body Placement: ${placement || 'Forearm'}
    Target Size: ${size || 'Medium (4-6 inches)'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: 'Artistic title for the tattoo' },
            visualDescription: { type: Type.STRING, description: 'Detailed visual breakdown of lines, shading, and elements' },
            symbolismMeaning: { type: Type.STRING, description: 'Deeper spiritual or personal meaning behind this motif' },
            estimatedTime: { type: Type.STRING, description: 'Estimated session time e.g. 2.5 - 3.5 hours' },
            recommendedStyles: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: 'Complementary tattoo styles' 
            },
            careTips: { type: Type.STRING, description: 'Specific aftercare recommendation for this placement' },
            painLevel: { type: Type.STRING, description: 'Estimated pain scale rating e.g. 3/10 (Low to Mild)' },
            estimatedCostInINR: { type: Type.STRING, description: 'Estimated studio cost range in INR e.g. ₹2,500 - ₹4,000' }
          },
          required: ['title', 'visualDescription', 'symbolismMeaning', 'estimatedTime', 'recommendedStyles', 'careTips', 'painLevel', 'estimatedCostInINR']
        }
      }
    });

    const jsonText = response.text || '{}';
    const parsedData = JSON.parse(jsonText);

    return res.json({
      success: true,
      data: parsedData
    });
  } catch (error: any) {
    console.error('Tattoo AI Generation Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate tattoo concept'
    });
  }
});

// Configure Vite or Static Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`⚡ Tattoo Memory Indore Server running on http://localhost:${PORT}`);
  });
}

startServer();
