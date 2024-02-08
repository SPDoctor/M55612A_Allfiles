openai.api_key = "oa1363c794d19e430baf27a9a5f29c42ab"
openai.api_base = "https://res1axv422.openai.azure.com"

response = openai.Embedding.create(
    input=input_text_string,
    engine="embeddings2"
)
embeddings = response['data'][0]['embedding']
print(embeddings)