const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getToken() {
  const response = await fetch(BASE_URL + "/users", {
    method: "POST",
  })
  if (!response.ok) {
    return
  }
  const data = await response.json()
  if (!data.auth_token) {
    return
  }
  localStorage.setItem("bearerToken", data.auth_token)
}

async function fetchAPI(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body?: any,
  includeToken = true
) {
  let additionalHeaders: Record<string, string> = {}
  if (includeToken) {
    let bearerToken = localStorage.getItem("bearerToken")
    if (!bearerToken) {
      return
    }
    additionalHeaders = {
      Authorization: `Bearer ${bearerToken}`,
    }
  }

  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...additionalHeaders,
    },
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  const response = await fetch(BASE_URL + url, options)
  return response.json()
}

export async function getQuiz(quiz_id: string) {
  return await fetchAPI("/quiz/" + quiz_id, "GET")
}

export async function fetchTestResult(
  test_id: string,
  answers: [{ question_id: string; answer_id: string }]
): Promise<{ correct_answers: number; total_questions: number }> {
  return await fetchAPI(`/quiz/${test_id}/result`, "POST", { answers: answers })
}

export async function generateQuiz(text: string): Promise<{ test_id: string }> {
  return await fetchAPI("/quiz/generate", "POST", { text: text })
}
