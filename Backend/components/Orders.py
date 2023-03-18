from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db
from components import Books
ma=Marshmallow(app)
class Orders(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    book_id=db.Column(db.Integer,db.ForeignKey('books.Book_id'))
    user_id=db.Column(db.Integer)

    def __init__(self,book_id,user_id):
        self.book_id=book_id
        self.user_id=user_id

class orderSchema(ma.Schema):
    class Meta:
        fields=('id','book_id','user_id')

order_schema=orderSchema()
orders_schema=orderSchema(many=True)

db.create_all()

@app.route('/orders/<book_id>',methods=['POST','GET'])
def orders(book_id):
    if request.method=='POST':
        user_id=request.json['user_id']
        new_order=Orders(book_id,user_id)
        db.session.add(new_order)
        db.session.commit()

        return order_schema.jsonify(new_order)
    else:
        all_orders = Orders.query.filterby(book_id=book_id)

        result = orders_schema.dump(all_orders)

        return jsonify(result)