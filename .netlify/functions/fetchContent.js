const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

exports.handler = async () => {
    try {
        const response = await fetch('https://www.teachyourmonster.org/legals');
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

     
        const content = document.querySelector('.oog-content-page__block')?.innerHTML || 'Content not found';

        return {
            statusCode: 200,
            body: content,
        };
    } catch (error) {
        console.error('Error fetching Teach Your Monster content:', error);
        return {
            statusCode: 500,
            body: 'Failed to fetch content',
        };
    }
};