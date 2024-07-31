import React, { useState } from 'react';
// const { VertexAI } = require('@google-cloud/vertexai');

// const project = "enzh-428519";
// const location = "asia-northeast1";
// const model = "gemini-1.5-flash";

// const credentials = JSON.parse(process.env.REACT_APP_CREDENTIALS);
// const jwtInput = {
//     client_email: credentials.client_email,
//     private_key: credentials.private_key
// };
// const authOptions = {
//     credentials: jwtInput,
//     projectId: credentials.project_id,
//     scopes: ['https://www.googleapis.com/auth/cloud-platform']
// };
// const vertex_ai = new VertexAI({ googleAuthOptions: authOptions });

function Explore() {
    const [prompt, setPrompt] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');

    const handleInputChange = (event) => {
        setPrompt(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const request = {
        //     contents: [
        //         { role: "user", parts: [{ text: prompt }] }
        //     ]
        // }
        try {
            // const result = await vertex_ai.generatedContent(request);
            const credentials = JSON.parse(process.env.REACT_APP_CREDENTIALS);
            setGeneratedContent(JSON.stringify(credentials));
        } catch (error) {
            console.error('Error generating text:', error);
            setGeneratedContent('Error generating text.');
        }
    };
    return (
        <div>
            <h1>Explore Page</h1>
            <p>Discover new content here.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={handleInputChange}
                    placeholder="Enter your prompt"
                />
                <button type="submit">Submit</button>
            </form>
            {generatedContent && (
                <div>
                    <h2>Generated Content</h2>
                    <p>{generatedContent}</p>
                </div>
            )}
        </div>
    );
}

export default Explore;