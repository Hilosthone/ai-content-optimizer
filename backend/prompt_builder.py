def build_optimization_prompt(content: str, platform: str) -> str:
    return f"""You are an expert content strategist and SEO specialist. Analyze and optimize the content below for {platform.upper()} and return a JSON object only — no extra text, no markdown, no backticks.

Content:
\"\"\"{content}\"\"\"

Optimize and return:
- seo: optimized version of the content with keywords, and a meta description
- engagement: a stronger hook and suggestions to boost engagement
- readability: a score (0-100) and specific improvements for clarity and flow
- posting_schedule: best days and times to post on {platform}, with brief reasoning

Return ONLY this JSON structure:
{{
  "seo": {{
    "optimized_content": "",
    "keywords": [],
    "meta_description": ""
  }},
  "engagement": {{
    "hook": "",
    "suggestions": []
  }},
  "readability": {{
    "score": 0,
    "improvements": []
  }},
  "posting_schedule": {{
    "platform": "{platform}",
    "best_times": [],
    "reasoning": ""
  }}
}}"""