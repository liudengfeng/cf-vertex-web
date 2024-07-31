// utils.js

// 数据获取函数
export const fetchVertexToken = async () => {
    const url = 'https://vertex-api-key.yjai.app';
    const apiKey = process.env.REACT_APP_CF_VERTEX_AI_TOKEN
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;
    }
};

