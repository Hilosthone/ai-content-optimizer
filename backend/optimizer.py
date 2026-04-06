import json
from openai import OpenAI
from config import OPENAI_API_KEY, CHAT_MODEL
from prompt_builder import build_optimization_prompt

client = OpenAI(api_key=OPENAI_API_KEY)


def optimize(content: str, platform: str) -> dict:
    prompt = build_optimization_prompt(content, platform)

    response = client.chat.completions.create(
        model=CHAT_MODEL,
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
    )

    raw = response.choices[0].message.content.strip()

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        clean = raw.replace("```json", "").replace("```", "").strip()
        return json.loads(clean)