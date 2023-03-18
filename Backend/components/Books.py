from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db
from components import Orders
ma=Marshmallow(app)

class Books(db.Model):
    name=db.Column(db.String)
    price=db.Column(db.Integer)
    Book_id=db.Column(db.Integer,primary_key=True)#author's name, description, rating, reviews.
    order=db.relationship('Orders',backref='books')

    def __init__ (self,name,price):
        self.name=name
        self.price=price
    

class BookSchema(ma.Schema):
    class Meta:
        fields=('Book_id','name','price')
book_schemas=BookSchema(many=True)
book_schema=BookSchema()

db.create_all()



@app.route('/add_books',methods=['POST'])
def add_books():
    name=request.json['name']
    price=request.json['price']

    new_Book = Books(name,price)
    db.session.add(new_Book)
    db.session.commit()
    return book_schema.jsonify(new_Book)

@app.route('/books',methods=['GET'])
def get_books():
    all_books=Books.query.all()
    
    result = book_schemas.dump(all_books)
    return jsonify(result)
