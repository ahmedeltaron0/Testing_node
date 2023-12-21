const express = require('express');
const PORT = 4000;
const app = express();
app.get('/', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to My Docker Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                header {
                    background-color: #333;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                }
                nav ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                nav ul li {
                    display: inline;
                    margin: 0 10px;
                }
                nav ul li a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                }
                .container {
                    width: 80%;
                    margin: auto;
                    overflow: hidden;
                }
                section {
                    float: left;
                    width: 70%;
                    padding: 20px;
                    background-color: #fff;
                }
                aside {
                    float: left;
                    width: 30%;
                    padding: 20px;
                    background-color: #ddd;
                }
                footer {
                    clear: both;
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    padding: 10px 0;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to My Docker fu** d </h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div class="container">
                <section>
                    <h2>Main Content</h2>
                    <p>Hello my  Docker. This is some main content for the page.</p>
                </section>
                <aside>
                    <h2>Side Content</h2>
                    <p>This is some side content for the page.</p>
                </aside>
            </div>
            <footer>
                <p>&copy; 2023 My Docker Page</p>
            </footer>
        </body>
        </html>
    `;
    res.send(htmlContent);
});


app.listen(PORT, () => {
    console.log(`app is used and running on port: ${PORT}`);
});