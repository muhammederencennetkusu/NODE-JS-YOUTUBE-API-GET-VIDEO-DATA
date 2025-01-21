<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Video Details Fetcher</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #444;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow: auto;
        }
        code {
            color: #c7254e;
            background: #f9f2f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        a {
            color: #007acc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>YouTube Video Details Fetcher</h1>

        <p>This project demonstrates how to fetch details of a YouTube video using the <strong>YouTube Data API v3</strong>. The script retrieves video information such as title, description, view count, and like count using a provided video ID.</p>

        <h2>Features</h2>
        <ul>
            <li>Fetch video title</li>
            <li>Retrieve description</li>
            <li>Get view count</li>
            <li>Fetch like count</li>
        </ul>

        <h2>Installation</h2>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/muhammederencennetkusu/youtube-video-details-fetcher.git</code></pre>
            </li>
            <li>Navigate to the project directory:
                <pre><code>cd youtube-video-details-fetcher</code></pre>
            </li>
            <li>Install the required dependencies:
                <pre><code>npm install</code></pre>
            </li>
        </ol>

        <h2>Usage</h2>
        <p>Replace the <code>API_KEY</code> variable in <code>index.js</code> with your YouTube Data API key. If you don’t have one, you can obtain it from the <a href="https://console.developers.google.com/" target="_blank">Google Cloud Console</a>.</p>

        <h3>Example</h3>
        <p>Edit the <code>videoId</code> variable in <code>index.js</code> with the YouTube video ID you want to fetch details for:</p>
        <pre><code>const videoId = 'dQw4w9WgXcQ';</code></pre>

        <p>Run the script:</p>
        <pre><code>node index.js</code></pre>

        <h2>Output</h2>
        <p>The script will display the following information in the console:</p>
        <ul>
            <li>Video Title</li>
            <li>Description</li>
            <li>View Count</li>
            <li>Like Count</li>
        </ul>

        <h2>Dependencies</h2>
        <ul>
            <li><a href="https://www.npmjs.com/package/axios" target="_blank">axios</a>: For making HTTP requests</li>
        </ul>

        <h2>License</h2>
        <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>

        <p>Happy coding!</p>
    </div>
</body>
</html>
