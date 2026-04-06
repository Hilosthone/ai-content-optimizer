from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from optimizer import optimize
from config import PLATFORMS

app = FastAPI(title="AI Content Optimizer")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class OptimizeRequest(BaseModel):
    content: str
    platform: str = "linkedin"


@app.get("/platforms")
def get_platforms():
    return {"platforms": PLATFORMS}


@app.post("/optimize")
def optimize_content(req: OptimizeRequest):
    if not req.content.strip():
        raise HTTPException(status_code=400, detail="Content cannot be empty.")
    if req.platform not in PLATFORMS:
        raise HTTPException(status_code=400, detail=f"Platform must be one of {PLATFORMS}")

    result = optimize(req.content, req.platform)
    return result