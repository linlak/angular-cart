const PROXY_CONFIG = [{
    context: [
        "/api",
        "/images",
        "/storage",
        "/broadcasting",
    ],
    target: "http://localhost:8000",
    secure: false
}];

module.exports = PROXY_CONFIG;