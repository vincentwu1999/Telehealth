import PyPDF2

def parsePDFUrls(filename):
    # PDFFile = open("EkoRecordingPDFExport.pdf",'rb')
    PDFFile = open(filename,'rb')

    PDF = PyPDF2.PdfReader(PDFFile)
    pages = len(PDF.pages)
    key = '/Annots'
    uri = '/URI'
    ank = '/A'

    allUrls = []

    for page in range(pages):
        print("Current Page: {}".format(page))
        pageSliced = PDF.pages[page]
        pageObject = pageSliced.get_object()
        if key in pageObject.keys():
            ann = pageObject[key]
            for a in ann:
                u = a.get_object()
                if uri in u[ank].keys():
                    allUrls.append(u[ank][uri])

    return allUrls


# import requests
# from bs4 import BeautifulSoup
 
 
# url = 'https://app.ekodevices.com/recording/dc6e72cb-edda-43b0-b14c-c5ce65f3dee1'
# reqs = requests.get(url)
# soup = BeautifulSoup(reqs.text, 'html.parser')
 
# urls = []
# for link in soup.find_all('a'):
#     print(link.get('href'))

def cropPdf(filename):
    PDFFile = open("EkoRecordingPDFExport.pdf",'rb')
    reader = PyPDF2.PdfReader(PDFFile)
    page = reader.pages[0]

    writer = PyPDF2.PdfWriter()
    page.cropbox.upper_left = (25.706, 591.237)
    page.cropbox.lower_right = (588.271, 488.414)
    writer.add_page(page)
    writer.write(open("result.pdf",'wb'))


# PDFFile = open("EkoRecordingPDFExport.pdf",'rb')
# reader = PyPDF2.PdfReader(PDFFile)
# page = reader.pages[0]

# writer = PyPDF2.PdfWriter()
# page.cropbox.upper_left = (25.706, 591.237)
# page.cropbox.lower_right = (588.271, 488.414)
# writer.add_page(page)
# writer.write(open("result.pdf",'wb'))

# PDFFile = open("resized3.pdf",'rb')
# reader = PyPDF2.PdfReader(PDFFile)
# page = reader.pages[0]
# print(page.cropbox.upper_right)

# PDFFile = open("resized4.pdf",'rb')
# reader = PyPDF2.PdfReader(PDFFile)
# page = reader.pages[0]
# print(page.cropbox.upper_right)
