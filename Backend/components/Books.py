from flask import request,json,jsonify,Response
from app import app
from flask_marshmallow import Marshmallow
from app import db
from components import Orders
from werkzeug.utils import secure_filename

ma=Marshmallow(app)


class Img(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String)
    name = db.Column(db.Text)
    mimetype = db.Column(db.Text)

db.create_all()

class Books(db.Model):
    name=db.Column(db.String)
    price=db.Column(db.Integer)
    Book_id=db.Column(db.Integer,primary_key=True)#author's name, description, rating, reviews.
    Release = db.Column(db.String)
    genre=db.Column(db.String)
    copy = db.Column(db.String)
    author= db.Column(db.String)
    publisher= db.Column(db.String)
    ratings=db.Column(db.Integer)
    Msrp=db.Column(db.Integer)
    edition = db.Column(db.String)
    atb=db.Column(db.String)
    qty=db.Column(db.Integer)
    

    def __init__ (self,name,price,Release,genre,copy,author,publisher,ratings,Msrp,edition,atb,qty):
        self.name=name
        self.price=price
        self.Release=Release
        self.genre=genre
        self.copy=copy
        self.author=author
        self.publisher=publisher
        self.ratings=ratings
        self.Msrp=Msrp
        self.edition=edition
        self.atb=atb
        self.qty=qty
        
    

class BookSchema(ma.Schema):
    class Meta:
        fields=('Book_id','name','price','Release','genre','copy','author','publisher','ratings','Msrp','edition','atb','qty')



book_schemas=BookSchema(many=True)
book_schema=BookSchema()

db.create_all()



@app.route('/add_books',methods=['POST'])
def add_books():
    name=request.json['name']
    price=request.json['price']
    Release=request.json['Release']
    genre=request.json['genre']
    copy=request.json['copy']
    author=request.json['author']
    publisher=request.json['publisher']
    ratings=request.json['ratings']
    Msrp=request.json['Msrp']
    edition=request.json['edition']
    atb=request.json['atb']
    qty=request.json['qty']
    
    new_Book = Books(name,price,Release,genre,copy,author,publisher,ratings,Msrp,edition,atb,qty)
   
    db.session.add(new_Book)
    db.session.commit()
    return book_schema.jsonify(new_Book)

@app.route('/gen/<gen>',methods=['GET'])
def get_gen(gen):
    new_gen = gen.lower()
    all_books = Books.query.filter_by(genre = new_gen)
    result = book_schemas.dump(all_books)
    return jsonify(result)

@app.route('/book/<id>',methods=['GET'])
def get_book(id):
    book_info = Books.query.filter_by(Book_id=id).first()
    return book_schema.jsonify(book_info)


@app.route('/books',methods=['GET'])
def get_books():
    all_books=Books.query.all()
    result = book_schemas.dump(all_books)
    return jsonify(result)

@app.route('/book_img/<name>',methods=['GET','POST'])
def get_img(name):
    if request.method=='POST':
        pic = request.files['file']
        filename = secure_filename(name)
        mimetype=pic.mimetype
        img = Img(img=pic.read(),mimetype=mimetype,name=filename)
        db.session.add(img)
        db.session.commit()
        return 'Img uploaded' ,200
    else:
        

        new_name = name.replace(" ","_")
        new_name = new_name.replace("'","")
        if new_name[len(new_name)-1] == "_":
            new_name = new_name[:-1]
        
        img_data = Img.query.filter_by(name = new_name).first()
        return Response(img_data.img,mimetype=img_data.mimetype)

