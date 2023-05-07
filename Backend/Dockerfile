FROM python:3.8-slim-buster
WORKDIR /python-api
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip --no-cache-dir install -r requirements.txt
COPY . .
CMD ["python3","-m","flask","run","--host=0.0.0.0"]