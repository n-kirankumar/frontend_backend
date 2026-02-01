# Full-Stack Application

A simple full-stack application with React frontend, FastAPI backend, and PostgreSQL database.

## Architecture

- **Frontend**: React.js single-page application
- **Backend**: FastAPI with SQLAlchemy ORM
- **Database**: PostgreSQL
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: GitHub Actions with security scanning

## Features

- CRUD operations for items
- RESTful API with all HTTP methods
- CORS enabled for frontend-backend communication
- Production-ready Docker images
- Automated CI/CD pipeline

## Local Development

### Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL
- Docker & Docker Compose

### Setup

1. Clone the repository
2. Start services with Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Manual Setup

1. Backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload
   ```

2. Frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. Database: Ensure PostgreSQL is running and update DATABASE_URL in backend/app/database.py

## API Endpoints

- `GET /` - Welcome message
- `GET /items/` - List all items
- `GET /items/{id}` - Get item by ID
- `POST /items/` - Create new item
- `PUT /items/{id}` - Update item
- `PATCH /items/{id}` - Partial update item
- `DELETE /items/{id}` - Delete item

## Testing

Run backend tests:
```bash
cd backend
pytest
```

## Docker

Build images:
```bash
docker build -f docker/frontend.Dockerfile -t frontend .
docker build -f docker/backend.Dockerfile -t backend .
```

## CI/CD Pipeline

The GitHub Actions pipeline includes:
1. Code checkout and environment setup
2. Dependency installation
3. Static code analysis (Flake8)
4. Security scanning (Bandit)
5. Unit tests with coverage
6. Filesystem vulnerability scan (Trivy)
7. Docker image build
8. Container image vulnerability scan (Trivy)

## Interview Talking Points

- **DevOps Practices**: Demonstrates CI/CD, containerization, security scanning
- **Full-Stack Development**: End-to-end application with modern frameworks
- **API Design**: RESTful API with proper HTTP methods and status codes
- **Database Integration**: ORM usage with PostgreSQL
- **Production Readiness**: Multi-stage Docker builds, environment configuration
- **Testing**: Unit tests and coverage reporting
- **Security**: Bandit for Python security, Trivy for vulnerabilities