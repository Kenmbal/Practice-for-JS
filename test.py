from transformers import pipeline

# Load GPT-based model
quiz_generator = pipeline('text-generation', model='gpt-3.5-turbo')

# Generate quiz questions
topic = "What are the functions of mitochondria in a cell?"
response = quiz_generator(f"Create a multiple-choice question about: {topic}", max_length=100)
print(response[0]['generated_text'])
