# 🧠 Brainly - Landing Page

A clean and modern landing page built using [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
This project includes a Docker setup for easy containerized deployment and sharing.

---

## 🚀 Getting Started (Locally with Node.js)

To run the project locally:

### 1. Install dependencies

```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser to view the result.

🐳 Run with Docker
If you prefer not to install Node.js or dependencies locally, you can run the app in a Docker container.

1. Build the Docker image
```bash
docker build -t brainly-landing .
docker run -p 3000:3000 brainly-landing
```
Now open http://localhost:3000 in your browser to see the landing page.

✅ Make sure your Dockerfile is set up to run npm install, npm run build, and npm start inside the container.
