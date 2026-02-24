import PyPDF2
import sys

try:
    with open('Manav_Darji_Resume.pdf', 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in range(len(reader.pages)):
            text += reader.pages[page].extract_text()
        with open('resume_text.txt', 'w', encoding='utf-8') as outfile:
            outfile.write(text)
except Exception as e:
    print("Error reading PDF:", e)
    # let's try pypdf if PyPDF2 is not there, or fitz
